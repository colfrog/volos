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

/**
 * Service pour manipuler ou afficher des données de la table Loyer de la db
 * @author Iliass Bourabaa
 * @version 1.0
 */
@Path("")
public class LoyerService {
    @Context
    HttpServletRequest httpServletRequest;

    @Inject
    LoyerMapper loyerMapper;

    /**
     * @return le loyer avec l'id passé en paramètre
     */
    @GET
    @Path("loyerById")
    @Produces("application/json")
    public Loyer getLoyer(@QueryParam("id") Integer id) {
        Loyer loyer = loyerMapper.selectId(id);
        return loyer;
    }

    /**
     * @return la liste de toutes les loyers de la table
     */
    @GET
    @Path("loyers")
    @Produces("application/json")
    public List<Loyer> getListLoyer() {
        List<Loyer> loyers = loyerMapper.select();
        return loyers;
    }

    /**
     * Permet d'ajouter le loyer passé en paramètre dans la table
     */
    @GET
    @Path("insertLoyer")
    public void insertLoyer(Loyer loyer) {
        loyerMapper.insertLoyer(loyer);
        System.out.println(loyer);
    }

    /**
     * Permet de modifier le loyer passé en paramètre dans la table
     */
    @GET
    @Path("updateLoyer")
    public void updateLoyer(Loyer loyer) {
        loyerMapper.updateLoyer(loyer, loyer.getId());
        System.out.println(loyer);
    }
}
