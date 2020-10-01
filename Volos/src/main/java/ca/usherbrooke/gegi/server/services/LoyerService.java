package ca.usherbrooke.gegi.server.services;

import ca.usherbrooke.gegi.server.data.Loyer;
import ca.usherbrooke.gegi.server.mappers.LoyerMapper;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.client.Client;
import javax.ws.rs.client.ClientBuilder;
import javax.ws.rs.client.Invocation;
import javax.ws.rs.client.WebTarget;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("")
public class LoyerService {
    @Context
    HttpServletRequest httpServletRequest;

    @Inject
    LoyerMapper loyerMapper;

    @GET
    @Path("loyer")
    @Produces("application/json")
    public Loyer getLoyer(@QueryParam("id") Integer id) {
        Loyer loyer = loyerMapper.selectId(id);
        return loyer;
    }

    @GET
    @Path("list_loyer")
    @Produces("application/json")
    public List<Loyer> getListLoyer() {
        List<Loyer> loyers = loyerMapper.select();
        return loyers;
    }


    @GET
    @Path("insert_loyer")
    public void insertLoyer() {
        Client client = ClientBuilder.newClient();
        WebTarget target = client.target(""); //Lien de la BD de Volos
        Invocation.Builder  builder = target.request(MediaType.APPLICATION_JSON);
        Response response = builder.get();

        List<Loyer> loyers = response.readEntity(new GenericType<List<Loyer>>(){});
        for (Loyer loyer : loyers) {
            loyerMapper.insertLoyer(loyer);
            System.out.println(loyer);
        }
    }

    @GET
    @Path("update_loyer")
    public void updateLoyer() {
        Client client = ClientBuilder.newClient();
        WebTarget target = client.target(""); //Lien de la BD de Volos
        Invocation.Builder  builder = target.request(MediaType.APPLICATION_JSON);
        Response response = builder.get();

        List<Loyer> loyers = response.readEntity(new GenericType<List<Loyer>>(){});
        for (Loyer loyer : loyers) {
            loyerMapper.updateLoyer(loyer, loyer.getId());
            System.out.println(loyer);
        }
    }
}
