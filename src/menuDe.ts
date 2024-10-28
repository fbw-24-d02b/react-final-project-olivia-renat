const menuDe = [
  {
    id: 1,
    name: 'Spaghetti Bolognese',
    category: 'Hauptgericht',
    price: '12_99',
    description: 'Klassische italienische Pasta mit reichhaltiger Bolognese-Sauce',
    availability: true,
    allergens: ['gluten', 'milch']
  },
  {
    id: 2,
    name: 'Caesar Salad',
    category: 'Vorspeise',
    price: '6_99',
    description: 'Frischer Römersalat mit Caesar-Dressing und Croutons',
    availability: true,
    allergens: ['milch', 'ei']
  },
  {
    id: 3,
    name: 'Schokoladenkuchen',
    category: 'Dessert',
    price: '5_99',
    description: 'Reicher und saftiger Schokoladenkuchen',
    availability: true,
    allergens: ['gluten', 'milch', 'nüsse']
  },
  {
    id: 4,
    name: 'Pizza Margherita',
    category: 'Hauptgericht',
    price: '10_99',
    description: 'Klassische Pizza mit Tomatensauce, Mozzarella und Basilikum',
    availability: true,
    allergens: ['gluten', 'milch']
  },
  {
    id: 5,
    name: 'Gegrillter Lachs',
    category: 'Hauptgericht',
    price: '14_99',
    description: 'Perfekt gegrillter Lachs mit Zitronenbutter-Sauce',
    availability: true,
    allergens: ['fisch']
  },
  {
    id: 6,
    name: 'Veganer Burger',
    category: 'Hauptgericht',
    price: '11_99',
    description: 'Pflanzenbasierter Patty mit Salat, Tomate und veganer Mayonnaise',
    availability: true,
    allergens: ['gluten']
  },
  {
    id: 7,
    name: 'Mango-Smoothie',
    category: 'Getränk',
    price: '4_99',
    description: 'Erfrischender Mango-Smoothie mit frischen Mangos und Mandelmilch',
    availability: true,
    allergens: ['nüsse']
  },
  {
    id: 8,
    name: 'Knoblauchbrot',
    category: 'Vorspeise',
    price: '3_99',
    description: 'Geröstetes Baguette mit Knoblauchbutter und Kräutern',
    availability: true,
    allergens: ['gluten', 'milch']
  },
  {
    id: 9,
    name: 'Garnelen-Tacos',
    category: 'Hauptgericht',
    price: '12_49',
    description: 'Würzige Garnelen-Tacos mit frischer Salsa und cremiger Sauce',
    availability: true,
    allergens: ['schalentiere', 'gluten']
  },
  {
    id: 10,
    name: 'Käsekuchen',
    category: 'Dessert',
    price: '6_99',
    description: 'Cremiger Käsekuchen mit Keksboden',
    availability: true,
    allergens: ['milch', 'gluten']
  },
  {
    id: 11,
    name: 'Pommes Frites',
    category: 'Beilage',
    price: '3_49',
    description: 'Knusprig goldene Pommes Frites, leicht gesalzen',
    availability: true,
    allergens: []
  },
  {
    id: 12,
    name: 'Hähnchenflügel',
    category: 'Vorspeise',
    price: '8_99',
    description: 'Würzige Hähnchenflügel mit Ranch-Dip',
    availability: true,
    allergens: ['milch']
  },
  {
    id: 13,
    name: 'Rindfleisch-Tacos',
    category: 'Hauptgericht',
    price: '10_49',
    description: 'Weiche Tacos mit gewürztem Rindfleisch, Käse und Salat',
    availability: true,
    allergens: ['gluten', 'milch']
  },
  {
    id: 14,
    name: 'Penne Alfredo',
    category: 'Hauptgericht',
    price: '11_99',
    description: 'Penne mit cremiger Alfredo-Sauce und Parmesan',
    availability: true,
    allergens: ['gluten', 'milch']
  },
  {
    id: 15,
    name: 'Griechischer Salat',
    category: 'Vorspeise',
    price: '7_99',
    description: 'Salat mit Gurken, Tomaten, Oliven und Feta-Käse',
    availability: true,
    allergens: ['milch']
  },
  {
    id: 16,
    name: 'Fruchtschale',
    category: 'Dessert',
    price: '4_49',
    description: 'Frische saisonale Früchte in einer Schale serviert',
    availability: true,
    allergens: []
  },
  {
    id: 17,
    name: 'Clam Chowder',
    category: 'Hauptgericht',
    price: '9_99',
    description: 'Cremige Muschelsuppe mit Kartoffeln und Sellerie',
    availability: true,
    allergens: ['schalentiere', 'milch']
  },
  {
    id: 18,
    name: 'Veganer Schokoladenpudding',
    category: 'Dessert',
    price: '5_49',
    description: 'Reicher und cremiger veganer Schokoladenpudding',
    availability: true,
    allergens: []
  },
  {
    id: 19,
    name: 'Eiskaffee',
    category: 'Getränk',
    price: '4_49',
    description: 'Gekühlter Espresso mit Milch und Eis',
    availability: true,
    allergens: ['milch']
  },
  {
    id: 20,
    name: 'Avocado-Toast',
    category: 'Vorspeise',
    price: '6_49',
    description: 'Getoastetes Brot mit Avocado und einem Hauch Limette',
    availability: true,
    allergens: ['gluten']
  },
  {
    id: 21,
    name: 'Mineralwasser',
    category: 'Getränk',
    price: '2_49',
    description: 'Erfrischendes Mineralwasser, still oder sprudelnd',
    availability: true,
    allergens: []
  },
  {
    id: 22,
    name: 'Orangensaft',
    category: 'Getränk',
    price: '3_49',
    description: 'Frisch gepresster Orangensaft',
    availability: true,
    allergens: []
  },
  {
    id: 23,
    name: 'Grüner Tee',
    category: 'Getränk',
    price: '2_99',
    description: 'Heiße Tasse grüner Tee, aromatisch und wohltuend',
    availability: true,
    allergens: []
  },
  {
    id: 24,
    name: 'Rotwein',
    category: 'Getränk',
    price: '5_99',
    description: 'Edler Rotwein, perfekt zum Hauptgericht',
    availability: true,
    allergens: []
  },
  {
    id: 25,
    name: 'Bier',
    category: 'Getränk',
    price: '4_49',
    description: 'Kühles Bier, frisch gezapft',
    availability: true,
    allergens: ['gluten']
  }
];
