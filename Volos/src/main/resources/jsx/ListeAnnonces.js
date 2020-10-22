import Annonce from '/Volos/components/Annonce.js';

export default class ListeAnnonces extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            annonces: []
        };

        this.fetcher = this.props.fetcher;
        this.fetcher(this.updateListeAnnonces.bind(this));
    }

    updateListeAnnonces(annonces) {
        let utilisateurAnnonces = [];
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
                                              auteurs={annonce.auteurs}
            />);
        });

        this.setState({annonces: utilisateurAnnonces});
    }

    render() {
        return (
            <div>{this.state.annonces}</div>
        );
    }
}