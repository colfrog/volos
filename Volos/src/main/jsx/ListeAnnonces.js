import CarteAnnonce from '/Volos/components/CarteAnnonce.js';

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
        let cartesAnnonce = [];
        fetch('/Volos/api/loggedUtilisateur')
            .then(data => data.json())
            .then(utilisateur => {
                annonces.forEach(annonce => {
                    cartesAnnonce.push(<CarteAnnonce key={annonce.id}
                                                     id={annonce.id}
                                                     cip={annonce.cip}
                                                     userCip={utilisateur.cip}
                                                     description={annonce.description}
                                                     prix={annonce.prix}
                                                     titre={annonce.titre}
                                                     etat={annonce.etat}
                    />);
                });

                this.setState({annonces: cartesAnnonce});
            });
    }

    render() {
        return (
            <div>{this.state.annonces}</div>
        );
    }
}