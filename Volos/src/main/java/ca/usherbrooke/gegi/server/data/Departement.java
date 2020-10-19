package ca.usherbrooke.gegi.server.data;


public class Departement {
    private String nomDepartement;
    private String nomFaculte;

    public Departement(String nom_dep, String nom_fac){
        this.nomDepartement = nom_dep;
        this.nomFaculte = nom_fac;
    }

    public String getNomepartement() { return nomDepartement; }

    public void setNomepartement(String nom) { this.nomDepartement = nom; }

    public String getNomFaculte() { return nomFaculte; }

    public void setNomFaculte(String faculte) { this.nomFaculte = faculte; }

    @Override
    public String toString() {
        return "Departement{" +
                "nomDepartement='" + nomDepartement + '\'' +
                ", nomFaculte='" + nomFaculte + '\'' +
                '}';
    }
}