package com.battleship.controllers;

import com.battleship.constants.Messages;
import com.battleship.dtos.AckDto;
import com.battleship.dtos.LoginDto;
import com.battleship.exceptions.ServiceException;
import com.battleship.exceptions.ValidationException;
import com.battleship.services.LoginService;
import com.battleship.utils.MessageUtils;
import com.battleship.validators.LoginValidator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/login")
public class LoginController {
    private static final Logger LOGGER = LoggerFactory.getLogger(LoginController.class);

    private final LoginService loginService;

    @Autowired
    public LoginController(final LoginService loginService) {
        this.loginService = loginService;
    }

    @GetMapping
    public List<LoginDto> get() {
        LOGGER.debug("Called GET /login");
        return loginService.get();
    }

    @PostMapping
    public AckDto save(@RequestBody LoginDto loginDto) throws ServiceException, ValidationException {
        LOGGER.debug("Called POST /login/{}", loginDto);
        LoginValidator.validate(loginDto);
        return loginService.save(loginDto);
    }

    @DeleteMapping("/{id}")
    public AckDto delete(@PathVariable Long id) throws ServiceException, ValidationException {
        LOGGER.debug("Called DELETE /login/{}", id);
        LoginValidator.checkNull(id, MessageUtils.INSTANCE.getMessage(Messages.ERROR_VALIDATION_LOGIN));
        return loginService.delete(id);
    }
}

