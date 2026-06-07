const ANIMALS = [
  {
    id:1,name:"Lion",emoji:"🦁",habitat:"Savane",habitatEmoji:"🌾",
    superpower:"Rugissement audible à 8 km !",
    fact:"Le lion est le seul grand félin à vivre en groupe. C'est la lionne qui chasse !",
    color:"#FFB347",weight:"120-250 kg",origin:"Afrique subsaharienne + Inde (forêt de Gir)",
    diet:"Carnivore — zèbres, gnous, buffles, antilopes",
    social:"En troupe (10-30 individus)",lifespan:"10-14 ans (sauvage)",
    image:"img/lion.jpg"
  },
  {
    id:2,name:"Éléphant d'Afrique",emoji:"🐘",habitat:"Savane & Forêt",habitatEmoji:"🌿",
    superpower:"Mémoire quasi-infinie : il se souvient de chaque lieu et de chaque individu rencontré.",
    fact:"L'éléphant communique par vibrations du sol que ses pattes ressentent à des kilomètres.",
    color:"#B0C4DE",weight:"3 000-6 000 kg",origin:"Afrique subsaharienne",
    diet:"Herbivore — herbes, fruits, écorces (200 kg/jour !)",
    social:"En troupeau matriarcal (10-50)",lifespan:"60-70 ans",
    image:"img/elephant.jpg"
  },
  {
    id:3,name:"Dauphin commun",emoji:"🐬",habitat:"Océan",habitatEmoji:"🌊",
    superpower:"Écholocation : il envoie des sons et écoute l'écho pour 'voir' sous l'eau.",
    fact:"Les dauphins ont un nom propre ! Ils sifflent d'une façon unique pour s'appeler.",
    color:"#87CEEB",weight:"80-235 kg",origin:"Mers tempérées et tropicales du monde entier",
    diet:"Poissons, céphalopodes, crevettes",
    social:"En pod (10-50, parfois 1 000 !)",lifespan:"25-40 ans",
    image:"img/dauphin.jpg"
  },
  {
    id:4,name:"Pieuvre commune",emoji:"🐙",habitat:"Océan",habitatEmoji:"🌊",
    superpower:"Camouflage parfait en moins d'une seconde, 3 cœurs et un sang bleu !",
    fact:"La pieuvre peut dévisser un couvercle de bocal et résoudre des puzzles.",
    color:"#DA70D6",weight:"3-10 kg",origin:"Atlantique, Méditerranée, Indo-Pacifique",
    diet:"Crabes, crustacés, mollusques, poissons",
    social:"Solitaire",lifespan:"1-5 ans",
    image:"img/pieuvre.jpg"
  },
  {
    id:5,name:"Caméléon de Parson",emoji:"🦎",habitat:"Forêt tropicale de Madagascar",habitatEmoji:"🌴",
    superpower:"Le plus grand caméléon du monde (70 cm) change de couleur pour exprimer ses émotions !",
    fact:"Ses yeux bougent totalement indépendamment : il peut regarder deux directions en même temps.",
    color:"#90EE90",weight:"700 g-1,4 kg",origin:"Madagascar (forêts humides de l'est)",
    diet:"Insectes, petits lézards, oisillons",
    social:"Solitaire (très territorial)",lifespan:"8-10 ans",
    image:"img/Cameleon_de_Parson.jpg"
  },
  {
    id:6,name:"Axolotl",emoji:"🦎",habitat:"Lacs du Mexique",habitatEmoji:"💧",
    superpower:"Régénération totale : il peut faire repousser ses pattes, son cœur et même une partie de son cerveau !",
    fact:"L'axolotl reste 'bébé' toute sa vie, c'est ce qu'on appelle la néoténie.",
    color:"#FFB6C1",weight:"60-117 g",origin:"Mexique (lacs Xochimilco, Mexico)",
    diet:"Vers, insectes aquatiques, petits poissons",
    social:"Solitaire",lifespan:"10-15 ans",
    image:"img/axolotl.jpg"
  },
  {
    id:7,name:"Tardigrade",emoji:"🦠",habitat:"Partout (même l'espace !)",habitatEmoji:"🌌",
    superpower:"Survit dans le vide spatial, les radiations, le froid extrême et la chaleur intense.",
    fact:"Surnommé 'ourson d'eau', il est invisible à l'œil nu mais quasi-indestructible.",
    color:"#F0E68C",weight:"~1 microgramme",origin:"Partout sur Terre (mousses, océans, déserts...)",
    diet:"Algues, bactéries, liquides cellulaires de plantes",
    social:"Solitaire (microscopique)",lifespan:"2-3 ans (actif)",
    image:"img/Tardigrade.jpg"
  },
  {
    id:8,name:"Ornithorynque",emoji:"🦆",habitat:"Australie",habitatEmoji:"🌿",
    superpower:"Détecte les champs électriques avec son bec pour trouver ses proies dans l'eau !",
    fact:"C'est un mammifère qui pond des œufs. Et les mâles ont un ergot venimeux !",
    color:"#DEB887",weight:"700 g-2,4 kg",origin:"Est de l'Australie + Tasmanie",
    diet:"Vers, larves, crevettes d'eau douce, écrevisses",
    social:"Solitaire",lifespan:"10-17 ans",
    image:"img/Ornithorynque.jpg"
  },
  {
    id:9,name:"Chauve-souris vampire",emoji:"🦇",habitat:"Amérique centrale & du Sud",habitatEmoji:"🌴",
    superpower:"Seul mammifère à se nourrir exclusivement de sang. Sa salive anticoagulante inspire des médicaments !",
    fact:"Elle partage ses repas de sang avec les congénères affamés — un vrai système de solidarité.",
    color:"#9370DB",weight:"25-40 g",origin:"Mexique → Brésil, Argentine, Chili",
    diet:"Sang de mammifères et d'oiseaux (3 h/nuit)",
    social:"En colonie (centaines à milliers)",lifespan:"12-18 ans",
    image:"img/chauve-souris-vampire.jpg"
  },
  {
    id:10,name:"Colibri",emoji:"🐦",habitat:"Amérique",habitatEmoji:"🌺",
    superpower:"Vol stationnaire et même à reculons ! Bat des ailes jusqu'à 80 fois par seconde.",
    fact:"Le colibri a le cœur le plus rapide de tous les animaux : 1 200 battements/minute.",
    color:"#FF69B4",weight:"2-20 g",origin:"Amériques (du Canada à la Terre de Feu)",
    diet:"Nectar + petits insectes + araignées",
    social:"Solitaire (agressif envers les autres)",lifespan:"3-5 ans",
    image:"img/Colibri.jpg"
  },
  {
    id:11,name:"Toucan",emoji:"🐦",habitat:"Forêt tropicale",habitatEmoji:"🌴",
    superpower:"Son énorme bec coloré sert de radiateur : il régule sa température corporelle !",
    fact:"Malgré sa taille imposante, le bec du toucan est creux et très léger.",
    color:"#FF6347",weight:"130-680 g",origin:"Forêts tropicales d'Amérique centrale + du Sud",
    diet:"Fruits, insectes, petits lézards, œufs d'autres oiseaux",
    social:"Petits groupes (3-12)",lifespan:"12-20 ans",
    image:"img/toucan.jpg"
  },
  {
    id:12,name:"Hibou grand-duc",emoji:"🦉",habitat:"Forêts & Montagnes",habitatEmoji:"🌲",
    superpower:"Entend une souris sous 60 cm de neige. Tourne la tête à 270°. Plus grande chouette d'Europe !",
    fact:"Il peut attraper des proies plus lourdes que lui, comme un jeune renard.",
    color:"#8B7355",weight:"1,5-4 kg",origin:"Europe, Asie, Afrique du Nord",
    diet:"Lapins, rongeurs, hérissons, oiseaux, reptiles",
    social:"Solitaire (couple stable et fidèle)",lifespan:"20-25 ans (sauvage)",
    image:"img/hibou-grand-duc.jpg"
  },
  {
    id:13,name:"Aigle chauve",emoji:"🦅",habitat:"Amérique du Nord",habitatEmoji:"🌲",
    superpower:"Vue 8x plus puissante que l'humain. Construit le plus grand nid d'oiseau : jusqu'à 2,9 m de diamètre !",
    fact:"L'aigle chauve n'est pas chauve — son nom vient de l'anglais 'bald' qui signifiait 'blanc'.",
    color:"#8B4513",weight:"3-6,3 kg",origin:"Amérique du Nord (Canada → Mexique)",
    diet:"Poissons (90%), lapins, canards, charognes",
    social:"Solitaire (couple fidèle à vie)",lifespan:"20-30 ans (sauvage)",
    image:"img/aigle-chauve.jpg"
  },
  {
    id:14,name:"Baleine bleue",emoji:"🐋",habitat:"Océan",habitatEmoji:"🌊",
    superpower:"L'animal le plus grand qui ait jamais existé : jusqu'à 30 m, lourd comme 25 éléphants.",
    fact:"Son cœur est aussi gros qu'une voiture et bat seulement 4 à 8 fois par minute.",
    color:"#4169E1",weight:"100-200 tonnes",origin:"Tous les océans (migration pôles ↔ tropiques)",
    diet:"Krill exclusivement — 4 tonnes par jour !",
    social:"Solitaire ou en duo",lifespan:"80-90 ans",
    image:"img/baleine-bleue.jpg"
  },
  {
    id:15,name:"Grand requin blanc",emoji:"🦈",habitat:"Océan",habitatEmoji:"🌊",
    superpower:"Détecte une goutte de sang dans 100 litres d'eau et ressent les champs électriques.",
    fact:"Le requin n'a pas d'os ! Son squelette est entièrement fait de cartilage.",
    color:"#708090",weight:"680-2 268 kg",origin:"Eaux côtières tempérées mondiales (Australie, Afrique du Sud, Californie...)",
    diet:"Phoques, lions de mer, poissons, dauphins",
    social:"Solitaire (parfois 2-3)",lifespan:"70+ ans",
    image:"img/grand-requin-blanc.jpg"
  },
  {
    id:16,name:"Tortue géante des Galápagos",emoji:"🐢",habitat:"Îles Galápagos",habitatEmoji:"🏝️",
    superpower:"Longévité record : certaines vivent plus de 180 ans !",
    fact:"Ces tortues peuvent survivre un an sans manger ni boire.",
    color:"#6B8E23",weight:"250-400 kg",origin:"Îles Galápagos (Équateur)",
    diet:"Herbivore — cactus, herbes, fruits, feuilles",
    social:"Solitaire (rassemblements saisonniers)",lifespan:"100-180 ans !",
    image:"img/tortue-galapagos.jpg"
  },
  {
    id:17,name:"Grenouille venimeuse",emoji:"🐸",habitat:"Forêt tropicale",habitatEmoji:"🌴",
    superpower:"Sa peau sécrète un poison si puissant qu'il peut paralyser en quelques secondes.",
    fact:"Les couleurs vives de la grenouille venimeuse sont un avertissement : 'Ne me touche pas !'",
    color:"#FFD700",weight:"1-30 g",origin:"Forêts tropicales d'Amérique centrale + du Sud",
    diet:"Fourmis, termites, petits insectes (le venin vient de leur nourriture)",
    social:"Solitaire (couples parentaux)",lifespan:"3-15 ans",
    image:"img/grenouille-venimeuse.jpg"
  },
  {
    id:18,name:"Pieuvre à anneaux bleus",emoji:"🐙",habitat:"Océan Pacifique",habitatEmoji:"🌊",
    superpower:"Malgré sa taille de 15 cm, son venin peut tuer 26 personnes !",
    fact:"Ses anneaux bleus brillent lorsqu'elle se sent menacée — c'est son ultime avertissement.",
    color:"#1E90FF",weight:"25-80 g",origin:"Pacifique + Océan Indien (Australie, Japon, Philippines)",
    diet:"Crabes, crevettes, petits poissons",
    social:"Solitaire",lifespan:"1-2 ans",
    image:"img/pieuvre-anneaux-bleus.jpg"
  },
  {
    id:19,name:"Méduse immortelle",emoji:"🪼",habitat:"Océan",habitatEmoji:"🌊",
    superpower:"Seul animal biologiquement immortel : quand elle vieillit, elle redevient larve !",
    fact:"Elle s'appelle Turritopsis dohrnii et mesure seulement 4,5 mm.",
    color:"#E0B0FF",weight:"~1 mg",origin:"Mer Méditerranée, Atlantique (désormais dispersée partout)",
    diet:"Zooplancton, petites larves, copépodes",
    social:"Solitaire (drift passif)",lifespan:"Potentiellement infinie",
    image:"img/meduse-immortelle.jpg"
  },
  {
    id:20,name:"Étoile de mer",emoji:"⭐",habitat:"Océan",habitatEmoji:"🌊",
    superpower:"Régénération : elle peut faire repousser un bras entier coupé !",
    fact:"L'étoile de mer n'a pas de sang. C'est de l'eau de mer qui circule dans son corps.",
    color:"#FF8C00",weight:"50-300 g",origin:"Tous les océans du monde",
    diet:"Moules, huîtres, oursins, crustacés",
    social:"Solitaire ou en agrégats",lifespan:"5-35 ans",
    image:"img/etoile-de-mer.jpg"
  },
  {
    id:21,name:"Serpent à sonnette",emoji:"🐍",habitat:"Désert",habitatEmoji:"🏜️",
    superpower:"Infrarouge : des organes entre les yeux lui permettent de 'voir' la chaleur dans le noir.",
    fact:"Chaque mue de peau ajoute un anneau à sa sonnette.",
    color:"#D2691E",weight:"0,5-2,3 kg",origin:"Amériques — déserts et prairies (Canada → Argentine)",
    diet:"Rongeurs, lapins, lézards, oiseaux",
    social:"Solitaire",lifespan:"10-25 ans",
    image:"img/serpent-sonnette.jpg"
  },
  {
    id:22,name:"Gecko tokay",emoji:"🦎",habitat:"Forêts tropicales",habitatEmoji:"🌴",
    superpower:"Marche au plafond grâce à des millions de nano-poils sur ses pattes.",
    fact:"Le gecko peut se débarrasser de sa queue en cas de danger — elle repousse ensuite.",
    color:"#7CFC00",weight:"150-300 g",origin:"Asie du Sud-Est, Pacifique",
    diet:"Insectes, araignées, petits lézards, oisillons",
    social:"Solitaire (territorial)",lifespan:"7-15 ans",
    image:"img/gecko-tokay.jpg"
  },
  {
    id:23,name:"Fourmi de feu",emoji:"🐜",habitat:"Amérique du Sud & Amérique du Nord",habitatEmoji:"🌾",
    superpower:"En cas d'inondation, forme un radeau vivant flottant avec ses congénères — et les reines survivent !",
    fact:"Sa morsure provoque une brûlure intense. Les colonies peuvent compter jusqu'à 500 000 individus.",
    color:"#8B0000",weight:"1-2 mg",origin:"Amérique du Sud (introduite en Amérique du Nord, Asie, Australie)",
    diet:"Graines, insectes, petits animaux, matière organique",
    social:"En colonie (jusqu'à 500 000)",lifespan:"Reine : 7 ans — Ouvrière : 30-60 jours",
    image:"img/fourmi-de-feu.jpg"
  },
  {
    id:24,name:"Gorille",emoji:"🦍",habitat:"Forêt équatoriale",habitatEmoji:"🌿",
    superpower:"Intelligence proche de l'humain : il peut apprendre la langue des signes !",
    fact:"Le gorille des plaines a le même groupe sanguin que l'humain.",
    color:"#4A4A4A",weight:"70-270 kg",origin:"Afrique centrale et équatoriale (RDC, Cameroun, Rwanda...)",
    diet:"Herbivore — feuilles, tiges, fruits, écorces",
    social:"En groupe (silverback + 5-30)",lifespan:"35-40 ans (sauvage)",
    image:"img/gorille.jpg"
  },
  {
    id:25,name:"Calamar géant",emoji:"🦑",habitat:"Océan profond",habitatEmoji:"🌑",
    superpower:"Possède les plus grands yeux du règne animal : gros comme des ballons de foot !",
    fact:"Le calamar géant peut atteindre 14 mètres. Il se bat parfois avec les cachalots.",
    color:"#8B0057",weight:"150-275 kg",origin:"Atlantique, Pacifique, Océan Indien (profondeurs)",
    diet:"Poissons, autres calamars, crevettes profondes",
    social:"Solitaire",lifespan:"5 ans environ",
    image:"img/calamar-geant.jpg"
  },
  {
    id:26,name:"Manchot Empereur",emoji:"🐧",habitat:"Antarctique",habitatEmoji:"🧊",
    superpower:"Survit à -60°C en se blottissant en groupe. Plonge à 550 m de profondeur !",
    fact:"Le papa manchot incube l'œuf sur ses pattes pendant 2 mois sans manger.",
    color:"#000080",weight:"22-45 kg",origin:"Antarctique",
    diet:"Poissons, calmars, krill",
    social:"En colonie (milliers lors de la reproduction)",lifespan:"15-20 ans",
    image:"img/manchot-empereur.jpg"
  },
  {
    id:27,name:"Ours polaire",emoji:"🐻‍❄️",habitat:"Arctique",habitatEmoji:"🧊",
    superpower:"Nage jusqu'à 100 km sans s'arrêter. Sa fourrure est en réalité transparente !",
    fact:"L'ours polaire a une peau noire sous sa fourrure blanche pour absorber la chaleur du soleil.",
    color:"#F0F8FF",weight:"150-800 kg",origin:"Arctique — Canada, Russie, Norvège, Groenland, Alaska",
    diet:"Phoques (carnivore presque exclusif)",
    social:"Solitaire (sauf mère + petits)",lifespan:"25-30 ans (sauvage)",
    image:"img/ours-polaire.jpg"
  },
  {
    id:28,name:"Loup",emoji:"🐺",habitat:"Forêts & Toundra",habitatEmoji:"🌲",
    superpower:"Flair 100 000 fois supérieur à l'humain. Hurlement audible à 16 km.",
    fact:"Les loups sont monogames : ils choisissent un partenaire pour la vie.",
    color:"#808080",weight:"18-80 kg",origin:"Amérique du Nord, Europe, Asie",
    diet:"Cerfs, élans, caribous, bisons, lapins",
    social:"En meute (5-12, parfois 20)",lifespan:"6-8 ans (sauvage)",
    image:"img/loup.jpg"
  },
  {
    id:29,name:"Renard arctique",emoji:"🦊",habitat:"Arctique",habitatEmoji:"🧊",
    superpower:"Supporte -70°C grâce à sa fourrure aux propriétés isolantes uniques.",
    fact:"Sa fourrure change de couleur : blanche l'hiver, brune l'été.",
    color:"#FFFFFF",weight:"1,4-9 kg",origin:"Arctique circumpolaire",
    diet:"Lemmings, oiseaux, œufs, baies, charognes",
    social:"Solitaire ou en couple",lifespan:"3-6 ans (sauvage)",
    image:"img/renard-arctique.jpg"
  },
  {
    id:30,name:"Zèbre",emoji:"🦓",habitat:"Savane",habitatEmoji:"🌾",
    superpower:"Ses rayures déroutent les mouches tsé-tsé et créent une illusion d'optique pour les prédateurs.",
    fact:"Chaque zèbre a un motif de rayures unique, comme une empreinte digitale.",
    color:"#F5F5F5",weight:"200-450 kg",origin:"Afrique de l'Est et du Sud",
    diet:"Herbes, plantes, arbustes",
    social:"En harems + grandes migrations (milliers)",lifespan:"20-25 ans",
    image:"img/zebre.jpg"
  },
  {
    id:31,name:"Girafe",emoji:"🦒",habitat:"Savane",habitatEmoji:"🌾",
    superpower:"Son cœur énorme propulse le sang jusqu'à 2 m de haut jusqu'à son cerveau !",
    fact:"La girafe ne dort que 30 minutes par jour, par petites siestes de 5 minutes.",
    color:"#F4A460",weight:"700-1 200 kg",origin:"Afrique subsaharienne",
    diet:"Feuilles d'acacia, bourgeons, fleurs (100 kg/jour)",
    social:"En petits groupes variables (2-10)",lifespan:"20-25 ans",
    image:"img/girafe.jpg"
  },
  {
    id:32,name:"Rhinocéros",emoji:"🦏",habitat:"Savane & Forêt",habitatEmoji:"🌿",
    superpower:"Sa corne est faite de kératine (comme nos ongles) et repousse si elle est cassée.",
    fact:"Malgré son air solitaire, le rhinocéros est souvent accompagné d'oiseaux qui mangent ses parasites.",
    color:"#A0A0A0",weight:"1 000-3 600 kg",origin:"Afrique + Asie du Sud",
    diet:"Herbivore — herbes, feuilles, fruits, écorces",
    social:"Solitaire (sauf rhino blanc en petits groupes)",lifespan:"35-50 ans",
    image:"img/rhinoceros.jpg"
  },
  {
    id:33,name:"Hippopotame",emoji:"🦛",habitat:"Rivières d'Afrique",habitatEmoji:"💧",
    superpower:"Sa peau sécrète un liquide rose qui fait office de crème solaire et d'antibiotique !",
    fact:"L'hippopotame est l'un des animaux les plus dangereux d'Afrique malgré son apparence.",
    color:"#BC8F8F",weight:"1 500-3 200 kg",origin:"Afrique subsaharienne",
    diet:"Herbes (40 kg/nuit) — sort uniquement la nuit",
    social:"En groupe dans l'eau (10-30, parfois 100)",lifespan:"40-50 ans",
    image:"img/hippopotame.jpg"
  },
  {
    id:34,name:"Crocodile du Nil",emoji:"🐊",habitat:"Rivières d'Afrique",habitatEmoji:"💧",
    superpower:"Morsure la plus puissante de tous les animaux : 1 700 kg de pression !",
    fact:"Le crocodile 'pleure' quand il mange — non pas de tristesse, mais pour humidifier ses yeux.",
    color:"#556B2F",weight:"225-750 kg",origin:"Afrique subsaharienne + Madagascar",
    diet:"Poissons, gnous, zèbres, buffles, oiseaux",
    social:"Semi-social (nidification groupée, chasse solitaire)",lifespan:"70-100 ans",
    image:"img/crocodile-du-nil.jpg"
  },
  {
    id:35,name:"Jaguar",emoji:"🐆",habitat:"Forêt amazonienne",habitatEmoji:"🌳",
    superpower:"Morsure assez puissante pour percer un crâne. Excellent nageur et grimpeur.",
    fact:"Le jaguar est le seul grand félin d'Amérique. Il est sacré pour de nombreux peuples indigènes.",
    color:"#DAA520",weight:"56-96 kg",origin:"Mexique → Argentine (forêts + marécages)",
    diet:"Caïmans, cerfs, tapirs, capybaras, poissons",
    social:"Solitaire (territorial)",lifespan:"12-15 ans (sauvage)",
    image:"img/jaguar.jpg"
  },
  {
    id:36,name:"Léopard des neiges",emoji:"🐆",habitat:"Montagnes d'Asie",habitatEmoji:"⛰️",
    superpower:"Saute jusqu'à 15 mètres. Sa longue queue l'aide à s'équilibrer sur les rochers.",
    fact:"Surnommé 'fantôme des montagnes', il est si discret qu'on le voit rarement.",
    color:"#C0C0C0",weight:"22-55 kg",origin:"Asie centrale — Himalaya, Altaï (12 pays)",
    diet:"Bharals (moutons bleus), cerfs, lapins, marmottes",
    social:"Solitaire",lifespan:"10-12 ans (sauvage)",
    image:"img/leopard-des-neiges.jpg"
  },
  {
    id:37,name:"Tigre",emoji:"🐯",habitat:"Forêts d'Asie",habitatEmoji:"🌲",
    superpower:"Adore nager et peut parcourir 30 km par nuit à la recherche de nourriture.",
    fact:"Les rayures du tigre sont uniques, comme nos empreintes digitales.",
    color:"#FF8C00",weight:"100-310 kg",origin:"Asie — Inde, Russie (Sibérie), Asie du SE, Chine",
    diet:"Cerfs, sangliers, buffles, singes",
    social:"Solitaire (territoire de 20-400 km²)",lifespan:"10-15 ans (sauvage)",
    image:"img/tigre.jpg"
  },
  {
    id:38,name:"Panda géant",emoji:"🐼",habitat:"Forêts de bambou, Chine",habitatEmoji:"🎋",
    superpower:"Possède un faux pouce pour attraper le bambou — une adaptation évolutive unique !",
    fact:"Le panda passe 14 heures par jour à manger du bambou pour obtenir assez d'énergie.",
    color:"#000000",weight:"70-125 kg",origin:"Provinces du Sichuan, Shaanxi et Gansu (Chine)",
    diet:"99% bambou (12-38 kg/jour) + parfois œufs ou insectes",
    social:"Solitaire (sauf saison des amours)",lifespan:"14-20 ans (sauvage)",
    image:"img/panda-geant.jpg"
  },
  {
    id:39,name:"Koala",emoji:"🐨",habitat:"Australie",habitatEmoji:"🌿",
    superpower:"Digère l'eucalyptus toxique grâce à une bactérie spéciale dans son intestin.",
    fact:"Les empreintes digitales du koala sont identiques à celles de l'humain !",
    color:"#A9A9A9",weight:"4-15 kg",origin:"Est et sud-est de l'Australie",
    diet:"Feuilles d'eucalyptus (500 g/jour, parmi 700 espèces)",
    social:"Solitaire (réseau d'arbres personnel)",lifespan:"10-15 ans (sauvage)",
    image:"img/koala.jpg"
  },
  {
    id:40,name:"Kangourou roux",emoji:"🦘",habitat:"Australie",habitatEmoji:"🌿",
    superpower:"Saute jusqu'à 9 mètres en une seule foulée et court à 60 km/h !",
    fact:"Un bébé kangourou (joey) est grand comme un grain de raisin à la naissance.",
    color:"#CD853F",weight:"18-92 kg",origin:"Australie (zones arides et semi-arides)",
    diet:"Herbes, plantes, feuilles",
    social:"En mob (10-100 individus)",lifespan:"8-12 ans (sauvage)",
    image:"img/kangourou-roux.jpg"
  },
  {
    id:41,name:"Narval",emoji:"🦄",habitat:"Arctique",habitatEmoji:"🧊",
    superpower:"Sa corne est une dent avec 10 millions de terminaisons nerveuses pour détecter son environnement.",
    fact:"Le narval est surnommé 'la licorne des mers'. Sa corne peut mesurer 3 mètres !",
    color:"#87CEEB",weight:"800-1 600 kg",origin:"Arctique canadien, Groenland, Russie",
    diet:"Calmars, poissons arctiques (flétan, morue), crevettes",
    social:"En groupes de 10-20, milliers en migration",lifespan:"50+ ans",
    image:"img/narval.jpg"
  },
  {
    id:42,name:"Orque",emoji:"🐋",habitat:"Tous les océans",habitatEmoji:"🌊",
    superpower:"Intelligence sociale exceptionnelle : chaque groupe a sa propre 'culture' et dialecte.",
    fact:"L'orque n'est pas un requin mais le plus grand dauphin du monde !",
    color:"#000080",weight:"2 700-5 400 kg",origin:"Tous les océans du monde",
    diet:"Poissons, pingouins, phoques, raies, baleines",
    social:"En pod matrilinéaire (5-30) — structure stable à vie",lifespan:"50-80 ans (femelle)",
    image:"img/orque.jpg"
  },
  {
    id:43,name:"Mante religieuse",emoji:"🦗",habitat:"Prairies & Forêts",habitatEmoji:"🌿",
    superpower:"Seul insecte capable de voir en 3D. Réflexes foudroyants : frappe en 50 millisecondes !",
    fact:"La mante religieuse peut tourner la tête à 180° pour surveiller ses proies.",
    color:"#228B22",weight:"1,5-5 g",origin:"Monde entier (régions tropicales et tempérées)",
    diet:"Insectes, papillons, petites grenouilles, libellules",
    social:"Solitaire (la femelle mange le mâle après l'accouplement)",lifespan:"6-12 mois",
    image:"img/mante-religieuse.jpg"
  },
  {
    id:44,name:"Luciole",emoji:"✨",habitat:"Prairies & Forêts",habitatEmoji:"🌿",
    superpower:"Produit de la lumière froide avec 100% d'efficacité — aucune chaleur perdue !",
    fact:"Chaque espèce de luciole a son propre code lumineux pour se reconnaître.",
    color:"#FFFF00",weight:"10-25 mg",origin:"Monde entier sauf régions polaires",
    diet:"Larve : escargots et vers. Adulte : nectar ou rien",
    social:"Solitaire (synchronisation lumineuse collective)",lifespan:"Larve 1-2 ans — Adulte 3 semaines",
    image:"img/luciole.jpg"
  },
  {
    id:45,name:"Papillon Monarque",emoji:"🦋",habitat:"Amérique du Nord",habitatEmoji:"🌺",
    superpower:"Migration de 4 000 km sans carte ni GPS, guidé par le champ magnétique terrestre.",
    fact:"Le papillon goûte avec ses pattes pour savoir si une feuille est comestible.",
    color:"#FF8C00",weight:"0,27-0,75 g",origin:"Amérique du Nord",
    diet:"Nectar (adulte) + milkweed/asclépiade (chenille)",
    social:"En milliards pendant la migration",lifespan:"2-6 semaines (été) ou 8 mois (migrateurs)",
    image:"img/papillon-monarque.jpg"
  },
  {
    id:46,name:"Abeille domestique",emoji:"🐝",habitat:"Prairies",habitatEmoji:"🌸",
    superpower:"Danse pour indiquer à ses congénères la direction exacte des fleurs à des km !",
    fact:"Une abeille produit une cuillère à café de miel dans toute sa vie.",
    color:"#FFD700",weight:"80-100 mg",origin:"Afrique + Europe + Asie occidentale (introduite partout)",
    diet:"Nectar, pollen, propolis",
    social:"En colonie structurée (50 000-80 000)",lifespan:"Reine 2-5 ans — Ouvrière 6 semaines"
  },
  {
    id:47,name:"Flamant rose",emoji:"🦩",habitat:"Zones humides",habitatEmoji:"💧",
    superpower:"Filtre l'eau avec son bec à l'envers comme un tamis pour attraper les algues.",
    fact:"Le flamant est blanc à la naissance. Son rose vient des pigments des algues qu'il mange.",
    color:"#FF69B4",weight:"2-4 kg",origin:"Méditerranée, Afrique, Asie du Sud, Caraïbes",
    diet:"Algues, crevettes, larves, mollusques (filtration)",
    social:"En grandes colonies (parfois 1 million !)",lifespan:"20-30 ans (sauvage)"
  },
  {
    id:48,name:"Autruche",emoji:"🦤",habitat:"Savane",habitatEmoji:"🌾",
    superpower:"L'oiseau le plus rapide à la course : 70 km/h. Pond le plus gros œuf du monde.",
    fact:"L'autruche a les yeux plus gros que son cerveau !",
    color:"#8B4513",weight:"63-145 kg",origin:"Afrique subsaharienne (savane + désert)",
    diet:"Graines, plantes, racines, insectes, lézards",
    social:"En groupes (5-50)",lifespan:"30-40 ans"
  },
  {
    id:49,name:"Perroquet Ara",emoji:"🦜",habitat:"Forêt amazonienne",habitatEmoji:"🌳",
    superpower:"Imite les sons avec une précision parfaite et comprend des centaines de mots.",
    fact:"L'ara vit jusqu'à 80 ans — autant qu'un être humain !",
    color:"#FF0000",weight:"900-1 700 g",origin:"Mexique → Amazonie",
    diet:"Fruits, noix, graines, fleurs, argile (pour les minéraux)",
    social:"En couple + petits groupes (10-30)",lifespan:"40-80 ans"
  },
  {
    id:50,name:"Paon",emoji:"🦚",habitat:"Asie du Sud",habitatEmoji:"🌿",
    superpower:"Sa queue contient des 'yeux' qui créent une illusion pour impressionner les femelles.",
    fact:"Le paon peut afficher jusqu'à 200 plumes dans sa roue, chacune avec un œil.",
    color:"#008080",weight:"4-6 kg",origin:"Inde, Sri Lanka (introduit partout)",
    diet:"Graines, insectes, baies, petits reptiles, grenouilles",
    social:"En harem (1 mâle + 3-5 femelles)",lifespan:"15-20 ans"
  },
  {
    id:51,name:"Dragon de Komodo",emoji:"🦎",habitat:"Indonésie",habitatEmoji:"🏝️",
    superpower:"Sa salive contient des bactéries mortelles et du venin qui empêche le sang de coaguler.",
    fact:"La femelle komodo peut se reproduire sans mâle par parthénogenèse !",
    color:"#808000",weight:"70-90 kg",origin:"Îles de Komodo, Rinca, Flores (Indonésie)",
    diet:"Cerfs, buffles, chèvres, cochons sauvages, charognes",
    social:"Solitaire (cannibale à l'occasion)",lifespan:"30 ans"
  },
  {
    id:52,name:"Anaconda vert",emoji:"🐍",habitat:"Amazonie",habitatEmoji:"🌳",
    superpower:"Le plus lourd serpent du monde : 250 kg ! Peut rester sous l'eau 10 minutes.",
    fact:"L'anaconda n'est pas venimeux — il tue en étouffant ses proies.",
    color:"#2E8B57",weight:"30-250 kg",origin:"Amazonie, Orénoque, Guyanes",
    diet:"Caïmans, capybaras, cerfs, pécaris, oiseaux",
    social:"Solitaire",lifespan:"10-30 ans"
  },
  {
    id:53,name:"Cobra royal",emoji:"🐍",habitat:"Asie du Sud-Est",habitatEmoji:"🌴",
    superpower:"Le plus long serpent venimeux du monde (5,4 m). Son venin tue un éléphant en 3 heures.",
    fact:"Le cobra royal est le seul serpent à construire un nid pour ses œufs.",
    color:"#8B6914",weight:"6-9 kg",origin:"Inde, Asie du Sud-Est, Philippines",
    diet:"Serpents (90% de son régime !), lézards, petits mammifères",
    social:"Solitaire (couple en saison)",lifespan:"20 ans"
  },
  {
    id:54,name:"Cœlacanthe",emoji:"🐟",habitat:"Océan profond",habitatEmoji:"🌑",
    superpower:"Fossile vivant : espèce supposée éteinte depuis 65 millions d'ans, retrouvée en 1938 !",
    fact:"Le cœlacanthe utilise ses nageoires comme des pattes pour marcher sur le fond marin.",
    color:"#4B0082",weight:"80 kg",origin:"Comores, Afrique du Sud, Indonésie (2 populations distinctes)",
    diet:"Poissons, céphalopodes, méduses",
    social:"Petits groupes dans les grottes",lifespan:"60+ ans"
  },
  {
    id:55,name:"Requin baleine",emoji:"🦈",habitat:"Océan tropical",habitatEmoji:"🌊",
    superpower:"Le plus grand poisson du monde (20 m) mais ne mange que du plancton microscopique.",
    fact:"Le requin baleine a des dents sur ses yeux pour les protéger !",
    color:"#1C6BA0",weight:"18-22 tonnes",origin:"Océans tropicaux et subtropicaux mondiaux",
    diet:"Plancton, krill, petits poissons, œufs de poissons",
    social:"Solitaire (rassemblements saisonniers)",lifespan:"70-130 ans"
  },
  {
    id:56,name:"Raie manta",emoji:"🐟",habitat:"Océan tropical",habitatEmoji:"🌊",
    superpower:"Le plus grand cerveau de tous les poissons — capable de se reconnaître dans un miroir.",
    fact:"La raie manta saute hors de l'eau et retombe avec un bruit de claque pour communiquer.",
    color:"#2F4F4F",weight:"1-2 tonnes",origin:"Océans tropicaux et subtropicaux mondiaux",
    diet:"Zooplancton, krill, petits poissons",
    social:"Solitaire ou en groupes lâches",lifespan:"40+ ans"
  },
  {
    id:57,name:"Hippocampe",emoji:"🐠",habitat:"Océan",habitatEmoji:"🌊",
    superpower:"C'est le mâle qui porte les bébés et accouche ! Jusqu'à 2 000 petits à la fois.",
    fact:"L'hippocampe se déplace en position verticale — unique chez les poissons.",
    color:"#FFD700",weight:"1-150 g",origin:"Eaux côtières tropicales et tempérées mondiales",
    diet:"Crevettes mysidacées, copépodes, larves de poissons",
    social:"En couple fidèle",lifespan:"1-5 ans"
  },
  {
    id:58,name:"Poisson-globe",emoji:"🐡",habitat:"Océan tropical",habitatEmoji:"🌊",
    superpower:"Se gonfle comme un ballon en quelques secondes et contient un poison 1 200 fois plus puissant que le cyanure.",
    fact:"Au Japon, le poisson-globe (fugu) se mange — préparé par un chef certifié !",
    color:"#FFA500",weight:"0,5-10 kg",origin:"Océans tropicaux et subtropicaux mondiaux",
    diet:"Coquillages, oursins, crabes, algues",
    social:"Solitaire",lifespan:"5-10 ans"
  },
  {
    id:59,name:"Pieuvre mimique",emoji:"🐙",habitat:"Océan Indo-Pacifique",habitatEmoji:"🌊",
    superpower:"Imite la forme et le comportement d'autres animaux : lionfish, raie, serpent marin...",
    fact:"La pieuvre mimique est considérée comme l'animal le plus intelligent de l'océan.",
    color:"#8B4513",weight:"300-600 g",origin:"Eaux peu profondes d'Asie du SE (Indonésie, Philippines)",
    diet:"Poissons, crabes, vers, crevettes",
    social:"Solitaire",lifespan:"9-15 mois"
  },
  {
    id:60,name:"Crabe de cocotier",emoji:"🦀",habitat:"Îles du Pacifique",habitatEmoji:"🏝️",
    superpower:"La pince la plus puissante de tous les crustacés : écrase une noix de coco !",
    fact:"Le crabe de cocotier peut grimper aux palmiers et vivre 40 ans.",
    color:"#FF6347",weight:"1-4 kg",origin:"Îles du Pacifique et de l'Océan Indien",
    diet:"Noix de coco, fruits, charognes, oiseaux (parfois !)",
    social:"Solitaire (nocturne)",lifespan:"40-60 ans"
  },
  {
    id:61,name:"Scorpion",emoji:"🦂",habitat:"Désert",habitatEmoji:"🏜️",
    superpower:"Brille sous la lumière ultraviolette ! Survit un an sans manger.",
    fact:"Le scorpion est l'un des animaux les plus anciens : ses ancêtres vivaient il y a 430 millions d'ans.",
    color:"#DAA520",weight:"10-60 g",origin:"Tous les continents sauf Antarctique",
    diet:"Insectes, araignées, petits rongeurs, lézards",
    social:"Solitaire",lifespan:"4-25 ans"
  },
  {
    id:62,name:"Libellule",emoji:"🪲",habitat:"Zones humides",habitatEmoji:"💧",
    superpower:"Chasseresse la plus efficace de la nature : capture 95% de ses proies en vol !",
    fact:"La libellule existait avant les dinosaures. À l'époque, elle avait 70 cm d'envergure !",
    color:"#00CED1",weight:"0,3-3 g",origin:"Monde entier sauf Antarctique",
    diet:"Moustiques, mouches, papillons, abeilles en vol",
    social:"Solitaire (territorial)",lifespan:"Larve 1-4 ans — Adulte quelques semaines"
  },
  {
    id:63,name:"Fourmi coupeuse de feuilles",emoji:"🐜",habitat:"Forêt tropicale",habitatEmoji:"🌴",
    superpower:"Fait pousser des champignons dans sa colonie — elle pratique l'agriculture depuis 50 millions d'ans !",
    fact:"Sa colonie peut compter 8 millions d'individus avec des rôles précis comme une ville.",
    color:"#8B4513",weight:"1-2 mg",origin:"Amérique centrale + du Sud",
    diet:"Champignons cultivés sur les feuilles découpées",
    social:"En colonie géante (1-8 millions + reine)",lifespan:"Reine 20 ans — Ouvrière 1-2 mois"
  },
  {
    id:64,name:"Termite",emoji:"🪲",habitat:"Savane & Forêt",habitatEmoji:"🌿",
    superpower:"Construit des termitières de 8 m avec climatisation naturelle parfaite à 30°C.",
    fact:"Les termites digèrent le bois grâce à des micro-organismes dans leur intestin.",
    color:"#D2691E",weight:"1-50 mg",origin:"Zones tropicales et subtropicales mondiales",
    diet:"Bois, cellulose, champignons, détritus",
    social:"En colonie (jusqu'à 3 millions + roi + reine)",lifespan:"Reine 50 ans ! — Ouvrière 1-2 ans"
  },
  {
    id:65,name:"Martin-pêcheur",emoji:"🐦",habitat:"Rivières",habitatEmoji:"💧",
    superpower:"Plonge à 40 km/h sans faire d'éclaboussure. Son bec a inspiré le design du Shinkansen !",
    fact:"Le martin-pêcheur est si rapide qu'on voit souvent juste un éclair bleu.",
    color:"#4169E1",weight:"34-46 g",origin:"Europe, Asie, Afrique du Nord",
    diet:"Poissons, insectes aquatiques, crevettes d'eau douce",
    social:"Solitaire (couple pour nidifier)",lifespan:"5-7 ans"
  },
  {
    id:66,name:"Manchot des Galápagos",emoji:"🐧",habitat:"Îles Galápagos",habitatEmoji:"🏝️",
    superpower:"Seul manchot vivant sous l'équateur, il 'vole' sous l'eau à 35 km/h.",
    fact:"C'est le manchot le plus rare au monde, avec seulement 1 200 individus.",
    color:"#000000",weight:"2-2,5 kg",origin:"Îles Galápagos (Équateur)",
    diet:"Petits poissons (mullets, sardines, anchois)",
    social:"En petits groupes + couples stables",lifespan:"15-20 ans"
  },
  {
    id:67,name:"Iguane marin",emoji:"🦎",habitat:"Îles Galápagos",habitatEmoji:"🏝️",
    superpower:"Seul lézard marin du monde. Plonge à 30 m et retient son souffle 30 minutes.",
    fact:"Pour éliminer le sel de l'eau de mer, il l'éternue par le nez comme un spray !",
    color:"#4A4A4A",weight:"0,5-13 kg",origin:"Îles Galápagos (Équateur)",
    diet:"Algues marines (plonge jusqu'à 30 m pour les cueillir)",
    social:"En grands groupes (thermorégulation collective)",lifespan:"25-30 ans"
  },
  {
    id:68,name:"Fennec",emoji:"🦊",habitat:"Désert du Sahara",habitatEmoji:"🏜️",
    superpower:"Ses oreilles géantes captent les sons de proies sous le sable et dissipent la chaleur.",
    fact:"Le fennec peut passer toute sa vie sans boire — il tire l'eau de sa nourriture.",
    color:"#F5DEB3",weight:"0,7-1,6 kg",origin:"Sahara + péninsule arabique",
    diet:"Insectes, lézards, œufs, petits rongeurs, fruits",
    social:"En groupes familiaux (jusqu'à 10)",lifespan:"10-14 ans"
  },
  {
    id:69,name:"Diable de Tasmanie",emoji:"🐾",habitat:"Tasmanie",habitatEmoji:"🌿",
    superpower:"Mâchoire la plus puissante proportionnellement à sa taille parmi les mammifères.",
    fact:"Il pousse des cris si stridents et effrayants que les premiers colons croyaient au diable.",
    color:"#8B0000",weight:"4-14 kg",origin:"Tasmanie (Australie)",
    diet:"Charognes, wombats, wallabys, serpents, oiseaux",
    social:"Solitaire (nocturne)",lifespan:"5-6 ans (sauvage)"
  },
  {
    id:70,name:"Vautour",emoji:"🦅",habitat:"Savane & Montagnes",habitatEmoji:"⛰️",
    superpower:"Son estomac est assez acide pour digérer des bactéries comme l'anthrax et le choléra !",
    fact:"Le vautour peut planer des heures sans battre des ailes grâce aux courants chauds.",
    color:"#696969",weight:"4-12 kg",origin:"Afrique, Asie, Europe, Amériques",
    diet:"Charognes exclusivement (nettoyeur de la nature)",
    social:"En groupes sur les carcasses (parfois des centaines)",lifespan:"20-30 ans"
  },
  {
    id:71,name:"Manchot Adélie",emoji:"🐧",habitat:"Antarctique",habitatEmoji:"🧊",
    superpower:"Nage à 30 km/h et 'vole' hors de l'eau pour atterrir directement sur la glace.",
    fact:"Le manchot Adélie offre des cailloux à son amoureux pour construire le nid.",
    color:"#2F4F4F",weight:"3,6-6 kg",origin:"Antarctique et îles sub-antarctiques",
    diet:"Krill, poissons, calmars",
    social:"En colonie (jusqu'à 500 000 couples !)",lifespan:"11-20 ans"
  },
  {
    id:72,name:"Poulpe géant du Pacifique",emoji:"🐙",habitat:"Océan Pacifique",habitatEmoji:"🌊",
    superpower:"Ouvre des bocaux, résout des labyrinthes et reconnaît les visages humains.",
    fact:"La plus grande pieuvre du monde : envergure jusqu'à 9 mètres !",
    color:"#DC143C",weight:"15-70 kg",origin:"Pacifique Nord — Alaska, Canada, Japon",
    diet:"Crabes royaux, homards, crevettes, petits requins",
    social:"Solitaire",lifespan:"3-5 ans"
  },
  {
    id:73,name:"Pangolin",emoji:"🦔",habitat:"Afrique & Asie",habitatEmoji:"🌿",
    superpower:"Seul mammifère recouvert d'écailles. Se roule en boule parfaite contre les prédateurs.",
    fact:"Le pangolin mange 70 millions de fourmis par an. Sa langue est plus longue que son corps !",
    color:"#8B7355",weight:"1,8-33 kg",origin:"Afrique subsaharienne + Asie du Sud et du SE",
    diet:"Fourmis, termites (70 millions par an !), larves",
    social:"Solitaire (nocturne)",lifespan:"20+ ans"
  },
  {
    id:74,name:"Okapi",emoji:"🦌",habitat:"Forêt du Congo",habitatEmoji:"🌿",
    superpower:"Animal mystérieux découvert par la science seulement en 1901 ! Parent de la girafe.",
    fact:"L'okapi peut se lécher les oreilles et les yeux avec sa langue de 45 cm !",
    color:"#8B4513",weight:"200-350 kg",origin:"Forêt tropicale du Congo (RDC)",
    diet:"Feuilles, bourgeons, fruits, champignons, argile (minéraux)",
    social:"Solitaire (sauf mère + petit)",lifespan:"20-30 ans"
  },
  {
    id:75,name:"Aye-aye",emoji:"🐒",habitat:"Madagascar",habitatEmoji:"🌴",
    superpower:"Doigt du milieu ultra-fin pour extraire les larves du bois — comme une fourchette magique !",
    fact:"L'aye-aye est considéré comme un mauvais présage à Madagascar.",
    color:"#8B7355",weight:"1-2,7 kg",origin:"Madagascar (côtes est, forêts humides)",
    diet:"Larves de coléoptères, noix, fruits, champignons, nectar",
    social:"Solitaire (nocturne)",lifespan:"20-23 ans"
  },
  {
    id:76,name:"Tatou géant",emoji:"🦔",habitat:"Amazonie",habitatEmoji:"🌳",
    superpower:"Carapace osseuse articulée qui résiste aux dents des prédateurs.",
    fact:"Le tatou est le seul mammifère à avoir une vraie armure osseuse !",
    color:"#A0A0A0",weight:"18-32 kg",origin:"Amazonie (Venezuela → Brésil → Argentine)",
    diet:"Fourmis, termites, vers, larves, serpents",
    social:"Solitaire",lifespan:"25-30 ans"
  },
  {
    id:77,name:"Fourmilier géant",emoji:"🐾",habitat:"Amérique du Sud",habitatEmoji:"🌳",
    superpower:"Langue de 60 cm, collante et rapide : 150 coups de langue par minute dans les fourmilières.",
    fact:"Le fourmilier n'a pas de dents — il avale les fourmis entières et les broie dans son estomac.",
    color:"#8B4513",weight:"29-65 kg",origin:"Amérique centrale et du Sud (savane + forêt)",
    diet:"35 000 fourmis et termites par jour !",
    social:"Solitaire",lifespan:"14-16 ans (sauvage)"
  },
  {
    id:78,name:"Coucou gris",emoji:"🐦",habitat:"Europe & Asie",habitatEmoji:"🌲",
    superpower:"Parasite de nid : pond ses œufs chez d'autres oiseaux qui élèvent ses poussins à sa place !",
    fact:"Le poussin coucou, aveugle et nu, pousse les vrais œufs hors du nid dès sa naissance.",
    color:"#808080",weight:"105-130 g",origin:"Europe + Asie (hiverne en Afrique subsaharienne)",
    diet:"Chenilles velues (que les autres oiseaux évitent !) + insectes",
    social:"Solitaire (parasite de nid)",lifespan:"6-12 ans"
  },
  {
    id:79,name:"Lézard à collerette",emoji:"🦎",habitat:"Australie",habitatEmoji:"🌿",
    superpower:"Déploie une collerette spectaculaire pour terroriser ses ennemis et court sur ses deux pattes !",
    fact:"Sa collerette peut mesurer 25 cm — presque aussi large que son corps.",
    color:"#8B6914",weight:"0,5-1 kg",origin:"Australie du Nord + Nouvelle-Guinée",
    diet:"Insectes, araignées, petits lézards, petits mammifères",
    social:"Solitaire",lifespan:"10-20 ans"
  },
  {
    id:80,name:"Bison d'Amérique",emoji:"🐃",habitat:"Prairies d'Amérique du Nord",habitatEmoji:"🌾",
    superpower:"Charge à 65 km/h malgré 900 kg. Peut déneiger avec son énorme tête.",
    fact:"Au XIXe siècle, on comptait 60 millions de bisons. On les a réduits à 500 avant de les sauver.",
    color:"#8B4513",weight:"350-1 000 kg",origin:"Amérique du Nord (prairies des Grandes Plaines)",
    diet:"Herbes, plantes, lichens (20 kg/jour)",
    social:"En hardes (de quelques-uns à milliers en migration)",lifespan:"12-20 ans (sauvage)"
  },
  {
    id:81,name:"Chameau",emoji:"🐪",habitat:"Désert",habitatEmoji:"🏜️",
    superpower:"Survit 2 semaines sans boire, puis ingère 200 litres d'eau en 15 minutes !",
    fact:"Sa bosse stocke de la graisse, pas de l'eau. Elle s'affaisse quand il jeûne.",
    color:"#D2B48C",weight:"300-700 kg",origin:"Asie centrale (Bactriane) + péninsule arabique (dromadaire)",
    diet:"Plantes épineuses, herbes sèches, sel — très peu d'eau",
    social:"En groupe (caravanes de 10-30)",lifespan:"40-50 ans"
  },
  {
    id:82,name:"Tapir",emoji:"🐾",habitat:"Forêt tropicale",habitatEmoji:"🌴",
    superpower:"Son petit groin préhensile attrape les branches comme une main.",
    fact:"Le tapir est un fossile vivant : il n'a presque pas changé depuis 35 millions d'ans.",
    color:"#8B4513",weight:"150-320 kg",origin:"Amérique centrale + du Sud + Asie du SE (Malaisie)",
    diet:"Feuilles, fruits, herbes, plantes aquatiques",
    social:"Solitaire (sauf mère + petit)",lifespan:"25-35 ans"
  },
  {
    id:83,name:"Capybara",emoji:"🐾",habitat:"Amérique du Sud",habitatEmoji:"💧",
    superpower:"Le plus gros rongeur du monde (65 kg) et il s'entend avec absolument tous les animaux !",
    fact:"Le capybara est tellement détendu que les oiseaux se posent sur lui pour manger ses parasites.",
    color:"#D2B48C",weight:"35-66 kg",origin:"Amérique du Sud (bords des fleuves et lacs)",
    diet:"Herbes aquatiques, écorces, fruits, céréales",
    social:"En groupes de 10-20 (jusqu'à 100)",lifespan:"8-10 ans (sauvage)"
  },
  {
    id:84,name:"Suricate",emoji:"🐾",habitat:"Désert du Kalahari",habitatEmoji:"🏜️",
    superpower:"Sentinelle parfaite : différents cris d'alarme selon le type de prédateur (aigle, serpent, lion...).",
    fact:"Les suricates sont immunisés contre le venin du scorpion et du cobra.",
    color:"#D2B48C",weight:"620-970 g",origin:"Afrique du Sud, Botswana, Namibie, Zimbabwe",
    diet:"Insectes, scorpions, serpents, lézards, racines",
    social:"En meute (20-30 individus, chef dominant)",lifespan:"12-14 ans"
  },
  {
    id:85,name:"Araignée sauteuse",emoji:"🕷️",habitat:"Partout",habitatEmoji:"🌍",
    superpower:"Saute 50 fois sa longueur et possède 4 paires d'yeux avec vision quasi-360°.",
    fact:"L'araignée sauteuse est curieuse et n'a pas peur des humains — elle vous regarde dans les yeux !",
    color:"#4A4A4A",weight:"1-300 mg",origin:"Partout dans le monde (sauf pôles)",
    diet:"Insectes, araignées, petits lézards, nectar",
    social:"Solitaire",lifespan:"1-3 ans"
  },
  {
    id:86,name:"Requin fantôme",emoji:"🦈",habitat:"Océan profond",habitatEmoji:"🌑",
    superpower:"Transparent dans le noir, il produit sa propre lumière par bioluminescence.",
    fact:"Le requin fantôme est plus proche des raies que des vrais requins.",
    color:"#E8E8E8",weight:"1-2,6 kg",origin:"Profondeurs océaniques mondiales",
    diet:"Poissons, céphalopodes, crustacés",
    social:"Solitaire",lifespan:"20-30 ans"
  },
  {
    id:87,name:"Anguille électrique",emoji:"🐍",habitat:"Amazonie",habitatEmoji:"💧",
    superpower:"Génère des décharges électriques de 860 volts — assez pour assommer un cheval !",
    fact:"L'anguille électrique respire à la surface : elle mourrait si elle ne venait pas chercher de l'air.",
    color:"#808080",weight:"10-20 kg",origin:"Amazonie et Orénoque (Amérique du Sud)",
    diet:"Poissons, grenouilles, petits mammifères",
    social:"Solitaire",lifespan:"10-22 ans"
  },
  {
    id:88,name:"Poisson-archer",emoji:"🐟",habitat:"Mangroves d'Asie",habitatEmoji:"🌴",
    superpower:"Crache un jet d'eau précis jusqu'à 3 mètres pour faire tomber les insectes des branches.",
    fact:"Il compense la réfraction de l'eau pour viser avec une précision parfaite.",
    color:"#32CD32",weight:"150-300 g",origin:"Mangroves d'Asie du SE, Australie du Nord, Pacifique",
    diet:"Insectes et araignées en surface (tir à l'eau)",
    social:"Petits groupes (2-10)",lifespan:"5-10 ans"
  },
  {
    id:89,name:"Saumon",emoji:"🐟",habitat:"Océan & Rivières",habitatEmoji:"💧",
    superpower:"Remonte le fleuve de sa naissance grâce à son flair exceptionnel, parfois 1 000 km !",
    fact:"Le saumon naît en eau douce, vit en mer et revient mourir dans la rivière où il est né.",
    color:"#FA8072",weight:"2-46 kg",origin:"Atlantique Nord + Pacifique Nord",
    diet:"Crevettes, insectes, petits poissons (en mer)",
    social:"Solitaire (migration collective)",lifespan:"3-7 ans"
  },
  {
    id:90,name:"Albatros hurleur",emoji:"🐦",habitat:"Océan austral",habitatEmoji:"🌊",
    superpower:"Envergure de 3,5 m — le plus grand oiseau volant. Peut voler 120 000 km par an sans effort.",
    fact:"L'albatros dort en vol grâce à un système qui lui permet de couper la moitié de son cerveau.",
    color:"#FFFFFF",weight:"6-12 kg",origin:"Océan austral, îles sub-antarctiques",
    diet:"Calmars, poissons, crustacés, charognes marines",
    social:"Solitaire (couple fidèle à vie)",lifespan:"40-60 ans"
  },
  {
    id:91,name:"Dodo",emoji:"🦤",habitat:"Maurice (disparu)",habitatEmoji:"🏝️",
    superpower:"Sa disparition nous a appris l'importance de protéger les espèces. Son histoire a changé la science.",
    fact:"Le dodo s'est éteint en moins de 100 ans après l'arrivée des humains à Maurice.",
    color:"#8B7355",weight:"10-21 kg",origin:"Île Maurice (océan Indien) — disparu vers 1693",
    diet:"Fruits, noix, graines, bulbes",
    social:"En petits groupes",lifespan:"Inconnue"
  },
  {
    id:92,name:"Chimpanzé",emoji:"🐒",habitat:"Forêts d'Afrique centrale",habitatEmoji:"🌿",
    superpower:"Utilise plus de 20 types d'outils, transmet des cultures entre groupes et apprend la langue des signes.",
    fact:"Le chimpanzé partage 98,7% de son ADN avec l'humain. Il se reconnaît dans un miroir.",
    color:"#4A4A4A",weight:"26-70 kg",origin:"Afrique centrale et occidentale",
    diet:"Fruits (60%), feuilles, insectes, viande (chasse collective)",
    social:"En communauté (15-150)",lifespan:"40-60 ans"
  },
  {
    id:93,name:"Guépard",emoji:"🐆",habitat:"Savane africaine",habitatEmoji:"🌾",
    superpower:"0 à 100 km/h en 3 secondes — l'animal terrestre le plus rapide (112 km/h) !",
    fact:"Le guépard ronronne comme un chat. Il ne peut pas rugir — c'est le seul grand félin dans ce cas.",
    color:"#DAA520",weight:"21-72 kg",origin:"Afrique subsaharienne + Iran (population relique)",
    diet:"Gazelles, impalas, lièvres, oiseaux au sol",
    social:"Solitaire (coalitions de frères possible)",lifespan:"8-12 ans (sauvage)"
  },
  {
    id:94,name:"Lamantin",emoji:"🐄",habitat:"Eaux côtières tropicales",habitatEmoji:"💧",
    superpower:"Renouvelle ses molaires continuellement : les anciennes tombent, de nouvelles poussent à l'arrière.",
    fact:"Le lamantin est le cousin de l'éléphant. Sa nageoire contient des 'doigts' visibles aux rayons X.",
    color:"#A0A0A0",weight:"400-590 kg",origin:"Caraïbes, côtes atlantiques d'Amérique et d'Afrique",
    diet:"Plantes aquatiques et algues (60 kg/jour)",
    social:"Solitaire ou petits groupes informels",lifespan:"40-60 ans"
  },
  {
    id:95,name:"Éléphant de mer",emoji:"🦭",habitat:"Côtes antarctiques & Pacifique",habitatEmoji:"🧊",
    superpower:"Plonge à 2 000 m pendant 2 heures ! Dort sous l'eau en spirale descendante.",
    fact:"Le mâle peut peser 2,5 tonnes — le plus grand carnivore semi-aquatique du monde.",
    color:"#A0A0A0",weight:"400-2 500 kg",origin:"Antarctique + côtes du Pacifique (Californie, Patagonie)",
    diet:"Calmars, poissons, petits requins, raies",
    social:"Solitaire en mer — colonie dense pour se reproduire",lifespan:"20-25 ans"
  },
  {
    id:96,name:"Faucon pèlerin",emoji:"🦅",habitat:"Monde entier (villes & falaises)",habitatEmoji:"🏙️",
    superpower:"L'animal le plus rapide du monde : plonge à 389 km/h ! Il chasse même en ville.",
    fact:"Son œil possède deux fovéas — il peut regarder devant ET sur le côté simultanément.",
    color:"#696969",weight:"0,3-1,5 kg",origin:"Tous les continents sauf Antarctique (villes + falaises)",
    diet:"Oiseaux en vol (pigeons, étourneaux, grives)",
    social:"Solitaire (couple stable)",lifespan:"15-20 ans"
  },
  {
    id:97,name:"Wombat",emoji:"🐾",habitat:"Australie",habitatEmoji:"🌿",
    superpower:"Seul animal dont les excréments sont cubiques ! Il marque son territoire sans que ça roule.",
    fact:"Son crâne très épais bloque l'entrée du terrier — ses fesses cuirassées repoussent les prédateurs.",
    color:"#8B7355",weight:"17-35 kg",origin:"Australie du Sud-Est + Tasmanie",
    diet:"Herbes, racines, écorces, champignons",
    social:"Solitaire (réseau de terriers)",lifespan:"5-30 ans"
  },
  {
    id:98,name:"Murène",emoji:"🐍",habitat:"Récifs coralliens",habitatEmoji:"🪸",
    superpower:"Possède une deuxième mâchoire dans la gorge qui attrape les proies après la première morsure !",
    fact:"La murène coopère parfois avec le mérou pour chasser — chacun bloque une sortie.",
    color:"#556B2F",weight:"1-30 kg",origin:"Récifs coralliens mondiaux (tropicaux et tempérés chauds)",
    diet:"Poissons, poulpes, crevettes, oursins",
    social:"Solitaire (cavernicole)",lifespan:"10-30 ans"
  },
  {
    id:99,name:"Loutre de mer",emoji:"🦦",habitat:"Côtes du Pacifique Nord",habitatEmoji:"🌊",
    superpower:"Utilise des pierres comme outils pour briser les coquillages. Dort en tenant la main de son partenaire !",
    fact:"Sa fourrure est la plus dense du règne animal : 1 million de poils/cm². Aucune graisse de protection.",
    color:"#8B4513",weight:"14-45 kg",origin:"Côtes du Pacifique Nord (Alaska, Californie, Japon)",
    diet:"Oursins, palourdes, moules, crabes, calmars",
    social:"En radeaux (groupes de 10 à 1 000 !)",lifespan:"15-23 ans"
  },
  {
    id:100,name:"Poisson-lune",emoji:"🐡",habitat:"Océan tropical & tempéré",habitatEmoji:"🌊",
    superpower:"Le poisson le plus lourd du monde (2 300 kg) et pond jusqu'à 300 millions d'œufs — record animal !",
    fact:"Il se réchauffe en surface après avoir plongé dans les eaux froides. Des oiseaux le nettoient de ses parasites.",
    color:"#C0C0C0",weight:"247-2 300 kg",origin:"Océans tropicaux et tempérés mondiaux",
    diet:"Méduses, zooplancton, mollusques, petits poissons",
    social:"Solitaire",lifespan:"8-10 ans"
  },
  {
    id:101,name:"Siphonophore",emoji:"🪼",habitat:"Océan profond",habitatEmoji:"🌑",
    superpower:"La plus longue créature vivante (50 m) — mais ce n'est pas un seul animal : c'est une colonie !",
    fact:"Chaque 'individu' d'un siphonophore est spécialisé : certains nagent, d'autres digèrent ou se reproduisent.",
    color:"#7DF9FF",weight:"Quelques g à 100+ kg (colonie entière)",origin:"Tous les océans du monde",
    diet:"Zooplancton, petits poissons, larves",
    social:"Colonie d'individus spécialisés (pas de social classique)",lifespan:"Inconnue (colonie potentiellement immortelle)"
  },
  {
    id:102,name:"Rat-taupe nu",emoji:"🐭",habitat:"Afrique de l'Est (terriers)",habitatEmoji:"🌍",
    superpower:"Insensible à la douleur, résiste au cancer, vit 30 ans (record rongeur), survit sans oxygène 18 minutes !",
    fact:"Comme les reptiles, il ne régule pas sa température corporelle — un mammifère vraiment unique.",
    color:"#FFC8A0",weight:"30-80 g",origin:"Kenya, Éthiopie, Somalie (terriers souterrains)",
    diet:"Tubercules, racines, bulbes souterrains",
    social:"En colonie eusociale (20-300, avec une reine)",lifespan:"28-32 ans (record absolu pour un rongeur)"
  },
  {
    id:103,name:"Crevette-mante",emoji:"🦐",habitat:"Océan tropical",habitatEmoji:"🌊",
    superpower:"Frappe à 23 m/s (plus vite qu'une balle de pistolet) et voit 16 types de couleurs contre 3 pour l'humain !",
    fact:"Ses coups peuvent briser le verre d'un aquarium. Surnommée 'crevette tueuse'.",
    color:"#FF6B35",weight:"90-600 g",origin:"Océan Indo-Pacifique (récifs coralliens)",
    diet:"Crabes, crevettes, coquillages, oursins, petits poissons",
    social:"Solitaire (extrêmement territorial)",lifespan:"3-20 ans"
  },
  {
    id:104,name:"Fourmi zombie",emoji:"🐜",habitat:"Forêt tropicale",habitatEmoji:"🌴",
    superpower:"Le champignon Ophiocordyceps parasite son cerveau, la contrôle pour se propager — comme un vrai film d'horreur !",
    fact:"Le champignon dirige la fourmi jusqu'à la feuille parfaite, lui fait mordre la nervure, puis sort de sa tête.",
    color:"#8B6914",weight:"1-2 mg",origin:"Forêts tropicales d'Amérique du Sud, Asie, Afrique",
    diet:"Feuilles et sève (contrôlée par le champignon parasite)",
    social:"Individuellement parasitée — exclue de la colonie",lifespan:"Quelques jours après l'infection"
  },
  {
    id:105,name:"Blob",emoji:"🟡",habitat:"Forêts humides",habitatEmoji:"🌲",
    superpower:"Sans cerveau ni nerfs, il résout des labyrinthes, mémorise des chemins et a 720 sexes différents !",
    fact:"Le blob n'est ni animal, ni végétal, ni champignon. C'est une énigme de la biologie.",
    color:"#FFD700",weight:"Quelques g (peut grossir à plusieurs kg)",origin:"Forêts humides du monde entier",
    diet:"Bactéries, champignons, levures, matière organique",
    social:"Solitaire (peut fusionner avec d'autres blobs)",lifespan:"Potentiellement illimitée (forme dormante)"
  },
  {
    id:106,name:"Taupe dorée",emoji:"✨",habitat:"Désert du Namib",habitatEmoji:"🏜️",
    superpower:"Aveugle, elle 'nage' dans le sable et détecte les vibrations sismiques de ses proies.",
    fact:"Son pelage irisé or-vert est créé par des nanostructures dans les poils — un bijou naturel.",
    color:"#FFD700",weight:"15-540 g",origin:"Afrique du Sud et Namibie",
    diet:"Vers de terre, insectes, termites, lézards",
    social:"Solitaire",lifespan:"5-10 ans"
  },
  {
    id:107,name:"Ver de Pompéi",emoji:"🪱",habitat:"Sources hydrothermales (fond marin)",habitatEmoji:"🌋",
    superpower:"L'animal le plus résistant à la chaleur : vit à 80°C dans les cheminées hydrothermales !",
    fact:"Il porte sur son dos une colonie de bactéries qui l'isolent thermiquement comme une veste.",
    color:"#FF4500",weight:"Quelques grammes",origin:"Dorsales médio-océaniques (fonds marins mondiaux)",
    diet:"Bactéries chémosynthétiques (vivant sur son propre dos)",
    social:"En colonies dans des tubes",lifespan:"Inconnue"
  },
  {
    id:108,name:"Pieuvre dumbo",emoji:"🐙",habitat:"Océan profond (3 000-4 000 m)",habitatEmoji:"🌑",
    superpower:"Nage avec de grandes 'oreilles' comme Dumbo, à des profondeurs abyssales inaccessibles.",
    fact:"C'est la pieuvre qui vit le plus profond. Elle avale ses proies entières — trop froid pour mâcher.",
    color:"#9B59B6",weight:"5-6 kg",origin:"Grands fonds de tous les océans",
    diet:"Vers, bivalves, crustacés, copépodes",
    social:"Solitaire",lifespan:"3-5 ans"
  },
  {
    id:109,name:"Escargot de mer bleu",emoji:"🐌",habitat:"Océan tropical (surface)",habitatEmoji:"🌊",
    superpower:"Vole les cellules urticantes des méduses et les utilise comme arme. Flotte à l'envers !",
    fact:"Surnommé 'dragon bleu', il mesure 3 cm mais peut paralyser un adulte avec son venin volé.",
    color:"#1E90FF",weight:"Moins d'1 g",origin:"Eaux tropicales et subtropicales (surface de l'Atlantique, Pacifique, Indien)",
    diet:"Méduses, siphonophores, vélelles",
    social:"Solitaire ou en petits groupes passifs",lifespan:"Quelques mois"
  },
  {
    id:110,name:"Fourmi Matabele",emoji:"🐜",habitat:"Savane africaine",habitatEmoji:"🌾",
    superpower:"Seul animal non-humain à pratiquer des soins médicaux : elle soigne et ampute les blessés après combat !",
    fact:"Ces fourmis attaquent les termitières en armée. Les blessées sont ramenées et léchées pour désinfection.",
    color:"#8B0000",weight:"10-20 mg",origin:"Savane africaine subsaharienne",
    diet:"Termites Macrotermes (régime quasi-exclusif)",
    social:"En colonie militaire structurée + infirmières",lifespan:"Reine plusieurs années — Ouvrière quelques mois"
  },
  {
    id:111,name:"Araignée paon",emoji:"🕷️",habitat:"Australie",habitatEmoji:"🌿",
    superpower:"Abdomen aux motifs psychédéliques qu'elle agite dans une danse de séduction spectaculaire !",
    fact:"Ces araignées sauteuses tiennent plusieurs sur un ongle — leurs danses sont inoubliables.",
    color:"#FF6347",weight:"~15 mg",origin:"Australie du Sud et du Sud-Est",
    diet:"Insectes, petites araignées, collemboles",
    social:"Solitaire",lifespan:"1 an"
  },
  {
    id:112,name:"Insecte bombardier",emoji:"🐛",habitat:"Prairies & Forêts",habitatEmoji:"🌿",
    superpower:"Projette une explosion chimique bouillante (100°C) de son abdomen en direction précise de l'ennemi !",
    fact:"La réaction crée une vraie détonation audible — de petits coups de canon biologiques.",
    color:"#8B4513",weight:"5-100 mg",origin:"Tous les continents sauf Antarctique",
    diet:"Limaces, vers, petits insectes, larves",
    social:"Solitaire",lifespan:"Larve 1-2 ans — Adulte quelques mois"
  },
  {
    id:113,name:"Grenouille de verre",emoji:"🐸",habitat:"Forêt tropicale d'Amérique du Sud",habitatEmoji:"🌳",
    superpower:"Peau totalement transparente : on voit son cœur battre, ses intestins, ses œufs en direct !",
    fact:"Le mâle surveille les œufs camouflé dessus grâce à sa peau translucide.",
    color:"#90EE90",weight:"2-14 g",origin:"Forêts tropicales d'Amérique centrale + du Sud",
    diet:"Insectes, araignées, petits escargots",
    social:"Solitaire (mâles gardent le nid)",lifespan:"10-14 ans"
  },
  {
    id:114,name:"Moloch d'Australie",emoji:"🦎",habitat:"Désert australien",habitatEmoji:"🏜️",
    superpower:"Recueille la rosée du désert via ses écailles : l'eau remonte capillairement jusqu'à sa bouche !",
    fact:"Son faux 'crâne' dans le cou est présenté aux prédateurs pour simuler une deuxième tête.",
    color:"#D2691E",weight:"50-100 g",origin:"Désert australien (Outback)",
    diet:"Fourmis noires uniquement (jusqu'à 2 500 par repas !)",
    social:"Solitaire",lifespan:"20 ans"
  },
  {
    id:115,name:"Lézard basilic",emoji:"🦎",habitat:"Forêt tropicale d'Amérique centrale",habitatEmoji:"🌴",
    superpower:"Court sur l'eau grâce à ses pattes qui frappent très vite la surface — le 'lézard Jésus' !",
    fact:"Les jeunes peuvent parcourir 400 m sur l'eau avant de couler.",
    color:"#228B22",weight:"200-700 g",origin:"Forêts tropicales d'Amérique centrale + nord de l'Amérique du Sud",
    diet:"Insectes, fleurs, fruits, petits vertébrés",
    social:"Solitaire ou petits groupes",lifespan:"7 ans (sauvage)"
  },
  {
    id:116,name:"Drongo brillant",emoji:"🐦",habitat:"Savane africaine",habitatEmoji:"🌾",
    superpower:"Imite le cri d'alarme de 51 espèces pour effrayer les autres animaux et voler leur nourriture !",
    fact:"Même les suricates et les mangoustes se font duper. C'est le grand arnaqueur de la savane.",
    color:"#000000",weight:"50 g",origin:"Afrique subsaharienne (savane + broussailles)",
    diet:"Insectes (+ nourriture volée par duperie aux autres animaux)",
    social:"Solitaire (territorial)",lifespan:"5-6 ans"
  },
  {
    id:117,name:"Oiseau jardinier",emoji:"🐦",habitat:"Australie & Nouvelle-Guinée",habitatEmoji:"🌿",
    superpower:"Construit et décore une 'salle de séduction' avec des objets colorés triés pour attirer la femelle.",
    fact:"Certains mâles volent des décorations chez leurs voisins et créent une perspective optique dans leur boudoir !",
    color:"#4169E1",weight:"70-230 g",origin:"Australie + Nouvelle-Guinée",
    diet:"Fruits, insectes, nectar, fleurs",
    social:"Solitaire (mâle construit seul sa boudoir)",lifespan:"20-30 ans"
  },
  {
    id:118,name:"Hoazin",emoji:"🦅",habitat:"Amazonie",habitatEmoji:"🌳",
    superpower:"Le seul oiseau moderne avec des griffes aux ailes à l'état juvénile — comme un dinosaure !",
    fact:"Il digère les feuilles par fermentation comme une vache, et sent le fumier — surnommé 'oiseau puant'.",
    color:"#8B4513",weight:"700-900 g",origin:"Amazonie, Orénoque, Guyanes",
    diet:"Feuilles, fleurs, fruits (tout fermenté dans le jabot)",
    social:"En groupes familiaux (6-15)",lifespan:"25-30 ans"
  },
  {
    id:119,name:"Mante orchidée",emoji:"🌸",habitat:"Forêt tropicale d'Asie du Sud-Est",habitatEmoji:"🌴",
    superpower:"Mimétisme parfait d'une fleur : attire les insectes pollinisateurs pour les dévorer !",
    fact:"Elle est plus efficace qu'une vraie fleur pour attirer les abeilles. Elles la préfèrent à la vraie plante !",
    color:"#FFB6C1",weight:"150-700 mg",origin:"Malaisie, Indonésie, Thaïlande, Sumatra",
    diet:"Abeilles, papillons, mouches, guêpes (attirés par mimétisme)",
    social:"Solitaire (cannibale sexuel comme la mante religieuse)",lifespan:"Femelle 1 an — Mâle quelques mois"
  },
  {
    id:120,name:"Poisson-pierre",emoji:"🐟",habitat:"Océan Indo-Pacifique",habitatEmoji:"🌊",
    superpower:"Le plus venimeux des poissons. Camouflage parfait en rocher — invisible sur le fond marin.",
    fact:"Son venin cause des douleurs si intenses que les victimes demandent parfois à amputer le membre.",
    color:"#696969",weight:"150-400 g",origin:"Récifs coralliens Indo-Pacifique, côtes d'Australie",
    diet:"Petits poissons, crevettes, crabes",
    social:"Solitaire (sédentaire)",lifespan:"5-10 ans"
  },
  {
    id:121,name:"Dauphin rose de l'Amazone",emoji:"🐬",habitat:"Amazonie (eau douce)",habitatEmoji:"🌳",
    superpower:"Son cou flexible lui permet de nager entre les arbres inondés de la jungle — unique chez les dauphins !",
    fact:"Rose comme un flamant ! Il peut tourner la tête à 180° pour naviguer dans la forêt.",
    color:"#FFB6C1",weight:"85-185 kg",origin:"Amazonie et Orénoque (Venezuela, Brésil, Pérou, Bolivie...)",
    diet:"Poissons, tortues, crabes, crevettes (200+ espèces !)",
    social:"Solitaire ou petits groupes (2-4)",lifespan:"30+ ans"
  },
  {
    id:122,name:"Cigale périodique",emoji:"🦗",habitat:"Amérique du Nord",habitatEmoji:"🌲",
    superpower:"Synchronise son émergence tous les 13 ou 17 ans (nombres premiers) pour submerger les prédateurs !",
    fact:"Des milliards de cigales surgissent ensemble, créent un chœur de 100 dB, et meurent en 6 semaines.",
    color:"#228B22",weight:"1-3 g",origin:"Est de l'Amérique du Nord (17 États américains)",
    diet:"Larve : sève des racines d'arbres — Adulte : ne mange presque pas",
    social:"Par milliards lors de l'émergence synchronisée",lifespan:"13 ou 17 ans (dont 99% sous terre)"
  },
  {
    id:123,name:"Coléoptère du Namib",emoji:"🪲",habitat:"Désert du Namib",habitatEmoji:"🏜️",
    superpower:"Collecte la brume du matin avec son dos texturé. Inspire les technologies de récolte d'eau !",
    fact:"Son dos en relief crée des gouttelettes qui roulent vers sa bouche — 40% de son poids en eau chaque matin.",
    color:"#2F4F4F",weight:"0,03-0,05 g",origin:"Désert du Namib (Namibie + Angola)",
    diet:"Matière végétale décomposée, champignons",
    social:"Solitaire",lifespan:"Inconnue"
  },
  {
    id:124,name:"Crapaud surinamais",emoji:"🐸",habitat:"Amazonie",habitatEmoji:"🌳",
    superpower:"La femelle porte ses œufs incrustés dans le dos, les bébés sortent directement de sa peau !",
    fact:"La gestation dure 80 jours. Les petits crapauds percent la peau de leur mère — spectacle troublant.",
    color:"#8B7355",weight:"100-170 g",origin:"Amérique du Sud tropicale + Trinidad",
    diet:"Vers, insectes, petits poissons, crustacés",
    social:"Solitaire (couple en saison des pluies)",lifespan:"4-8 ans"
  },
  {
    id:125,name:"Pieuvre des cocotiers",emoji:"🐙",habitat:"Océan Indo-Pacifique",habitatEmoji:"🌊",
    superpower:"Collecte et transporte des coques de noix de coco comme abri portable — seul invertébré à utiliser des outils !",
    fact:"Elle marche sur 2 tentacules tout en portant sa 'maison' avec les 6 autres.",
    color:"#8B4513",weight:"400 g-1 kg",origin:"Indo-Pacifique — Australie, Indonésie, Philippines",
    diet:"Crabes, crevettes, palourdes, poissons",
    social:"Solitaire",lifespan:"1-2 ans"
  },
  {
    id:126,name:"Holothurie",emoji:"🥒",habitat:"Fond des océans",habitatEmoji:"🌑",
    superpower:"Expulse ses organes internes comme défense, puis les régénère ! Peut se liquéfier pour passer dans une fissure.",
    fact:"Elle respire en aspirant de l'eau par son arrière-train. Et nettoie les fonds en filtrant les sédiments.",
    color:"#8B6914",weight:"50 g-5 kg",origin:"Tous les océans du monde (fond marin)",
    diet:"Sédiments, détritus, matière organique décomposée",
    social:"Solitaire ou en agrégats denses sur le fond",lifespan:"5-10 ans"
  },
  {
    id:127,name:"Nautile",emoji:"🐚",habitat:"Océan Indo-Pacifique (profond)",habitatEmoji:"🌑",
    superpower:"Fossile vivant inchangé depuis 500 millions d'ans ! Sa coquille suit exactement la suite de Fibonacci.",
    fact:"Il a jusqu'à 90 tentacules sans ventouses. Sa coquille est un chef-d'œuvre mathématique naturel.",
    color:"#FF8C00",weight:"100-200 g",origin:"Océan Indo-Pacifique — Australie, Philippines, Fidji (100-500 m de profondeur)",
    diet:"Charognes, crabes, poissons morts, crevettes",
    social:"Solitaire (remonte la nuit, descend le jour)",lifespan:"15-20 ans"
  },
  {
    id:128,name:"Phasme feuille",emoji:"🍃",habitat:"Forêt tropicale d'Asie",habitatEmoji:"🌴",
    superpower:"Imitation parfaite d'une feuille, jusqu'aux nervures et taches de moisissure — invisible à l'œil !",
    fact:"Les femelles se reproduisent sans mâle (parthénogenèse). Leurs œufs ressemblent à des graines.",
    color:"#228B22",weight:"30-100 g",origin:"Malaisie, Indonésie, Philippines, Inde",
    diet:"Feuilles de goyavier, ronces, chênes tropicaux",
    social:"Solitaire (femelles reproduisent seules)",lifespan:"Femelle 1 an — Mâle 4 mois"
  },
  {
    id:129,name:"Oiseau-lyre",emoji:"🐦",habitat:"Forêts d'Australie",habitatEmoji:"🌿",
    superpower:"Imite parfaitement tous les sons : tronçonneuse, appareil photo, autres oiseaux — qualité studio !",
    fact:"Sa queue en forme de lyre grecque peut mesurer 60 cm. Il apprend de nouveaux sons toute sa vie.",
    color:"#8B4513",weight:"800 g-1,1 kg",origin:"Forêts humides du sud-est de l'Australie",
    diet:"Vers, insectes, araignées, escargots",
    social:"Solitaire (mâle polygyne)",lifespan:"20-25 ans"
  },
  {
    id:130,name:"Indicateur à gorge noire",emoji:"🐦",habitat:"Afrique subsaharienne",habitatEmoji:"🌿",
    superpower:"Guide les humains vers les ruches de miel grâce à un système de signaux — mutualisme unique au monde !",
    fact:"Humains et Honeyguides coopèrent depuis des millénaires. L'oiseau mange la cire pendant que l'homme prend le miel.",
    color:"#8B7355",weight:"35-50 g",origin:"Afrique subsaharienne",
    diet:"Cire d'abeille, larves d'abeilles, insectes",
    social:"Solitaire (parasite de nid)",lifespan:"10-12 ans"
  },
  {
    id:131,name:"Fourmi tisserande",emoji:"🐜",habitat:"Forêt tropicale d'Asie & Afrique",habitatEmoji:"🌴",
    superpower:"Coud des feuilles ensemble pour construire des nids suspendus, en utilisant la soie de ses larves comme fil !",
    fact:"Les ouvrières forment des chaînes vivantes pour rapprocher deux feuilles pendant que d'autres cousent.",
    color:"#FF6347",weight:"1-2 mg",origin:"Afrique subsaharienne + Asie du SE (forêt tropicale)",
    diet:"Insectes, petits arthropodes, nectar, charognes",
    social:"En colonie (100 000-500 000, plusieurs arbres)",lifespan:"Reine 2-3 ans — Ouvrière quelques semaines"
  },
  {
    id:132,name:"Kéa",emoji:"🦜",habitat:"Alpes néo-zélandaises",habitatEmoji:"⛰️",
    superpower:"QI comparable à un enfant de 4 ans. Résout des puzzles collaboratifs et comprend les probabilités !",
    fact:"Le kéa est le seul perroquet alpin du monde. Il arrache les essuie-glaces des voitures par curiosité.",
    color:"#228B22",weight:"750 g-1 kg",origin:"Alpes du Sud, Nouvelle-Zélande (île du Sud)",
    diet:"Racines, baies, insectes, charognes, graisse de mouton",
    social:"En petits groupes curieux (5-20)",lifespan:"20 ans"
  },
  {
    id:133,name:"Musaraigne",emoji:"🐭",habitat:"Forêts & Prairies",habitatEmoji:"🌿",
    superpower:"Cœur à 1 200 battements/min ! Doit manger son poids en nourriture toutes les 2 heures sinon elle meurt.",
    fact:"Certaines musaraignes ont un venin paralysant — elles stockent des proies vivantes dans leur terrier.",
    color:"#808080",weight:"2-30 g",origin:"Monde entier sauf Australie et pôles",
    diet:"Insectes, vers, grenouilles, petits rongeurs",
    social:"Solitaire (très agressive envers ses congénères)",lifespan:"12-18 mois"
  },
  {
    id:134,name:"Zorille",emoji:"🦡",habitat:"Savane africaine",habitatEmoji:"🌾",
    superpower:"Projette un liquide nauséabond visible à 1 km et détectable à 500 m — même les lions l'évitent !",
    fact:"La zorille est considérée comme l'animal le plus malodorant d'Afrique.",
    color:"#000000",weight:"680-1 460 g",origin:"Afrique subsaharienne (savane + broussailles)",
    diet:"Serpents, rongeurs, grenouilles, insectes, œufs",
    social:"Solitaire (nocturne)",lifespan:"5-13 ans"
  },
  {
    id:135,name:"Tatou à neuf bandes",emoji:"🦔",habitat:"Amérique du Nord & du Sud",habitatEmoji:"🌾",
    superpower:"Seul mammifère américain à avoir une armure osseuse. Peut retenir sa respiration 6 minutes sous l'eau !",
    fact:"La femelle donne toujours naissance à 4 vrais jumeaux identiques — unique chez les mammifères.",
    color:"#A0A0A0",weight:"2,5-7 kg",origin:"Amérique centrale + du Sud (introduit aux États-Unis)",
    diet:"Insectes, vers, petits vertébrés, champignons, charognes",
    social:"Solitaire (nocturne)",lifespan:"7-20 ans"
  },
  {
    id:136,name:"Salamandre géante de Chine",emoji:"🦎",habitat:"Rivières de Chine",habitatEmoji:"💧",
    superpower:"Le plus grand amphibien vivant (1,8 m !). Peut rester sans manger 3 ans !",
    fact:"Elle 'voit' dans le noir grâce à des récepteurs sensibles aux vibrations tout le long de son corps.",
    color:"#8B7355",weight:"25-50 kg",origin:"Rivières de montagne de Chine centrale et méridionale",
    diet:"Poissons, grenouilles, crabes, insectes, vers",
    social:"Solitaire",lifespan:"60-80 ans !"
  },
  {
    id:137,name:"Lucane cerf-volant",emoji:"🪲",habitat:"Forêts de chênes d'Europe",habitatEmoji:"🌲",
    superpower:"Le plus grand coléoptère d'Europe. Ses mandibules géantes servent aux combats — jamais pour manger !",
    fact:"La larve vit 5 ans dans le bois pourri. L'adulte ne mange pas et vit seulement quelques semaines.",
    color:"#8B4513",weight:"2-10 g",origin:"Forêts de chênes d'Europe et d'Asie",
    diet:"Larve : bois mort en décomposition — Adulte : sève sucrée, liquides fermentés",
    social:"Solitaire (compétitif entre mâles)",lifespan:"Larve 3-6 ans — Adulte 3-4 semaines"
  },
  {
    id:138,name:"Puffin des Anglais",emoji:"🐦",habitat:"Océan Atlantique",habitatEmoji:"🌊",
    superpower:"Navigue sur 15 000 km en migration avec une précision GPS. Peut vivre 55 ans !",
    fact:"Libéré en plein Arizona, un puffin est retourné à son nid en Angleterre en seulement 13 jours.",
    color:"#2F4F4F",weight:"350-575 g",origin:"Atlantique Nord — Îles Britanniques, Atlantique en hiver",
    diet:"Harengs, sardines, anchois, céphalopodes",
    social:"En grandes colonies marines",lifespan:"50-55 ans !"
  },
  {
    id:139,name:"Méduse lion",emoji:"🪼",habitat:"Océan Arctique & tempéré",habitatEmoji:"🧊",
    superpower:"La plus grande méduse : jusqu'à 2 m de diamètre et 36 m de tentacules — autant que la baleine bleue !",
    fact:"Ses tentacules urticants restent dangereux même après sa mort. Ni cerveau, ni cœur, ni yeux.",
    color:"#FF4500",weight:"150-600 g (tentacules exclus)",origin:"Arctique + Atlantique Nord + Pacifique Nord",
    diet:"Zooplancton, petits poissons, larves, autres méduses",
    social:"Solitaire (dérive passive)",lifespan:"Quelques mois (meurt après reproduction)"
  },
  {
    id:140,name:"Singe capucin",emoji:"🐒",habitat:"Forêt tropicale d'Amérique",habitatEmoji:"🌳",
    superpower:"Utilise des pierres comme enclumes pour casser les noix et des bâtons pour extraire les insectes !",
    fact:"Les capucins transmettent leurs techniques d'outils de génération en génération — une vraie culture.",
    color:"#8B4513",weight:"1,4-4,8 kg",origin:"Amérique centrale et du Sud (forêt tropicale)",
    diet:"Fruits, insectes, noix, petits vertébrés, palmistes",
    social:"En groupes (6-40 avec hiérarchie)",lifespan:"15-25 ans"
  },
  {
    id:141,name:"Paresseux à trois doigts",emoji:"🦥",habitat:"Forêt tropicale d'Amérique du Sud",habitatEmoji:"🌳",
    superpower:"Si lent que des algues poussent dans sa fourrure — un camouflage vert naturel unique au monde !",
    fact:"Il descend de son arbre seulement une fois par semaine pour faire ses besoins. Son corps est orienté à l'envers.",
    color:"#8B7355",weight:"3,5-4,5 kg",origin:"Forêts tropicales d'Amérique centrale et du Sud",
    diet:"Feuilles, bourgeons, petits fruits",
    social:"Solitaire (ne se déplace que la nuit)",lifespan:"20-40 ans"
  },
  {
    id:142,name:"Galago",emoji:"🐒",habitat:"Afrique subsaharienne",habitatEmoji:"🌿",
    superpower:"Saute 2 mètres de haut et voit dans le noir quasi-total grâce à ses immenses yeux.",
    fact:"Pour chasser, il urine sur ses mains pour laisser des traces odorantes à chaque saut.",
    color:"#8B7355",weight:"95-300 g",origin:"Afrique subsaharienne",
    diet:"Insectes, fruits, gomme d'arbre, petits vertébrés",
    social:"Solitaire (nocturne, territoires chevauchants)",lifespan:"12-16 ans"
  },
  {
    id:143,name:"Fossa",emoji:"🐈",habitat:"Madagascar",habitatEmoji:"🌴",
    superpower:"Prédateur apex de Madagascar, agile comme un chat et fort comme un renard.",
    fact:"La fossa ressemble à un croisement entre un puma et une mangouste — elle est unique au monde.",
    color:"#8B4513",weight:"5,5-8,6 kg",origin:"Madagascar (forêts humides + sèches)",
    diet:"Lémuriens, oiseaux, reptiles, petits mammifères",
    social:"Solitaire",lifespan:"15-20 ans"
  },
  {
    id:144,name:"Piranha",emoji:"🐟",habitat:"Amazonie",habitatEmoji:"💧",
    superpower:"Dents à bord tranchant comme des rasoirs qui se renouvellent en permanence — toujours aiguisées !",
    fact:"Le piranha est peureux en solo. C'est en banc qu'il devient redoutable — et il détecte une goutte de sang à 250 m.",
    color:"#DC143C",weight:"0,5-3,5 kg",origin:"Amazonie, Orénoque, São Francisco (Amérique du Sud)",
    diet:"Poissons, insectes, charognes, fruits, plantes (omnivore !)",
    social:"En bancs (20 à 100+ individus)",lifespan:"10-25 ans"
  },
  {
    id:145,name:"Ver luisant",emoji:"💚",habitat:"Prairies & Haies d'Europe",habitatEmoji:"🌿",
    superpower:"La femelle sans ailes s'allume comme une LED verte pour attirer les mâles volants dans la nuit.",
    fact:"Le ver luisant n'est pas un ver mais un coléoptère. Seule la femelle produit de la lumière.",
    color:"#7CFC00",weight:"15-25 mg",origin:"Europe et Asie (prairies, haies, lisières de forêt)",
    diet:"Larve : escargots et limaces — Adulte femelle : ne mange pas",
    social:"Solitaire (se retrouvent par bioluminescence)",lifespan:"Larve 2-3 ans — Adulte 3-4 semaines"
  }
];

