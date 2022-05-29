package it.sapienza.gaming.services.games.battleship;

import it.sapienza.gaming.dtos.AckDto;
import it.sapienza.gaming.dtos.games.battleship.SettingsDto;
import it.sapienza.gaming.exceptions.ServiceException;
import it.sapienza.gaming.exceptions.ValidationException;

import java.util.List;

public interface SettingsService {
  AckDto save(SettingsDto settingsDto) throws ServiceException, ValidationException;

  SettingsDto get(Long id) throws ServiceException;

  List<SettingsDto> get();

  AckDto delete(Long id) throws ServiceException;
}
