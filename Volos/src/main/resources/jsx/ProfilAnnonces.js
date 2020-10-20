class Annonce extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            cip: this.props.cip,
            description: this.props.description,
            prix: this.props.prix,
            etat: this.props.etat,
            dateAffichage: this.props.dateAffichage,
            categorie: this.props.categorie
        };
    }

    render() {
        return (
            <div>dfdsfghdgfhdgh
            </div>
        );
    }
}

class listAnnonces extends React.Component {
    constructor(props) {
        super(props);

        this.state = {annonces: []};

        this.updateAnnonces();
    }

    updateAnnonces() {

    }

    render() {
        return (
            <div>{this.state.annonces}</div>
        );
    }
}

const domContainer = document.querySelector('#profil_annonces');
ReactDOM.render(<listAnnonces/>, domContainer);