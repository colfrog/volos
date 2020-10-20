package ca.usherbrooke.gegi.server.data;


public class Utilisateur {
    private String cip;
    private String nom;
    private String prenom;
    private String mail;
    private String nomDepartement;
    private String nomFaculte;

    public String getCip() {
        return cip;
    }

    public void setCip(String cip) {
        this.cip = cip;
    }

    public String getNom() { return nom; }

    public void setNom(String nom) { this.nom = nom; }

    public String getPrenom() { return prenom; }

    public void setPrenom(String prenom) { this.prenom = prenom; }

    public String getMail() { return mail; }

    public void setMail(String mail) { this.mail = mail; }

    public String getNomDepartement() { return nomDepartement; }

    public void setNomDepartement(String departement) { this.nomDepartement = departement; }

    public String getNomFaculte() { return nomFaculte; }

    public void setNomFaculte(String faculte) { this.nomFaculte = faculte; }

    @Override
    public String toString() {
        return "Utilisateur{" +
                "cip='" + cip + '\'' +
                ", nom='" + nom + '\'' +
                ", prenom='" + prenom + '\'' +
                ", courriel='" + mail + '\'' +
                ", departement='" + nomDepartement + '\'' +
                ", faculte='" + nomFaculte + '\'' +
                '}';
    }
}