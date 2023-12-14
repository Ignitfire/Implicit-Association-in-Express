# Présentation
Ce programme permet l execution et l'enregistrement de données pour une expérience d'intention comportementale explicite.
il tourne avec les langages, html, css, js. le framework nodeJS et les librairies express et ejs de nodeJS. 
Il a était concu avec l'éditeur VScode, éais devrait fonctionner avec tout type d'éditeur.

# Guide d'Installation
1- importer le projet et l'ouvrir dans un éditeur de code
Ici VScode
2- verifier que nodeJS est bien installé sur la machine, sinon l'installer à l'adresse: https://nodejs.org/en/download, puis verfier que nodeJS est disponible dqns le PATH systeme.
3- aller dans le terminal de VScode en bas de l'écran si ouvert sinon taper Ctrl+Shift+ù ou chercher dans la barre d'outils en haut et installez les packages necessaires avec les commandes:
npm install express --save
npm install ejs

# Guide d'utilisation
1-lancez le programme avec la commande "npm start", puis rendez-vous à l'adresse du serveur sur un navigateur.
Ici localhost:3000
2-Passez l'expérience en pensez à bien renseignez l'ID
3-A la fin de l'expérience les données du participant sont stockés aux format srting d'un objet JSON dans un fichier txt dans data au nom "participantID" ou l'ID correspond à l'ID renseignez précedemment.