// Mapping continent par id d'animal
const CONTINENT_IDS = {
  "🌍 Afrique":       [1,2,5,24,30,31,32,33,34,47,48,54,61,64,68,70,73,74,75,84,91,92,93,102,106,110,112,116,123,130,131,134,142,143],
  "🌎 Amérique":      [6,9,10,11,13,16,17,21,23,35,45,49,52,63,66,67,76,77,80,82,83,87,94,99,104,113,115,118,121,122,124,135,140,141,144],
  "🌏 Asie":          [22,36,37,38,43,44,50,51,53,59,81,85,88,103,119,125,127,128,136],
  "🌿 Europe":        [12,28,46,62,65,78,89,96,105,133,137,138,145],
  "🦘 Océanie":       [8,18,39,40,60,69,79,97,111,114,117,120,129,132],
  "🧊 Pôles":         [26,27,29,41,71,90,95,139],
  "🌊 Océan mondial": [3,4,7,14,15,19,20,25,42,55,56,57,58,72,86,98,100,101,107,108,109,126]
};

// Injecte la propriété continent dans chaque animal
(function() {
  const lookup = {};
  for (const [continent, ids] of Object.entries(CONTINENT_IDS)) {
    ids.forEach(id => { lookup[id] = continent; });
  }
  ANIMALS.forEach(a => { a.continent = lookup[a.id] || "🌍 Afrique"; });
})();


