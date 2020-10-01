package ca.usherbrooke.gegi.server.business;
import java.util.Date;

public class Trimestre {

    private String trimestre_id;
    private String trimestre;
    private Date debut;
    private Date fin;
    private Date inscription;

    public String getTrimestre_id() {return trimestre_id; }
    public void setTrimestre_id(String trimestre_id) { this.trimestre_id = trimestre_id; }

    public String getTrimestre() { return trimestre; }
    public void setTrimestre(String trimestre) { this.trimestre = trimestre; }

    public Date getDebut() {
        return debut;
    }

    public void setDebut(Date debut) {
        this.debut = debut;
    }

    public Date getFin() {
        return fin;
    }

    public void setFin(Date fin) {
        this.fin = fin;
    }

    public Date getInscription() {
        return inscription;
    }

    public void setInscription(Date inscription) {
        this.inscription = inscription;
    }

    @Override
    public String toString() {
        return getTrimestre_id() + " " + getTrimestre() + " " + getDebut() + " " + getFin();
    }
}
