package ticketingsitedemo.server;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
@MapperScan("ticketingsitedemo.server.mapper")
@EnableJpaRepositories("ticketingsitedemo.server.repository")
public class ServerApplication {

    public static void main(String[] args) {
        Dotenv dotenv = Dotenv.load();
        dotenv.entries().forEach(entry -> System.setProperty(entry.getKey(), entry.getValue()));
        System.out.println("✅ DB_HOST from .env: " + System.getProperty("DB_HOST"));
        SpringApplication.run(ServerApplication.class, args);

    }
}
