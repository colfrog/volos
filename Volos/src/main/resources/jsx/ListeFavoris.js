class Favori extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cip: this.props.cip,
            id: this.props.id,
            titre: this.props.titre,
            description: this.props.description,
            prix: this.props.prix,
            estFavori: this.props.estFavori
        };
    }

    ajouter() {
        this.setState({estFavori: true});
        fetch(`/Volos/api/ajouter_favori?cip=${this.state.cip}&id=${this.state.id}`);
    }

    retirer() {
        this.setState({estFavori: false});
        fetch(`/Volos/api/retirer_favori?cip=${this.state.cip}&id=${this.state.id}`);
    }

    render() {
        let bouton = null;
        if (this.state.estFavori)
            bouton = <button onClick={this.retirer.bind(this)}>Retirer des favoris</button>;
        else
            bouton = <button onClick={this.ajouter.bind(this)}>Ajouter aux favoris</button>;

        return (
            <div className="card">
                <img src="https://i.imgur.com/gPEswtC.jpg" />
                <p>{this.state.titre}</p>
                <p>{this.state.description}</p>
                <p className="price">{this.state.prix}</p>
                {bouton}
            </div>
        );
    }
}

class ListeFavoris extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cip: this.props.cip,
                    prenom: this.props.prenom,
                    nom: this.props.nom,
                    favoris: []};

        this.updateFavoris();
    }

    // fetch la liste de favoris, creer un objet favori chaque, ajouter au state
    updateFavoris() {
        fetch('/Volos/api/loggedUtilisateur')
            .then(data => data.json())
            .then(utilisateur => {
                this.setState({cip: utilisateur.cip,
                    prenom: utilisateur.prenom,
                    nom: utilisateur.nom});

                fetch('/Volos/api/favoris?cip='+this.state.cip)
                    .then(data => data.json())
                    .then(annonces => {
                        let favoris = [];
                        annonces.forEach(annonce => {
                            favoris.push(
                                <Favori key={annonce.id} cip={this.state.cip} id={annonce.id}
                                        description={annonce.description} prix={annonce.prix}
                                        titre={annonce.titre} estFavori={true} />
                            );
                        });

                        this.setState({favoris: favoris});
                    });
            });
    }

    render() {
        return (
            <div className="ListeFavoris">{this.state.favoris}</div>
        );
    }
}

var domContainer = document.querySelector('#liste_favoris');
ReactDOM.render(<ListeFavoris/>, domContainer);