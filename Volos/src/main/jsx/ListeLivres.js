import ListeAnnonces from '/Volos/components/ListeAnnonces.js';

/*
 * Injecte toutes les CarteAnnonce d'annonces de type "LIVRE" dans la page
 */
var domContainer = document.querySelector('#liste_livres');
ReactDOM.render(<ListeAnnonces fetcher={(callback) => {
    fetch('/Volos/api/showLivres')
        .then(data => data.json())
        .then(callback);
}}/>, domContainer);
