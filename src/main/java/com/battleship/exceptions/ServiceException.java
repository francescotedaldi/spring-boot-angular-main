package com.battleship.exceptions;

import com.battleship.enums.ExceptionType;

public class ServiceException extends CustomException {

    public ServiceException(String message) {
        super(ExceptionType.SERVICE, message);
    }
}
