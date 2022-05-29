package it.sapienza.gaming.mappers;

import it.sapienza.gaming.dtos.UserDto;
import it.sapienza.gaming.entities.User;
import it.sapienza.gaming.enums.UserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserMapper extends Mapper<UserDto, User> {

  private final PasswordEncoder passwordEncoder;

  @Autowired
  public UserMapper(
          @Lazy final PasswordEncoder passwordEncoder
  ) {
    this.passwordEncoder = passwordEncoder;
  }

  @Override
  public UserDto convertEntityToDto(User entity) {

    UserDto dto = new UserDto();
    dto.setId(entity.getId());
    dto.setUsername(entity.getUsername());
    dto.setPassword(entity.getPassword());
    dto.setEmail(entity.getEmail());
    dto.setPresentation(entity.getPresentation());
    dto.setRole(entity.getRole());
    dto.setAccountNonExpired(entity.isAccountNonExpired());
    dto.setAccountNonLocked(entity.isAccountNonLocked());
    dto.setCredentialsNonExpired(entity.isCredentialsNonExpired());
    dto.setEnabled(entity.isEnabled());

    return dto;
  }

  @Override
  public User convertDtoToEntity(UserDto dto) {

    User entity = new User();
    entity.setEmail(dto.getEmail());
    entity.setPresentation(dto.getPresentation());
    entity.setUsername(dto.getUsername());
    entity.setAccountNonExpired(true);
    entity.setAccountNonLocked(true);
    entity.setCredentialsNonExpired(true);
    entity.setEnabled(true);
    entity.setPassword(passwordEncoder.encode(dto.getPassword()));
    entity.setRole(UserRole.GAMER);

    return entity;
  }
}
