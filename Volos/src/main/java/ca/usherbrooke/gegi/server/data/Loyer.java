package ca.usherbrooke.gegi.server.data;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.time.format.DateTimeFormatter;
import java.util.Date;

/**
 * Les données sur une annonce de la categorie Loyer de l'application
 * @author Iliass Bourabaa
 * @version 1.0
 */
public class Loyer extends Annonce{
    private int nbChambre;
    private Date dateDebutLocation;
    private Date dateFinLocation;

    /**
     * Constructeur par défault d'un loyer
     */
    public Loyer() {}

    /**
     * Constructeur avec en paramètre certains attributs d'un loyer
     */
    public Loyer(int id, int nbChambre,
                 Date dateDebutLocation, Date dateFinLocation) {
        setId(id);
        this.nbChambre = nbChambre;
        this.dateDebutLocation = dateDebutLocation;
        this.dateFinLocation = dateFinLocation;
    }

    public int getNombreChambre() {
        return nbChambre;
    }

    public void setNombreChambre(int nbChambre) {
        this.nbChambre = nbChambre;
    }

    public Date getDateDebutLocation() {
        return dateDebutLocation;
    }

    public void setDateDebutLocation(Date dateDebutLocation) {
        this.dateDebutLocation = dateDebutLocation;
    }

    public Date getDateFinLocation() {
        return dateFinLocation;
    }

    public void setDateFinLocation(Date dateFinLocation) {
        this.dateFinLocation = dateFinLocation;
    }

    /**
     * Affiche tous les paramètres d'un loyer
     * @return une chaine de caractère contenant les paramètre d'un loyer
     */
    @Override
    public String toString() {
        return "Loyer{" +
                "id=" + getId() +
                ", description='" + getDescription() + '\'' +
                ", prix='" + getPrix() + '\'' +
                ", etat='" + getEtat() + '\'' +
                ", dateAffichage='" + getDateAffichage() + '\'' +
                ", cip='" + getCip() + '\'' +
                ", categorie='" + getCategorie() + '\'' +
                ", titre='" + getTitre() + '\'' +
                ", nbChambre='" + nbChambre + '\'' +
                ", dateDebutLocation='" + dateDebutLocation + '\'' +
                ", dateFinLocation='" + dateFinLocation + '\'' +
                '}';
    }
}
