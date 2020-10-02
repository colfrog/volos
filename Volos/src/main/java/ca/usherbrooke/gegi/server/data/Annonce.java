package ca.usherbrooke.gegi.server.data;

import java.util.Date;

public class Annonce {
    private int id;
    private String description;
    private float prix;
    private int etat;
    private Date dateAffichage;
    private String cip;

    public Annonce() {}

    public Annonce(int id, String cip, String description, float prix,
                   int etat, Date dateAffichage){
        this.id = id;
        this.cip = cip;
        this.description = description;
        this.prix = prix;
        this.etat = etat;
        this.dateAffichage = dateAffichage;
    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
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

    @Override
    public String toString() {
        return "Annonce{" +
                "id=" + id +
                ", description='" + description + '\'' +
                ", prix='" + prix + '\'' +
                ", etat='" + etat + '\'' +
                ", dateAffichage='" + dateAffichage + '\'' +
                ", cip='" + cip + '\'' +
                '}';
    }
}
