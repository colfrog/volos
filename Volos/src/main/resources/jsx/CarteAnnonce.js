export default class CarteAnnonce extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userCip: this.props.userCip,
            id: this.props.id,
            description: this.props.description,
            prix: this.props.prix,
            titre: this.props.titre,
            estFavori: false
        };

        fetch(`/Volos/api/verifierFavori?cip=${this.state.userCip}&id=${this.state.id}`)
            .then(data => data.json())
            .then(verif => {
                this.setState({estFavori:verif});
            });
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
                <a href={"Annonce.html?id="+this.state.id}>
                    <img src="https://i.imgur.com/gPEswtC.jpg" />
                    <p>{this.state.titre}</p>
                    <p>{this.state.description}</p>
                    <p className="price">{this.state.prix}</p>
                </a>
                {bouton}
            </div>
        );
    }
}