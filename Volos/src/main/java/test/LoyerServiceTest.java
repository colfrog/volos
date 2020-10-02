package test;

import ca.usherbrooke.gegi.server.data.Loyer;
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
        Loyer result = new Loyer();

        String myDate = "2020/10/01";
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy/MM/dd");
        Date date = null;
        try {
            date = sdf.parse(myDate);
        } catch (ParseException e) {
            e.printStackTrace();
        }

        result.setId(0);


        Assert.assertEquals(result, loyer);
    }

    @Test
    void getLoyer2() {
        LoyerService service = new LoyerService();

        Loyer loyer = new Loyer();
    }


    @Test
    void getListLoyer() {
    }

    @Test
    void insertLoyer() {
    }

    @Test
    void updateLoyer() {
    }
}