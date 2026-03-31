/* ================================================
   FRESHLIST — data.js
   Images disponibles :
     images/products/pomme.jpg   ✓
     images/products/banane.jpg  ✓
     images/categories/vegetables.jpg ✓
   Toutes les autres → null (placeholder affiché)
   Pour ajouter une image : remplace null par le chemin
   ================================================ */

const CATEGORIES = [
  { id:'fruits',      label:'Fruits',             badge:'badge-fruits',      description:'Fruits frais de saison',           img:'images/categories/fruits.jpg' },
  { id:'legumes',     label:'Légumes',             badge:'badge-legumes',     description:'Légumes frais et de saison',       img:'images/categories/vegetables.jpg' },
  { id:'viandes',     label:'Viandes & Poissons',  badge:'badge-viandes',     description:'Boucherie, volaille et poissonnerie', img:'images/categories/viandes.jpg' },
  { id:'laitiers',    label:'Produits laitiers',   badge:'badge-laitiers',    description:'Lait, fromages, yaourts, beurre',  img:'images/categories/laitiers.jpg' },
  { id:'boulangerie', label:'Boulangerie',         badge:'badge-boulangerie', description:'Pain, viennoiseries, pâtisseries',  img:'images/categories/boulangerie.jpg'},
  { id:'boissons',    label:'Boissons',            badge:'badge-boissons',    description:'Eau, jus, sodas, café, thé',        img:'images/categories/boissons.jpg' },
  { id:'surgeles',    label:'Surgelés',            badge:'badge-surgeles',    description:'Légumes, plats, glaces surgelés',   img:'images/categories/surgeles.jpg' },
  { id:'epices',      label:'Épices & Condiments', badge:'badge-epices',      description:'Sauces, épices, huiles, vinaigres', img:'images/categories/epices.jpg' },
  { id:'autre',       label:'Autre',               badge:'badge-autre',       description:'Conserves, pâtes, riz, céréales…',  img:'images/categories/autre.jpg' },
];

