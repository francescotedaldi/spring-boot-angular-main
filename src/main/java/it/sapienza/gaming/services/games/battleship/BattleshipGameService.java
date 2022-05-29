package it.sapienza.gaming.services.games.battleship;

import it.sapienza.gaming.dtos.games.battleship.BattleshipGameDto;
import it.sapienza.gaming.exceptions.ServiceException;

public interface BattleshipGameService {

  BattleshipGameDto getBattleshipGame(Long id) throws ServiceException;
}
