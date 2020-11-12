import Annonce from '/Volos/components/Annonce.js';

/*
 * Affiche l'annonce entière possédant l'ID dans les queryparams
 */
var domContainer = document.querySelector('#annonce');
ReactDOM.render(<Annonce/>, domContainer);