// Email_LogRepository.java

package ticketingsitedemo.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ticketingsitedemo.server.domain.Email_Log;

@Repository
public interface Email_LogRepository extends JpaRepository<Email_Log, Long> {
}
