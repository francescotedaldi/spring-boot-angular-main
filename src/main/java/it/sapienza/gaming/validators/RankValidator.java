package it.sapienza.gaming.validators;

import it.sapienza.gaming.constants.Messages;
import it.sapienza.gaming.dtos.RankUpdateDto;
import it.sapienza.gaming.exceptions.ValidationException;
import it.sapienza.gaming.utils.MessageUtils;

public class RankValidator extends CustomValidator {
    public static void validate(RankUpdateDto rankUpdateDto) throws ValidationException {
        checkNull(rankUpdateDto.getGameType(), MessageUtils.INSTANCE.getMessage(Messages.ERROR_VALIDATION_RANK_GAME_TYPE));
        checkNull(rankUpdateDto.getInstanceId(), MessageUtils.INSTANCE.getMessage(Messages.ERROR_VALIDATION_RANK_INSTANCE_ID));
    }
}
