import Auteur from '/Volos/components/Auteur.js';

export default class Annonce extends React.Component {
    constructor(props) {
        super(props);

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
            listeAuteurs: this.props.listeAuteurs,

            mail: this.props.mail,
            prenom: this.props.prenom,
            nom: this.props.nom
        };

        this.updateAnnonce();
    }

    updateAnnonce() {
        let queryString = window.location.search;
        let urlParams = new URLSearchParams(queryString);

        fetch('/Volos/api/loggedUtilisateur')
            .then(data => data.json())
            .then(utilisateur => {
                this.setState({
                    nom: utilisateur.nom,
                    prenom: utilisateur.prenom
                })
            })

        fetch('/Volos/api/showPublishAnnonce?id='+urlParams.get('id'))
            .then(data => data.json())
            .then(annonce => {
                let listeAuteurs = [];
                if(annonce.categorie === "LIVRE")
                {
                    annonce.auteurs.forEach(auteur => {
                        listeAuteurs.push(<Auteur key={auteur.prenom}
                                                  prenom={auteur.prenom}
                                                  nom={auteur.nom}
                        />)
                    });
                }

                this.setState({
                    mail: annonce.cip + "@usherbrooke.ca",
                    id: annonce.id,
                    description: annonce.description,
                    prix: annonce.prix,
                    dateAffichage: annonce.dateAffichage,
                    categorie: annonce.categorie,
                    titre: annonce.titre,
                    resume: annonce.resume,
                    maisonEdition: annonce.maisonEdition,
                    datePublication: annonce.datePublication,
                    nbChambre: annonce.nombreChambre,
                    dateDebutLocation: annonce.dateDebutLocation,
                    dateFinLocation: annonce.dateFinLocation,
                    listeAuteurs: listeAuteurs});
            });
    }

    render() {
        var resume = "", maisonEdition = "", datePublication = "", nbChambre = "",
            dateDebutLocation = "", dateFinLocation = "", auteurs = "";

        if(this.state.categorie === "LIVRE")
        {
            resume = <p>Résumé: {this.state.resume}</p>
            maisonEdition = <p>Maison d'édition: {this.state.maisonEdition}</p>
            datePublication = <p>Date de publication: {this.state.datePublication}</p>

            let listeAuteurs = this.state.listeAuteurs;
            if(this.state.listeAuteurs.length > 1)
            {
                auteurs = <div>Auteurs: {listeAuteurs}</div>
            }
            else if (this.state.listeAuteurs.length > 0)
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

        var subjectMail = "Offre Volos";
        var bodyMail = "Bonjour,\n" +
                    this.state.prenom + " " + this.state.nom + " est intéresssé par l'annonce suivante:\n" +
                    "Titre: " + this.state.titre + "\n" +
                    "Description: " + this.state.description + "\n" +
                    "Prix: " + this.state.prix + "\n" +
                    "Date d'affichage: " + this.state.dateAffichage + "\n" +
                    "Catégorie: " + this.state.categorie;

        return (
            <div className="card">
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
                <p><a href={"mailto:" + this.state.mail +
                            "?subject=" + encodeURIComponent(subjectMail) +
                            "&body=" + encodeURIComponent(bodyMail)}>
                            Envoyer un mail à ce correspondant</a></p>
            </div>
        );
    }
}