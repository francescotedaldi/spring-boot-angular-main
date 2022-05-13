package com.battleship.services;

import com.battleship.constants.Messages;
import com.battleship.dtos.AckDto;
import com.battleship.dtos.SettingsDto;
import com.battleship.entities.Settings;
import com.battleship.exceptions.ServiceException;
import com.battleship.exceptions.ValidationException;
import com.battleship.mappers.SettingsMapper;
import com.battleship.repositories.SettingsRepository;
import com.battleship.utils.MessageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class SettingsServiceImpl extends CustomService implements SettingsService{
  private final SettingsRepository settingsRepository;
  private final SettingsMapper settingsMapper;

  @Autowired
  public SettingsServiceImpl(
    final SettingsRepository settingsRepository,
    final SettingsMapper settingsMapper
  ) {

    this.settingsRepository = settingsRepository;
    this.settingsMapper = settingsMapper;
  }

  @Override
  public List<SettingsDto> get() {
    List<Settings> instances = new ArrayList<>();
    settingsRepository.findAll().forEach(instances::add);
    return settingsMapper.convertEntityListToDtoList(instances);
  }

  @Override
  public SettingsDto get(Long id) throws ServiceException {
    Settings instance = settingsRepository.findById(id).orElseThrow(() ->
      new ServiceException(MessageUtils.INSTANCE.getMessage(Messages.ERROR_SERVICE_BATTLESHIP_NOT_EXIST))
    );
    return settingsMapper.convertEntityToDto(instance);
  }

  @Override
  public AckDto save(SettingsDto settingsDto) throws ServiceException, ValidationException {
    Settings settings;
    if (settingsDto.getId() != null) {
      settings = settingsRepository.findById(settingsDto.getId()).orElseThrow(() ->
        new ServiceException(MessageUtils.INSTANCE.getMessage(Messages.ERROR_SERVICE_BATTLESHIP_NOT_EXIST))
      );
      if (!settings.getName().equals(settingsDto.getName())) {
        checkName(settingsDto.getName());
      }
      settingsMapper.mergeDtoToEntity(settings, settingsDto);
    } else {
      settings = settingsMapper.convertDtoToEntity(settingsDto);
      checkName(settingsDto.getName());
    }

    settingsRepository.save(settings);

    return ackOK();
  }

  @Override
  public AckDto delete(Long id) throws ServiceException {
    Settings instance = settingsRepository.findById(id).orElseThrow(() ->
      new ServiceException(MessageUtils.INSTANCE.getMessage(Messages.ERROR_SERVICE_BATTLESHIP_NOT_EXIST))
    );
    settingsRepository.delete(instance);
    return ackOK();
  }

  private void checkName(String name) throws ValidationException {
    if (settingsRepository.existsByName(name)) {
      throw new ValidationException(MessageUtils.INSTANCE.getMessage(Messages.ERROR_SERVICE_BATTLESHIP_NOT_EXIST));
    }
  }
}
