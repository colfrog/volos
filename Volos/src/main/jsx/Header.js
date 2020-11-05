//HEADER DU SITE
class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="barre">
                <nav>
                    <h1>Volos</h1>
                    <ul>
                        <li><a href="index.html">Accueil</a></li>
                        <div className="dropdown">
                            <button className="dropbtn">Categories</button>
                            <div className="dropdown-content">
                                <a href="Livres.html">Livres</a>
                                <a href="Loyer.html">Loyer</a>
                                <a href="Autres.html">Autres</a>
                            </div>
                        </div>
                        <li><a href="Profile.html">Profile</a></li>
                        <li><a href="mesFavoris.html">Voir mes favoris</a></li>
                        <li><a href="Ajouter.html">Ajouter une annonce</a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}
var domContainer = document.querySelector('#flagHeader');
ReactDOM.render(<Header/>, domContainer);