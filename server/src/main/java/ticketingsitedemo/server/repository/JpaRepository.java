package ticketingsitedemo.server.repository;

import ticketingsitedemo.server.domain.Member;

import java.util.List;

public interface JpaRepository <T, T1> {
    List<Member> findAll();
}
