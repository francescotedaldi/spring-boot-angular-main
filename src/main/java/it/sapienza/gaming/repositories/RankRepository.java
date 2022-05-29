package it.sapienza.gaming.repositories;

import it.sapienza.gaming.entities.Rank;
import it.sapienza.gaming.entities.User;
import it.sapienza.gaming.enums.GameType;
import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface RankRepository extends CrudRepository<Rank,Long> {

    List<Rank> findByGameTypeOrderByScoreDesc(GameType gameType);

    Optional<Rank> findByUserAndGameType(User username, GameType gameType);

}
