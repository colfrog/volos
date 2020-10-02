package ca.usherbrooke.gegi.server.presentation;

import ca.usherbrooke.gegi.server.business.Trimestre;
import ca.usherbrooke.gegi.server.persistence.EtudiantMapper;
import ca.usherbrooke.gegi.server.business.Etudiant;

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
public class EtudiantService {

    @Context
    HttpServletRequest httpServletRequest;

    @Inject
    EtudiantMapper etudiantMapper;

    @GET
    @Path("etudiant")
    @Produces("application/json")

    public List<Etudiant> getEtudiant(@QueryParam("id") Integer id) {
      //  System.out.println(httpServletRequest.getUserPrincipal().getName());
        List<Etudiant> etudiants = etudiantMapper.select(id);
        return etudiants;
    }

   /* @Produces("text/plain")
      public String getEtudiant(@QueryParam("id") Integer id) {
        System.out.println(httpServletRequest.getUserPrincipal().getName());
        List<Etudiant> etudiants = etudiantMapper.select(id);
        return etudiants.get(0).toString();
    }*/


    @GET
    @Path("insert_trimestre")
    public void insertTrimestre() {

            Client client = ClientBuilder.newClient();
            WebTarget target = client.target("http://zeus.gel.usherbrooke.ca:8080/ms/rest/trimestre?inscription=2017-01-01");
            Invocation.Builder  builder = target.request(MediaType.APPLICATION_JSON);
            Response response = builder.get();

            List<Trimestre> trimestres = response.readEntity(new GenericType<List<Trimestre>>(){});
            for (Trimestre trimestre : trimestres) {
               etudiantMapper.insertTrimestre(trimestre);
               System.out.println(trimestre);
            }


    }
}
