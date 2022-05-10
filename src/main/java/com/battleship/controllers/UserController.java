package com.battleship.controllers;

import com.battleship.dtos.LoginDto;
import com.battleship.dtos.UserDto;
import com.battleship.services.UserService;
import com.battleship.utils.JwtTokenProvider;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/user")
public class UserController {
  private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

  private final UserService userService;
  private final AuthenticationManager authenticationManager;
  private final JwtTokenProvider jwtTokenUtil;

  @Autowired
  public UserController(
      final UserService userService,
      final AuthenticationManager authenticationManager,
      final JwtTokenProvider jwtTokenUtil
  ) {
    this.userService = userService;
    this.authenticationManager = authenticationManager;
    this.jwtTokenUtil = jwtTokenUtil;
  }

  @PostMapping
  public UserDto save(@RequestBody UserDto userDto) {
    LOGGER.debug("Called POST /user");

    return userService.save(userDto);
  }

  @PostMapping("/login")
  public UserDto login(@RequestBody LoginDto loginDto) {
    LOGGER.debug("Called POST /user/login");

    Authentication authentication = authenticationManager.authenticate(
            new UsernamePasswordAuthenticationToken(
                    loginDto.getUsername(),
                    loginDto.getPassword()
            )
    );

    SecurityContextHolder.getContext().setAuthentication(authentication);

    UserDto response = (UserDto) authentication.getPrincipal();
    String jwt = jwtTokenUtil.generateToken(response.getId());
    response.setToken(jwt);

    return response;
  }
}
