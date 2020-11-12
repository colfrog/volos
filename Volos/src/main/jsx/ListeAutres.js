import ListeAnnonces from '/Volos/components/ListeAnnonces.js';

/*
 * Injecte toutes les CarteAnnonce d'annonces de type "AUTRE" dans la page
 */
var domContainer = document.querySelector('#liste_autres');
ReactDOM.render(<ListeAnnonces fetcher={(callback) => {
    fetch('/Volos/api/showAutres')
        .then(data => data.json())
        .then(callback);
}}/>, domContainer);