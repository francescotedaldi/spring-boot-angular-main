package it.sapienza.gaming.services;

import it.sapienza.gaming.dtos.UserDto;
import it.sapienza.gaming.exceptions.ServiceException;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

public interface UserService extends UserDetailsService {

  UserDto findById(Long id) throws ServiceException;

  UserDto save(UserDto userDto);

  UserDto loadUserByUsername(String username) throws UsernameNotFoundException;
}
