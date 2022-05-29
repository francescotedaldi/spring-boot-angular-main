package it.sapienza.gaming.exceptions;

import it.sapienza.gaming.constants.Messages;
import it.sapienza.gaming.enums.ExceptionType;
import it.sapienza.gaming.utils.MessageUtils;

public class NotImplementedException extends CustomException {

    public NotImplementedException() {
        super(ExceptionType.NOT_IMPLEMENTED, MessageUtils.INSTANCE.getMessage(Messages.ERROR_NOT_IMPLEMENTED));
    }
}
