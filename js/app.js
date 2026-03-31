/* ================================================
   FRESHLIST — app.js
   CRUD liste de courses, filtres, recherche
   ================================================ */

// ─── CONFIG CATÉGORIES ───────────────────────────
const CATEGORIES = [
  { id: 'fruits',     label: 'Fruits',              badge: 'badge-fruits' },
  { id: 'legumes',    label: 'Légumes',              badge: 'badge-legumes' },
  { id: 'viandes',    label: 'Viandes & Poissons',   badge: 'badge-viandes' },
  { id: 'laitiers',   label: 'Produits laitiers',    badge: 'badge-laitiers' },
  { id: 'boulangerie',label: 'Boulangerie',          badge: 'badge-boulangerie' },
  { id: 'boissons',   label: 'Boissons',             badge: 'badge-boissons' },
  { id: 'surgeles',   label: 'Surgelés',             badge: 'badge-surgeles' },
  { id: 'epices',     label: 'Épices & Condiments',  badge: 'badge-epices' },
  { id: 'autre',      label: 'Autre',                badge: 'badge-autre' },
];

const UNITS = ['pcs', 'kg', 'g', 'L', 'mL', 'boîte', 'sachet', 'bouquet', 'tranche', 'douzaine'];

// ─── STATE ───────────────────────────────────────
let items      = [];
let filterMode = 'all';
let searchQ    = '';
let currentUser = null;

// ─── STORAGE ─────────────────────────────────────
function storageKey() { return 'fl_items_' + (currentUser?.email || 'guest'); }
function loadItems()  { try { return JSON.parse(localStorage.getItem(storageKey()) || '[]'); } catch { return []; } }
function persistItems() { localStorage.setItem(storageKey(), JSON.stringify(items)); }

// ─── INIT ─────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  currentUser = getCurrentUser(); // défini dans auth.js
  populateSelects();

  if (!currentUser) {
    // Redirige vers home si pas connecté
    showGuestBanner();
  } else {
    items = loadItems();
    renderAll();
  }

  // Réagit aux changements auth
  window.onAuthSuccess = () => {
    currentUser = getCurrentUser();
    items = loadItems();
    hideGuestBanner();
    renderAll();
  };
  window.onLogout = () => {
    currentUser = null;
    items = [];
    renderAll();
    showGuestBanner();
  };

  // Date
  const dateEl = document.getElementById('app-date');
  if (dateEl) {
    dateEl.textContent = new Date().toLocaleDateString('fr-FR', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
  }

  // Search
  document.getElementById('search-input')?.addEventListener('input', (e) => {
    searchQ = e.target.value.trim().toLowerCase();
    renderList();
  });
});

// ─── SELECTS ─────────────────────────────────────
function populateSelects() {
  const catSel = document.getElementById('new-category');
  if (catSel) {
    catSel.innerHTML = CATEGORIES.map(c =>
      `<option value="${c.id}">${c.label}</option>`
    ).join('');
  }
  const unitSel = document.getElementById('new-unit');
  if (unitSel) {
    unitSel.innerHTML = UNITS.map(u => `<option value="${u}">${u}</option>`).join('');
  }
}

function getCatInfo(id) {
  return CATEGORIES.find(c => c.id === id) || { label: 'Autre', badge: 'badge-autre' };
}

// ─── GUEST BANNER ────────────────────────────────
function showGuestBanner() {
  const el = document.getElementById('guest-banner');
  if (el) el.style.display = '';
  const appContent = document.getElementById('app-content');
  if (appContent) appContent.style.display = 'none';
}
function hideGuestBanner() {
  const el = document.getElementById('guest-banner');
  if (el) el.style.display = 'none';
  const appContent = document.getElementById('app-content');
  if (appContent) appContent.style.display = '';
}

// ─── CRUD ─────────────────────────────────────────
function addItem() {
  if (!currentUser) { openModal('login'); return; }

  const nameEl = document.getElementById('new-name');
  const name   = nameEl?.value.trim();
  if (!name) { nameEl?.focus(); nameEl?.classList.add('input-error'); return; }
  nameEl?.classList.remove('input-error');

  const item = {
    id:        Date.now(),
    name,
    category:  document.getElementById('new-category')?.value || 'autre',
    qty:       parseFloat(document.getElementById('new-qty')?.value) || 1,
    unit:      document.getElementById('new-unit')?.value || 'pcs',
    done:      false,
    createdAt: new Date().toISOString(),
  };

  items.unshift(item);
  persistItems();
  if (nameEl) { nameEl.value = ''; nameEl.focus(); }
  const qtyEl = document.getElementById('new-qty');
  if (qtyEl) qtyEl.value = '1';

  showToast(`"${name}" ajouté à la liste.`);
  renderAll();
}

function toggleDone(id) {
  const item = items.find(i => i.id === id);
  if (!item) return;
  item.done = !item.done;
  persistItems();
  renderAll();
}

function deleteItem(id) {
  const item = items.find(i => i.id === id);
  items = items.filter(i => i.id !== id);
  persistItems();
  showToast(item ? `"${item.name}" supprimé.` : 'Article supprimé.');
  renderAll();
}

