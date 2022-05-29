package it.sapienza.gaming.services;

import it.sapienza.gaming.constants.Messages;
import it.sapienza.gaming.dtos.RankDto;
import it.sapienza.gaming.dtos.RankUpdateDto;
import it.sapienza.gaming.entities.Rank;
import it.sapienza.gaming.entities.User;
import it.sapienza.gaming.enums.GameType;
import it.sapienza.gaming.exceptions.ServiceException;
import it.sapienza.gaming.mappers.RankMapper;
import it.sapienza.gaming.repositories.RankRepository;
import it.sapienza.gaming.repositories.UserRepository;
import it.sapienza.gaming.utils.JwtTokenProvider;
import it.sapienza.gaming.utils.MessageUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RankServiceImpl implements RankService {

    private final RankRepository rankRepository;
    private final UserRepository userRepository;
    private final RankMapper rankMapper;

    @Autowired
    public RankServiceImpl(
            final RankRepository rankRepository,
            final UserRepository userRepository,
            final RankMapper rankMapper
    ) {
        this.rankRepository = rankRepository;
        this.userRepository = userRepository;
        this.rankMapper = rankMapper;
    }

    @Override
    public RankDto save(RankUpdateDto rankUpdateDto) throws ServiceException {
        User user = userRepository.findById(JwtTokenProvider.getLoggedUser().getId()).orElseThrow(() ->
                new ServiceException(MessageUtils.INSTANCE.getMessage(Messages.ERROR_SERVICE_USER_NOT_EXIST))
        );
        Rank rank = rankRepository.findByUserAndGameType(user, rankUpdateDto.getGameType()).orElse(null);

        int victoryPoints = 3;

//        switch (rankUpdateDto.getGameType()) {
//            case MEMORY:
//                victoryPoints = memoryInstanceService.get(rankUpdateDto.getInstanceId()).getPoints().getPoints();
//                break;
//            case MINEFIELD:
//                victoryPoints = minefieldInstanceService.get(rankUpdateDto.getInstanceId()).getPoints().getPoints();
//                break;
//            case LUCANUM:
//                victoryPoints = lucanumInstanceService.get(rankUpdateDto.getInstanceId()).getPoints().getPoints();
//                break;
//
//        }

        if (rank != null) {
            rank.setScore(rank.getScore() + victoryPoints);
        } else {
            rank = new Rank();
            rank.setUser(user);
            rank.setScore(victoryPoints);
            rank.setGameType(rankUpdateDto.getGameType());
        }

        rank = rankRepository.save(rank);

        return rankMapper.convertEntityToDto(rank);
    }

    @Override
    public List<RankDto> getRank(GameType gameType) {
        List<Rank> result = rankRepository.findByGameTypeOrderByScoreDesc(gameType);
        return rankMapper.convertEntityListToDtoList(result);
    }
}
