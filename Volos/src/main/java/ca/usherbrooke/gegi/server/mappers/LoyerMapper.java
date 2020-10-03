package ca.usherbrooke.gegi.server.mappers;

import ca.usherbrooke.gegi.server.data.Loyer;
import org.apache.ibatis.annotations.Param;
import org.mybatis.cdi.Mapper;

import java.util.List;

@SuppressWarnings("CdiManagedBeanInconsistencyInspection")
@Mapper
public interface LoyerMapper {
    List<Loyer> select();
    Loyer selectId(@Param("id") Integer id);
    void insertLoyer(@Param("loyer") Loyer loyer);
    void updateLoyer(@Param("loyer") Loyer loyer, @Param("id") Integer id);
}