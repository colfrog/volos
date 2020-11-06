import Profil from '/Volos/components/Profil.js';
import ListeAnnonces from '/Volos/components/ListeAnnonces.js';

class ProfilAnnonces extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cip: this.props.cip,
            prenom: null,
            nom: null,
            mail: null,
            nomFaculte: null,
            nomDepartement: null
        }

        if (this.state.cip !== null) {
            fetch(`/Volos/api/selectUtilisateurByCip?cip=${this.state.cip}`)
                .then(data => data.json())
                .then((utilisateur) => this.setState(utilisateur));
        } else {
            fetch('/Volos/api/loggedUtilisateur')
                .then(data => data.json())
                .then((utilisateur) => this.setState(utilisateur));
        }
    }

    render() {
        return (
            <div className="annoncesusager">
                <ListeAnnonces fetcher={(callback) => {
                    let req = null;
                    if (this.props.cip)
                        req = `/Volos/api/showPublished?cip=${this.props.cip}`;
                    else
                        req = '/Volos/api/showUtilisateurAnnonce';

                    fetch(req)
                        .then(data => data.json())
                        .then(callback);
                }}/>
            </div>
        )
    }
}

const params = new URLSearchParams(window.location.search);
var domContainer = document.querySelector('#profil_annonces');
ReactDOM.render(<ProfilAnnonces cip={params.get('cip')}/>, domContainer);