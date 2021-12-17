# BACKEND

### Prérequis
 * PHP v7.4.22
 * XAMPP ou WAMP serveur

***
### Démarrer un serveur de développement
```server:run
php -S localhost:8000 -t public
```
***
### Configuration et commande base des données
- création base des données
```création base de données
bin/console d:d:c
```
```création base de données
bin/console d:s:u -f
```
- générer une fausse 
```création base de données
bin/console d:f:l -n
```

# FRONTEND

***
### Démarrer un serveur
```server:run
yarn start
```
```server:run
npm start
```

### remarque
- Le connexion internet est indisposable pour que le style de ce site est parfaitement marché
- Il y a l'utilisatuer par default, avec email `zaho@zaho.fr` et le mot de passe `12345`
