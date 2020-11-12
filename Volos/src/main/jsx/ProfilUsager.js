import Profil from '/Volos/components/Profil.js';

class ProfilUsager extends React.Component {
    render() {
        return (
            <div className="profilusager">
                <Profil cip={this.props.cip} />
            </div>
        )
    }
}

// Injecte les informations de l'usager dans la page
const params = new URLSearchParams(window.location.search);
var domContainer = document.querySelector('#profil_utilisateur');
ReactDOM.render(<ProfilUsager cip={params.get('cip')}/>, domContainer);