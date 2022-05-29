package it.sapienza.gaming.services.games.battleship;

import it.sapienza.gaming.constants.Messages;
import it.sapienza.gaming.dtos.games.battleship.BattleshipGameDto;
import it.sapienza.gaming.entities.games.battleship.Settings;
import it.sapienza.gaming.exceptions.ServiceException;
import it.sapienza.gaming.mappers.games.battleship.SettingsMapper;
import it.sapienza.gaming.repositories.games.battleship.SettingsRepository;
import it.sapienza.gaming.utils.MessageUtils;
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
