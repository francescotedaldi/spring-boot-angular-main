package com.battleship.services;

import com.battleship.dtos.BattleshipGameDto;
import com.battleship.exceptions.ServiceException;

public interface BattleshipGameService {

  BattleshipGameDto getBattleshipGame(Long id) throws ServiceException;
}
