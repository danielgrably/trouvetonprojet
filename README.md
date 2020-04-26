# Trouvetonprojet

## Cadre :
Ce projet a été réalisé dans le cadre du module 4041 : Programmation Web, à l'ESIEA en 4A.  

## Equipe :
Daniel ELGRABLY, Sylvain GOBALASINGHAM et Antoine LESPARRE. 

## Le site :
URL du site : https://antonlsp-trouvetonprojet.glitch.me/ Par défaut, il existe un identifiant « admin », ayant pour mot de passe « 1234 ». 

## Consignes : 
Pour ce projet, nous devions programmer un site web avec HTML, CSS, JS (Vue.js) en frontend et Node.js (Express) en back-end. Sur la première page du site, l’utilisateur doit pouvoir se connecter. Par la suite, il doit pouvoir exécuter les interactions CRUD ( Créer/Lire/Mettre à jour/ Supprimer).  
Nous avons choisi de créer un site qui permet de chercher un projet (pour les PST par exemple), ou d’en proposer un aux autres étudiants. Ainsi, chaque étudiant peut se connecter à sa session. Une liste de projets lui est proposés. Il peut lire ces projets, rajouter un projet qu’il propose, le modifier, supprimer les projets qui ne l’intéressent pas. Tout ceci en utilisant les composants propres à Vuetify, disponibles sur le site : https://vuetifyjs.com/en. 

## Etapes conception :
Au démarrage du projet nous avons ajouté le serveur nodejs et axios. Nous avons commencé par la première page du site qui est celle de la connexion de l’utilisateur. Cette page défile sur trois slides ce à quoi sert le site trouvetonprojet.com. Il y’a deux possibilités lors de la connexion, soit l’utilisateur à déjà un compte, il s’y connecte. Sinon, il se le crée, en renseignant sa classe et sa filière.  
Ensuite, nous nous sommes occupés de ce qui se passe lorsqu’un utilisateur se connecte. Il peut regarder les projets existants et faire son choix. L’utilisateur peut également modifier son compte. Il s’agit de la parti CRUD du projet.
