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

/**
 * Service pour manipuler ou afficher des données de la table Livre de la db
 * @author Iliass Bourabaa
 * @version 1.0
 */
@Path("")
public class LivreService {
    @Context
    HttpServletRequest httpServletRequest;

    @Inject
    LivreMapper livreMapper;

    /**
     * @return le livre avec l'id passé en paramètre
     */
    @GET
    @Path("livreById")
    @Produces("application/json")
    public Livre getLivre(@QueryParam("id") Integer id) {
        Livre livre = livreMapper.selectId(id);
        return livre;
    }

    /**
     * @return la liste de toutes les livres de la table
     */
    @GET
    @Path("livres")
    @Produces("application/json")
    public List<Livre> getListLivre() {
        List<Livre> livres = livreMapper.select();
        return livres;
    }

    /**
     * Permet d'ajouter le livre passé en paramètre dans la table
     */
    @GET
    @Path("insertLivre")
    public void insertLivre(Livre livre) {
        livreMapper.insertLivre(livre);
        System.out.println(livre);
    }

    /**
     * Permet de modifier le livre passé en paramètre dans la table
     */
    @GET
    @Path("updateLivre")
    public void updateLivre(Livre livre) {
        livreMapper.updateLivre(livre, livre.getId());
        System.out.println(livre);
    }
}
