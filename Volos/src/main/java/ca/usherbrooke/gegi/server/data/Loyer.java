package ca.usherbrooke.gegi.server.data;

import java.util.Date;

public class Loyer extends Annonce{
    private String titre;
    private int nbChambre;
    private Date dateDebutLocation;
    private Date dateFinLocation;

    public Loyer() {}

    public Loyer(int id, String titre, int nbChambre,
                 Date dateDebutLocation, Date dateFinLocation) {
        setId(id);
        this.titre = titre;
        this.nbChambre = nbChambre;
        this.dateDebutLocation = dateDebutLocation;
        this.dateFinLocation = dateFinLocation;
    }

    public String getTitre() {
        return titre;
    }

    public void setTitre(String titre) {
        this.titre = titre;
    }

    public int getNbChambre() {
        return nbChambre;
    }

    public void setNbChambre(int nbChambre) {
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
                ", titre='" + titre + '\'' +
                ", resume='" + nbChambre + '\'' +
                ", maisonEdition='" + dateDebutLocation + '\'' +
                ", datePublication='" + dateFinLocation + '\'' +
                '}';
    }
}
