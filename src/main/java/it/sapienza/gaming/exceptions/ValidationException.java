package it.sapienza.gaming.exceptions;

import it.sapienza.gaming.enums.ExceptionType;

public class ValidationException extends CustomException {

    public ValidationException(String message) {
        super(ExceptionType.VALIDATION, message);
    }
}