// img: chemin relatif depuis la racine du projet, ou null si pas encore disponible
const PRODUCTS = [

  /* ══ FRUITS ══ */
  { id:'pomme',        name:'Pomme',             category:'fruits',      unit:'kg',        img:'images/products/pomme.jpg' },
  { id:'banane',       name:'Banane',            category:'fruits',      unit:'kg',        img:'images/products/banane.jpg' },
  { id:'orange',       name:'Orange',            category:'fruits',      unit:'kg',        img: 'images/products/oranges.jpg' },
  { id:'fraise',       name:'Fraise',            category:'fruits',      unit:'barquette', img: 'images/products/fraise.jpg' },
  { id:'raisin',       name:'Raisin',            category:'fruits',      unit:'kg',        img: 'images/products/raisin.jpg' },
  { id:'mangue',       name:'Mangue',            category:'fruits',      unit:'pcs',       img: 'images/products/mangue.jpg' },
  { id:'ananas',       name:'Ananas',            category:'fruits',      unit:'pcs',       img: 'images/products/ananas.jpg' },
  { id:'peche',        name:'Pêche',             category:'fruits',      unit:'kg',        img: 'images/products/peche.jpg' },
  { id:'poire',        name:'Poire',             category:'fruits',      unit:'kg',        img: 'images/products/poire.jpg' }, 
  { id:'citron',       name:'Citron',            category:'fruits',      unit:'filet',     img: 'images/products/citron.jpg' },
  { id:'kiwi',         name:'Kiwi',              category:'fruits',      unit:'pcs',       img: 'images/products/kiwi.jpg' },
  { id:'melon',        name:'Melon',             category:'fruits',      unit:'pcs',       img: 'images/products/melon.jpg' },
  { id:'cerises',      name:'Cerises',           category:'fruits',      unit:'kg',        img: 'images/products/cerises.jpg' },
  { id:'pasteque',     name:'Pastèque',          category:'fruits',      unit:'pcs',       img: 'images/products/pasteque.jpg' },
  { id:'myrtilles',    name:'Myrtilles',         category:'fruits',      unit:'barquette', img: 'images/products/myrtilles.jpg' },
  { id:'framboises',   name:'Framboises',        category:'fruits',      unit:'barquette', img: 'images/products/framboises.jpg' },

  /* ══ LÉGUMES ══ */
  { id:'tomate',       name:'Tomate',            category:'legumes',     unit:'kg',        img:null },
  { id:'carotte',      name:'Carotte',           category:'legumes',     unit:'kg',        img:null },
  { id:'salade',       name:'Salade verte',      category:'legumes',     unit:'pcs',       img:null },
  { id:'courgette',    name:'Courgette',         category:'legumes',     unit:'kg',        img:null },
  { id:'poivron',      name:'Poivron',           category:'legumes',     unit:'pcs',       img:null },
  { id:'oignon',       name:'Oignon',            category:'legumes',     unit:'filet',     img:null },
  { id:'ail',          name:'Ail',               category:'legumes',     unit:'tête',      img:null },
  { id:'pdterre',      name:'Pomme de terre',    category:'legumes',     unit:'kg',        img:null },
  { id:'champignon',   name:'Champignon',        category:'legumes',     unit:'barquette', img:null },
  { id:'epinards',     name:'Épinards',          category:'legumes',     unit:'sachet',    img:null },
  { id:'concombre',    name:'Concombre',         category:'legumes',     unit:'pcs',       img:null },
  { id:'brocoli',      name:'Brocoli',           category:'legumes',     unit:'pcs',       img:null },
  { id:'poireau',      name:'Poireau',           category:'legumes',     unit:'botte',     img:null },
  { id:'aubergine',    name:'Aubergine',         category:'legumes',     unit:'pcs',       img:null },
  { id:'haricotsverts',name:'Haricots verts',    category:'legumes',     unit:'kg',        img:null },
  { id:'celeri',       name:'Céleri',            category:'legumes',     unit:'pcs',       img:null },

  /* ══ VIANDES & POISSONS ══ */
  { id:'poulet',       name:'Poulet entier',     category:'viandes',     unit:'pcs',       img:null },
  { id:'filetpoulet',  name:'Filet de poulet',   category:'viandes',     unit:'kg',        img:null },
  { id:'boeufhache',   name:'Boeuf haché',       category:'viandes',     unit:'kg',        img:null },
  { id:'steak',        name:'Steak',             category:'viandes',     unit:'pcs',       img:null },
  { id:'cotesporc',    name:'Côtes de porc',     category:'viandes',     unit:'kg',        img:null },
  { id:'saucisse',     name:'Saucisse',          category:'viandes',     unit:'paquet',    img:null },
  { id:'jambon',       name:'Jambon blanc',      category:'viandes',     unit:'paquet',    img:null },
  { id:'lardons',      name:'Lardons',           category:'viandes',     unit:'paquet',    img:null },
  { id:'saumon',       name:'Saumon',            category:'viandes',     unit:'kg',        img:null },
  { id:'cabillaud',    name:'Cabillaud',         category:'viandes',     unit:'kg',        img:null },
  { id:'crevettes',    name:'Crevettes',         category:'viandes',     unit:'kg',        img:null },
  { id:'sardines',     name:'Sardines fraîches', category:'viandes',     unit:'kg',        img:null },
  { id:'merguez',      name:'Merguez',           category:'viandes',     unit:'kg',        img:null },
  { id:'escalope',     name:'Escalope de veau',  category:'viandes',     unit:'pcs',       img:null },

  /* ══ LAITIERS ══ */
  { id:'lait',         name:'Lait entier',       category:'laitiers',    unit:'L',         img:null },
  { id:'laitdemi',     name:'Lait demi-écrémé',  category:'laitiers',    unit:'L',         img:null },
  { id:'beurre',       name:'Beurre',            category:'laitiers',    unit:'paquet',    img:null },
  { id:'yaourt',       name:'Yaourt nature',      category:'laitiers',    unit:'paquet',    img:null },
  { id:'yaourtvfruits',name:'Yaourt aux fruits',  category:'laitiers',    unit:'paquet',    img:null },
  { id:'fromageblanc', name:'Fromage blanc',      category:'laitiers',    unit:'pot',       img:null },
  { id:'cremefraiche', name:'Crème fraîche',      category:'laitiers',    unit:'pot',       img:null },
  { id:'emmental',     name:'Emmental râpé',      category:'laitiers',    unit:'paquet',    img:null },
  { id:'camembert',    name:'Camembert',          category:'laitiers',    unit:'pcs',       img:null },
  { id:'brie',         name:'Brie',               category:'laitiers',    unit:'pcs',       img:null },
  { id:'mozzarella',   name:'Mozzarella',         category:'laitiers',    unit:'pcs',       img:null },
  { id:'parmesan',     name:'Parmesan',           category:'laitiers',    unit:'paquet',    img:null },
  { id:'oeufs',        name:'Oeufs',              category:'laitiers',    unit:'boîte',     img:null },
  { id:'cremeliquide', name:'Crème liquide',      category:'laitiers',    unit:'L',         img:null },

  /* ══ BOULANGERIE ══ */
  { id:'baguette',     name:'Baguette',           category:'boulangerie', unit:'pcs',       img:null },
  { id:'paincomplet',  name:'Pain complet',        category:'boulangerie', unit:'pcs',       img:null },
  { id:'paindemie',    name:'Pain de mie',         category:'boulangerie', unit:'paquet',    img:null },
  { id:'croissant',    name:'Croissant',           category:'boulangerie', unit:'pcs',       img:null },
  { id:'painchocolat', name:'Pain au chocolat',    category:'boulangerie', unit:'pcs',       img:null },
  { id:'ficelle',      name:'Ficelle',             category:'boulangerie', unit:'pcs',       img:null },
  { id:'brioche',      name:'Brioche',             category:'boulangerie', unit:'pcs',       img:null },
  { id:'painseigle',   name:'Pain de seigle',      category:'boulangerie', unit:'pcs',       img:null },
  { id:'muffin',       name:'Muffin',              category:'boulangerie', unit:'paquet',    img:null },

  /* ══ BOISSONS ══ */
  { id:'eauplate',     name:'Eau plate',           category:'boissons',    unit:'L',         img:null },
  { id:'eaugazeuse',   name:'Eau gazeuse',          category:'boissons',    unit:'L',         img:null },
  { id:'jusorange',    name:"Jus d'orange",         category:'boissons',    unit:'L',         img:null },
  { id:'juspomme',     name:'Jus de pomme',         category:'boissons',    unit:'L',         img:null },
  { id:'cafe',         name:'Café moulu',            category:'boissons',    unit:'paquet',    img:null },
  { id:'the',          name:'Thé',                  category:'boissons',    unit:'boîte',     img:null },
  { id:'cola',         name:'Cola',                 category:'boissons',    unit:'L',         img:null },
  { id:'limonade',     name:'Limonade',             category:'boissons',    unit:'L',         img:null },
  { id:'laitcoco',     name:'Lait de coco',         category:'boissons',    unit:'cannette',  img:null },
  { id:'vinrouge',     name:'Vin rouge',            category:'boissons',    unit:'bouteille', img:null },
  { id:'vinblanc',     name:'Vin blanc',            category:'boissons',    unit:'bouteille', img:null },
  { id:'biere',        name:'Bière',                category:'boissons',    unit:'pack',      img:null },
  { id:'smoothie',     name:'Smoothie',             category:'boissons',    unit:'bouteille', img:null },

  /* ══ SURGELÉS ══ */
  { id:'petitspois',   name:'Petits pois surgelés', category:'surgeles',    unit:'sachet',    img:null },
  { id:'epinardssurf', name:'Épinards surgelés',    category:'surgeles',    unit:'sachet',    img:null },
  { id:'frites',       name:'Frites surgelées',     category:'surgeles',    unit:'sachet',    img:null },
  { id:'pizza',        name:'Pizza surgelée',       category:'surgeles',    unit:'pcs',       img:null },
  { id:'glacevanille', name:'Glace vanille',        category:'surgeles',    unit:'pot',       img:null },
  { id:'glacechoco',   name:'Glace chocolat',       category:'surgeles',    unit:'pot',       img:null },
  { id:'poissonpane',  name:'Poisson pané',         category:'surgeles',    unit:'paquet',    img:null },
  { id:'boulettes',    name:'Boulettes de viande',  category:'surgeles',    unit:'paquet',    img:null },
  { id:'legumesMix',   name:'Mix légumes',          category:'surgeles',    unit:'sachet',    img:null },
  { id:'croque',       name:'Croque-monsieur',      category:'surgeles',    unit:'boîte',     img:null },

  /* ══ ÉPICES & CONDIMENTS ══ */
  { id:'sel',          name:'Sel fin',              category:'epices',      unit:'paquet',    img:null },
  { id:'poivre',       name:'Poivre noir',          category:'epices',      unit:'moulin',    img:null },
  { id:'cumin',        name:'Cumin',                category:'epices',      unit:'pot',       img:null },
  { id:'paprika',      name:'Paprika',              category:'epices',      unit:'pot',       img:null },
  { id:'curcuma',      name:'Curcuma',              category:'epices',      unit:'pot',       img:null },
  { id:'cannelle',     name:'Cannelle',             category:'epices',      unit:'pot',       img:null },
  { id:'herbes',       name:'Herbes de Provence',   category:'epices',      unit:'pot',       img:null },
  { id:'huileolive',   name:"Huile d'olive",        category:'epices',      unit:'L',         img:null },
  { id:'huiletourn',   name:'Huile tournesol',      category:'epices',      unit:'L',         img:null },
  { id:'vinaigre',     name:'Vinaigre balsamique',  category:'epices',      unit:'bouteille', img:null },
  { id:'moutarde',     name:'Moutarde',             category:'epices',      unit:'pot',       img:null },
  { id:'ketchup',      name:'Ketchup',              category:'epices',      unit:'bouteille', img:null },
  { id:'mayonnaise',   name:'Mayonnaise',           category:'epices',      unit:'pot',       img:null },
  { id:'saucesoja',    name:'Sauce soja',           category:'epices',      unit:'bouteille', img:null },

  /* ══ AUTRE ══ */
  { id:'pates',        name:'Pâtes (spaghetti)',    category:'autre',       unit:'paquet',    img:null },
  { id:'riz',          name:'Riz basmati',          category:'autre',       unit:'kg',        img:null },
  { id:'farine',       name:'Farine',               category:'autre',       unit:'kg',        img:null },
  { id:'sucre',        name:'Sucre',                category:'autre',       unit:'kg',        img:null },
  { id:'chocolat',     name:'Chocolat noir',        category:'autre',       unit:'tablette',  img:null },
  { id:'cereales',     name:'Céréales',             category:'autre',       unit:'boîte',     img:null },
  { id:'lentilles',    name:'Lentilles',            category:'autre',       unit:'kg',        img:null },
  { id:'poischiches',  name:'Pois chiches',         category:'autre',       unit:'boîte',     img:null },
  { id:'tomatescons',  name:'Tomates concassées',   category:'autre',       unit:'boîte',     img:null },
  { id:'thon',         name:'Thon en conserve',     category:'autre',       unit:'boîte',     img:null },
  { id:'confiture',    name:'Confiture',            category:'autre',       unit:'pot',       img:null },
  { id:'miel',         name:'Miel',                 category:'autre',       unit:'pot',       img:null },
  { id:'nutella',      name:'Pâte à tartiner',      category:'autre',       unit:'pot',       img:null },
  { id:'biscottes',    name:'Biscottes',            category:'autre',       unit:'paquet',    img:null },
];

// ── HELPERS ──
function getCategoryById(id)          { return CATEGORIES.find(c => c.id === id); }
function getProductsByCategory(catId) { return PRODUCTS.filter(p => p.category === catId); }
function getProductById(id)           { return PRODUCTS.find(p => p.id === id); }
function getCategoryLabel(id)         { const c = getCategoryById(id); return c ? c.label : 'Autre'; }
function getCategoryBadge(id)         { const c = getCategoryById(id); return c ? c.badge : 'badge-autre'; }