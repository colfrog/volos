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

/**
 * Service pour manipuler ou afficher des données de la table Annonce de la db
 * @author Iliass Bourabaa
 * @version 1.0
 */
@Path("")
public class AnnonceService {
    @Context
    HttpServletRequest httpServletRequest;

    @Inject
    AnnonceMapper annonceMapper;

    /**
     * @return l'annonce avec l'id passé en paramètre
     */
    @GET
    @Path("annonceById")
    @Produces("application/json")
    public Annonce getAnnonceById(@QueryParam("id") Integer id) {
        Annonce annonce = annonceMapper.selectById(id);

        return annonce;
    }

    /**
     * @return la liste de toutes les annonces de la table dont l'état est publié et qui est
     * de la catégorie Autre
     */
    @GET
    @Path("annoncesByCip")
    @Produces("application/json")
    public List<Annonce> annoncesByCip(@QueryParam("cip") String cip) {
        List<Annonce> annonces = annonceMapper.selectByCip(cip);

        return annonces;
    }

    /**
     * @return la liste de toutes les annonces de la table
     */
    @GET
    @Path("annonces")
    @Produces("application/json")
    public List<Annonce> getAnnonces() {
        List<Annonce> annonces = annonceMapper.select();

        return annonces;
    }

    /**
     * Permet d'ajouter l'annonce passé en paramètre dans la table
     */
    @GET
    @Path("insertAnnonce")
    public void insertAnnonce(Annonce annonce) {
        annonceMapper.insertAnnonce(annonce);
    }

    /**
     * Permet de modifier l'annonce passé en paramètre dans la table
     */
    @GET
    @Path("updateAnnonce")
    public void updateAnnonce(Annonce annonce) {
        annonceMapper.updateAnnonce(annonce, annonce.getId());
    }

    /**
     * Permet de changer l'état de l'annonce passé en paramètre à fermé
     */
    @GET
    @Path("cancelAnnonce")
    public void cancelAnnonce(@QueryParam("id") int id) {
        annonceMapper.cancelAnnonce(id);
    }

    /**
     * Permet de changer l'état de l'annonce passé en paramètre à vendue
     */
    @GET
    @Path("removeAnnonce")
    public void removeAnnonce(@QueryParam("id") int id) {
        annonceMapper.removeAnnonce(id);
    }

    /**
     * @return la liste de toutes les annonces de la table dont l'état est publié et qui est
     * de la catégorie Livre
     */
    @GET
    @Path("annoncePublishLivres")
    @Produces("application/json")
    public List<Annonce> annoncePublishLivres() {
        List<Annonce> annonces = annonceMapper.selectPublishLivres();

        return annonces;
    }

    /**
     * @return la liste de toutes les annonces de la table dont l'état est publié et qui est
     * de la catégorie Loyer
     */
    @GET
    @Path("annoncePublishLoyers")
    @Produces("application/json")
    public List<Annonce> annoncePublishLoyers() {
        List<Annonce> annonces = annonceMapper.selectPublishLoyers();

        return annonces;
    }

    /**
     * @return la liste de toutes les annonces de la table dont l'état est publié et qui est
     * de la catégorie Autre
     */
    @GET
    @Path("annonceUtilisateur")
    @Produces("application/json")
    public List<Annonce> annoncePublishAutres() {
        List<Annonce> annonces = annonceMapper.selectPublishAutres();

        return annonces;
    }

    /**
     * @return un entier du dernier id de la table
     */
    @GET
    @Path("findLastIdAnnonce")
    public int findLastIdAnnonce() {
        return annonceMapper.findLastIdAnnonce();
    }
}
