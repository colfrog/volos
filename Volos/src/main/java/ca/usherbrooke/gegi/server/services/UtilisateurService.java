package ca.usherbrooke.gegi.server.presentation;

import ca.usherbrooke.gegi.server.mappers.UtilisateurMapper;
import ca.usherbrooke.gegi.server.data.Utilisateur;

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

@Path("Utilisateur")
public class UtilisateurService {

    @Context
    HttpServletRequest httpServletRequest;

    @Inject
    UtilisateurMapper utilisateurMapper;

    @GET
    @Path("selectUtilisateurs")
    public List<Utilisateur> selectUtilisateurs(){
        System.out.println(httpServletRequest.getUserPrincipal().getName());
        List<Utilisateur> utilisateurs = utilisateurMapper.selectUtilisateurs();
        return utilisateurs;
    }

    @GET
    @Path("selectUtilisateurByCip")
    Utilisateur selectUtilisateurByCip(@QueryParam("cip") String cip){
        System.out.println(httpServletRequest.getUserPrincipal().getName());
        List<Utilisateur> utilisateurs = utilisateurMapper.selectUtilisateurByCip(cip);
        return utilisateurs;
    }

    @GET
    @Path("selectUtilisateurByFaculte")
    List<Utilisateur> selectUtilisateurByFaculte(@QueryParam("faculte") String faculte){
        System.out.println(httpServletRequest.getUserPrincipal().getName());
        List<Utilisateur> utilisateurs = utilisateurMapper.selectUtilisateursByFaculte(faculte);
        return utilisateurs;
    }

    @GET
    @Path("selectUtilisateurByDepartement")
    List<Utilisateur> selectUtilisateurByDepartement(@QueryParam("departement") String departement){
        System.out.println(httpServletRequest.getUserPrincipal().getName());
        List<Utilisateur> utilisateurs = utilisateurMapper.selectUtilisateurByDepartement(departement);
        return utilisateurs;
    }

    @GET
    @Path("insertUtilisateur")
    void insertUtilisateur(@QueryParam("utilisateur") Utilisateur utilisateur){
        utilisateurMapper.insertUtilisateur(utilisateur);
        System.out.println(trimestre);
    }

    //--------------------//
    /*public List<Etudiant> getEtudiant(@QueryParam("id") Integer id) {
        //  System.out.println(httpServletRequest.getUserPrincipal().getName());
        List<Etudiant> etudiants = etudiantMapper.select(id);
        return etudiants;
    }*/

   /* @Produces("text/plain")
      public String getEtudiant(@QueryParam("id") Integer id) {
        System.out.println(httpServletRequest.getUserPrincipal().getName());
        List<Etudiant> etudiants = etudiantMapper.select(id);
        return etudiants.get(0).toString();
    }*/


    /*@GET
    @Path("insert_trimestre")
    public void insertTrimestre() {

        //CONNECTION AVEC LES MICRO-SERVICES ZEUS **COULD BE USEFUL

        Client client = ClientBuilder.newClient();
        WebTarget target = client.target("http://zeus.gel.usherbrooke.ca:8080/ms/rest/trimestre?inscription=2017-01-01");
        Invocation.Builder  builder = target.request(MediaType.APPLICATION_JSON);
        Response response = builder.get();

        List<Trimestre> trimestres = response.readEntity(new GenericType<List<Trimestre>>(){});
        for (Trimestre trimestre : trimestres) {
            etudiantMapper.insertTrimestre(trimestre);
            System.out.println(trimestre);
        }
    }*/
}