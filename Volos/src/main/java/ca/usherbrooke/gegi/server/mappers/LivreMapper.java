package ca.usherbrooke.gegi.server.mappers;

import ca.usherbrooke.gegi.server.data.Livre;
import ca.usherbrooke.gegi.server.data.Loyer;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;

import java.util.List;

/**
 * Mapper qui définit les différentes requête sql passé sur la table Livre
 * @author Iliass Bourabaa
 * @version 1.0
 */
@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
public interface LivreMapper {
    List<Livre> select();
    Livre selectId(@Param("id") Integer id);
    void insertLivre(@Param("livre") Livre livre);
    void updateLivre(@Param("livre") Livre livre, @Param("id") Integer id);
}
