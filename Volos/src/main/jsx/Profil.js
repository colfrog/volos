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
            <span>
                <span className="profilLeftData1">
                    <p>Cip:</p>
                    <p>Prénom:</p>
                    <p>Nom:</p>
                    <p>Mail:</p>
                    <p>Faculté:</p>
                    <p>Département:</p>
                </span>
                <span className="profilLeftData2">
                    <p>{this.state.cip}</p>
                    <p>{this.state.prenom}</p>
                    <p>{this.state.nom}</p>
                    <p>{this.state.mail}</p>
                    <p>Génie</p>
                    <p>Électrique et Informatique</p>
                </span>
            </span>
        );
    }
}