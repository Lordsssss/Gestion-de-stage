# Mon Site Web - Stages Montmorency
Ce fichier README présente les fonctionnalités principales de notre site Web, qui est une plateforme permettant de gérer des stages pour les étudiants de Montmorency. Les utilisateurs peuvent s'inscrire, se connecter, chercher des stages, postuler à des offres de stage, et les employeurs peuvent publier des offres de stage et gérer les candidatures.

## Fonctionnalités principales
1. Inscription et connexion des utilisateurs
2. Gestion des offres de stage
3. Gestion des candidatures
4. Espace employeur
5. Espace étudiant
6. Liste des profils des stagiaires
7. FAQ
## Détails des fonctionnalités
### 1. Inscription et connexion des utilisateurs
Les utilisateurs peuvent s'inscrire en fournissant un email, un nom d'utilisateur, un mot de passe et un type d'utilisateur (étudiant ou employeur). Ils peuvent ensuite se connecter en utilisant leur email et leur mot de passe. Les informations d'authentification sont gérées par des tokens JWT.

### 2. Gestion des offres de stage
Les employeurs peuvent créer, mettre à jour et supprimer des offres de stage. Ils peuvent également consulter la liste de tous les stages disponibles et filtrer par propriétaire. Les stages incluent des informations telles que le nom du contact, l'email, le téléphone, le nom de l'entreprise, l'adresse, le type de stage, le titre, le nombre de positions, la description et le salaire.

### 3. Gestion des candidatures
Les étudiants peuvent postuler aux offres de stage en envoyant un email à l'employeur avec leur CV et lettre de motivation en pièces jointes. Les employeurs peuvent consulter la liste des candidatures pour chaque offre de stage et gérer les candidats.

### 4. Espace employeur
Les employeurs ont accès à un espace dédié où ils peuvent gérer leurs offres de stage et consulter la liste des candidatures pour chaque offre de stage.

### 5. Espace étudiant
Les étudiants ont accès à un espace dédié où ils peuvent consulter la liste des offres de stage disponibles et postuler en envoyant un email à l'employeur avec leur CV et lettre de motivation en pièces jointes.

### 6. Liste des profils des stagiaires
Les employeurs peuvent consulter la liste des profils des étudiants inscrits sur la plateforme pour les aider à sélectionner les candidats les plus adaptés à leurs offres de stage.

### 7. FAQ
Une section FAQ est disponible pour répondre aux questions fréquemment posées par les utilisateurs.

## Technologies utilisées
* React.js pour le développement frontend
* Node.js et Express.js pour le développement backend
* MongoDB pour la base de données
* JWT pour la gestion de l'authentification
* Multer pour le téléchargement de fichiers
* Nodemailer pour l'envoi d'emails

## Comment démarrer
- Clonez ce dépôt
- Installez les dépendances en utilisant ```npm install```
- Démarrez le serveur backend en utilisant ```npm run start:server```
- Démarrez le serveur frontend en utilisant ```npm run start```
- Ouvrez votre navigateur et accédez à ```http://localhost:3000```