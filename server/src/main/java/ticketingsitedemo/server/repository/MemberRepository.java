// MemberRepository.java

package ticketingsitedemo.server.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ticketingsitedemo.server.domain.Member;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
}