function clearDone() {
  const count = items.filter(i => i.done).length;
  if (count === 0) { showToast('Aucun article coché à supprimer.'); return; }
  items = items.filter(i => !i.done);
  persistItems();
  showToast(`${count} article${count > 1 ? 's' : ''} supprimé${count > 1 ? 's' : ''}.`);
  renderAll();
}

// ─── ÉDITION INLINE ──────────────────────────────
function startEdit(id) {
  const item = items.find(i => i.id === id);
  if (!item) return;

  const row = document.querySelector(`.item-row[data-id="${id}"]`);
  if (!row) return;
  row.classList.add('editing');

  const catOptions = CATEGORIES.map(c =>
    `<option value="${c.id}" ${item.category === c.id ? 'selected' : ''}>${c.label}</option>`
  ).join('');
  const unitOptions = UNITS.map(u =>
    `<option value="${u}" ${item.unit === u ? 'selected' : ''}>${u}</option>`
  ).join('');

  row.innerHTML = `
    <input type="checkbox" class="item-check" ${item.done ? 'checked' : ''}
      onchange="toggleDone(${id})">
    <input class="form-control" type="text" id="edit-name-${id}" value="${esc(item.name)}">
    <select class="form-control" id="edit-cat-${id}">${catOptions}</select>
    <input class="form-control" type="number" id="edit-qty-${id}" value="${item.qty}" min="0.1" step="0.1" style="max-width:70px">
    <select class="form-control" id="edit-unit-${id}">${unitOptions}</select>
    <div class="item-actions">
      <button class="btn-icon" onclick="saveEdit(${id})" title="Sauvegarder">
        <svg viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"/></svg>
      </button>
      <button class="btn-icon danger" onclick="cancelEdit()" title="Annuler">
        <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
  `;
  document.getElementById(`edit-name-${id}`)?.focus();
}

function saveEdit(id) {
  const item = items.find(i => i.id === id);
  if (!item) return;

  const name = document.getElementById(`edit-name-${id}`)?.value.trim();
  if (!name) return;

  item.name     = name;
  item.category = document.getElementById(`edit-cat-${id}`)?.value || item.category;
  item.qty      = parseFloat(document.getElementById(`edit-qty-${id}`)?.value) || item.qty;
  item.unit     = document.getElementById(`edit-unit-${id}`)?.value || item.unit;
  item.updatedAt = new Date().toISOString();

  persistItems();
  showToast(`"${item.name}" mis à jour.`);
  renderAll();
}

function cancelEdit() { renderAll(); }

// ─── FILTRES ──────────────────────────────────────
function setFilter(mode) {
  filterMode = mode;
  document.querySelectorAll('.filter-pill').forEach(b => {
    b.classList.toggle('active', b.dataset.filter === mode);
  });
  renderList();
}

// ─── RENDER ───────────────────────────────────────
function renderAll() {
  renderStats();
  renderList();
}

function renderStats() {
  const total  = items.length;
  const done   = items.filter(i => i.done).length;
  const remain = total - done;
  const pct    = total ? Math.round((done / total) * 100) : 0;

  setText('stat-total',  total);
  setText('stat-done',   done);
  setText('stat-remain', remain);
  setText('progress-pct', pct + '%');
  const fill = document.getElementById('progress-fill');
  if (fill) fill.style.width = pct + '%';
}

function renderList() {
  const container = document.getElementById('item-list');
  if (!container) return;

  let filtered = items.filter(i => {
    if (filterMode === 'done')    return i.done;
    if (filterMode === 'pending') return !i.done;
    return true;
  });

  if (searchQ) {
    filtered = filtered.filter(i =>
      i.name.toLowerCase().includes(searchQ) ||
      getCatInfo(i.category).label.toLowerCase().includes(searchQ)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="list-empty">
        <div class="list-empty-icon">
          <svg viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/></svg>
        </div>
        <strong>${items.length === 0 ? 'Votre liste est vide' : 'Aucun article trouvé'}</strong>
        <p>${items.length === 0 ? 'Ajoutez votre premier article ci-dessus.' : 'Essayez un autre filtre ou terme de recherche.'}</p>
      </div>`;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const cat = getCatInfo(item.category);
    return `
      <div class="item-row ${item.done ? 'done' : ''}" data-id="${item.id}">
        <input type="checkbox" class="item-check" ${item.done ? 'checked' : ''}
          onchange="toggleDone(${item.id})">
        <span class="item-name">${esc(item.name)}</span>
        <span class="badge ${cat.badge}">${cat.label}</span>
        <span class="item-qty-display">${item.qty}</span>
        <span class="item-unit-display">${item.unit}</span>
        <div class="item-actions">
          <button class="btn-icon" onclick="startEdit(${item.id})" title="Modifier">
            <svg viewBox="0 0 24 24"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          </button>
          <button class="btn-icon danger" onclick="deleteItem(${item.id})" title="Supprimer">
            <svg viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
          </button>
        </div>
      </div>`;
  }).join('');
}

// ─── UTILS ────────────────────────────────────────
function esc(s) {
  return String(s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function setText(id, val) {
  const el = document.getElementById(id);
  if (el) el.textContent = val;
}

// Enter sur le champ nom = ajouter
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && document.activeElement?.id === 'new-name') addItem();
});
