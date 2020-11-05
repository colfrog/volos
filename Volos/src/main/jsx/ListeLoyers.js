import ListeAnnonces from '/Volos/components/ListeAnnonces.js';

var domContainer = document.querySelector('#liste_loyers');
ReactDOM.render(<ListeAnnonces fetcher={(callback) => {
    fetch('/Volos/api/showLoyers')
        .then(data => data.json())
        .then(callback);
}}/>, domContainer);