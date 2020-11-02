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
        annonces.forEach(annonce => {
            cartesAnnonce.push(<CarteAnnonce key={annonce.id}
                                                   id={annonce.id}
                                                   cip={annonce.cip}
                                                   description={annonce.description}
                                                   prix={annonce.prix}
                                                   titre={annonce.titre}
            />);
        });

        this.setState({annonces: cartesAnnonce});
    }

    render() {
        return (
            <div>{this.state.annonces}</div>
        );
    }
}