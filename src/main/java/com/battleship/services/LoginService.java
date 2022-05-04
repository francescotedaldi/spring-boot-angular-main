package com.battleship.services;

import java.util.List;

import com.battleship.dtos.AckDto;
import com.battleship.dtos.LoginDto;
import com.battleship.exceptions.ServiceException;
import com.battleship.exceptions.ValidationException;

public interface LoginService {
    AckDto save(LoginDto loginDto) throws ServiceException, ValidationException;

    LoginDto get(Long id) throws ServiceException;

    List<LoginDto> get();

    AckDto delete(Long id) throws ServiceException;
}