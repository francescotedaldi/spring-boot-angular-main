package com.battleship.validators;

import com.battleship.constants.Messages;
import com.battleship.dtos.SettingsDto;
import com.battleship.exceptions.ValidationException;
import com.battleship.utils.MessageUtils;

public class BattleshipValidator extends CustomValidator {
  public static void validate(SettingsDto settingsDto) throws ValidationException {
    checkNull(settingsDto.getId(), MessageUtils.INSTANCE.getMessage(Messages.ERROR_VALIDATION_BATTLESHIP_ID));
    checkNull(settingsDto.getTime(), MessageUtils.INSTANCE.getMessage(Messages.ERROR_VALIDATION_BATTLESHIP_NAME));
    checkBattleColor(settingsDto.getColor(), MessageUtils.INSTANCE.getMessage(Messages.ERROR_VALIDATION_BATTLESHIP_COLOR));
    checkNull(settingsDto.getName(), MessageUtils.INSTANCE.getMessage(Messages.ERROR_VALIDATION_BATTLESHIP_TIME));
  }
}
