package ca.usherbrooke.gegi.server.data;

import java.util.Date;

public class Livre {
    private int id;
    private String titre;
    private String resume;
    private String maisonEdition;
    private Date datePublication;

    public Livre() {}

    public Livre(int id, String titre, String resume,
                 String maisonEdition, Date datePublication) {
        this.id = id;
        this.titre = titre;
        this.resume = resume;
        this.maisonEdition = maisonEdition;
        this.datePublication = datePublication;
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

    public String getResume() {
        return resume;
    }

    public void setResume(String resume) {
        this.resume = resume;
    }

    public String getMaisonEdition() {
        return maisonEdition;
    }

    public void setMaisonEdition(String maisonEdition) {
        this.maisonEdition = maisonEdition;
    }

    public Date getDatePublication() {
        return datePublication;
    }

    public void setDatePublication(Date datePublication) {
        this.datePublication = datePublication;
    }

    @Override
    public String toString() {
        return "Livre{" +
                "id=" + id +
                ", titre='" + titre + '\'' +
                ", resume='" + resume + '\'' +
                ", maisonEdition='" + maisonEdition + '\'' +
                ", datePublication='" + datePublication + '\'' +
                '}';
    }
}
