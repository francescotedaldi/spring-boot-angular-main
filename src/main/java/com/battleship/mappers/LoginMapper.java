package com.battleship.mappers;


import com.battleship.dtos.LoginDto;
import com.battleship.entities.Login;
import org.springframework.stereotype.Service;

@Service
public class LoginMapper extends Mapper<LoginDto, Login> {
    @Override
    public LoginDto convertEntityToDto(Login entity){
        LoginDto dto = new LoginDto();
        dto.setUsername(entity.getUsername());
        dto.setPassword(entity.getPassword());

        return dto;
    }

    @Override
    public Login convertDtoToEntity(LoginDto dto) {
        Login entity = new Login();
        entity.setUsername(dto.getUsername());
        entity.setPassword(dto.getPassword());

        return entity;
    }

    public void mergeDtoToEntity(Login entity, LoginDto dto) {
        entity.setUsername(dto.getUsername());
        entity.setPassword(dto.getPassword());
    }
}