// ── Classe scientifique (source : info animaux.docx) ──
const CLASSE_MAP = {
  1:  "Mammifère (Carnivore)",
  2:  "Mammifère (Proboscidien)",
  3:  "Mammifère (Cétacé)",
  4:  "Céphalopode",
  5:  "Reptile (Squamate)",
  6:  "Amphibien (Urodèle)",
  7:  "Tardigrada (Micro-organisme)",
  8:  "Mammifère (Monotrème)",
  9:  "Mammifère (Chiroptère)",
  10: "Oiseau",
  11: "Oiseau",
  12: "Oiseau (Rapace nocturne)",
  13: "Oiseau (Rapace diurne)",
  14: "Mammifère (Cétacé à fanons)",
  15: "Poisson (Chondrichthyen)",
  16: "Reptile (Chélonien)",
  17: "Amphibien (Anoure)",
  18: "Céphalopode",
  19: "Cnidaire",
  20: "Échinoderme",
  21: "Reptile (Serpent venimeux)",
  22: "Reptile (Squamate)",
  23: "Insecte (Hyménoptère)",
  24: "Mammifère (Primate)",
  25: "Céphalopode",
  26: "Oiseau (Inapte au vol)",
  27: "Mammifère (Carnivore)",
  28: "Mammifère (Canidé)",
  29: "Mammifère (Canidé)",
  30: "Mammifère (Équidé)",
  31: "Mammifère (Ruminant)",
  32: "Mammifère (Périssodactyle)",
  33: "Mammifère (Semi-aquatique)",
  34: "Reptile (Crocodilien)",
  35: "Mammifère (Félidé)",
  36: "Mammifère (Félidé)",
  37: "Mammifère (Félidé)",
  38: "Mammifère (Ursidé)",
  39: "Mammifère (Marsupial)",
  40: "Mammifère (Marsupial)",
  41: "Mammifère (Cétacé)",
  42: "Mammifère (Cétacé / Delphinidé)",
  43: "Insecte",
  44: "Insecte (Coléoptère)",
  45: "Insecte (Lépidoptère)",
  46: "Insecte (Hyménoptère)",
  47: "Oiseau",
  48: "Oiseau (Inapte au vol)",
  49: "Oiseau",
  50: "Oiseau",
  51: "Reptile (Squamate)",
  52: "Reptile (Serpent)",
  53: "Reptile (Serpent venimeux)",
  54: "Poisson (Sarcoptérygien)",
  55: "Poisson (Chondrichthyen)",
  56: "Poisson (Chondrichthyen)",
  57: "Poisson (Ostéichthyen)",
  58: "Poisson",
  59: "Céphalopode",
  60: "Arthropode (Crustacé terrestre)",
  61: "Arachnide",
  62: "Insecte",
  63: "Insecte (Hyménoptère)",
  64: "Insecte",
  65: "Oiseau",
  66: "Oiseau (Inapte au vol)",
  67: "Reptile (Lézard marin)",
  68: "Mammifère (Canidé)",
  69: "Mammifère (Marsupial)",
  70: "Oiseau (Rapace / Nécrophage)",
  71: "Oiseau (Inapte au vol)",
  72: "Céphalopode",
  73: "Mammifère",
  74: "Mammifère (Ruminant)",
  75: "Mammifère (Primate lémuriforme)",
  76: "Mammifère",
  77: "Mammifère",
  78: "Oiseau",
  79: "Reptile (Lézard)",
  80: "Mammifère (Bovidé)",
  81: "Mammifère (Camélidé)",
  82: "Mammifère (Périssodactyle)",
  83: "Mammifère (Rongeur)",
  84: "Mammifère (Mangouste)",
  85: "Arachnide (Araignée sauteuse)",
  86: "Poisson (Chondrichthyen des abysses)",
  87: "Poisson (Gymnotiforme)",
  88: "Poisson",
  89: "Poisson",
  90: "Oiseau marin",
  91: "Oiseau (Espèce éteinte)",
  92: "Mammifère (Primate)",
  93: "Mammifère (Félidé)",
  94: "Mammifère (Sirénien)",
  95: "Mammifère (Phoque géant)",
  96: "Oiseau (Rapace)",
  97: "Mammifère (Marsupial)",
  98: "Poisson (Anguilliforme)",
  99: "Mammifère",
  100: "Poisson",
  101: "Cnidaire (Colonie)",
  102: "Mammifère (Rongeur)",
  103: "Arthropode (Crustacé)",
  104: "Insecte (Hyménoptère)",
  105: "Amoebozoa (Organisme unicellulaire)",
  106: "Mammifère",
  107: "Annélide (Ver marin des abysses)",
  108: "Céphalopode (Abysses)",
  109: "Mollusque (Nudibranche)",
  110: "Insecte (Hyménoptère)",
  111: "Arachnide (Araignée sauteuse)",
  112: "Insecte (Coléoptère)",
  113: "Amphibien",
  114: "Reptile (Lézard)",
  115: "Reptile (Lézard)",
  116: "Oiseau",
  117: "Oiseau",
  118: "Oiseau",
  119: "Insecte (Mante religieuse)",
  120: "Poisson (Le plus venimeux du monde)",
  121: "Mammifère (Cétacé d'eau douce)",
  122: "Insecte (Cigale)",
  123: "Insecte (Coléoptère du désert)",
  124: "Amphibien",
  125: "Céphalopode",
  126: "Échinoderme",
  127: "Céphalopode préhistorique",
  128: "Insecte (Phasme)",
  129: "Oiseau",
  130: "Oiseau",
  131: "Insecte (Hyménoptère)",
  132: "Oiseau (Perroquet de montagne)",
  133: "Mammifère",
  134: "Mammifère (Mustélidé)",
  135: "Mammifère",
  136: "Amphibien (Le plus grand du monde)",
  137: "Insecte (Coléoptère)",
  138: "Oiseau marin",
  139: "Cnidaire (La plus grande méduse)",
  140: "Mammifère (Primate)",
  141: "Mammifère",
  142: "Mammifère (Primate d'Afrique)",
  143: "Mammifère (Carnivore de Madagascar)",
  144: "Poisson (Carnivore d'eau douce)",
  145: "Insecte (Coléoptère — Lampyris)"
};
ANIMALS.forEach(a => { a.classe = CLASSE_MAP[a.id] || "—"; });

