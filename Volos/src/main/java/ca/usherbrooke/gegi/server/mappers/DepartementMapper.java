package ca.usherbrooke.gegi.server.mappers;

import ca.usherbrooke.gegi.server.data.Departement;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;


import java.util.List;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
public interface DepartementMapper {

    List<Departement> selectDepartements();
    List<Departement> selectDepartementByFaculte(@Param("faculte") String faculte );
    void insertDepartement(@Param("departement") Departement departement);

}