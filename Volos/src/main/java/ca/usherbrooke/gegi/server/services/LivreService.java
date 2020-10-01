package ca.usherbrooke.gegi.server.services;

import ca.usherbrooke.gegi.server.data.Livre;
import ca.usherbrooke.gegi.server.mappers.LivreMapper;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.client.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;

@Path("")
public class LivreService {
    @Context
    HttpServletRequest httpServletRequest;

    @Inject
    LivreMapper livreMapper;

    @GET
    @Path("livre")
    @Produces("application/json")
    public Livre getLivre(@QueryParam("id") Integer id) {
        Livre livre = livreMapper.selectId(id);
        return livre;
    }

    @GET
    @Path("list_livre")
    @Produces("application/json")
    public List<Livre> getListLivre() {
        List<Livre> livres = livreMapper.select();
        return livres;
    }


    @GET
    @Path("insert_livre")
    public void insertLivre() {
        Client client = ClientBuilder.newClient();
        WebTarget target = client.target(""); //Lien de la BD de Volos
        Invocation.Builder  builder = target.request(MediaType.APPLICATION_JSON);
        Response response = builder.get();

        List<Livre> livres = response.readEntity(new GenericType<List<Livre>>(){});
        for (Livre livre : livres) {
            livreMapper.insertLivre(livre);
            System.out.println(livre);
        }
    }

    @GET
    @Path("update_livre")
    public void updateLivre() {
        Client client = ClientBuilder.newClient();
        WebTarget target = client.target(""); //Lien de la BD de Volos
        Invocation.Builder  builder = target.request(MediaType.APPLICATION_JSON);
        Response response = builder.get();

        List<Livre> livres = response.readEntity(new GenericType<List<Livre>>(){});
        for (Livre livre : livres) {
            livreMapper.updateLivre(livre, livre.getId());
            System.out.println(livre);
        }
    }
}
