package ca.usherbrooke.gegi.server.data;

import java.text.SimpleDateFormat;
import java.util.Date;

/**
 * Les données sur une annonce de l'application
 * @author Iliass Bourabaa
 * @version 1.0
 */
public class Annonce {
    private int id;
    private String titre;
    private String description;
    private float prix;
    private int etat; //Etats d'annonce disponibles: 0 = PUBLIÉ, 1 = FERMÉ, 2 = VENDU
    private Date dateAffichage;
    private String cip;
    private String categorie; //Types d'annonce disponibles: 'LIVRE', 'LOYER', 'AUTRE'

    /**
     * Constructeur par défault d'une annonce
     */
    public Annonce() {}

    /**
     * Constructeur avec en paramètre les attributs d'une annonce
     */
    public Annonce(int id, String cip, String titre, String description, float prix,
                   int etat, Date dateAffichage, String categorie){
        this.id = id;
        this.cip = cip;
        this.titre = titre;
        this.description = description;
        this.prix = prix;
        this.etat = etat;
        this.dateAffichage = dateAffichage;
        this.categorie = categorie;
    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public float getPrix() {
        return prix;
    }

    public void setPrix(float prix) {
        this.prix = prix;
    }

    public int getEtat() {
        return etat;
    }

    public void setEtat(int etat) {
        this.etat = etat;
    }

    public Date getDateAffichage() {
        return dateAffichage;
    }

    public void setDateAffichage(Date dateAffichage) {
        this.dateAffichage = dateAffichage;
    }

    public String getCip() {
        return cip;
    }

    public void setCip(String cip) {
        this.cip = cip;
    }

    public String getCategorie() {
        return categorie;
    }

    public void setCategorie(String categorie) {
        this.categorie = categorie;
    }

    public void setEnfant(Annonce annonce) {
        this.id = annonce.id;
        this.titre = annonce.titre;
        this.description = annonce.description;
        this.prix = annonce.prix;
        this.etat = annonce.etat;
        this.dateAffichage = annonce.dateAffichage;
        this.cip = annonce.cip;
        this.categorie = annonce.categorie;
    }

    /**
     * Affiche tous les paramètres d'une annonce
     * @return une chaine de caractère contenant les paramètre d'une annonce
     */
    @Override
    public String toString() {
        return "Annonce{" +
                "id=" + id +
                ", titre='" + titre + '\'' +
                ", description='" + description + '\'' +
                ", prix='" + prix + '\'' +
                ", etat='" + etat + '\'' +
                ", dateAffichage='" + dateAffichage + '\'' +
                ", cip='" + cip + '\'' +
                ", categorie='" + categorie + '\'' +
                '}';
    }
}
