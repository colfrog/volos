import ListeAnnonces from '/Volos/components/ListeAnnonces.js';

/*
 * Injecte toutes les CarteAnnonce d'annonces ajoutées comme favori par l'utilisateur
 */
var domContainer = document.querySelector('#liste_favoris');
ReactDOM.render(<ListeAnnonces fetcher={(callback) => {
    fetch('/Volos/api/loggedUtilisateur')
        .then(data => data.json())
        .then(utilisateur => {
            fetch('/Volos/api/favoris?cip='+utilisateur.cip)
                .then(data => data.json())
                .then(callback);
        });
}}/>, domContainer);