class Profil extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            cip: this.props.cip,
            prenom: this.props.prenom,
            nom: this.props.nom,
            mail: this.props.mail,
            faculte: this.props.faculte,
            departement: this.props.departement
        };

        fetch('/Volos/api/loggedUtilisateur')
            .then(data => data.json())
            .then(utilisateur => {
                this.setState({cip: utilisateur.cip,
                               prenom: utilisateur.prenom,
                               nom: utilisateur.nom,
                               mail: utilisateur.mail,
                               faculte: utilisateur.nomFaculte,
                               departement: utilisateur.nomDepartement});
            });
    }

    render() {
        return (
            <div>
                <p>Cip: {this.state.cip}</p>
                <p>Prénom: {this.state.prenom}</p>
                <p>Nom: {this.state.nom}</p>
                <p>Mail: {this.state.mail}</p>
                <p>Faculté: {this.state.faculte}</p>
                <p>Département: {this.state.departement}</p>
            </div>
        );
    }
}

const domContainer = document.querySelector('#profil_utilisateur');
ReactDOM.render(<Profil/>, domContainer);