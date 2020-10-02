package test;

import ca.usherbrooke.gegi.server.data.Livre;
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

        Livre livre = service.getLivre(0);

        String myDate = "2020/10/01";
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
        Date date = null;
        try {
            date = sdf.parse(myDate);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        Livre result = new Livre(0, "UML 2",
                "UML est le language de modélisation le"+
                        "plus utilisé dans lindustrie, principalement"+
                        "pour le développement logiciel.", "PEARSON", date);

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

        String myDate = "2042/04/20";
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
        Date date = null;
        try {
            date = sdf.parse(myDate);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        Livre result = new Livre(3, "titre", "resume",
                "Maison d'édidition", date);
        service.insertLivre(result);

        Livre livre = service.getLivre(3);

        Assert.assertEquals(result, livre);
    }

    @Test
    public void updateLivre() {
        LivreService service = new LivreService();

        String myDate = "1997-12-25";
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
        Date date = null;
        try {
            date = sdf.parse(myDate);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        Livre result = new Livre(2, "One piece", "L'histoire d'un pirate au"+
                "chapeau de paille à la recherche du ONE PIECE!!! :o",
                "Shūeisha Magasine", date);
        service.updateLivre(result);

        Livre livre = service.getLivre(2);

        Assert.assertEquals(result, livre);
    }
}/**/