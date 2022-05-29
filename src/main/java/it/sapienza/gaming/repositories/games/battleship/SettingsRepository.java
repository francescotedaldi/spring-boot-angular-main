package it.sapienza.gaming.repositories.games.battleship;

import it.sapienza.gaming.entities.games.battleship.Settings;
import org.springframework.data.repository.CrudRepository;

public interface SettingsRepository extends CrudRepository<Settings, Long> {
  boolean existsByName(String name);
}
