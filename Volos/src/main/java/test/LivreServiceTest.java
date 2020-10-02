package test;

/*import ca.usherbrooke.gegi.server.data.Livre;
import ca.usherbrooke.gegi.server.services.LivreService;
import org.junit.Assert;
import org.junit.Test;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

class LivreServiceTest {
    @Test
    public void getLivre1() {
        LivreService service = new LivreService();

        Livre result = new Livre();
        Livre livre = service.getLivre(0);

        String myDate = "2020/10/01";
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
        Date date = null;
        try {
            date = sdf.parse(myDate);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        result.setId(0);
        result.setDatePublication(date);
        result.setMaisonEdition("PEARSON");
        result.setResume("UML est le language de modélisation le"+
                        "plus utilisé dans lindustrie, principalement"+
                        "pour le développement logiciel.");
        result.setTitre("UML 2");

        Assert.assertEquals(result, livre);
    }

    @Test
    public void getLivre2() {
        LivreService service = new LivreService();

        Livre result = new Livre();
        Livre livre = service.getLivre(-1);

        Assert.assertEquals(result, livre);
    }

    @Test
    public void getListLivre() {

    }

    @Test
    public void insertLivre() {
        LivreService service = new LivreService();


        Livre result = new Livre();
        Livre livre = service.getLivre(0);

        String myDate = "2020/10/01";
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
        Date date = null;
        try {
            date = sdf.parse(myDate);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        result.setId(3);
        result.setDatePublication(date);
        result.setMaisonEdition("PEARSON");
        result.setResume("UML est le language de modélisation le"+
                "plus utilisé dans lindustrie, principalement"+
                "pour le développement logiciel.");
        result.setTitre("UML 2");

        //service.insertLivre(livre);
    }

    @Test
    public void updateLivre() {
    }
}/**/