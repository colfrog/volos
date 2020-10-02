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
    @Inject
    LivreService livreService;
    @Inject
    LoyerService loyerService;

    @GET
    @Path("annonceByID")
    @Produces("application/json")
    public Annonce getAnnonceById(@QueryParam("id") Integer id) {
        Annonce annonce = annonceMapper.selectId(id);

        if(annonce.getType() == "LOYER") {
            Loyer loyer = loyerService.getLoyer(annonce.getId());
            loyer.setAnnonce(annonce);
            return loyer;
        } else if (annonce.getType() == "LIVRE") {
            Livre livre = livreService.getLivre(annonce.getId());
            livre.setAnnonce(annonce);
            return livre;
        } else {
            return annonce;
        }
    }

    @GET
    @Path("annonces")
    @Produces("application/json")
    public List<Annonce> getAnnonces() {
        List<Annonce> annonces = annonceMapper.select();
        List<Annonce> annoncesAfficher = new ArrayList<Annonce>();

        for(Annonce annonce: annonces) {
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
        }

        return annoncesAfficher;
    }


    @GET
    @Path("insertAnnonce")
    public void insertAnnonce(Annonce annonce) {
        annonceMapper.insertAnnonce(annonce.getAnnonce());
    }

    @GET
    @Path("insertAnnonceLivre")
    public void insertAnnonce(Livre livre) {
        annonceMapper.insertAnnonce(livre.getAnnonce());
        livreService.insertLivre(livre);
    }

    @GET
    @Path("insertAnnonceLoyer")
    public void insertAnnonce(Loyer loyer) {
        annonceMapper.insertAnnonce(loyer.getAnnonce());
        loyerService.insertLoyer(loyer);
    }

    @GET
    @Path("updateAnnonce")
    public void updateAnnonce(Annonce annonce) {
        annonceMapper.updateAnnonce(annonce, annonce.getId());
    }

    @GET
    @Path("updateAnnonceLivre")
    public void updateAnnonce(Livre livre) {
        annonceMapper.updateAnnonce(livre.getAnnonce(), livre.getId());
        livreService.updateLivre(livre);
    }

    @GET
    @Path("updateAnnonceLoyer")
    public void updateAnnonce(Loyer loyer) {
        annonceMapper.updateAnnonce(loyer.getAnnonce(), loyer.getId());
        loyerService.updateLoyer(loyer);
    }
}
