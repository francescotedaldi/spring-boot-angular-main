package com.battleship.controllers;

import com.battleship.constants.Messages;
import com.battleship.dtos.AckDto;
import com.battleship.dtos.SettingsDto;
import com.battleship.exceptions.ServiceException;
import com.battleship.exceptions.ValidationException;
import com.battleship.services.SettingsService;
import com.battleship.utils.MessageUtils;
import com.battleship.validators.BattleshipValidator;
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

