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
                <p>Prénom: {this.state.prenom}</p>
                <p>Nom: {this.state.nom}</p>
            </div>
        );
    }
}

class Annonce extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            description: this.props.description,
            prix: this.props.prix,
            dateAffichage: this.props.dateAffichage,
            categorie: this.props.categorie,
            titre: this.props.titre,
            resume: this.props.resume,
            maisonEdition: this.props.maisonEdition,
            datePublication: this.props.datePublication,
            nbChambre: this.props.nbChambre,
            dateDebutLocation: this.props.dateDebutLocation,
            dateFinLocation: this.props.dateFinLocation,
            auteurs: []
        };

        /*if(this.props.categorie === "LIVRE")
        {
            fetch('/Volos/api/showUtilisateurAnnonce')
                .then(data => data.json())
                .then(annonce => {
                    let listeAuteur = [];
                    annonce.auteurs.forEach(auteur => {
                        utilisateurAnnonces.push(<Auteur key={auteur.id}
                                                         prenom={auteur.prenom}
                                                         nom={auteur.nom}/>);
                    });
                    this.setState({auteurs: listeAuteur});
                });
        }*/
    }

    render() {
        var titre = "", resume = "", maisonEdition = "", datePublication = "", nbChambre = "", dateDebutLocation = "", dateFinLocation = "";

        if(this.state.categorie === "LIVRE")
        {
            titre = <p>Titre: {this.state.titre}</p>
            resume = <p>Résumé: {this.state.resume}</p>
            maisonEdition = <p>Maison d'édition: {this.state.maisonEdition}</p>
            datePublication = <p>Date de publication: {this.state.datePublication}</p>
            /*for (let i = 1; i <= auteur.length + 1; i++)
            {
                <p>Auteur {i}:</p>
                {this.state.auteurs[i - 1]}
            }*/
        }
        else if(this.state.categorie === "LOYER")
        {
            titre = <p>Titre: {this.state.titre}</p>
            nbChambre = <p>Nombre de chambres: {this.state.nbChambre}</p>
            dateDebutLocation = <p>Date de début de location: {this.state.dateDebutLocation}</p>
            dateFinLocation = <p>Date de fin de location: {this.state.dateFinLocation}</p>
        }

        return (
            <div>
                <p>Description: {this.state.description}</p>
                <p>Prix: {this.state.prix}</p>
                <p>Date d'affichage: {this.state.dateAffichage}</p>
                <p>Catégorie: {this.state.categorie}</p>
                {titre}
                {resume}
                {maisonEdition}
                {datePublication}
                {nbChambre}
                {dateDebutLocation}
                {dateFinLocation}
            </div>
        );
    }
}

class ListeAnnonces extends React.Component {
    constructor(props) {
        super(props);
        this.state = {annonces: []};

        this.updateAnnonces();
    }

    updateAnnonces() {
        fetch('/Volos/api/showUtilisateurAnnonce')
            .then(data => data.json())
            .then(annonces => {
                let utilisateurAnnonces = [];
                let listeAuteurs = [];
                annonces.forEach(annonce => {
                    utilisateurAnnonces.push(<Annonce key={annonce.id}
                                                      id={annonce.id}
                                                      description={annonce.description}
                                                      prix={annonce.prix}
                                                      dateAffichage={annonce.dateAffichage}
                                                      categorie={annonce.categorie}
                                                      titre={annonce.titre}
                                                      resume={annonce.resume}
                                                      maisonEdition={annonce.maisonEdition}
                                                      datePublication={annonce.datePublication}
                                                      nbChambre={annonce.nbChambre}
                                                      dateDebutLocation={annonce.dateDebutLocation}
                                                      dateFinLocation={annonce.dateFinLocation}

                                                      /*auteurs={annonce.auteurs.forEach(auteur => {
                                                          listeAuteurs.push(<Auteur key={auteur.id}
                                                                                    prenom={auteur.prenom}
                                                                                    nom={auteur.nom}
                                                          />)}
                                                      )}*/
                                                      //this.setState({auteurs: listeAuteurs})
                    />);
                });
                this.setState({annonces: utilisateurAnnonces});
            });
    }

    render() {
        return (
            <div>{this.state.annonces}</div>
        );
    }
}

var domContainer = document.querySelector('#profil_annonces');
ReactDOM.render(<ListeAnnonces/>, domContainer);