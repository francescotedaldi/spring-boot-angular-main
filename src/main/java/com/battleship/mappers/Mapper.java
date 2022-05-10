package com.battleship.mappers;

import com.battleship.exceptions.NotImplementedException;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * @author Deborah Medici
 */
public abstract class Mapper<DTO, ENTITY> {

    public abstract DTO convertEntityToDto(ENTITY entity);

    public abstract ENTITY convertDtoToEntity(DTO dto) throws NotImplementedException;

    public List<DTO> convertEntityListToDtoList(Set<ENTITY> entities) {
        if (entities == null) {
            return new ArrayList<>();
        }
        return entities.stream().map(this::convertEntityToDto).collect(Collectors.toList());
    }

    public List<DTO> convertEntityListToDtoList(List<ENTITY> entities) {
        if (entities == null) {
            return new ArrayList<>();
        }
        return entities.stream().map(this::convertEntityToDto).collect(Collectors.toList());
    }

//    public Set<ENTITY> convertDtoListToEntityList(List<DTO> dto) throws NotImplementedException {
//        if (dto == null) {
//            return new HashSet<>();
//        }
//        return dto.stream().map(this::convertDtoToEntity).collect(Collectors.toSet());
//    }

}
