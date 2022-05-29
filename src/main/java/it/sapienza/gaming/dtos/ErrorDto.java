package it.sapienza.gaming.dtos;

import it.sapienza.gaming.constants.Messages;
import it.sapienza.gaming.enums.ExceptionType;
import it.sapienza.gaming.exceptions.ServiceException;
import it.sapienza.gaming.exceptions.ValidationException;
import it.sapienza.gaming.utils.MessageUtils;

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
