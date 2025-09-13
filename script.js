// Utilitaires DOM
const $ = (sel, ctx=document) => ctx.querySelector(sel);
const $$ = (sel, ctx=document) => Array.from(ctx.querySelectorAll(sel));

// Éléments
const listEl = $('#list');
const countEl = $('#count');
const searchEl = $('#search');
const toast = $('#toast');

// Storage clé
const STORAGE_KEY = 'liste-courses:v1';

/**
 * État: tableau d'objets { id, name, qty }
 */
let state = loadState();
render();

// ===== Catalogue: ajouter =====
$('#catalog').addEventListener('click', (e) => {
  const btn = e.target.closest('.btn-add');
  if (!btn) return;
  const li = btn.closest('.item');
  const id = btn.dataset.id;
  const name = li?.dataset.name || btn.textContent.trim();
  upsertItem(id, name, 1);
});

// ===== Filtres =====
$('.filters').addEventListener('click', (e) => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  $$('.filters .chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  const filter = chip.dataset.filter;
  filterCatalog(filter);
});

function filterCatalog(filter) {
  $$('#catalog .item').forEach(li => {
    const ok = filter === 'all' || li.dataset.cat === filter;
    li.style.display = ok ? '' : 'none';
  });
}

// ===== Recherche =====
searchEl.addEventListener('input', () => {
  const q = searchEl.value.toLowerCase().trim();
  $$('#catalog .item').forEach(li => {
    const name = (li.dataset.name || '').toLowerCase();
    li.style.display = name.includes(q) ? '' : 'none';
  });
});

// ===== Actions topbar =====
$('#btn-clear').addEventListener('click', () => {
  if (state.length === 0) return;
  if (!confirm('Vider la liste ?')) return;
  state = [];
  render();
  saveState();
});

$('#btn-copy').addEventListener('click', async () => {
  const text = formatList(state);
  try {
    await navigator.clipboard.writeText(text);
    showToast('Copié dans le presse-papiers ✅');
  } catch (e) {
    console.error(e);
    showToast('Impossible de copier ❌');
  }
});

$('#btn-print').addEventListener('click', () => {
  window.print();
});

// ===== Listeners liste =====
listEl.addEventListener('click', (e) => {
  const row = e.target.closest('.row');
  if (!row) return;
  const id = row.dataset.id;
  if (e.target.matches('.plus')) changeQty(id, +1);
  if (e.target.matches('.minus')) changeQty(id, -1);
  if (e.target.matches('.remove')) removeItem(id);
});

listEl.addEventListener('input', (e) => {
  const row = e.target.closest('.row');
  if (!row) return;
  const id = row.dataset.id;
  if (e.target.matches('.name')) renameItem(id, e.target.value);
  if (e.target.matches('.qty-input')) setQty(id, parseInt(e.target.value || '0', 10));
});

// ===== Drag & drop pour réordonner =====
let dragId = null;
listEl.addEventListener('dragstart', (e) => {
  const row = e.target.closest('.row');
  if (!row) return;
  dragId = row.dataset.id;
  row.classList.add('dragging');
  e.dataTransfer.effectAllowed = 'move';
});
listEl.addEventListener('dragend', (e) => {
  const row = e.target.closest('.row');
  row?.classList.remove('dragging');
});
listEl.addEventListener('dragover', (e) => {
  e.preventDefault();
  const over = e.target.closest('.row');
  if (!over || over.dataset.id === dragId) return;
  const draggingIndex = state.findIndex(i => i.id === dragId);
  const overIndex = state.findIndex(i => i.id === over.dataset.id);
  const [moved] = state.splice(draggingIndex, 1);
  state.splice(overIndex, 0, moved);
  render();
  saveState();
});

// ===== State ops =====
function upsertItem(id, name, deltaQty=1) {
  const item = state.find(i => i.id === id);
  if (item) {
    item.qty = (item.qty || 0) + deltaQty;
  } else {
    state.unshift({ id, name, qty: Math.max(1, deltaQty) });
  }
  render();
  saveState();
}
function removeItem(id) {
  state = state.filter(i => i.id !== id);
  render(); saveState();
}
function changeQty(id, delta) {
  const item = state.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(0, (item.qty || 0) + delta);
  if (item.qty === 0) removeItem(id); else { render(); saveState(); }
}
function setQty(id, qty) {
  const item = state.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(0, qty || 0);
  if (item.qty === 0) removeItem(id); else { render(); saveState(); }
}
function renameItem(id, name) {
  const item = state.find(i => i.id === id);
  if (!item) return;
  item.name = name.trim() || item.name;
  render(); saveState();
}

// ===== Render =====
function render() {
  listEl.innerHTML = '';
  for (const {id, name, qty} of state) {
    const li = document.createElement('li');
    li.className = 'row';
    li.dataset.id = id;
    li.draggable = true;
    li.innerHTML = `
      <input class="name" type="text" value="${escapeHtml(name)}" aria-label="Nom de l'article" />
      <div class="qty" role="group" aria-label="Quantité">
        <button class="minus" title="-">–</button>
        <input class="qty-input" type="number" min="0" value="${qty}" />
        <button class="plus" title="+">+</button>
      </div>
      <span class="muted">x${qty}</span>
      <button class="remove" title="Supprimer">✕</button>
    `;
    listEl.appendChild(li);
  }
  const n = state.length;
  countEl.textContent = n === 0 ? '0 article' : `${n} ${n>1 ? 'articles' : 'article'}`;
}

function escapeHtml(s='') {
  return s.replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c]));
}

// ===== Persistance =====
function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch {}
}
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

// ===== Utilitaires =====
function formatList(items) {
  if (!items.length) return 'Ma liste de courses est vide.';
  return 'Ma liste de courses\n' + items.map(i => `- ${i.name} x${i.qty}`).join('\n');
}
function showToast(msg) {
  toast.textContent = msg;
  toast.showPopover?.(); // pour navigateurs récents
  toast.classList.add('show');
  setTimeout(() => { toast.classList.remove('show'); toast.hidePopover?.(); }, 1500);
}
