# DevParis Radar

DevParis Radar est une application React qui permet d’explorer des lieux liés à la technologie, à l’innovation, aux fablabs, au coworking et au numérique autour de Paris.

Les données proviennent de l’API OpenData Paris et sont affichées sous forme de cartes ainsi que sur une carte interactive Leaflet.

## Application en ligne

L’application est accessible ici :

[Voir DevParis Radar](https://devparis-radar-react.netlify.app)

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
- Vitest
- CSS responsive
- ESLint
- Netlify

## Installation

Clone le dépôt :

```bash
git clone https://github.com/victormetral/devparis-radar-react.git
```

Entre dans le dossier :

```bash
cd devparis-radar-react
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

### Lancer les tests

```bash
npm test
```

### Lancer les tests en mode surveillance

```bash
npm run test:watch
```

### Vérifier le code avec ESLint

```bash
npm run lint
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

## Tests

Les tests sont réalisés avec Vitest.

Ils vérifient les fonctions principales de traitement des données.

### `preparerAffichageLieux.test.js`

- extraction des valeurs uniques ;
- suppression des valeurs vides ;
- pagination ;
- gestion d’une liste vide.

### `formaterLieu.test.js`

- transformation d’une donnée brute de l’API ;
- création des coordonnées ;
- utilisation des valeurs par défaut.

### `filtrerLieux.test.js`

- recherche textuelle ;
- filtre par commune et état ;
- filtre par catégorie.

Pour lancer tous les tests :

```bash
npm test
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
│   ├── tests/
│   │   ├── filtrerLieux.test.js
│   │   ├── formaterLieu.test.js
│   │   └── preparerAffichageLieux.test.js
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

## Déploiement

L’application est construite avec Vite et déployée sur Netlify.

- Commande de build : `npm run build`
- Dossier publié : `dist`

## Auteur

Victor Metral