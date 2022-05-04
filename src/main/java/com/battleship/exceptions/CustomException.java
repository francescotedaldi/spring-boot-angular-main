package com.battleship.exceptions;

import com.battleship.enums.ExceptionType;

public abstract class CustomException extends Exception {

    private ExceptionType type;

    public CustomException(ExceptionType type, String message) {
        super(message);
        this.type = type;
    }

    public ExceptionType getType() {
        return type;
    }

    public void setType(ExceptionType type) {
        this.type = type;
    }

}
