package ca.usherbrooke.gegi.server.services;

import ca.usherbrooke.gegi.server.mappers.UtilisateurMapper;
import ca.usherbrooke.gegi.server.data.Utilisateur;
import ca.usherbrooke.gegi.server.data.Departement;
import org.apache.ibatis.annotations.Param;
import org.jasig.cas.client.authentication.AttributePrincipalImpl;

import javax.inject.Inject;
import javax.servlet.http.HttpServletRequest;
import javax.websocket.server.PathParam;
import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.QueryParam;
import javax.ws.rs.client.*;
import javax.ws.rs.core.Context;
import javax.ws.rs.core.GenericType;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.security.Principal;
import java.util.List;
import java.util.Map;

@Path("")
public class UtilisateurService {

    @Context
    HttpServletRequest httpServletRequest;

    @Inject
    UtilisateurMapper utilisateurMapper;

    @GET
    @Path("selectUtilisateurs")
    @Produces("application/json")
    public List<Utilisateur> selectUtilisateurs(){
        List<Utilisateur> utilisateurs = utilisateurMapper.selectUtilisateurs();
        return utilisateurs;
    }

    @GET
    @Path("selectUtilisateurByCip")
    @Produces("application/json")
    public Utilisateur selectUtilisateurByCip(@QueryParam("cip") String cip){
        Utilisateur utilisateurs = utilisateurMapper.selectUtilisateurByCip(cip);
        return utilisateurs;
    }

    @GET
    @Path("selectUtilisateurByFaculte")
    @Produces("application/json")
    public List<Utilisateur> selectUtilisateurByFaculte(@QueryParam("faculte") String faculte){
        List<Utilisateur> utilisateurs = utilisateurMapper.selectUtilisateurByFaculte(faculte);
        return utilisateurs;
    }

    @GET
    @Path("selectUtilisateurByDepartement")
    @Produces("application/json")
    public List<Utilisateur> selectUtilisateurByDepartement(@QueryParam("departement") String departement){
        List<Utilisateur> utilisateurs = utilisateurMapper.selectUtilisateurByDepartement(departement);
        return utilisateurs;
    }

    @GET
    @Path("updateUtilisateurDepartement")
    @Produces("application/json")
    public void updateUtilisateurDepartement(String cip, Departement departement){
        utilisateurMapper.updateUtilisateurDepartement(cip, departement);
    }

    @GET
    @Path("insertUtilisateur")
    @Produces("application/json")
    public void insertUtilisateur(Utilisateur utilisateur){
        utilisateurMapper.insertUtilisateur(utilisateur);
    }

    @GET
    @Path("loggedUtilisateur")
    @Produces("application/json")
    public Utilisateur getCurrentLoggedUtilisateur(){
        Principal principal = httpServletRequest.getUserPrincipal();
        Map<String, Object> details = (Map<String, Object>) ((AttributePrincipalImpl)principal).getAttributes();
        Utilisateur utilisateur = new Utilisateur();
        utilisateur.setCip(principal.getName()); // details.get("cip")
        utilisateur.setNom((String) details.get("nomFamille"));
        utilisateur.setPrenom((String) details.get("prenom"));
        utilisateur.setMail((String) details.get("courriel"));
        utilisateur.setNomDepartement("Électrique et Informatique");
        utilisateur.setNomFaculte("Génie");

        /*utilisateur.setNomDepartement((String) details.get("departement"));
        utilisateur.setNomFaculte((String) details.get("faculte"));*/

        /*for (Map.Entry<String, Object> x : details.entrySet()) {
            System.out.println("Key: " + x.getKey() + ", Value: " + x.getValue());
        }*/


        return utilisateur;
    }
}