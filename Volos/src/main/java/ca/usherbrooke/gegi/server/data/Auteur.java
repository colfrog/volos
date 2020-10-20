package ca.usherbrooke.gegi.server.data;

/**
 * Représente un auteur d'un livre d'une annonce
 *
 * @author Paul du Réau
 * @version 1.0
 */
public class Auteur {

    private String nom;
    private String prenom;

    public String getNom() { return this.nom; }

    public void setNom(String nom) { this.nom = nom; }

    public String getPrenom() { return this.prenom; }

    public void setPrenom(String prenom) { this.prenom = prenom; }

    @Override
    public String toString() {
        return  "Auteur{" +
                "Prénom: " + this.prenom + ", " +
                "Nom: " + this.nom +
                "}";
    }
}
