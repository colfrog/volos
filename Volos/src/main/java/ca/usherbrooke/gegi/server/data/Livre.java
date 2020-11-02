package ca.usherbrooke.gegi.server.data;

import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

/**
 * Les données sur une annonce de la categorie Livre de l'application
 * @author Iliass Bourabaa
 * @version 1.0
 */
public class Livre extends Annonce{
    private String resume;
    private String maisonEdition;
    private Date datePublication;
    private List<Auteur> auteurs;

    /**
     * Constructeur par défault d'un livre
     */
    public Livre() {}

    /**
     * Constructeur avec en paramètre certains attributs d'un livre
     */
    public Livre(int id, String resume,
                 String maisonEdition, Date datePublication) {
        setId(id);
        this.resume = resume;
        this.maisonEdition = maisonEdition;
        this.datePublication = datePublication;
        this.auteurs = new ArrayList<Auteur>();
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

    public String getDatePublication() {
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat("dd-MM-yyyy");

        String date = simpleDateFormat.format(datePublication);
        return date;
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

    public void addAuteurs(Auteur auteur) {
        this.auteurs.add(auteur);
    }

    /**
     * Affiche tous les paramètres d'un livre
     * @return une chaine de caractère contenant les paramètre d'un livre
     */
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
                ", titre='" + getTitre() + '\'' +
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
