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
  { id:'tomate',       name:'Tomate',            category:'legumes',     unit:'kg',        img: 'images/products/tomate.jpg' },
  { id:'carotte',      name:'Carotte',           category:'legumes',     unit:'kg',        img: 'images/products/carotte.jpg' },
  { id:'salade',       name:'Salade verte',      category:'legumes',     unit:'pcs',       img: 'images/products/salade.jpg' },
  { id:'courgette',    name:'Courgette',         category:'legumes',     unit:'kg',        img: 'images/products/courgette.jpg' },
  { id:'poivron',      name:'Poivron',           category:'legumes',     unit:'pcs',       img: 'images/products/poivron.jpg' },
  { id:'oignon',       name:'Oignon',            category:'legumes',     unit:'filet',     img: 'images/products/oignon.jpg' },
  { id:'ail',          name:'Ail',               category:'legumes',     unit:'tête',      img: 'images/products/ail.jpg' },
  { id:'pdterre',      name:'Pomme de terre',    category:'legumes',     unit:'kg',        img: 'images/products/pdterre.jpg' },
  { id:'champignon',   name:'Champignon',        category:'legumes',     unit:'barquette', img: 'images/products/champignon.jpg' },
  { id:'epinards',     name:'Épinards',          category:'legumes',     unit:'sachet',    img: 'images/products/epinards.jpg' },
  { id:'concombre',    name:'Concombre',         category:'legumes',     unit:'pcs',       img: 'images/products/concombre.jpg' },
  { id:'brocoli',      name:'Brocoli',           category:'legumes',     unit:'pcs',       img: 'images/products/brocoli.jpg' },
  { id:'poireau',      name:'Poireau',           category:'legumes',     unit:'botte',     img: 'images/products/poireau.jpg' },
  { id:'aubergine',    name:'Aubergine',         category:'legumes',     unit:'pcs',       img: 'images/products/aubergine.jpg' },
  { id:'haricotsverts',name:'Haricots verts',    category:'legumes',     unit:'kg',        img: 'images/products/haricotsverts.jpg' },
  { id:'celeri',       name:'Céleri',            category:'legumes',     unit:'pcs',       img: 'images/products/celeri.jpg' },

  /* ══ VIANDES & POISSONS ══ */
  { id:'poulet',       name:'Poulet entier',     category:'viandes',     unit:'pcs',       img: 'images/products/poulet.jpg' },
  { id:'filetpoulet',  name:'Filet de poulet',   category:'viandes',     unit:'kg',        img: 'images/products/filetpoulet.jpg' },
  { id:'boeufhache',   name:'Boeuf haché',       category:'viandes',     unit:'kg',        img: 'images/products/boeufhache.jpg' },
  { id:'steak',        name:'Steak',             category:'viandes',     unit:'pcs',       img: 'images/products/steak.jpg' },
  { id:'cotesporc',    name:'Côtes de porc',     category:'viandes',     unit:'kg',        img: 'images/products/cotesporc.jpg' },
  { id:'saucisse',     name:'Saucisse',          category:'viandes',     unit:'paquet',    img: 'images/products/saucisse.jpg' },
  { id:'jambon',       name:'Jambon blanc',      category:'viandes',     unit:'paquet',    img: 'images/products/jambon.jpg' },
  { id:'lardons',      name:'Lardons',           category:'viandes',     unit:'paquet',    img: 'images/products/lardons.jpg' },
  { id:'saumon',       name:'Saumon',            category:'viandes',     unit:'kg',        img: 'images/products/saumon.jpg' },
  { id:'cabillaud',    name:'Cabillaud',         category:'viandes',     unit:'kg',        img: 'images/products/cabillaud.jpg' },
  { id:'crevettes',    name:'Crevettes',         category:'viandes',     unit:'kg',        img: 'images/products/crevettes.jpg' },
  { id:'sardines',     name:'Sardines fraîches', category:'viandes',     unit:'kg',        img: 'images/products/sardines.jpg' },
  { id:'merguez',      name:'Merguez',           category:'viandes',     unit:'kg',        img: 'images/products/merguez.jpg' },
  { id:'escalope',     name:'Escalope de veau',  category:'viandes',     unit:'pcs',       img: 'images/products/escalope.jpg' },

  /* ══ LAITIERS ══ */
  { id:'lait',         name:'Lait entier',       category:'laitiers',    unit:'L',         img: 'images/products/lait.jpg' },
  { id:'laitdemi',     name:'Lait demi-écrémé',  category:'laitiers',    unit:'L',         img: 'images/products/laitdemi.jpg' },
  { id:'beurre',       name:'Beurre',            category:'laitiers',    unit:'paquet',    img: 'images/products/beurre.jpg' },
  { id:'yaourt',       name:'Yaourt nature',      category:'laitiers',    unit:'paquet',    img: 'images/products/yaourt.jpg' },
  { id:'yaourtvfruits',name:'Yaourt aux fruits',  category:'laitiers',    unit:'paquet',    img: 'images/products/yaourtvfruits.jpg' },
  { id:'fromageblanc', name:'Fromage blanc',      category:'laitiers',    unit:'pot',       img: 'images/products/fromageblanc.jpg' },
  { id:'cremefraiche', name:'Crème fraîche',      category:'laitiers',    unit:'pot',       img: 'images/products/cremefraiche.jpg' },
  { id:'emmental',     name:'Emmental râpé',      category:'laitiers',    unit:'paquet',    img: 'images/products/emmental.jpg' },
  { id:'camembert',    name:'Camembert',          category:'laitiers',    unit:'pcs',       img: 'images/products/camembert.jpg' },
  { id:'brie',         name:'Brie',               category:'laitiers',    unit:'pcs',       img: 'images/products/brie.jpg' },
  { id:'mozzarella',   name:'Mozzarella',         category:'laitiers',    unit:'pcs',       img: 'images/products/mozzarella.jpg' },
  { id:'parmesan',     name:'Parmesan',           category:'laitiers',    unit:'paquet',    img: 'images/products/parmesan.jpg' },
  { id:'oeufs',        name:'Oeufs',              category:'laitiers',    unit:'boîte',     img: 'images/products/oeufs.jpg' },
  { id:'cremeliquide', name:'Crème liquide',      category:'laitiers',    unit:'L',         img: 'images/products/cremeliquide.jpg' },

  /* ══ BOULANGERIE ══ */
  { id:'baguette',     name:'Baguette',           category:'boulangerie', unit:'pcs',       img: 'images/products/baguette.jpg' },
  { id:'paincomplet',  name:'Pain complet',        category:'boulangerie', unit:'pcs',       img: 'images/products/paincomplet.jpg' },
  { id:'paindemie',    name:'Pain de mie',         category:'boulangerie', unit:'paquet',    img: 'images/products/paindemie.jpg' },
  { id:'croissant',    name:'Croissant',           category:'boulangerie', unit:'pcs',       img: 'images/products/croissant.jpg' },
  { id:'painchocolat', name:'Pain au chocolat',    category:'boulangerie', unit:'pcs',       img: 'images/products/painchocolat.jpg' },
  { id:'ficelle',      name:'Ficelle',             category:'boulangerie', unit:'pcs',       img: 'images/products/ficelle.jpg' },
  { id:'brioche',      name:'Brioche',             category:'boulangerie', unit:'pcs',       img: 'images/products/brioche.jpg' },
  { id:'painseigle',   name:'Pain de seigle',      category:'boulangerie', unit:'pcs',       img: 'images/products/painseigle.jpg' },
  { id:'muffin',       name:'Muffin',              category:'boulangerie', unit:'paquet',    img: 'images/products/muffin.jpg' },

  /* ══ BOISSONS ══ */
  { id:'eauplate',     name:'Eau plate',           category:'boissons',    unit:'L',         img: 'images/products/eauplate.jpg' },
  { id:'eaugazeuse',   name:'Eau gazeuse',          category:'boissons',    unit:'L',         img: 'images/products/eaugazeuse.jpg' },
  { id:'jusorange',    name:"Jus d'orange",         category:'boissons',    unit:'L',         img: 'images/products/jusorange.jpg' },
  { id:'juspomme',     name:'Jus de pomme',         category:'boissons',    unit:'L',         img: 'images/products/juspomme.jpg' },
  { id:'cafe',         name:'Café moulu',            category:'boissons',    unit:'paquet',    img: 'images/products/cafe.jpg' },
  { id:'the',          name:'Thé',                  category:'boissons',    unit:'boîte',     img: 'images/products/the.jpg' },
  { id:'cola',         name:'Cola',                 category:'boissons',    unit:'L',         img: 'images/products/cola.jpg' },
  { id:'limonade',     name:'Limonade',             category:'boissons',    unit:'L',         img: 'images/products/limonade.jpg' },
  { id:'laitcoco',     name:'Lait de coco',         category:'boissons',    unit:'cannette',  img: 'images/products/laitcoco.jpg' },
  { id:'vinrouge',     name:'Vin rouge',            category:'boissons',    unit:'bouteille', img: 'images/products/vinrouge.jpg' },
  { id:'vinblanc',     name:'Vin blanc',            category:'boissons',    unit:'bouteille', img: 'images/products/vinblanc.jpg' },
  { id:'biere',        name:'Bière',                category:'boissons',    unit:'pack',      img: 'images/products/biere.jpg' },
  { id:'smoothie',     name:'Smoothie',             category:'boissons',    unit:'bouteille', img: 'images/products/smoothie.jpg' },

  /* ══ SURGELÉS ══ */
  { id:'petitspois',   name:'Petits pois surgelés', category:'surgeles',    unit:'sachet',    img: 'images/products/petitspois.jpg' },
  { id:'epinardssurf', name:'Épinards surgelés',    category:'surgeles',    unit:'sachet',    img: 'images/products/epinardssurf.jpg' },
  { id:'frites',       name:'Frites surgelées',     category:'surgeles',    unit:'sachet',    img: 'images/products/frites.jpg' },
  { id:'pizza',        name:'Pizza surgelée',       category:'surgeles',    unit:'pcs',       img: 'images/products/pizza.jpg' },
  { id:'glacevanille', name:'Glace vanille',        category:'surgeles',    unit:'pot',       img: 'images/products/glacevanille.jpg' },
  { id:'glacechoco',   name:'Glace chocolat',       category:'surgeles',    unit:'pot',       img: 'images/products/glacechoco.jpg' },
  { id:'poissonpane',  name:'Poisson pané',         category:'surgeles',    unit:'paquet',    img: 'images/products/poissonpane.jpg' },
  { id:'boulettes',    name:'Boulettes de viande',  category:'surgeles',    unit:'paquet',    img: 'images/products/boulettes.jpg' },
  { id:'legumesMix',   name:'Mix légumes',          category:'surgeles',    unit:'sachet',    img: 'images/products/legumesMix.jpg' },
  { id:'croque',       name:'Croque-monsieur',      category:'surgeles',    unit:'boîte',     img: 'images/products/croque.jpg' },

  /* ══ ÉPICES & CONDIMENTS ══ */
  { id:'sel',          name:'Sel fin',              category:'epices',      unit:'paquet',    img: 'images/products/sel.jpg' },
  { id:'poivre',       name:'Poivre noir',          category:'epices',      unit:'moulin',    img: 'images/products/poivre.jpg' },
  { id:'cumin',        name:'Cumin',                category:'epices',      unit:'pot',       img: 'images/products/cumin.jpg' },
  { id:'paprika',      name:'Paprika',              category:'epices',      unit:'pot',       img: 'images/products/paprika.jpg' },
  { id:'curcuma',      name:'Curcuma',              category:'epices',      unit:'pot',       img: 'images/products/curcuma.jpg' },
  { id:'cannelle',     name:'Cannelle',             category:'epices',      unit:'pot',       img: 'images/products/cannelle.jpg' },
  { id:'herbes',       name:'Herbes de Provence',   category:'epices',      unit:'pot',       img: 'images/products/herbes.jpg' },
  { id:'huileolive',   name:"Huile d'olive",        category:'epices',      unit:'L',         img: 'images/products/huileolive.jpg' },
  { id:'huiletourn',   name:'Huile tournesol',      category:'epices',      unit:'L',         img: 'images/products/huiletourn.jpg' },
  { id:'vinaigre',     name:'Vinaigre balsamique',  category:'epices',      unit:'bouteille', img: 'images/products/vinaigre.jpg' },
  { id:'moutarde',     name:'Moutarde',             category:'epices',      unit:'pot',       img: 'images/products/moutarde.jpg' },
  { id:'ketchup',      name:'Ketchup',              category:'epices',      unit:'bouteille', img: 'images/products/ketchup.jpg' },
  { id:'mayonnaise',   name:'Mayonnaise',           category:'epices',      unit:'pot',       img: 'images/products/mayonnaise.jpg' },
  { id:'saucesoja',    name:'Sauce soja',           category:'epices',      unit:'bouteille', img: 'images/products/saucesoja.jpg' },

  /* ══ AUTRE ══ */
  { id:'pates',        name:'Pâtes (spaghetti)',    category:'autre',       unit:'paquet',    img: 'images/products/pates.jpg' },
  { id:'riz',          name:'Riz basmati',          category:'autre',       unit:'kg',        img: 'images/products/riz.jpg' },
  { id:'farine',       name:'Farine',               category:'autre',       unit:'kg',        img: 'images/products/farine.jpg' },
  { id:'sucre',        name:'Sucre',                category:'autre',       unit:'kg',        img: 'images/products/sucre.jpg' },
  { id:'chocolat',     name:'Chocolat noir',        category:'autre',       unit:'tablette',  img: 'images/products/chocolat.jpg' },
  { id:'cereales',     name:'Céréales',             category:'autre',       unit:'boîte',     img: 'images/products/cereales.jpg' },
  { id:'lentilles',    name:'Lentilles',            category:'autre',       unit:'kg',        img: 'images/products/lentilles.jpg' },
  { id:'poischiches',  name:'Pois chiches',         category:'autre',       unit:'boîte',     img: 'images/products/poischiches.jpg' },
  { id:'tomatescons',  name:'Tomates concassées',   category:'autre',       unit:'boîte',     img: 'images/products/tomatescons.jpg' },
  { id:'thon',         name:'Thon en conserve',     category:'autre',       unit:'boîte',     img: 'images/products/thon.jpg' },
  { id:'confiture',    name:'Confiture',            category:'autre',       unit:'pot',       img: 'images/products/confiture.jpg' },
  { id:'miel',         name:'Miel',                 category:'autre',       unit:'pot',       img: 'images/products/miel.jpg' },
  { id:'nutella',      name:'Pâte à tartiner',      category:'autre',       unit:'pot',       img: 'images/products/nutella.jpg' },
  { id:'biscottes',    name:'Biscottes',            category:'autre',       unit:'paquet',    img: 'images/products/biscottes.jpg' },
];

// ── HELPERS ──
function getCategoryById(id)          { return CATEGORIES.find(c => c.id === id); }
function getProductsByCategory(catId) { return PRODUCTS.filter(p => p.category === catId); }
function getProductById(id)           { return PRODUCTS.find(p => p.id === id); }
function getCategoryLabel(id)         { const c = getCategoryById(id); return c ? c.label : 'Autre'; }
function getCategoryBadge(id)         { const c = getCategoryById(id); return c ? c.badge : 'badge-autre'; }