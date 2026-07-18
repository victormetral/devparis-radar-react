# DevParis Radar

DevParis Radar est une application React qui permet d’explorer des lieux liés à la technologie, à l’innovation, aux fablabs, au coworking et au numérique autour de Paris.

Les données proviennent de l’API OpenData Paris et sont affichées sous forme de cartes ainsi que sur une carte interactive Leaflet.

## Fonctionnalités

- Recherche par nom, adresse, commune, typologie ou description
- Filtres par commune, état et catégorie
- Compteurs par catégorie
- Pagination des résultats
- Sélection d’un lieu sur une carte interactive
- Liens vers le site, l’email ou le téléphone du lieu
- Interface responsive
- Accessibilité améliorée avec des attributs ARIA
- Gestion du chargement et des erreurs

## Technologies utilisées

- React
- JavaScript
- Vite
- Leaflet
- OpenStreetMap
- OpenData Paris
- CSS responsive
- ESLint

## Installation

Clone le dépôt :

```bash
git clone https://github.com/adatechschool/adataviz-react-victormetral.git
```

Entre dans le dossier :

```bash
cd adataviz-react-victormetral
```

Installe les dépendances :

```bash
npm install
```

Lance le projet en développement :

```bash
npm run dev
```

## Scripts disponibles

### Lancer le serveur de développement

```bash
npm run dev
```

### Créer la version optimisée

```bash
npm run build
```

Le projet construit est placé dans le dossier `dist`.

### Prévisualiser la version construite

```bash
npm run preview
```

### Vérifier le code avec ESLint

```bash
npm run lint
```

## Structure du projet

```text
src/
├── components/
│   ├── Card.jsx
│   ├── CategoryFilters.jsx
│   ├── Filters.jsx
│   ├── Hero.jsx
│   ├── Map.jsx
│   ├── Pagination.jsx
│   ├── ResultsHeader.jsx
│   └── ResultsSection.jsx
├── data/
│   └── categories.js
├── hooks/
│   ├── useFiltresLieux.js
│   └── useLieux.js
├── services/
│   └── lieuxApi.js
├── styles/
│   ├── cards.css
│   ├── filters.css
│   ├── global.css
│   ├── hero.css
│   ├── index.css
│   ├── layout.css
│   ├── map.css
│   ├── responsive.css
│   ├── results.css
│   └── variables.css
├── utils/
│   ├── determinerCategorieLieu.js
│   ├── filtrerLieux.js
│   ├── filtrerLieuxExploitables.js
│   ├── filtrerLieuxTech.js
│   ├── formaterLieu.js
│   └── preparerAffichageLieux.js
├── App.jsx
└── main.jsx
```

## Source des données

Les données sont récupérées depuis le jeu de données `arc_innovation` de la plateforme OpenData Paris.

L’application récupère les résultats par groupes de 100, puis :

1. formate les données ;
2. conserve les lieux liés à la technologie ;
3. retire les lieux incomplets ;
4. applique les filtres choisis par l’utilisateur ;
5. affiche les résultats sous forme de cartes et de marqueurs.

## Fonctionnement général

Le hook `useLieux` charge les données depuis l’API.

Le hook `useFiltresLieux` gère :

- la recherche ;
- les filtres ;
- les compteurs de catégories ;
- la pagination.

Les composants React s’occupent ensuite de l’affichage de l’interface.

## Accessibilité

L’application utilise notamment :

- `aria-label`
- `aria-controls`
- `aria-pressed`
- `aria-live`
- `aria-current`
- `role="status"`
- `role="alert"`

Ces attributs améliorent l’utilisation de l’application avec un lecteur d’écran et lors de la navigation au clavier.

## Auteur

Victor Metral