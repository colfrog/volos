import ListeAnnonces from '/Volos/components/ListeAnnonces.js';

/*
 * Injecte un certain nombre de CarteAnnonce pour les annonces les plus
 * récentes de chaque catégorie d'annonce.
 */

function categorie_fetcher(categorie) {
    return (callback) => {
        fetch('/Volos/api/showNouveaux'+categorie)
            .then(data => data.json())
            .then(callback);
    }
}

var div_livres = document.querySelector('#nouveaux_livres');
ReactDOM.render(<ListeAnnonces fetcher={categorie_fetcher('Livres')} />, div_livres);

var div_loyers = document.querySelector('#nouveaux_loyers');
ReactDOM.render(<ListeAnnonces fetcher={categorie_fetcher('Loyers')} />, div_loyers);

var div_autres = document.querySelector('#nouveaux_autres');
ReactDOM.render(<ListeAnnonces fetcher={categorie_fetcher('Autres')} />, div_autres);