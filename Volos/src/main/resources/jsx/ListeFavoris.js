class Favori extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cip: this.props.cip,
            id: this.props.id,
            description: this.props.description,
            prix: this.props.prix
        };
    }

    render() {
        return (
            <div>{this.state.description}: {this.state.prix}$</div>
        );
    }
}

class ListeFavoris extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cip: this.props.cip, favoris: []};

        this.updateFavoris();
    }

    // fetch la liste de favoris, creer un objet favori chaque, ajouter au state
    updateFavoris() {
        fetch('/Volos/api/favoris?cip='+this.state.cip)
            .then(data => data.json())
            .then(annonces => {
                let favoris = [];
                annonces.forEach(annonce => {
                    favoris.push(<Favori key={annonce.id} cip={this.state.cip} id={annonce.id} description={annonce.description} prix={annonce.prix} />);
                });

                this.setState({favoris: favoris});
            });
    }

    render() {
        return (
            <div>{this.state.favoris}</div>
        );
    }
}

var domContainer = document.querySelector('#liste_favoris');
ReactDOM.render(<ListeFavoris cip="durp0701" />, domContainer);
