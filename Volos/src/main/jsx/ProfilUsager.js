import Profil from '/Volos/components/Profil.js';
import ListeAnnonces from '/Volos/components/ListeAnnonces.js';

class ProfilUsager extends React.Component {
    render() {
        return (
            <div className="profilusager">
                <Profil cip={this.props.cip} />
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
            </div>
        )
    }
}

const params = new URLSearchParams(window.location.search);
var domContainer = document.querySelector('#profil_utilisateur');
ReactDOM.render(<ProfilUsager cip={params.get('cip')}/>, domContainer);