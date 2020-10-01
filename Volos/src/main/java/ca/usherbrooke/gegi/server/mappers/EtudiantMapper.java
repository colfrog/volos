package ca.usherbrooke.gegi.server.persistence;

import ca.usherbrooke.gegi.server.business.Etudiant;

import ca.usherbrooke.gegi.server.business.Universite;
import ca.usherbrooke.gegi.server.business.Trimestre;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;


import java.util.List;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
public interface EtudiantMapper {

    List<Etudiant> select(@Param("id") Integer id);
    void insertUniversite(@Param("universite") Universite universite);
    void insertTrimestre(@Param("trimestre") Trimestre trimestre);
}
