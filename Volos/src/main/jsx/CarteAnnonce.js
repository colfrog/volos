export default class CarteAnnonce extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cip: this.props.cip,
            userCip: this.props.userCip,
            prenom: null,
            nom: null,
            id: this.props.id,
            description: this.props.description,
            prix: this.props.prix,
            titre: this.props.titre,
            etat: this.props.etat,
            estFavori: false
        };

        fetch(`/Volos/api/verifierFavori?cip=${this.state.userCip}&id=${this.state.id}`)
            .then(data => data.json())
            .then(verif => {
                this.setState({estFavori: verif});
            });

        fetch(`/Volos/api/selectUtilisateurByCip?cip=${this.state.cip}`)
            .then(data => data.json())
            .then(utilisateur => {
                this.setState({prenom: utilisateur.prenom, nom: utilisateur.nom});
            });
    }

    ajouterFavori() {
        this.setState({estFavori: true});
        fetch(`/Volos/api/ajouter_favori?cip=${this.state.userCip}&id=${this.state.id}`);
    }

    retirerFavori() {
        this.setState({estFavori: false});
        fetch(`/Volos/api/retirer_favori?cip=${this.state.userCip}&id=${this.state.id}`);
    }

    ouvrir() {
        fetch(`/Volos/api/openAnnonce?id=${this.state.id}`);
        this.setState({etat: 0});
    }

    fermer() {
        fetch(`/Volos/api/cancelAnnonce?id=${this.state.id}`);
        this.setState({etat: 1});
    }

    vendue() {
        fetch(`/Volos/api/annonceVendue?id=${this.state.id}`);
        this.setState({etat: 2});
    }

    render() {
        let boutonFavori = null, user = null, etat = null;
        if (this.state.userCip != this.state.cip) {
            if (this.state.estFavori)
                boutonFavori = <button onClick={this.retirerFavori.bind(this)}>Retirer des favoris</button>;
            else
                boutonFavori = <button onClick={this.ajouterFavori.bind(this)}>Ajouter aux favoris</button>;
        }

        if (this.state.prenom == null || this.state.nom == null)
            user = `par ${this.state.cip}`;
        else
            user = `par ${this.state.prenom} ${this.state.nom} (${this.state.cip})`;

        var boutonsEtat = null;
        if (this.state.userCip == this.state.cip) {
            var boutonOuvrir = <button onClick={this.ouvrir.bind(this)}>Réouvrir l'annonce</button>;
            var boutonFermer = <button onClick={this.fermer.bind(this)}>Fermer l'annonce</button>;
            var boutonVendue = <button onClick={this.vendue.bind(this)}>Signaler comme vendue</button>;

            if (this.state.etat == 0)
                boutonsEtat = <div className="boutons_etat">{boutonFermer}{boutonVendue}</div>;
            else
                boutonsEtat = <div className="boutons_etat">{boutonOuvrir}</div>;
        }

        if (this.state.etat == 1)
            etat = <p className="texteFerme">FERMÉ</p>;
        if (this.state.etat == 2)
            etat = <p className="texteVendu">VENDU</p>;

        return (
            <div className="card">
                <img src="https://i.imgur.com/gPEswtC.jpg" />
                <a href={"Annonce.html?id="+this.state.id}>
                    <p>{this.state.titre}</p>
                </a>
                <a href={"Profile.html?cip="+this.state.cip}>
                    <p className="submitter">{user}</p>
                </a>
                <p>{this.state.description}</p>
                <p className="price">{this.state.prix}$</p>
                {boutonFavori}
                {boutonsEtat}
                {etat}
            </div>
        );
    }
}