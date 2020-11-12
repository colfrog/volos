/*
 * Gère l'affichage d'un auteur
 */
export default class Auteur extends React.Component {
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
                - {this.state.prenom} {this.state.nom}
            </div>
        );
    }
}