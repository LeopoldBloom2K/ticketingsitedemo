// MemberMapper.java

package ticketingsitedemo.server.mapper;

import org.apache.ibatis.annotations.*;
import ticketingsitedemo.server.domain.Member;

import java.util.List;

@Mapper
public interface MemberMapper {
    List<Member> findAll();

    Member findById(Long id);

    void insert(Member member);

    void update(Member member);

    void delete(Long id);
}