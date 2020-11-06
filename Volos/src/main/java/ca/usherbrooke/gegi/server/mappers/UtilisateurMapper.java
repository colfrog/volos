package ca.usherbrooke.gegi.server.mappers;

import ca.usherbrooke.gegi.server.data.Departement;
import ca.usherbrooke.gegi.server.data.Utilisateur;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;


import java.util.List;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
/**
 * Mapper qui définit les différentes requête sql passé sur la table utilisateur
 * @author Paul du Réau
 * @version 1.0
 */
public interface UtilisateurMapper {

    List<Utilisateur> selectUtilisateurs();
    Utilisateur selectUtilisateurByCip(@Param("cip") String cip );
    List<Utilisateur> selectUtilisateurByFaculte(@Param("faculte") String faculte);
    List<Utilisateur> selectUtilisateurByDepartement(@Param("departement") String departement);
    //void updateUtilisateurDepartement(@Param("cip") String cip, @Param("departement") Departement departement);
    void insertUtilisateur(@Param("utilisateur") Utilisateur utilisateur);

}