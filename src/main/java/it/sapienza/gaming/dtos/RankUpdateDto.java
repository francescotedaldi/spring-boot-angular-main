package it.sapienza.gaming.dtos;

import it.sapienza.gaming.enums.GameType;

import java.util.StringJoiner;

public class RankUpdateDto {

    private Long instanceId;
    private GameType gameType;

    public GameType getGameType() {
        return gameType;
    }

    public void setGameType(GameType gameType) {
        this.gameType = gameType;
    }

    public Long getInstanceId() {
        return instanceId;
    }

    public void setInstanceId(Long instanceId) {
        this.instanceId = instanceId;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", RankUpdateDto.class.getSimpleName() + "[", "]")
                .add("instanceId=" + instanceId)
                .add("gameType=" + gameType)
                .toString();
    }
}
