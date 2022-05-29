package it.sapienza.gaming.services;

import it.sapienza.gaming.dtos.RankDto;
import it.sapienza.gaming.dtos.RankUpdateDto;
import it.sapienza.gaming.enums.GameType;
import it.sapienza.gaming.exceptions.ServiceException;

import java.util.List;

public interface RankService {

    RankDto save(RankUpdateDto rankUpdateDto) throws ServiceException;

    List<RankDto> getRank(GameType gameType);

}
