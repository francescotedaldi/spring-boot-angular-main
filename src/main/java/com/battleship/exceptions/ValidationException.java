package com.battleship.exceptions;

import com.battleship.enums.ExceptionType;


public class ValidationException extends CustomException {

    public ValidationException(String message) {
        super(ExceptionType.VALIDATION, message);
    }
}
