package it.sapienza.gaming.controllers;

import it.sapienza.gaming.constants.Messages;
import it.sapienza.gaming.dtos.RankDto;
import it.sapienza.gaming.dtos.RankUpdateDto;
import it.sapienza.gaming.enums.GameType;
import it.sapienza.gaming.exceptions.ServiceException;
import it.sapienza.gaming.exceptions.ValidationException;
import it.sapienza.gaming.services.RankService;
import it.sapienza.gaming.utils.MessageUtils;
import it.sapienza.gaming.validators.RankValidator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping("/ranks")
public class RankController {
    private static final Logger LOGGER = LoggerFactory.getLogger(RankController.class);

    private final RankService rankService;

    @Autowired
    public RankController(final RankService rankService) {
        this.rankService = rankService;
    }

    @PostMapping
    public RankDto save(@RequestBody RankUpdateDto rankUpdateDto) throws ServiceException, ValidationException {
        LOGGER.debug("Called POST /ranks/{}", rankUpdateDto);
        RankValidator.validate(rankUpdateDto);
        return rankService.save(rankUpdateDto);
    }

    @GetMapping("/{gameType}")
    public List<RankDto> getRank(@PathVariable GameType gameType) throws ValidationException {
        LOGGER.debug("Called GET /ranks/{}", gameType);
        RankValidator.checkNull(gameType, MessageUtils.INSTANCE.getMessage(Messages.ERROR_VALIDATION_RANK_GAME_TYPE));
        return rankService.getRank(gameType);
    }

}
