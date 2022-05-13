package com.battleship.repositories;

import com.battleship.entities.Settings;
import org.springframework.data.repository.CrudRepository;

public interface SettingsRepository extends CrudRepository<Settings, Long> {
  boolean existsByName(String name);
}
