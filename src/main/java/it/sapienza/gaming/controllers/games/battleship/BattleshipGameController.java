package it.sapienza.gaming.controllers.games.battleship;

import it.sapienza.gaming.constants.Messages;
import it.sapienza.gaming.dtos.games.battleship.BattleshipGameDto;
import it.sapienza.gaming.exceptions.ServiceException;
import it.sapienza.gaming.exceptions.ValidationException;
import it.sapienza.gaming.services.games.battleship.BattleshipGameService;
import it.sapienza.gaming.utils.MessageUtils;
import it.sapienza.gaming.validators.games.BattleshipValidator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/battleship-game")
public class BattleshipGameController {
  private static final Logger LOGGER = LoggerFactory.getLogger(BattleshipGameController.class);

  private final BattleshipGameService battleshipGameService;

  @Autowired
  public BattleshipGameController(final BattleshipGameService battleshipGameService) {
    this.battleshipGameService = battleshipGameService;
  }

  @GetMapping("/{id}")
  public BattleshipGameDto findById(@PathVariable Long id) throws ValidationException, ServiceException {
    LOGGER.debug("Called GET /battleship-game/{}", id);
    BattleshipValidator.checkNull(id, MessageUtils.INSTANCE.getMessage(Messages.ERROR_VALIDATION_BATTLESHIP_ID));
    return battleshipGameService.getBattleshipGame(id);
  }

}
