class Loyer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cip: this.props.cip,
            id: this.props.id,
            description: this.props.description,
            prix: this.props.prix,
            dateAffichage: this.props.dateAffichage,
            titre: this.props.titre,
            nbChambre: this.props.nbChambre,
            dateDebutLocation: this.props.dateDebutLocation,
            dateFinLocation: this.props.dateFinLocation,
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

class ListeLoyers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {loyers: []};

        this.updateFavoris();
    }

    // fetch la liste de favoris, creer un objet favori chaque, ajouter au state
    updateFavoris() {
        fetch('/Volos/api/showLoyers')
            .then(data => data.json())
            .then(annonces => {
                let loyers = [];
                annonces.forEach(annonce => {
                    loyers.push(
                        <Loyer key={annonce.id}
                               cip={this.state.cip}
                               id={annonce.id}
                               description={annonce.description}
                               prix={annonce.prix}
                               dateAffichage={annonce.dateAffichage}
                               titre={annonce.titre}
                               nbChambre={annonce.nbChambre}
                               dateDebutLocation={annonce.dateDebutLocation}
                               dateFinLocation={annonce.dateFinLocation}
                               estFavori={false} />//modifier est favori pour vérifier si celui-cci est dans la liste de favoris
                    );
                });
                console.log(loyers);
                this.setState({loyers: loyers});
            });
    }

    render() {
        return (
            <div className="ListeLoyers">{this.state.loyers}</div>
        );
    }
}

var domContainer = document.querySelector('#liste_loyers');
ReactDOM.render(<ListeLoyers/>, domContainer);