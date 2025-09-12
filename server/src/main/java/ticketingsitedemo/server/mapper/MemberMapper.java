package ticketingsitedemo.server.mapper;

import org.apache.ibatis.annotations.Mapper;
import java.util.List;

import ticketingsitedemo.server.domain.Member;

@Mapper
public interface MemberMapper {
    List<Member> findAll();
}

