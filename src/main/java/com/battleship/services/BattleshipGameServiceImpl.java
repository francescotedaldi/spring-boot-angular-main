package com.battleship.services;

import com.battleship.constants.Messages;
import com.battleship.dtos.BattleshipGameDto;
import com.battleship.entities.Settings;
import com.battleship.exceptions.ServiceException;
import com.battleship.mappers.SettingsMapper;
import com.battleship.repositories.SettingsRepository;
import com.battleship.utils.MessageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class BattleshipGameServiceImpl implements BattleshipGameService {

  private final SettingsRepository battleshipInstanceRepository;
  private final SettingsMapper battleshipInstanceMapper;

  @Autowired
  public BattleshipGameServiceImpl(
    final SettingsRepository battleshipInstanceRepository,
    final SettingsMapper battleshipInstanceMapper) {
    this.battleshipInstanceRepository = battleshipInstanceRepository;
    this.battleshipInstanceMapper = battleshipInstanceMapper;
  }

  @Override
  public BattleshipGameDto getBattleshipGame(Long id) throws ServiceException {
    Settings battleshipInstance = battleshipInstanceRepository.findById(id).orElseThrow(() ->
      new ServiceException(MessageUtils.INSTANCE.getMessage(Messages.ERROR_SERVICE_BATTLESHIP_INSTANCE_NOT_EXIST))
    );
    return buildGame(battleshipInstance);
  }

  private BattleshipGameDto buildGame(Settings battleshipInstance) {
    BattleshipGameDto game = new BattleshipGameDto();
    game.setInstance(battleshipInstanceMapper.convertEntityToDto(battleshipInstance));
    return game;
  }

}
