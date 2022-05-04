package com.battleship.dtos;

import java.util.StringJoiner;

public class AckDto {

    private boolean result;
    private String message;

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public boolean isResult() {
        return result;
    }

    public void setResult(boolean result) {
        this.result = result;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", AckDto.class.getSimpleName() + "[", "]")
                .add("result=" + result)
                .add("message='" + message + "'")
                .toString();
    }
}