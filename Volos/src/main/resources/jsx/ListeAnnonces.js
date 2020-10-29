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
        let utilisateurAnnonces = [];
        fetch('/Volos/api/loggedUtilisateur')
            .then(data => data.json())
            .then(utilisateur => {

                annonces.forEach(annonce => {
                            utilisateurAnnonces.push(<CarteAnnonce key={annonce.id}
                                                                   userCip={utilisateur.cip}
                                                                   id={annonce.id}
                                                                   description={annonce.description}
                                                                   prix={annonce.prix}
                                                                   titre={annonce.titre}
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