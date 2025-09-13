package ticketingsitedemo.server;

import org.apache.ibatis.annotations.*;

import java.util.List;

@Mapper
public interface MemberMapper {
    @Select("SELECT * FROM member")
    List<Member> findAll();

    @Select("SELECT * FROM member WHERE id = #{id}")
    Member findById(Long id);

    @Insert("INSERT INTO member(name, email) VALUES(#{name}, #{email})")
    @Options(useGeneratedKeys = true, keyProperty = "id")
    void insert(Member member);

    @Update("UPDATE member SET name=#{name}, email=#{email} WHERE id=#{id}")
    void update(Member member);

    @Delete("DELETE FROM member WHERE id=#{id}")
    void delete(Long id);
}