package ca.usherbrooke.gegi.server.services;

import ca.usherbrooke.gegi.server.data.Annonce;
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
public class FavorisService {
    @Context
    HttpServletRequest httpServletRequest;

    @Inject
    FavorisMapper favorisMapper;

    @GET
    @Path("favoris")
    @Produces("application/json")
    public List<Annonce> getFavoris(@QueryParam("cip") String cip) {
        return favorisMapper.getFavoris(cip);
    }

    @GET
    @Path("ajouter_favori")
    public void addFavori(@QueryParam("cip") String cip, @QueryParam("id") Integer id) {
        favorisMapper.addFavori(cip, id);
    }

    @GET
    @Path("retirer_favori")
    public void removeFavori(@QueryParam("cip") String cip, @QueryParam("id") Integer id) {
        favorisMapper.removeFavori(cip, id);
    }
}
