package it.sapienza.gaming.dtos;

import java.util.StringJoiner;

public class RankDto {

    private String username;
    private int score;

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    @Override
    public String toString() {
        return new StringJoiner(", ", RankDto.class.getSimpleName() + "[", "]")
                .add("username='" + username + "'")
                .add("score=" + score)
                .toString();
    }
}
