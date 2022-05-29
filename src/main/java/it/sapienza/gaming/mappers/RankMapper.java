package it.sapienza.gaming.mappers;

import it.sapienza.gaming.dtos.RankDto;
import it.sapienza.gaming.entities.Rank;
import it.sapienza.gaming.exceptions.NotImplementedException;
import org.springframework.stereotype.Service;

@Service
public class RankMapper extends Mapper<RankDto, Rank> {

    @Override
    public RankDto convertEntityToDto(Rank entity) {

        RankDto dto = new RankDto();
        dto.setUsername(entity.getUser().getUsername());
        dto.setScore(entity.getScore());

        return dto;
    }

    @Override
    public Rank convertDtoToEntity(RankDto dto) throws NotImplementedException {
        throw new NotImplementedException();
    }
}
