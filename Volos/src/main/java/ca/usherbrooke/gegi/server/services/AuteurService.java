package ca.usherbrooke.gegi.server.services;

import ca.usherbrooke.gegi.server.data.Auteur;
import ca.usherbrooke.gegi.server.mappers.AuteurMapper;

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

/**
 * Implémentations des services liés à l'auteur
 *
 * @author Paul du Réau
 * @version 1.0
 */
public class AuteurService {

    @Context
    HttpServletRequest httpServletRequest;

    @Inject
    AuteurMapper auteurMapper;

    /**
     * Va chercher tous les auteurs de la BD
     *
     * @return Une liste d'auteur
     */
    @GET
    @Path("auteur")
    @Produces("application/json")
    public List<Auteur> getAuteur() {
        List<Auteur> auteurs = auteurMapper.select();
        return auteurs;
    }

    /**
     * Fait l'insertion d'un auteur
     */
    @GET
    @Path("insert_auteur")
    public void insertAuteur(@QueryParam("nom") String nom, @QueryParam("prenom") String prenom) {
        auteurMapper.insertAuteur(nom, prenom);
    }

    /**
     * Vérifie si un auteur existe dans la BD
     *
     * @return vrai si l'auteur existe dans la BD sinon faux
     */
    @GET
    @Path("existAuteur")
    public boolean existAuteur(Auteur auteur) {
        return auteurMapper.existAuteur(auteur);
    }
}
