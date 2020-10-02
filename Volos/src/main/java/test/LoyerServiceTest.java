package test;

/*import ca.usherbrooke.gegi.server.data.Livre;
import ca.usherbrooke.gegi.server.data.Loyer;
import ca.usherbrooke.gegi.server.services.LivreService;
import ca.usherbrooke.gegi.server.services.LoyerService;
import org.junit.Assert;
import org.junit.jupiter.api.Test;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;

class LoyerServiceTest {

    @Test
    void getLoyer1() {
        LoyerService service = new LoyerService();

        Loyer loyer = service.getLoyer(1);

        String myDate1 = "2021/01/01";
        String myDate2 = "2021/06/01";
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
        Date date1 = null;
        Date date2 = null;
        try {
            date1 = sdf.parse(myDate1);
            date2 = sdf.parse(myDate2);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        Loyer result = new Loyer(1, "3 1/2 rue Sherbrooke",2,date1, date2);

        Assert.assertEquals(result, loyer);
    }

    @Test
    void getLoyer2() {
        LoyerService service = new LoyerService();

        Loyer result = new Loyer();
        Loyer loyer = service.getLoyer(-1);

        Assert.assertEquals(result, loyer);

    }


    @Test
    void getListLoyer() {
    }

    @Test
    void insertLoyer() {
        LoyerService service = new LoyerService();

        String myDate1 = "2042/01/01";
        String myDate2 = "2069/06/28";
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
        Date date1 = null;
        Date date2 = null;
        try {
            date1 = sdf.parse(myDate1);
            date2 = sdf.parse(myDate2);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        Loyer result = new Loyer(4, "titre", 70,
                date1, date2);
        service.insertLoyer(result);

        Loyer loyer = service.getLoyer(4);

        Assert.assertEquals(result, loyer);
    }

    @Test
    void updateLoyer() {
        LoyerService service = new LoyerService();

        String myDate1 = "1970/01/01";
        String myDate2 = "2000/12/31";
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
        Date date1 = null;
        Date date2 = null;
        try {
            date1 = sdf.parse(myDate1);
            date2 = sdf.parse(myDate2);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        Loyer result = new Loyer(1, "One piece", 1,
                date1, date2);
        service.updateLoyer(result);

        Loyer loyer = service.getLoyer(2);

        Assert.assertEquals(result, loyer);
    }
}/**/