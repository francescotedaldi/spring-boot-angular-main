package com.battleship.dtos;

import com.battleship.constants.Messages;
import com.battleship.enums.ExceptionType;
import com.battleship.exceptions.ServiceException;
import com.battleship.exceptions.ValidationException;
import com.battleship.utils.MessageUtils;

import java.util.StringJoiner;


public class ErrorDto {

    private ExceptionType type;
    private String message;

    public ErrorDto() {
        this.type = ExceptionType.UNEXPECTED;
        this.message = MessageUtils.INSTANCE.getMessage(Messages.ERROR_UNEXPECTED);
    }

    public ErrorDto(ValidationException ex) {
        this.type = ex.getType();
        this.message = ex.getMessage();
    }

    public ErrorDto(ServiceException ex) {
        this.type = ex.getType();
        this.message = ex.getMessage();
    }

    public ExceptionType getType() {
        return type;
    }

    public void setType(ExceptionType type) {
        this.type = type;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", ErrorDto.class.getSimpleName() + "[", "]")
                .add("type=" + type)
                .add("message='" + message + "'")
                .toString();
    }
}
