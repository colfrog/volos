import Auteur from '/Volos/components/Auteur.js';

/*
 * Gère l'affichage long de l'annonce, peu importe le type
 */
export default class Annonce extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.id,
            description: this.props.description,
            prix: this.props.prix,
            dateAffichage: this.props.dateAffichage,
            categorie: this.props.categorie,
            hasPhoto: false,
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
            });

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

                let dateAffichage = "";
                let datePublication = "";
                let dateDebut = "";
                let dateFin = "";

                if(annonce.dateAffichage != null) {
                    dateAffichage = new Date(annonce.dateAffichage);
                    dateAffichage = dateAffichage.getDate() + "-" + (dateAffichage.getMonth()+1)
                        + "-" + dateAffichage.getFullYear();
                }
                if(annonce.datePublication != null) {
                    datePublication = new Date(annonce.datePublication);
                    datePublication = datePublication.getDate() + "-" + (datePublication.getMonth()+1)
                        + "-" + datePublication.getFullYear();
                }
                if(annonce.dateDebutLocation != null) {
                    dateDebut = new Date(annonce.dateDebutLocation);
                    dateDebut = dateDebut.getDate() + "-" + (dateDebut.getMonth()+1)
                        + "-" + dateDebut.getFullYear();
                }
                if(annonce.dateFinLocation != null) {
                    dateFin = new Date(annonce.dateFinLocation);
                    dateFin = dateFin.getDate() + "-" + (dateFin.getMonth()+1)
                        + "-" + dateFin.getFullYear();
                }

                fetch(`/Volos/api/hasPhoto?id=${annonce.id}`)
                    .then(data => data.json())
                    .then(hasPhoto => this.setState({hasPhoto: hasPhoto}));

                this.setState({
                    mail: annonce.cip + "@usherbrooke.ca",
                    id: annonce.id,
                    description: annonce.description,
                    prix: annonce.prix,
                    dateAffichage: dateAffichage,
                    categorie: annonce.categorie,
                    titre: annonce.titre,
                    resume: annonce.resume,
                    maisonEdition: annonce.maisonEdition,
                    datePublication: datePublication,
                    nbChambre: annonce.nombreChambre,
                    dateDebutLocation: dateDebut,
                    dateFinLocation: dateFin,
                    listeAuteurs: listeAuteurs});
            });
    }

    render() {
        let resume = "", maisonEdition = "", datePublication = "", nbChambre = "",
            dateDebutLocation = "", dateFinLocation = "", auteurs = "", image="images/autre.jpg";

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

            image="images/livre.jpg"
        }
        else if(this.state.categorie === "LOYER")
        {
            nbChambre = <p>Nombre de chambres: {this.state.nbChambre}</p>
            dateDebutLocation = <p>Date de début de location: {this.state.dateDebutLocation}</p>
            dateFinLocation = <p>Date de fin de location: {this.state.dateFinLocation}</p>
            image="images/loyer.jpg"
        }

        if (this.state.hasPhoto)
            image = `/Volos/api/photo?id=${this.state.id}`;

        var subjectMail = "Offre Volos";
        var bodyMail = "Bonjour,\n" +
                    this.state.prenom + " " + this.state.nom + " est intéressé par l'annonce suivante:\n" +
                    "Titre: " + this.state.titre + "\n" +
                    "Description: " + this.state.description + "\n" +
                    "Prix: " + this.state.prix + "\n" +
                    "Date d'affichage: " + this.state.dateAffichage + "\n" +
                    "Catégorie: " + this.state.categorie;

        return (
            <div className="annonceContainer">
                <div className="annonceContainer_box">
                    <span className="annonceContainerLeft">
                        <img className="imageAffichageAnnonce" src={image} />
                    </span>
                    <span className="annonceContainerRight">
                        <div className="annonceTitreContainer">
                            <h2>{this.state.titre}</h2>
                        </div>
                        <div className="annonceInfoContainer">
                            <p>{this.state.description}</p>
                            <p>Prix: {this.state.prix}$</p>
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
                                        {this.state.mail}</a></p>
                        </div>
                    </span>
                </div>
            </div>
        );
    }
}