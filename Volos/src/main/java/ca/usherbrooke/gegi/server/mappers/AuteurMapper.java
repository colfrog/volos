package ca.usherbrooke.gegi.server.mappers;

import ca.usherbrooke.gegi.server.data.Auteur;

import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;


import java.util.List;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper

public interface AuteurMapper {

    List<Auteur> select();
    void insertAuteur(@Param("nom") String nom, @Param("prenom") String prenom);
}
