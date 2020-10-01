package ca.usherbrooke.gegi.server.business;


public class Utilisateur {
    private String cip;
    private String nom;
    private String prenom;
    private String mail;
    private String departement;
    private String faculte;

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

    public String getDepartement() { return departement; }

    public void setDepartemen(String departement) { this.departement = departement; }

    public String getFaculte() { return faculte; }

    public void setFaculte(String faculte) { this.faculte = faculte; }

    @Override
    public String toString() {
        return "Utilisateur{" +
                "cip='" + cip + '\'' +
                ", nom='" + nom + '\'' +
                ", prenom='" + prenom + '\'' +
                ", courriel='" + mail + '\'' +
                ", departemen='" + departemen + '\'' +
                ", faculte='" + faculte + '\'' +
                '}';
    }
}