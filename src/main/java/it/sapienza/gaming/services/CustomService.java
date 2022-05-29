package it.sapienza.gaming.services;

import it.sapienza.gaming.dtos.AckDto;

public abstract class CustomService {

    protected AckDto ackOK() {
        return buildAck(true, null);
    }

    protected AckDto ackOK(String message) {
        return buildAck(true, message);
    }

    protected AckDto ackKO(String message) {
        return buildAck(false, message);
    }

    private AckDto buildAck(boolean result, String message) {
        AckDto ackDto = new AckDto();
        ackDto.setResult(result);
        ackDto.setMessage(message);
        return ackDto;
    }
}
