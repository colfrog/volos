import ListeAnnonces from '/Volos/components/ListeAnnonces.js';

var domContainer = document.querySelector('#profil_annonces');
ReactDOM.render(<ListeAnnonces fetcher={(callback) => {
    fetch('/Volos/api/showUtilisateurAnnonce')
        .then(data => data.json())
        .then(callback);
}}/>, domContainer);