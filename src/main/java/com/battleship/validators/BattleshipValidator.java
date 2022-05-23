package com.battleship.validators;

import com.battleship.constants.Messages;
import com.battleship.dtos.SettingsDto;
import com.battleship.exceptions.ValidationException;
import com.battleship.utils.MessageUtils;

public class BattleshipValidator extends CustomValidator {
  public static void validate(SettingsDto settingsDto) throws ValidationException {
    checkRange(settingsDto.getMoves(), 30, 100, MessageUtils.INSTANCE.getMessage(Messages.ERROR_VALIDATION_BATTLESHIP_TIME));
    checkBattleColor(settingsDto.getColor(), MessageUtils.INSTANCE.getMessage(Messages.ERROR_VALIDATION_BATTLESHIP_COLOR));
    checkNull(settingsDto.getName(), MessageUtils.INSTANCE.getMessage(Messages.ERROR_VALIDATION_BATTLESHIP_TIME));
  }
}
