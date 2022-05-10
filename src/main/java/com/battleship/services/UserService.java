package com.battleship.services;

import com.battleship.dtos.UserDto;
import com.battleship.exceptions.ServiceException;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;


public interface UserService extends UserDetailsService {

  UserDto findById(Long id) throws ServiceException;

  UserDto save(UserDto userDto);

  UserDto loadUserByUsername(String username) throws UsernameNotFoundException;
}
