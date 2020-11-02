export default class Profil extends React.Component {
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
            <div className="informationsusager">
                <p>Cip: {this.state.cip}</p>
                <p>Prénom: {this.state.prenom}</p>
                <p>Nom: {this.state.nom}</p>
                <p>Mail: {this.state.mail}</p>
                <p>Faculté: {this.state.nomFaculte}</p>
                <p>Département: {this.state.nomDepartement}</p>
            </div>
        );
    }
}