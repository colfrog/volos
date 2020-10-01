package ca.usherbrooke.gegi.server.mappers;


import ca.usherbrooke.gegi.server.data.Annonce;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;

import java.util.List;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
public interface AnnonceMapper {
    List<Annonce> select();
    Annonce selectId(@Param("id") Integer id);
    void insertAnnonce(@Param("annonce") Annonce annonce);
    void updateAnnonce(@Param("annonce") Annonce annonce, @Param("id") Integer id);
}
