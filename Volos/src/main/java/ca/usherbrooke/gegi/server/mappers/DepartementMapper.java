package ca.usherbrooke.gegi.server.mappers;

//import ca.usherbrooke.gegi.server.data.Utilisateur;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;


import java.util.List;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
public interface DepartementMapper {

    List<Utilisateur> selectUtilisateurs();
    Utilisateur selectUtilisateurByCip(@Param("cip") String cip );
    List<Utilisateur> selectUtilisateurByFaculte(@Param("faculte") String faculte);
    List<Utilisateur> selectUtilisateurByDepartement(@Param("departement") String departement);
    void insertUtilisateur(@Param("utilisateur") Utilisateur utilisateur);

}