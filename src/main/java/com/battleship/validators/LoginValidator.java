package com.battleship.validators;

import com.battleship.constants.Messages;
import com.battleship.dtos.LoginDto;
import com.battleship.exceptions.ValidationException;
import com.battleship.utils.MessageUtils;

public class LoginValidator extends CustomValidator{
    public static void validate(LoginDto loginDto) throws ValidationException {
        checkEmpty(loginDto.getUsername(), MessageUtils.INSTANCE.getMessage(Messages.ERROR_VALIDATION_LOGIN_USERNAME));
        checkEmpty(loginDto.getPassword(), MessageUtils.INSTANCE.getMessage(Messages.ERROR_VALIDATION_LOGIN_PASSWORD));
    }
}
