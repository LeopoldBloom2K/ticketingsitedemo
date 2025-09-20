// UserMapper.java

package ticketingsitedemo.server.mapper;

import org.apache.ibatis.annotations.Mapper;
import ticketingsitedemo.server.domain.User;

import java.util.List;

@Mapper
public interface UserMapper {
    List<User> findAll();
}
