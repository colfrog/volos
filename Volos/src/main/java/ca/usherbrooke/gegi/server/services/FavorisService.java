package ca.usherbrooke.gegi.server.services;

import ca.usherbrooke.gegi.server.data.Annonce;
import ca.usherbrooke.gegi.server.data.Auteur;
import ca.usherbrooke.gegi.server.mappers.FavorisMapper;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.core.Context;
import java.util.List;

@Path("")

/**
 * Implémentations des favoris de l'auteur
 *
 * @author Laurent Cimon
 * @version 1.0
 */
public class FavorisService {
    @Context
    HttpServletRequest httpServletRequest;

    @Inject
    FavorisMapper favorisMapper;

    /**
     * @param cip de l'utilisateur auquel on veut avoir accès aux favoris
     * @return La liste de favoris de l'utilisateur
     */
    @GET
    @Path("favoris")
    @Produces("application/json")
    public List<Annonce> getFavoris(@QueryParam("cip") String cip) {
        return favorisMapper.getFavoris(cip);
    }

    /**
     * @param cip de l'utilisateur auquel on veut ajouter un favoris
     * @param id l'identifiant de l'annonce à ajouter en favoris
     */
    @GET
    @Path("ajouter_favori")
    public void addFavori(@QueryParam("cip") String cip, @QueryParam("id") Integer id) {
        favorisMapper.addFavori(cip, id);
    }

    /**
     * @param cip de l'utilisateur auquel on veut retirer un favoris
     * @param id l'identifiant de l'annonce à retirer des favoris
     */
    @GET
    @Path("retirer_favori")
    public void removeFavori(@QueryParam("cip") String cip, @QueryParam("id") Integer id) {
        favorisMapper.removeFavori(cip, id);
    }

    /**
     * Vérifie si l'annonce est dans les favoris de l'utilisateur avec son cip passé
     *
     * @return true s'il est dans ses favoris aussi non false
     */
    @GET
    @Path("existFavori")
    public boolean existFavori(@QueryParam("cip") String cip, @QueryParam("id") int id) {
        return favorisMapper.existFavori(cip, id);
    }
}
