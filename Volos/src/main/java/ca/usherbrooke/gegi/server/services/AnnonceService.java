package ca.usherbrooke.gegi.server.services;


import ca.usherbrooke.gegi.server.data.Annonce;
import ca.usherbrooke.gegi.server.mappers.AnnonceMapper;

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

public class AnnonceService {
    @Context
    HttpServletRequest httpServletRequest;

    @Inject
    AnnonceMapper annonceMapper;

    @GET
    @Path("annonce")
    @Produces("application/json")
    public Annonce getAnnonce(@QueryParam("id") Integer id) {
        Annonce annonce = annonceMapper.selectId(id);
        return annonce;
    }

    @GET
    @Path("list_annoce")
    public List<Annonce> getListAnnonce() {
        List<Annonce> annonces = annonceMapper.select();
        return annonces;
    }


    @GET
    @Path("insert_annonce")
    public void insertAnnonce() {
        Client client = ClientBuilder.newClient();
        WebTarget target = client.target(""); //Lien de la BD de Volos
        Invocation.Builder  builder = target.request(MediaType.APPLICATION_JSON);
        Response response = builder.get();

        List<Annonce> annonces = response.readEntity(new GenericType<List<Annonce>>(){});
        for (Annonce annonce : annonces) {
            annonceMapper.insertAnnonce(annonce);
            System.out.println(annonce);
        }
    }

    @GET
    @Path("update_annonce")
    public void updateAnnonce() {
        Client client = ClientBuilder.newClient();
        WebTarget target = client.target(""); //Lien de la BD de Volos
        Invocation.Builder  builder = target.request(MediaType.APPLICATION_JSON);
        Response response = builder.get();

        List<Annonce> annonces = response.readEntity(new GenericType<List<Annonce>>(){});
        for (Annonce annonce : annonces) {
            annonceMapper.updateAnnonce(annonce, annonce.getId());
            System.out.println(annonce);
        }
    }
}