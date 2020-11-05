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
    List<Annonce> selectPublishedByCategorie(@Param("categorie") String categorie);
    List<Annonce> selectNouveauxByCategorie(@Param("categorie") String categorie);
    Annonce selectById(@Param("id") Integer id);
    List<Annonce> selectByCip(@Param("cip") String cip);
    void insertAnnonce(@Param("annonce") Annonce annonce);
    void updateAnnonce(@Param("annonce") Annonce annonce, @Param("id") Integer id);
    Integer findLastIdAnnonce();
    void cancelAnnonce(@Param("id") Integer id);
    void removeAnnonce(@Param("id") Integer id);
}
