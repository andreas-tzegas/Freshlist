/* ================================================
   FRESHLIST — auth.js
   ================================================ */

function getUsers()       { try { return JSON.parse(localStorage.getItem('fl_users')||'[]'); } catch { return []; } }
function saveUsers(u)     { localStorage.setItem('fl_users', JSON.stringify(u)); }
function getCurrentUser() { try { return JSON.parse(localStorage.getItem('fl_session')||'null'); } catch { return null; } }
function setCurrentUser(u){ localStorage.setItem('fl_session', JSON.stringify(u)); }
function clearSession()   { localStorage.removeItem('fl_session'); }

// ── TOAST ──
function showToast(msg, duration=2800) {
  let t = document.getElementById('toast');
  if (!t) { t = document.createElement('div'); t.id='toast'; document.body.appendChild(t); }
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(t._t);
  t._t = setTimeout(() => t.classList.remove('show'), duration);
}

// ── MODAL ──
function openModal(form) {
  const ov = document.getElementById('modal-overlay');
  if (!ov) return;
  ov.classList.add('open');
  switchForm(form);
  setTimeout(() => { const f = ov.querySelector('input:not([type=hidden])'); if (f) f.focus(); }, 220);
}
function closeModal() {
  const ov = document.getElementById('modal-overlay');
  if (ov) ov.classList.remove('open');
}
function switchForm(name) {
  document.querySelectorAll('.auth-form').forEach(f => f.style.display = f.dataset.form === name ? '' : 'none');
  clearErrors();
}
function clearErrors() { document.querySelectorAll('.error-msg').forEach(e => e.classList.remove('visible')); }
function showError(id, msg) { const el=document.getElementById(id); if(el){el.textContent=msg;el.classList.add('visible');} }

// ── REGISTER ──
function doRegister() {
  clearErrors();
  const name  = document.getElementById('reg-name')?.value.trim();
  const email = document.getElementById('reg-email')?.value.trim().toLowerCase();
  const pass  = document.getElementById('reg-pass')?.value;
  if (!name)  return showError('reg-error','Veuillez entrer votre prénom.');
  if (!email||!email.includes('@')) return showError('reg-error','Adresse e-mail invalide.');
  if (!pass||pass.length<6) return showError('reg-error','Mot de passe : 6 caractères minimum.');
  const users = getUsers();
  if (users.find(u=>u.email===email)) return showError('reg-error','Cet e-mail est déjà utilisé.');
  const user = { name, email, password:pass, createdAt:new Date().toISOString() };
  users.push(user);
  saveUsers(users);
  setCurrentUser({ name, email });
  closeModal();
  showToast(`Bienvenue, ${name} !`);
  updateHeaderUI();
  if (window.onAuthSuccess) window.onAuthSuccess();
}

// ── LOGIN ──
function doLogin() {
  clearErrors();
  const email = document.getElementById('login-email')?.value.trim().toLowerCase();
  const pass  = document.getElementById('login-pass')?.value;
  if (!email) return showError('login-error','Veuillez entrer votre e-mail.');
  if (!pass)  return showError('login-error','Veuillez entrer votre mot de passe.');
  const user = getUsers().find(u=>u.email===email&&u.password===pass);
  if (!user) return showError('login-error','E-mail ou mot de passe incorrect.');
  setCurrentUser({ name:user.name, email:user.email });
  closeModal();
  showToast(`Bon retour, ${user.name} !`);
  updateHeaderUI();
  if (window.onAuthSuccess) window.onAuthSuccess();
}

// ── LOGOUT ──
function logout() {
  clearSession();
  showToast('Vous avez été déconnecté.');
  updateHeaderUI();
  if (window.onLogout) window.onLogout();
  else window.location.href = 'index.html';
}

// ── HEADER UI ──
function updateHeaderUI() {
  const user    = getCurrentUser();
  const navAuth = document.getElementById('nav-auth');
  const navUser = document.getElementById('nav-user');
  const avatarEl= document.getElementById('user-avatar');
  const nameEl  = document.getElementById('user-name');
  const emailEl = document.getElementById('user-email');
  if (user) {
    if (navAuth) navAuth.style.display = 'none';
    if (navUser) navUser.style.display = '';
    if (avatarEl) avatarEl.textContent = user.name.charAt(0).toUpperCase();
    if (nameEl)   nameEl.textContent   = user.name;
    if (emailEl)  emailEl.textContent  = user.email;
  } else {
    if (navAuth) navAuth.style.display = '';
    if (navUser) navUser.style.display = 'none';
  }
  // Cart pill count
  const cartCount = document.getElementById('cart-count');
  if (cartCount) {
    const u = getCurrentUser();
    if (u) {
      const items = JSON.parse(localStorage.getItem('fl_items_'+u.email)||'[]');
      cartCount.textContent = items.filter(i=>!i.done).length;
    }
  }
}

// ── CART STORAGE ──
function getCart() {
  const u = getCurrentUser();
  if (!u) return [];
  try { return JSON.parse(localStorage.getItem('fl_items_'+u.email)||'[]'); } catch { return []; }
}
function saveCart(items) {
  const u = getCurrentUser();
  if (!u) return;
  localStorage.setItem('fl_items_'+u.email, JSON.stringify(items));
}

function addToCart(productId, qty=1) {
  const u = getCurrentUser();
  if (!u) { openModal('login'); return false; }
  const product = getProductById(productId);
  if (!product) return false;
  const items = getCart();
  const existing = items.find(i=>i.productId===productId);
  if (existing) {
    existing.qty += qty;
  } else {
    items.unshift({
      id: Date.now(),
      productId,
      name: product.name,
      category: product.category,
      qty,
      unit: product.unit,
      done: false,
      addedAt: new Date().toISOString()
    });
  }
  saveCart(items);
  updateHeaderUI();
  showToast(`"${product.name}" ajouté à la liste !`);
  return true;
}

function removeFromCart(productId) {
  const items = getCart().filter(i=>i.productId!==productId);
  saveCart(items);
  updateHeaderUI();
}

function isInCart(productId) {
  return getCart().some(i=>i.productId===productId);
}

function getCartQty(productId) {
  const item = getCart().find(i=>i.productId===productId);
  return item ? item.qty : 1;
}

// ── EVENTS ──
document.addEventListener('click', e => { if(e.target.id==='modal-overlay') closeModal(); });
document.addEventListener('keydown', e => {
  if (e.key==='Escape') closeModal();
  if (e.key==='Enter') {
    const el = document.activeElement;
    if (el?.closest?.('[data-form="login"]'))    doLogin();
    if (el?.closest?.('[data-form="register"]')) doRegister();
  }
});

document.addEventListener('DOMContentLoaded', updateHeaderUI);