// ── Super-pouvoirs enrichis (source : info animaux.docx) ──
const SUPERPOWER_MAP = {
  1:  "Vision nocturne grâce au tapetum lucidum (membrane miroir derrière la rétine). Rugissement audible à 8 km grâce à des cordes vocales carrées uniques. Seul félin vraiment social — il vit en troupe.",
  2:  "Sa trompe a 100 000 muscles : elle peut soulever 250 kg ou ramasser un brin d'herbe ! Ses oreilles géantes refroidissent son sang. Plus grand animal terrestre de la planète.",
  3:  "Chasse dans le noir total par écholocation : il émet des clics ultrasoniques via son melon et écoute l'écho pour localiser ses proies. Il respire consciemment par son évent.",
  4:  "Trois cœurs, un sang bleu. Un cerveau central + 8 mini-cerveaux (un dans chaque bras !). Peut se faufiler dans n'importe quel trou de la taille de son bec en chitine.",
  5:  "Vision indépendante à 360°. Langue télescopique propulsée à la vitesse de l'éclair. Pattes en pince et queue préhensile pour grimper sans jamais tomber.",
  6:  "Champion de la régénération : il peut reconstruire entièrement un membre coupé, ses yeux, et même des morceaux de son cœur ou de son cerveau sans aucune cicatrice !",
  7:  "Animal le plus résistant de la Terre. Il survit au vide spatial, aux rayons X, à -272°C et +150°C en entrant en cryptobiose : il vide 99% de son eau et stoppe son vieillissement.",
  8:  "Chasse sous l'eau les yeux fermés grâce à son bec qui détecte les champs électriques. C'est un mammifère qui pond des œufs ! Sa fourrure est biofluorescente sous les UV.",
  9:  "Seul mammifère à se nourrir exclusivement de sang. Sa salive contient un anticoagulant surpuissant (la draculine) pour que le sang coule sans s'arrêter. Il court et saute au sol avec agilité.",
  10: "Seul oiseau qui vole en arrière ou à l'envers ! Ses ailes pivotent à 180°, battant jusqu'à 80 fois par seconde. La nuit, il entre en torpeur pour économiser son énergie.",
  11: "Son bec géant est ultra-léger car il est plein de bulles d'air. Il est traversé de centaines de vaisseaux sanguins qui servent de climatiseur naturel pour réguler sa température corporelle.",
  12: "Plus grand rapace nocturne d'Europe. Son vol est totalement silencieux grâce à des plumes à franges spéciales. Il peut pivoter sa tête à 270° sans bouger le reste de son corps !",
  13: "Vision télescopique 4 à 5 fois plus puissante que celle de l'homme — il repère un poisson sous l'eau à plusieurs kilomètres. Ses serres exercent une pression de fermeture colossale.",
  14: "Plus grand animal ayant jamais existé sur Terre (jusqu'à 30 m et 170 tonnes !). Sa langue pèse le poids d'un éléphant. Elle n'a pas de dents — elle filtre le krill avec ses fanons de kératine.",
  15: "Sixième sens : ses ampoules de Lorenzini détectent les champs électriques des cœurs qui battent à distance. Sa mâchoire a plusieurs rangées de dents qui se renouvellent en continu.",
  16: "Championne de la longévité chez les vertébrés (plus de 150 ans !). Son métabolisme très lent lui permet de survivre un an complet sans manger ni boire une seule goutte d'eau.",
  17: "Sa peau contient des toxines mortelles (batrachotoxine). Ses couleurs vives avertissent les prédateurs — c'est l'aposématisme. Elle tire son venin des fourmis toxiques qu'elle mange !",
  18: "Taille d'une balle de golf, mais mortelle ! Des anneaux bleu électrique clignotent sur son corps en cas de stress. Sa salive contient un venin neurotoxique produit par des bactéries.",
  19: "Elle peut inverser son vieillissement ! Blessée ou vieille, elle se retransforme en bébé méduse et recommence sa vie à zéro. Elle est théoriquement immortelle biologiquement !",
  20: "Pour manger, elle extrait son estomac de sa bouche pour digérer sa proie à l'extérieur de son corps. Elle peut régénérer un bras coupé. Aucun cerveau — un réseau nerveux en étoile.",
  21: "Sa sonnette (capsules de kératine vides) s'entrechoque jusqu'à 50 fois par seconde. Elle chasse dans le noir total grâce à des capteurs faciaux qui voient la chaleur infrarouge des animaux.",
  22: "Des milliards de micro-poils sous ses pattes créent des liaisons physiques avec n'importe quelle surface — même le verre lisse ! Il peut aussi larguer sa queue pour fuir (autotomie).",
  23: "Son venin brûle comme du feu (solenopsine). En cas d'inondation, des milliers de fourmis s'accrochent entre elles pour former un radeau vivant imperméable et sauver toute la colonie !",
  24: "Force musculaire 6 fois supérieure à celle de l'homme. Intelligence avancée : il apprend la langue des signes, utilise des outils et bat sa poitrine pour communiquer à distance.",
  25: "Yeux de la taille d'une assiette pour voir dans les abysses. 8 bras et 2 longs tentacules armés de griffes en chitine. Son sang est bleu. Le plus grand invertébré du monde !",
  26: "Résiste au froid extrême de l'Antarctique grâce à un plumage ultra-dense et une couche de graisse. Les mâles couvent le seul œuf sur leurs pattes pendant tout l'hiver polaire !",
  27: "Sa peau est noire sous ses poils pour absorber la chaleur. Sa fourrure transparente et creuse emprisonne les rayons du soleil comme des fibres optiques. Excellent isolant thermique.",
  28: "Meute ultra-hiérarchisée avec une communication vocale complexe. Son hurlement délimite le territoire. Endurance exceptionnelle : il traque ses proies sur des dizaines de kilomètres.",
  29: "Pelage qui change de couleur selon les saisons : blanc comme la neige en hiver, marron en été pour le camouflage. Ses petites oreilles rondes limitent la perte de chaleur corporelle.",
  30: "Ses rayures perturbent la vision des mouches tsé-tsé (anti-moustiques naturel). En groupe, l'effet stroboscopique des rayures perturbe aussi les attaques des prédateurs !",
  31: "Langue préhensile bleue de 50 cm, insensible aux épines d'acacia. Son cou possède des valvules spéciales qui empêchent le sang d'affluer trop vite au cerveau quand elle baisse la tête.",
  32: "Sa corne est faite de kératine pure, comme nos ongles ! Sa peau épaisse forme une véritable armure de plaques cutanées. Excellente ouïe mais vision très faible.",
  33: "Sécrète une 'sueur de sang' rouge qui est à la fois une crème solaire et un antiseptique naturel. Malgré son poids, il marche au fond de l'eau. Sa mâchoire s'ouvre à 150° !",
  34: "Sa morsure est parmi les plus puissantes du règne animal. Une valve de gorge étanche lui permet d'ouvrir la gueule sous l'eau sans se noyer. Il peut rester immobile des heures.",
  35: "Sa mâchoire est assez puissante pour percer directement le crâne de ses proies ou les carapaces des tortues ! Contrairement aux autres grands félins, il est aussi excellent nageur.",
  36: "Sa queue, aussi longue que son corps, lui sert de balancier pour sauter de rocher en rocher et de couverture chauffante pour protéger son museau du gel lorsqu'il dort.",
  37: "Plus grand félin sauvage de la planète. Ses rayures ne sont pas seulement sur ses poils — elles sont aussi ancrées directement sur sa peau ! Chasseur solitaire à l'affût.",
  38: "Possède un 'sixième doigt' (un os du poignet modifié) pour attraper et éplucher les tiges de bambou avec précision. Système digestif de carnivore adapté à un régime 99% végétarien !",
  39: "Ses empreintes digitales sont presque identiques à celles des humains ! Son cæcum de 2 mètres détoxifie les huiles venimeuses des feuilles d'eucalyptus — sa seule nourriture.",
  40: "Ses tendons géants stockent l'énergie comme des ressorts à chaque saut. La femelle possède une poche ventrale (marsupium) où le bébé minuscule finit sa croissance en tétant.",
  41: "Sa 'corne' est en réalité une dent spiralée qui peut atteindre 3 mètres ! C'est un organe sensoriel ultra-sensible rempli de terminaisons nerveuses pour mesurer la salinité de l'eau.",
  42: "Super-prédateur à l'intelligence sociale extrême. Chaque groupe développe des techniques de chasse uniques transmises de génération en génération — comme se laisser échouer volontairement pour attraper des phoques !",
  43: "Seul insecte capable de pivoter sa tête à 180°. Ses pattes avant saisissent les proies à la vitesse de l'éclair. Vision en relief (stéréoscopique) très performante.",
  44: "Produit de la lumière froide sans aucune chaleur par bioluminescence (mélange de luciférine et d'oxygène). Ce signal lumineux lui sert à trouver un partenaire dans le noir.",
  45: "Champion de la migration : jusqu'à 4 000 km entre le Canada et le Mexique. Il se nourrit de milkweed, une plante toxique qui le rend lui-même empoisonné et immangeable pour les oiseaux !",
  46: "Communique l'emplacement exact des fleurs à ses sœurs grâce à une chorégraphie complexe (la danse frétillante). Pollinisatrice indispensable pour la survie de nombreuses plantes.",
  47: "Sa couleur rose vient directement de son alimentation (pigments des crevettes et algues). Son bec est équipé de lamelles qui filtrent la vase comme une passoire pour attraper sa nourriture.",
  48: "Plus grand oiseau vivant ! Course jusqu'à 70 km/h avec seulement 2 doigts par pied. Ses yeux sont plus gros que son propre cerveau.",
  49: "Son bec puissant brise les noix les plus dures. Il utilise ses pattes comme des mains pour manipuler sa nourriture. Grande intelligence et longévité exceptionnelle (jusqu'à 60 ans !).",
  50: "Le mâle déploie ses plumes en roue immense pour séduire les femelles. Ses ocelles (motifs en forme d'yeux) chatoyants effraient aussi les prédateurs !",
  51: "Plus grand lézard du monde. Sa langue bifide capte les odeurs à des kilomètres. Sa salive contient un cocktail de bactéries toxiques et de venin anticoagulant.",
  52: "Plus lourd serpent du monde. Il tue par constriction en bloquant la circulation sanguine. Ses mâchoires se désarticulent pour avaler des animaux bien plus grands que sa tête.",
  53: "Plus grand serpent venimeux du monde. Il redresse le tiers de son corps et déploie un capuchon impressionnant en cas de menace. Son venin attaque directement le système nerveux.",
  54: "Fossile vivant dont l'aspect n'a presque pas changé depuis des millions d'années ! Ses nageoires charnues bougent comme des pattes — il est l'ancêtre des animaux terrestres.",
  55: "Plus grand poisson de l'océan (jusqu'à 18 mètres !). Totalement inoffensif : il se nourrit exclusivement de plancton et de krill en filtrant l'eau à travers sa bouche immense.",
  56: "Ses 'cornes' dirigent le plancton vers sa bouche. Elle 'vole' majestueusement dans l'eau grâce à ses nageoires pectorales géantes comme des ailes de rayon.",
  57: "C'est le MÂLE qui porte les œufs et donne naissance aux petits ! Son corps est cuirassé de plaques osseuses et sa queue préhensile s'accroche aux algues pour ne pas dériver.",
  58: "En cas de danger, il se gonfle d'eau en quelques secondes pour devenir une boule impossible à avaler. Ses organes contiennent un poison mortel : la tétrodotoxine.",
  59: "Contrairement au simple camouflage, elle imite la forme, la nage et le comportement d'animaux dangereux (poisson-lion, serpent de mer, raie) pour tromper ses prédateurs !",
  60: "Ses pinces peuvent briser des noix de coco entières ! Plus grand arthropode terrestre du monde. Il possède des poumons adaptés à la vie sur terre (il se noierait sous l'eau).",
  61: "Sa queue se termine par un aiguillon venimeux. Sa carapace brille d'un bleu néon sous une lampe UV la nuit — un super-pouvoir que l'on ne retrouve chez aucun autre animal.",
  62: "4 ailes indépendantes lui permettent de faire du vol stationnaire, de reculer ou de foncer à 50 km/h. Ses yeux composés géants lui offrent un champ de vision exceptionnel.",
  63: "Ses mandibules fonctionnent comme des ciseaux. Elle porte 20 fois son propre poids ! Elle ne mange pas les feuilles découpées — elle les mâche pour cultiver un champignon souterrain.",
  64: "Construit des termitières géantes de plusieurs mètres avec un système de ventilation naturelle qui régule la température et l'oxygène. Un véritable chef-d'œuvre d'architecture !",
  65: "Son bec profilé pénètre l'eau sans faire de vagues ni de bruit. Ce design hydrodynamique a inspiré le train à grande vitesse japonais ! Sa vision s'adapte instantanément air/eau.",
  66: "Seul manchot à vivre à l'équateur ! Il halète pour évacuer la chaleur et recherche les courants marins froids pour réguler sa température. Un manchot tropical — qui l'eût cru !",
  67: "Seul lézard marin au monde. Il plonge dans l'océan glacial pour brouter les algues. Il éternue des croûtes de sel pour évacuer l'excès de sel avalé en mer !",
  68: "Ses oreilles de 15 cm agissent comme des radiateurs pour refroidir son corps. Ses pattes recouvertes de poils épais l'empêchent de se brûler sur le sable brûlant du désert.",
  69: "Sa mâchoire est proportionnellement plus puissante que celle d'un lion — elle broie les os entiers. Quand il est stressé ou en colère, ses oreilles deviennent rouge vif !",
  70: "Son estomac produit des acides ultra-puissants qui détruisent les bactéries les plus mortelles (anthrax, choléra). Sa tête chauve reste propre quand il plonge dans les carcasses.",
  71: "Pour séduire une femelle, le mâle lui offre le plus beau caillou possible pour construire le nid. Les cailloux étant rares sur la glace, les manchots se les volent entre voisins !",
  72: "Plus grande espèce de poulpe (jusqu'à 9 m d'envergure !). Il peut défaire des nœuds, ouvrir des pots à vis de sécurité pour enfants et résoudre des labyrinthes complexes.",
  73: "Seul mammifère recouvert d'écailles en kératine ! Il se roule en boule blindée impossible à ouvrir pour un lion. Sa langue gluante est plus longue que son propre corps.",
  74: "Cousin de la girafe avec des rayures de zèbre ! Sa langue bleue est si longue qu'il peut nettoyer ses propres yeux et oreilles avec elle. Animal très secret de la forêt du Congo.",
  75: "Son doigt majeur ultra-long et articulé à 360° tapote les troncs pour repérer les larves cachées par écho (comme une chauve-souris !), puis sert de crochet pour les extraire.",
  76: "Sa peau forme une carapace articulée de plaques osseuses. Ses griffes avant (jusqu'à 20 cm !) peuvent détruire des termitières dures comme du béton en quelques secondes.",
  77: "Sans aucune dent, il possède une langue de 60 cm collante qu'il peut sortir 150 fois par minute pour avaler 30 000 fourmis par jour !",
  78: "La femelle ne construit jamais de nid : elle pond son œuf dans le nid d'une autre espèce. Le bébé coucou éclot en premier et pousse tous les autres œufs hors du nid !",
  79: "Sa collerette de peau se déploie comme un grand parasol orange et jaune pour effrayer les ennemis. Il peut aussi courir très vite sur ses deux pattes arrière !",
  80: "Malgré sa masse imposante, il court à 60 km/h et saute des obstacles de 2 mètres. Sa grosse bosse dorsale de muscles lui sert à balayer la neige pour trouver de l'herbe.",
  81: "Ses bosses contiennent de la graisse (réserve d'énergie, pas d'eau !). Ses globules rouges ovales continuent de circuler même quand il est très déshydraté.",
  82: "Sa petite trompe préhensile lui sert à attraper les feuilles hautes et à respirer comme un tuba lorsqu'il se cache sous l'eau pour échapper aux jaguars !",
  83: "Ses yeux, oreilles et narines sont tout en haut de sa tête — comme les hippopotames ! Il peut ainsi voir et respirer en restant presque entièrement immergé dans l'eau.",
  84: "Des sentinelles se tiennent debout sur leurs pattes arrière pour surveiller le ciel pendant que les autres mangent. Les cercles noirs autour de leurs yeux agissent comme des lunettes de soleil naturelles.",
  85: "Ne fait pas de toile pour chasser ! Elle repère ses proies avec deux yeux géants en haute définition, puis leur saute dessus depuis une distance égale à 40 fois sa propre taille.",
  86: "Vit dans les profondeurs noires de l'océan. Ses yeux brillent pour capter la moindre lueur. Ses 'coutures de Frankenstein' sur la tête détectent les vibrations dans l'eau.",
  87: "Ses organes électriques (des milliers de cellules empilées comme des piles) envoient des décharges de plus de 600 volts pour paralyser ses proies à distance !",
  88: "Il repère les insectes posés sur les feuilles au-dessus de l'eau, calcule la déviation de la lumière, et projette un jet d'eau précis comme une sarbacane pour les faire tomber.",
  89: "Né en rivière, il part vivre en mer. Pour revenir pondre, il retrouve sa rivière natale après des milliers de kilomètres grâce au champ magnétique terrestre et à l'odeur de l'eau.",
  90: "Plus grande envergure d'aile du monde (3,5 m !). Un système de blocage articulaire lui permet de planer des heures sans battre des ailes — il dort même en volant !",
  91: "Grand oiseau qui avait perdu la capacité de voler car il n'avait aucun prédateur naturel avant l'arrivée de l'homme au XVIIe siècle. Symbole de l'extinction causée par les humains.",
  92: "Notre plus proche cousin génétique ! Il fabrique des outils (tiges pour attraper les termites), reconnaît son reflet dans un miroir et a une mémoire visuelle plus rapide que la nôtre.",
  93: "Le plus rapide des animaux terrestres : 0 à 100 km/h en 3 secondes ! Colonne vertébrale ultra-flexible qui agit comme un ressort. Ses griffes non rétractiles = crampons de course.",
  94: "Surnommé la 'vache de mer'. Ses dents se renouvellent en continu toute sa vie. Ses longs poumons lui permettent de contrôler sa flottabilité avec une précision parfaite.",
  95: "Champion d'apnée : plongée à 1 500 m de profondeur pendant près de 2 heures ! L'oxygène est stocké dans ses muscles très denses. Le mâle a un museau en trompe qui amplifie ses cris.",
  96: "Animal le plus rapide du monde en piqué : plus de 380 km/h ! Ses narines ont de petits cônes osseux pour dévier l'air et lui permettre de respirer malgré la vitesse extrême.",
  97: "Fait des crottes en forme de cubes parfaits pour qu'elles ne roulent pas ! Son arrière-train blindé de cartilage dur lui sert de bouclier pour fermer l'entrée de son terrier.",
  98: "Possède une deuxième mâchoire cachée dans la gorge (comme le monstre du film Alien !). Quand la première attrape une proie, la deuxième avance et la tire vers l'estomac.",
  99: "Fourrure la plus dense du monde (150 000 poils par cm²) qui emprisonne des bulles d'air isolantes. Elle utilise des cailloux comme enclume posés sur son ventre pour briser les coquillages !",
  100: "La femelle peut pondre jusqu'à 300 millions d'œufs en une seule fois — record absolu chez les vertébrés ! Son corps aplati ressemble à une énorme tête de poisson sans queue.",
  101: "Ce n'est pas UN animal — c'est une colonie de milliers de clones ! Chaque zoïde a un rôle précis. Ensemble ils forment une ligne venimeuse et lumineuse pouvant mesurer 40 mètres !",
  102: "Ne ressent presque pas la douleur, résiste au manque d'oxygène et ne développe quasiment jamais de cancer. Vit en colonie avec une Reine — comme les abeilles. Longévité : 30 ans !",
  103: "16 types de cônes oculaires (contre 3 chez l'homme !) pour voir des couleurs invisibles. Ses pinces frappent à la vitesse d'une balle de pistolet, créant une chaleur aussi intense que le soleil !",
  104: "Un champignon prend le contrôle du cerveau de la fourmi, la force à grimper en haut d'une plante, puis pousse à travers sa tête pour libérer ses spores sur les fourmis en dessous !",
  105: "Être vivant d'une seule cellule géante, sans cerveau — mais capable d'apprendre, de mémoriser des chemins dans un labyrinthe et de transmettre ses connaissances à un autre Blob en fusionnant !",
  106: "Complètement aveugle, elle 'nage' littéralement dans le sable du désert. Elle repère ses proies en posant sa tête sur le sol pour écouter les vibrations grâce à des os de l'oreille géants.",
  107: "Vit sur les cheminées hydrothermales à 80°C au fond de l'océan. Son dos est recouvert d'un 'tapis' de bactéries qui lui servent de bouclier thermique isolant contre la chaleur extrême.",
  108: "Vit à plus de 3 000 m de profondeur. Ses deux nageoires qui ressemblent aux oreilles de Dumbo lui permettent de planer en douceur dans l'obscurité totale des abysses.",
  109: "Mange des méduses très venimeuses et récupère leurs cellules urticantes intactes pour les stocker au bout de ses 'doigts'. Il s'en sert ensuite comme d'une arme défensive surpuissante !",
  110: "Seul insecte connu capable de soigner ses blessés ! Après une bataille contre les termites, les infirmières ramènent les blessés au nid et lèchent leurs plaies en sécrétant des antibiotiques.",
  111: "Le mâle déploie son abdomen coloré comme la queue d'un paon et exécute une danse très complexe en tapant le sol pour créer des vibrations musicales afin de séduire la femelle.",
  112: "Possède une usine chimique dans l'abdomen. En cas d'attaque, il mélange deux produits qui créent une explosion et projette un jet de liquide brûlant à 100°C sur son assaillant !",
  113: "Son ventre et ses pattes sont totalement transparents comme du verre. En regardant par-dessous, on peut voir son cœur rouge battre et tous ses organes fonctionner en direct !",
  114: "Sa peau est sillonnée de micro-canaux : quand il marche dans la rosée ou sur du sable humide, l'eau remonte le long de ses pattes directement jusqu'à sa bouche par capillarité !",
  115: "Peut courir littéralement sur l'eau ! Grâce à des franges sous ses longs doigts et en frappant très vite, il crée des poches d'air qui l'empêchent de couler sur plusieurs mètres.",
  116: "Imite parfaitement les cris d'alarme des suricates pour leur faire croire à un danger. Quand ils lâchent leur repas et s'enfuient, le Drongo descend tranquillement voler leur nourriture !",
  117: "Le mâle construit une cabane de brindilles et décore le sol avec des objets triés par couleur (souvent bleus : baies, capsules, fleurs) pour séduire la femelle. Un vrai décorateur d'intérieur !",
  118: "Les poussins ont deux griffes au bout des ailes pour escalader les arbres ! Son estomac fonctionne comme celui des vaches (fermentation des feuilles), ce qui lui donne une odeur très forte.",
  119: "Ses pattes imitent exactement des pétales de fleurs roses. Elle pratique un mimétisme si parfait que les papillons et abeilles viennent se poser directement sur elle par erreur !",
  120: "Ressemble à un rocher couvert d'algues. Son dos est armé de 13 épines reliées à du venin neurotoxique mortel qui s'activent instantanément si quelqu'un pose le pied dessus !",
  121: "Ses vertèbres cervicales ne sont pas soudées, ce qui lui permet de tourner la tête à 90° pour slalomer entre les arbres inondés de la forêt amazonienne — impossible pour un dauphin de mer !",
  122: "Horloge biologique incroyable : les larves vivent exactement 13 ou 17 ans sous terre. Elles sortent par millions en même temps — un nombre premier pour déjouer leurs prédateurs !",
  123: "Récolteur d'eau du brouillard. Le matin, il incline son corps face au vent et les bosses de sa carapace captent les micro-gouttes de brume qui glissent jusqu'à sa bouche !",
  124: "Les œufs sont déposés sur le dos de la femelle et enfermés dans des alvéoles sous sa peau. Les bébés se développent là et sortent tout formés directement à travers la peau de leur maman !",
  125: "Utilise des outils ! Elle récupère des moitiés de noix de coco, les transporte en marchant sur deux pattes, et s'enferme à l'intérieur comme dans une boîte blindée en cas de danger.",
  126: "Quand elle est attaquée, elle expulse par son anus ses propres organes qui se transforment en filaments collants et toxiques pour emprisonner le prédateur. Ses organes repoussent ensuite !",
  127: "Seul céphalopode à avoir conservé sa coquille externe. Elle est divisée en chambres remplies de gaz qu'il utilise comme les ballasts d'un sous-marin pour monter ou descendre dans l'eau.",
  128: "Imite non seulement la couleur d'une feuille, mais aussi ses nervures et ses taches de maladie. Pour parfaire l'illusion, il oscille d'avant en arrière comme une feuille dans le vent !",
  129: "Plus grand imitateur sonore du monde. Il intègre à son chant : cris d'autres oiseaux, bruit de tronçonneuse, obturateur d'appareil photo, alarme de voiture... avec une fidélité parfaite !",
  130: "Il guide les chasseurs humains jusqu'aux ruches sauvages avec un cri spécial. Une fois que l'homme a récolté le miel, l'oiseau descend manger la cire et les larves laissées en récompense !",
  131: "Coud des feuilles vivantes entre elles pour construire son nid. Pour la 'colle', les adultes pressent leurs propres larves contre les feuilles pour en faire sortir de la soie collante ultra-résistante !",
  132: "Seul perroquet de montagne (il vit dans la neige en Nouvelle-Zélande !). Il résout des casse-têtes complexes à plusieurs étapes et démonte les joints en caoutchouc des voitures des touristes.",
  133: "Son cœur bat jusqu'à 1 200 fois par minute ! Elle doit manger l'équivalent de son poids en insectes chaque jour — sinon elle meurt de faim en quelques heures seulement.",
  134: "Projette par ses glandes anales un liquide au parfum si pestilentiel qu'il peut aveugler temporairement un lion et se sent à des kilomètres. L'odeur la plus nauséabonde de la planète !",
  135: "Donne toujours naissance à des quadruplets génétiquement identiques ! Peut bloquer sa respiration 6 minutes pour marcher directement au fond des rivières et les traverser à pied.",
  136: "Peut mesurer jusqu'à 1,80 m ! Sans poumons fonctionnels à l'âge adulte, il respire entièrement à travers sa peau ridée et visqueuse qui absorbe l'oxygène directement dans l'eau.",
  137: "Ses mandibules géantes ramifiées (comme des bois de cerf) ne servent pas à manger — ce sont des armes de lutte pour faire basculer les adversaires en bas des branches d'arbre !",
  138: "Vit toute sa vie au-dessus de l'océan Atlantique. Les parents retrouvent chaque année leur même terrier sur une île grâce à une carte olfactive des vents marins mémorisée.",
  139: "Son ombrelle peut mesurer 2 m de diamètre, et ses tentacules urticants s'étirent jusqu'à 37 mètres (plus long qu'une baleine bleue !) formant un filet de chasse géant mortel.",
  140: "Utilise des pierres comme enclumes pour casser des noix de cajou. Il frotte sa fourrure avec des insectes écrasés ou des plantes médicinales comme un répulsif anti-moustiques naturel !",
  141: "Son métabolisme est si lent qu'il lui faut un mois entier pour digérer une seule feuille ! Sa fourrure abrite un écosystème de micro-algues vertes qui le camouflent dans la canopée.",
  142: "Ses muscles élastiques géants lui permettent de sauter 2 mètres de haut sans élan pour attraper des insectes en plein vol. Ses yeux de hibou voient parfaitement dans le noir.",
  143: "Ses chevilles pivotent à 180°, ce qui lui permet de descendre des arbres la tête la première (comme un écureuil !) pour chasser les lémuriens à toute vitesse dans la canopée.",
  144: "Ses dents triangulaires s'emboîtent comme des lames de rasoir. Contrairement à la légende, il vit en groupe principalement pour se protéger des prédateurs (dauphins roses, caïmans).",
  145: "C'est la FEMELLE (sans ailes) qui brille d'une lumière verte fixe la nuit pour indiquer sa position aux mâles qui volent au-dessus. Ne pas confondre avec la luciole (le mâle vole mais ne brille pas !)."
};
ANIMALS.forEach(a => { if (SUPERPOWER_MAP[a.id]) a.superpower = SUPERPOWER_MAP[a.id]; });