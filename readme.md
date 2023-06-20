## Test Technique - Projet Express.js et React.js avec TypeScript

### Backend - Express.js

Le backend est développé en utilisant Express.js. Le backend est configuré pour prendre en charge TypeScript, offrant ainsi un typage fort et des fonctionnalités avancées.

### Frontend - React.js

Le frontend est développé en utilisant React.js avec Create React App. TypeScript est utilisé pour fournir un typage fort et des avantages supplémentaires lors du développement.

#### Prérequis

- Node.js
- npm

#### Installation
```
cd back
npm install
npm run dev
```
```
cd front
npm install
npm run start
```

### Amélioration potentielle - Déporter la logique vers le backend

Dans une optique d'amélioration, je recommanderais de déporter la logique métier vers le backend. Actuellement, le frontend récupère les données brutes du backend et effectue le traitement et l'organisation des données. Cependant, il serait préférable de déplacer cette logique vers le backend afin de séparer les responsabilités et de favoriser un meilleur découplage.

Cela peut être réalisé en mettant en place des routes appropriées dans le backend pour fournir les données organisées au frontend. Le frontend n'aurait alors qu'à effectuer une requête vers ces routes pour obtenir les données prêtes à être affichées.

En déportant la logique vers le backend, nous obtenons les avantages suivants :

- Meilleure séparation des responsabilités entre le frontend et le backend.
- Réutilisation de la logique métier dans d'autres parties de l'application ou dans d'autres projets.
- Possibilité d'effectuer des opérations de traitement des données plus complexes et d'optimiser les performances côté serveur.

