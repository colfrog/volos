package ca.usherbrooke.gegi.server.services;


import ca.usherbrooke.gegi.server.data.Annonce;
import ca.usherbrooke.gegi.server.mappers.AnnonceMapper;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import java.util.List;

@Path("")
public class AnnonceService {
    @Context
    HttpServletRequest httpServletRequest;

    @Inject
    AnnonceMapper annonceMapper;

    //Méthode pour afficher l'annonce avec l'id passé en parametre
    @GET
    @Path("annonceById")
    @Produces("application/json")
    public Annonce getAnnonceById(@QueryParam("id") Integer id) {
        Annonce annonce = annonceMapper.selectId(id);

        return annonce;
    }

    //Méthode pour afficher toutes les annonces
    @GET
    @Path("annonces")
    @Produces("application/json")
    public List<Annonce> getAnnonces() {
        List<Annonce> annonces = annonceMapper.select();

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

    //Méthode rendre l'état d'une annonce à fermé
    @GET
    @Path("cancelAnnonce")
    public void cancelAnnonce(@QueryParam("id") int id) {
        annonceMapper.cancelAnnonce(id);
    }

    //Méthode rendre l'état d'une annonce à vendue
    @GET
    @Path("removeAnnonce")
    public void removeAnnonce(@QueryParam("id") int id) {
        annonceMapper.removeAnnonce(id);
    }

    @GET
    @Path("annoncePublishLivres")
    @Produces("application/json")
    public List<Annonce> annoncePublishLivres() {
        List<Annonce> annonces = annonceMapper.selectPublishLivres();

        return annonces;
    }

    @GET
    @Path("annoncePublishLoyers")
    @Produces("application/json")
    public List<Annonce> annoncePublishLoyers() {
        List<Annonce> annonces = annonceMapper.selectPublishLoyers();

        return annonces;
    }

    @GET
    @Path("annoncePublishAutres")
    @Produces("application/json")
    public List<Annonce> annoncePublishAutres() {
        List<Annonce> annonces = annonceMapper.selectPublishAutres();

        return annonces;
    }

    @GET
    @Path("findLastIdAnnonce")
    public int findLastIdAnnonce() {
        return annonceMapper.findLastIdAnnonce();
    }
}
