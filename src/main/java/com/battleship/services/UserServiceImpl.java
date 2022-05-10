package com.battleship.services;

import com.battleship.dtos.UserDto;
import com.battleship.entities.User;
import com.battleship.mappers.UserMapper;
import com.battleship.repositories.UserRepository;
import com.battleship.exceptions.ServiceException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * @author Jacopo Korompay
 */
@Service
public class UserServiceImpl implements UserService {

  private final UserRepository userRepository;
  private final UserMapper userMapper;

  @Autowired
  public UserServiceImpl(
          final UserRepository userRepository,
          final UserMapper userMapper
  ) {
    this.userRepository = userRepository;
    this.userMapper = userMapper;
  }

  @Override
  public UserDto findById(Long id) throws ServiceException {
    User user = userRepository.findById(id).orElseThrow(() -> new ServiceException("Utente non trovato"));
    return userMapper.convertEntityToDto(user);
  }

  @Override
  public UserDto loadUserByUsername(String username) throws UsernameNotFoundException {
    User user = userRepository.findByUsername(username).orElseThrow(() -> new UsernameNotFoundException("Utente non trovato."));
    return userMapper.convertEntityToDto(user);
  }

  @Override
  public UserDto save(UserDto userDto) {
    User user = userMapper.convertDtoToEntity(userDto);
    user = userRepository.save(user);
    return userMapper.convertEntityToDto(user);
  }
}
