package ca.usherbrooke.gegi.server.data;

import java.util.Date;

public class Annonce {
    private int id;
    private String description;
    private float prix;
    private int etat;
    private Date dateAffichage;
    private String cip;
    private String type;

    public Annonce() {}

    public Annonce(int id, String cip, String description, float prix,
                   int etat, Date dateAffichage, String type){
        this.id = id;
        this.cip = cip;
        this.description = description;
        this.prix = prix;
        this.etat = etat;
        this.dateAffichage = dateAffichage;
        this.type = type;
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Annonce getAnnonce() {
        Annonce annonce = new Annonce();
        annonce.setCip(this.getCip());
        annonce.setDescription(this.getDescription());
        annonce.setPrix(this.getPrix());
        annonce.setEtat(this.getEtat());
        annonce.setDateAffichage(this.getDateAffichage());
        annonce.setType(this.getType());

        return annonce;
    }

    public void setAnnonce(Annonce annonce) {
        this.setCip(annonce.getCip());
        this.setDescription(annonce.getDescription());
        this.setPrix(annonce.getPrix());
        this.setEtat(annonce.getEtat());
        this.setDateAffichage(annonce.getDateAffichage());
        this.setType(annonce.getType());
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
                ", type='" + type + '\'' +
                '}';
    }
}
