package ca.usherbrooke.gegi.server.mappers;


import ca.usherbrooke.gegi.server.data.Auteur;
import ca.usherbrooke.gegi.server.data.Livre;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;

import java.util.List;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
public interface WrapperMapper {
    void addLiaisonAuteurLivre(@Param("livre") Livre livre, @Param("auteur") Auteur auteur);
}
