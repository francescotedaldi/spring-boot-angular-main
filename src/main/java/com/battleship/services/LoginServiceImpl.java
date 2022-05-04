package com.battleship.services;

import java.util.ArrayList;
import java.util.List;

import com.battleship.constants.Messages;
import com.battleship.dtos.AckDto;
import com.battleship.dtos.LoginDto;
import com.battleship.entities.Login;
import com.battleship.exceptions.ServiceException;
import com.battleship.exceptions.ValidationException;
import com.battleship.mappers.LoginMapper;
import com.battleship.repositories.LoginRepository;
import com.battleship.utils.MessageUtils;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LoginServiceImpl extends CustomService implements LoginService {

    private final LoginRepository loginRepository;
    private final LoginMapper loginMapper;

    @Autowired
    public LoginServiceImpl(
            final LoginRepository loginRepository,
            final LoginMapper loginMapper
    ) {
        this.loginRepository = loginRepository;
        this.loginMapper = loginMapper;
    }

    @Override
    public List<LoginDto> get() {
        List<Login> instances = new ArrayList<>();
        loginRepository.findAll().forEach(instances::add);
        return loginMapper.convertEntityListToDtoList(instances);
    }

    @Override
    public LoginDto get(Long id) throws ServiceException {
        Login instance = loginRepository.findById(id).orElseThrow(() ->
                new ServiceException(MessageUtils.INSTANCE.getMessage(Messages.ERROR_SERVICE_LOGIN_NOT_EXIST))
        );
        return loginMapper.convertEntityToDto(instance);
    }

    @Override
    public AckDto save(LoginDto loginDto) throws ServiceException, ValidationException {
        Login login;
        if (loginDto.getId() != null) {
            login = loginRepository.findById(loginDto.getId()).orElseThrow(() ->
                    new ServiceException(MessageUtils.INSTANCE.getMessage(Messages.ERROR_SERVICE_LOGIN_NOT_EXIST))
            );
            if (!login.getId().equals(loginDto.getId())) {
                checkId(loginDto.getId());
            }
            loginMapper.mergeDtoToEntity(login, loginDto);
        } else {
            login = loginMapper.convertDtoToEntity(loginDto);
            checkId(loginDto.getId());
        }

        loginRepository.save(login);

        return ackOK();
    }

    @Override
    public AckDto delete(Long id) throws ServiceException {
        Login instance = loginRepository.findById(id).orElseThrow(() ->
                new ServiceException(MessageUtils.INSTANCE.getMessage(Messages.ERROR_SERVICE_LOGIN_NOT_EXIST))
        );
        loginRepository.delete(instance);
        return ackOK();
    }

    private void checkId(Long id) throws ValidationException {
        if (loginRepository.existsById(id)) {
            throw new ValidationException(MessageUtils.INSTANCE.getMessage(Messages.ERROR_VALIDATION_LOGIN_DUPLICATED));
        }
    }
}

