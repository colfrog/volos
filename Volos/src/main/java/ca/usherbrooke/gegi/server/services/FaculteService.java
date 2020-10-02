package ca.usherbrooke.gegi.server.services;

import ca.usherbrooke.gegi.server.mappers.FaculteMapper;
import ca.usherbrooke.gegi.server.mappers.DepartementMapper;
import ca.usherbrooke.gegi.server.data.Departement;
import org.apache.ibatis.annotations.Param;

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
public class FaculteService {

    @Context
    HttpServletRequest httpServletRequest;

    @Inject
    FaculteMapper faculteMapper;
    @Inject
    DepartementMapper departementMapper;

    @GET
    @Path("selectDepartements")
    @Produces("application/json")
    public List<Departement> selectDepartements() {
        List<Departement> departements = departementMapper.selectDepartements();
        return departements;
    }

    @GET
    @Path("selectDepartementByFaculte")
    @Produces("application/json")
    public List<Departement> selectDepartementByFaculte(@QueryParam("faculte") String faculte) {
        List<Departement> departements = departementMapper.selectDepartementByFaculte(faculte);
        return departements;
    }

    @GET
    @Path("insertDepartement")
    @Produces("application/json")
    public void insertDepartement(Departement departement) {
        departementMapper.insertDepartement(departement);
        System.out.println(departement);
    }

    @GET
    @Path("selectFaculte")
    @Produces("application/json")
    public List<String> selectFaculte(){
        List<String> facultes = faculteMapper.selectFaculte();
        return facultes;
    }

    @GET
    @Path("insertFaculte")
    @Produces("application/json")
    public void insertFaculte(String faculte){
        faculteMapper.insertFaculte(faculte);
        System.out.println(faculte);
    }

}