// Host_ApplicationRepository.java

package ticketingsitedemo.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ticketingsitedemo.server.domain.Host_Application;

@Repository
public interface Host_ApplicationRepository extends JpaRepository<Host_Application, Long> {
}
