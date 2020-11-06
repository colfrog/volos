package ca.usherbrooke.gegi.server.mappers;

import ca.usherbrooke.gegi.server.data.Annonce;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;

import java.util.List;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
/**
 * Mapper qui définit les différentes requête sql passé sur la table favoris
 * @author Laurent Cimon
 * @version 1.0
 */
public interface FavorisMapper {
    List<Annonce> getFavoris(@Param("cip") String cip);
    void addFavori(@Param("cip") String cip, @Param("id_annonce") Integer id);
    Integer removeFavori(@Param("cip") String cip, @Param("id_annonce") Integer id);
    boolean existFavori(@Param("cip") String cip, @Param("id_annonce") int id);
}
