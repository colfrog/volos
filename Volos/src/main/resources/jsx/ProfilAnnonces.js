class Annonce extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            description: this.props.description,
            prix: this.props.prix,
            dateAffichage: this.props.dateAffichage,
            categorie: this.props.categorie
        };
    }

    render() {
        return (
            <div>
                <p>Description: {this.state.description}</p>
                <p>Prix: {this.state.prix}</p>
                <p>Date d'affichage: {this.state.dateAffichage}</p>
                <p>Catégorie: {this.state.categorie}</p>
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
                annonces.forEach(annonce => {
                    utilisateurAnnonces.push(<Annonce key={annonce.id}
                                                      id={annonce.id}
                                                      description={annonce.description}
                                                      prix={annonce.prix}
                                                      dateAffichage={annonce.dateAffichage}
                                                      categorie={annonce.categorie} />);
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

const domContainer = document.querySelector('#profil_annonces');
ReactDOM.render(<ListeAnnonces/>, domContainer);