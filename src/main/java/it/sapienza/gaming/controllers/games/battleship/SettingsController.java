package it.sapienza.gaming.controllers.games.battleship;

import it.sapienza.gaming.constants.Messages;
import it.sapienza.gaming.dtos.AckDto;
import it.sapienza.gaming.dtos.games.battleship.SettingsDto;
import it.sapienza.gaming.exceptions.ServiceException;
import it.sapienza.gaming.exceptions.ValidationException;
import it.sapienza.gaming.services.games.battleship.SettingsService;
import it.sapienza.gaming.utils.MessageUtils;
import it.sapienza.gaming.validators.games.BattleshipValidator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/settings")
public class SettingsController {
  private static final Logger LOGGER = LoggerFactory.getLogger(SettingsController.class);

  private final SettingsService settingsService;

  @Autowired
  public SettingsController(final SettingsService settingsService) {
    this.settingsService = settingsService;
  }

  @GetMapping
  public List<SettingsDto> get() {

    LOGGER.debug("Called GET /settings");
    return settingsService.get();
  }

  @PostMapping
  public AckDto save(@RequestBody SettingsDto settingsDto) throws ServiceException, ValidationException {
    LOGGER.debug("Called POST /settings/{}", settingsDto);
    BattleshipValidator.validate(settingsDto);
    return settingsService.save(settingsDto);
  }

  @DeleteMapping("/{id}")
  public AckDto delete(@PathVariable Long id) throws ServiceException, ValidationException {
    LOGGER.debug("Called DELETE /settings/{}", id);
    BattleshipValidator.checkNull(id, MessageUtils.INSTANCE.getMessage(Messages.ERROR_VALIDATION_BATTLESHIP_ID));
    return settingsService.delete(id);
  }

}

