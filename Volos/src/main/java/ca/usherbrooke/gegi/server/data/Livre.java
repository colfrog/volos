package ca.usherbrooke.gegi.server.data;

import java.util.Date;
import java.util.List;

public class Livre extends Annonce{
    private String titre;
    private String resume;
    private String maisonEdition;
    private Date datePublication;
    private List<Auteur> auteurs;

    public Livre() {}

    public Livre(int id, String titre, String resume,
                 String maisonEdition, Date datePublication) {
        setId(id);
        this.titre = titre;
        this.resume = resume;
        this.maisonEdition = maisonEdition;
        this.datePublication = datePublication;
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

    public List<Auteur> getAuteurs() {
        return auteurs;
    }

    public void setAuteurs(List<Auteur> auteurs) {
        this.auteurs = auteurs;
    }

    @Override
    public String toString() {
        String chaine = "Livre{" +
                "id=" + getId() +
                ", description='" + getDescription() + '\'' +
                ", prix='" + getPrix() + '\'' +
                ", etat='" + getEtat() + '\'' +
                ", dateAffichage='" + getDateAffichage() + '\'' +
                ", cip='" + getCip() + '\'' +
                ", categorie='" + getCategorie() + '\'' +
                ", titre='" + titre + '\'' +
                ", resume='" + resume + '\'' +
                ", maisonEdition='" + maisonEdition + '\'' +
                ", datePublication='" + datePublication + '\'' +
                ", auteurs=";

        for(Auteur auteur : auteurs){
            chaine += "("+auteur.toString()+")";
        }
        chaine += '}';
        return chaine;
    }
}
