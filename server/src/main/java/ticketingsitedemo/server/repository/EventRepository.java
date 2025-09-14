// EventRepository.java

package ticketingsitedemo.server.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import ticketingsitedemo.server.domain.Event;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
}
