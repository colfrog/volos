package ca.usherbrooke.gegi.server.mappers;

//import ca.usherbrooke.gegi.server.data.Utilisateur;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;


import java.util.List;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
public interface FaculteMapper {

    List<String> selectFaculte();
    void insertFaculte(@Param("faculte") String faculte);

}