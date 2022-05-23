package com.battleship.mappers;


import com.battleship.dtos.SettingsDto;
import com.battleship.entities.Settings;
import org.springframework.stereotype.Service;

@Service
public class SettingsMapper extends Mapper<SettingsDto, Settings> {

  @Override
  public SettingsDto convertEntityToDto(Settings entity) {
    SettingsDto dto = new SettingsDto();
    dto.setId(entity.getId());
    dto.setName(entity.getName());
    dto.setMoves(entity.getMoves());
    dto.setColor(entity.getColor());

    return dto;
  }

  @Override
  public Settings convertDtoToEntity(SettingsDto dto) {
    Settings entity = new Settings();
    entity.setId(dto.getId());
    entity.setName(dto.getName());
    entity.setMoves(dto.getMoves());
    entity.setColor(dto.getColor());

    return entity;
  }

  public void mergeDtoToEntity(Settings entity, SettingsDto dto) {
    entity.setName(dto.getName());
    entity.setColor(dto.getColor());
    entity.setMoves(dto.getMoves());

  }

}

