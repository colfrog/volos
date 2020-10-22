class Auteur extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            prenom: this.props.prenom,
            nom: this.props.nom
        }
    }

    render(){
        return (
            <div>
                - {this.state.prenom} {this.state.nom}
            </div>
        );
    }
}

class Livre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userCip: this.props.userCip,
            cip: this.props.cip,
            id: this.props.id,
            description: this.props.description,
            prix: this.props.prix,
            dateAffichage: this.props.dateAffichage,
            titre: this.props.titre,
            resume: this.props.resume,
            maisonEdition: this.props.maisonEdition,
            datePublication: this.props.datePublication,
            auteurs: [],
            estFavori: this.props.estFavori
        };
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

class ListeLivres extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentUserCip: this.props.currentUserCip,
                    livres: []};

        this.updateFavoris();
    }

    // fetch la liste de favoris, creer un objet favori chaque, ajouter au state
    updateFavoris() {
        fetch('/Volos/api/loggedUtilisateur')
            .then(data => data.json())
            .then(utilisateur => {
                this.setState({currentUserCip: utilisateur.cip});
            });

        fetch('/Volos/api/showLivres')
            .then(data => data.json())
            .then(annonces => {
                let livres = [];
                annonces.forEach(annonce => {
                    let listeAuteurs = [];
                    let estFavori;

                    fetch(`/Volos/api/verifierFavori?cip=${this.state.currentUserCip}&id=${annonce.id}`)
                        .then(data => data.json())
                        .then(verif => {
                            estFavori = verif
                            console.log(estFavori);
                        });


                    annonce.auteurs.forEach(auteur => {
                        listeAuteurs.push(<Auteur key={auteur.prenom}
                                                  prenom={auteur.prenom}
                                                  nom={auteur.nom}
                        />)
                    });


                    livres.push(
                        <Livre key={annonce.id}
                                userCip={this.state.currentUserCip}
                                cip={annonce.cip}
                                id={annonce.id}
                                description={annonce.description}
                                prix={annonce.prix}
                                dateAffichage={annonce.dateAffichage}
                                titre={annonce.titre}
                                resume={annonce.resume}
                                maisonEdition={annonce.maisonEdition}
                                datePublication={annonce.datePublication}
                                auteurs={listeAuteurs}
                                estFavori={estFavori} />//modifier est favori pour vérifier si celui-cci est dans la liste de favoris
                    );
                });

                this.setState({livres: livres});
            });
    }

    render() {
        return (
            <div className="ListeLivres">{this.state.livres}</div>
        );
    }
}

var domContainer = document.querySelector('#liste_livres');
ReactDOM.render(<ListeLivres/>, domContainer);