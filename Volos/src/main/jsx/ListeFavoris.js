import ListeAnnonces from '/Volos/components/ListeAnnonces.js';

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
ReactDOM.render(<ListeAnnonces fetcher={(callback) => {
    fetch('/Volos/api/loggedUtilisateur')
        .then(data => data.json())
        .then(utilisateur => {
            fetch('/Volos/api/favoris?cip='+utilisateur.cip)
                .then(data => data.json())
                .then(callback);
        });
}}/>, domContainer);