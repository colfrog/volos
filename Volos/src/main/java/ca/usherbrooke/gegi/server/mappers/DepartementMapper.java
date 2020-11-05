package ca.usherbrooke.gegi.server.mappers;

import ca.usherbrooke.gegi.server.data.Departement;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;


import java.util.List;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
/**
 * Mapper qui définit les différentes requête sql passé sur la table Departement
 * @author Pedro Scoccimaro
 * @version 1.0
 */
public interface DepartementMapper {

    List<Departement> selectDepartements();
    List<Departement> selectDepartementByFaculte(@Param("faculte") String faculte );
    void insertDepartement(@Param("departement") Departement departement);

}