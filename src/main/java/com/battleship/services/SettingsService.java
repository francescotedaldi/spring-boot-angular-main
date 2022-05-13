package com.battleship.services;

import com.battleship.dtos.AckDto;
import com.battleship.dtos.SettingsDto;
import com.battleship.exceptions.ServiceException;
import com.battleship.exceptions.ValidationException;

import java.util.List;

public interface SettingsService {
  AckDto save(SettingsDto settingsDto) throws ServiceException, ValidationException;

  SettingsDto get(Long id) throws ServiceException;

  List<SettingsDto> get();

  AckDto delete(Long id) throws ServiceException;
}
