package com.battleship.exceptions;

import com.battleship.constants.Messages;
import com.battleship.enums.ExceptionType;
import com.battleship.utils.MessageUtils;


public class NotImplementedException extends CustomException {

    public NotImplementedException() {
        super(ExceptionType.NOT_IMPLEMENTED, MessageUtils.INSTANCE.getMessage(Messages.ERROR_NOT_IMPLEMENTED));
    }
}
