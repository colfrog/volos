import Auteur from '/Volos/components/Auteur.js';

export default class Annonce extends React.Component {
    constructor(props) {
        super(props);

        let listeAuteurs = [];
        if(this.props.categorie === "LIVRE")
        {
            this.props.auteurs.forEach(auteur => {
                listeAuteurs.push(<Auteur key={listeAuteurs.length}
                                          prenom={auteur.prenom}
                                          nom={auteur.nom}
                />)
            });
        }

        this.state = {
            id: this.props.id,
            description: this.props.description,
            prix: this.props.prix,
            dateAffichage: this.props.dateAffichage,
            categorie: this.props.categorie,
            titre: this.props.titre,
            resume: this.props.resume,
            maisonEdition: this.props.maisonEdition,
            datePublication: this.props.datePublication,
            nbChambre: this.props.nbChambre,
            dateDebutLocation: this.props.dateDebutLocation,
            dateFinLocation: this.props.dateFinLocation,
            auteurs: this.props.auteurs,
            listeAuteurs: listeAuteurs
        };
    }

    render() {
        var resume = "", maisonEdition = "", datePublication = "", nbChambre = "", dateDebutLocation = "", dateFinLocation = "", auteurs = "";

        if(this.state.categorie === "LIVRE")
        {
            resume = <p>Résumé: {this.state.resume}</p>
            maisonEdition = <p>Maison d'édition: {this.state.maisonEdition}</p>
            datePublication = <p>Date de publication: {this.state.datePublication}</p>

            let listeAuteurs = this.state.listeAuteurs;
            if(this.state.auteurs.length > 1)
            {
                auteurs = <div>Auteurs: {listeAuteurs}</div>
            }
            else if (this.state.auteurs.length > 0)
            {
                auteurs = <div>Auteur: {listeAuteurs}</div>
            }
        }
        else if(this.state.categorie === "LOYER")
        {
            nbChambre = <p>Nombre de chambres: {this.state.nbChambre}</p>
            dateDebutLocation = <p>Date de début de location: {this.state.dateDebutLocation}</p>
            dateFinLocation = <p>Date de fin de location: {this.state.dateFinLocation}</p>
        }

        return (
            <div className="featured_card">
                <img src="https://i.imgur.com/gPEswtC.jpg" />
                {this.state.titre}
                <p>{this.state.description}</p>
                <p>{this.state.prix}$</p>
                <p>Date d'affichage: {this.state.dateAffichage}</p>
                <p>Catégorie: {this.state.categorie}</p>
                {resume}
                {maisonEdition}
                {datePublication}
                {auteurs}
                {nbChambre}
                {dateDebutLocation}
                {dateFinLocation}
            </div>
        );
    }
}