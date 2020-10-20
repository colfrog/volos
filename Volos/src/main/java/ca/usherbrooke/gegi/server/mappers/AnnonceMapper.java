package ca.usherbrooke.gegi.server.mappers;


import ca.usherbrooke.gegi.server.data.Annonce;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;

import java.util.List;

/**
 * Mapper qui définit les différentes requête sql passé sur la table Annonce
 * @author Iliass Bourabaa
 * @version 1.0
 */
@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
public interface AnnonceMapper {
    List<Annonce> select();
    List<Annonce> selectPublishLivres();
    List<Annonce> selectPublishLoyers();
    List<Annonce> selectPublishAutres();
    Annonce selectId(@Param("id") Integer id);
    void insertAnnonce(@Param("annonce") Annonce annonce);
    void updateAnnonce(@Param("annonce") Annonce annonce, @Param("id") Integer id);
    int findLastIdAnnonce();
    void cancelAnnonce(@Param("id") int id);
    void removeAnnonce(@Param("id") int id);
}
