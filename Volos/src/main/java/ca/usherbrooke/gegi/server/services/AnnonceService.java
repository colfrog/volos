package ca.usherbrooke.gegi.server.services;


import ca.usherbrooke.gegi.server.data.Annonce;
import ca.usherbrooke.gegi.server.data.Livre;
import ca.usherbrooke.gegi.server.data.Loyer;
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
import java.util.ArrayList;
import java.util.List;

@Path("")
public class AnnonceService {
    @Context
    HttpServletRequest httpServletRequest;

    @Inject
    AnnonceMapper annonceMapper;

    @GET
    @Path("annonceById")
    @Produces("application/json")
    public Annonce getAnnonceById(@QueryParam("id") Integer id) {
        Annonce annonce = annonceMapper.selectId(id);

        return annonce;
    }

    @GET
    @Path("annonces")
    @Produces("application/json")
    public List<Annonce> getAnnonces() {
        List<Annonce> annonces = annonceMapper.select();
        //List<Annonce> annoncesAfficher = new ArrayList<Annonce>();

        /*for(Annonce annonce: annonces) {
            if(annonce.getType() == "LOYER") {
                Loyer loyer = loyerService.getLoyer(annonce.getId());
                loyer.setAnnonce(annonce);
                annoncesAfficher.add(loyer);
            } else if (annonce.getType() == "LIVRE") {
                Livre livre = livreService.getLivre(annonce.getId());
                livre.setAnnonce(annonce);
                annoncesAfficher.add(livre);
            } else {
                annoncesAfficher.add(annonce);
            }
        }*/

        return annonces;
    }


    @GET
    @Path("insertAnnonce")
    public void insertAnnonce(Annonce annonce) {
        annonceMapper.insertAnnonce(annonce);
    }

    @GET
    @Path("updateAnnonce")
    public void updateAnnonce(Annonce annonce) {
        annonceMapper.updateAnnonce(annonce, annonce.getId());
    }
}
