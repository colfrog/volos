export default class CarteAnnonce extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cip: this.props.cip,
            userCip: null,
            prenom: null,
            nom: null,
            id: this.props.id,
            description: this.props.description,
            prix: this.props.prix,
            titre: this.props.titre,
            estFavori: false
        };

        fetch('/Volos/api/loggedUtilisateur')
            .then(data => data.json())
            .then(utilisateur => {
                fetch(`/Volos/api/verifierFavori?cip=${utilisateur.cip}&id=${this.state.id}`)
                    .then(data => data.json())
                    .then(verif => {
                        this.setState({estFavori: verif, userCip: utilisateur.cip});
                    });
            });

        fetch(`/Volos/api/selectUtilisateurByCip?cip=${this.state.cip}`)
            .then(data => data.json())
            .then(utilisateur => {
                this.setState({prenom: utilisateur.prenom, nom: utilisateur.nom});
            });
    }

    ajouter() {
        this.setState({estFavori: true});
        fetch(`/Volos/api/ajouter_favori?cip=${this.state.userCip}&id=${this.state.id}`);
    }

    retirer() {
        this.setState({estFavori: false});
        fetch(`/Volos/api/retirer_favori?cip=${this.state.userCip}&id=${this.state.id}`);
    }

    render() {
        let boutonFavori = null, user = null;
        if (this.state.estFavori)
            boutonFavori = <button onClick={this.retirer.bind(this)}>Retirer des favoris</button>;
        else
            boutonFavori = <button onClick={this.ajouter.bind(this)}>Ajouter aux favoris</button>;

        if (this.state.prenom == null || this.state.nom == null)
            user = `par ${this.state.cip}`;
        else
            user = `par ${this.state.prenom} ${this.state.nom} (${this.state.cip})`;

        return (
            <div className="card">
                <img src="https://i.imgur.com/gPEswtC.jpg" />
                <p>{this.state.titre}</p>
                <p className="submitter">{user}</p>
                <p>{this.state.description}</p>
                <p className="price">{this.state.prix}$</p>
                {boutonFavori}
            </div>
        );
    }
}