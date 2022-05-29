package it.sapienza.gaming.validators.games;

import it.sapienza.gaming.constants.Messages;
import it.sapienza.gaming.dtos.games.battleship.SettingsDto;
import it.sapienza.gaming.exceptions.ValidationException;
import it.sapienza.gaming.utils.MessageUtils;
import it.sapienza.gaming.validators.CustomValidator;

public class BattleshipValidator extends CustomValidator {
  public static void validate(SettingsDto settingsDto) throws ValidationException {
    checkRange(settingsDto.getMoves(), 30, 100, MessageUtils.INSTANCE.getMessage(Messages.ERROR_VALIDATION_BATTLESHIP_TIME));
    checkBattleColor(settingsDto.getColor(), MessageUtils.INSTANCE.getMessage(Messages.ERROR_VALIDATION_BATTLESHIP_COLOR));
    checkNull(settingsDto.getName(), MessageUtils.INSTANCE.getMessage(Messages.ERROR_VALIDATION_BATTLESHIP_TIME));
  }
}
