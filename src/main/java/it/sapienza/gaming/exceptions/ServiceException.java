package it.sapienza.gaming.exceptions;

import it.sapienza.gaming.enums.ExceptionType;

public class ServiceException extends CustomException {

    public ServiceException(String message) {
        super(ExceptionType.SERVICE, message);
    }
}
