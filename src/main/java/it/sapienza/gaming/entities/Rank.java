package it.sapienza.gaming.entities;

import it.sapienza.gaming.enums.GameType;

import javax.persistence.*;
import java.util.Objects;

@Entity
@SequenceGenerator(name = "RANK_SEQUENCE_GENERATOR", allocationSize = 1, sequenceName = "RANK_SEQ")
public class Rank {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "RANK_SEQUENCE_GENERATOR")
    private Long id;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private GameType gameType;

    @ManyToOne
    private User user;

    @Column(nullable = false)
    private int score;

    public GameType getGameType() {
        return gameType;
    }

    public void setGameType(GameType gameType) {
        this.gameType = gameType;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public int getScore() {
        return score;
    }

    public void setScore(int score) {
        this.score = score;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Rank rank = (Rank) o;
        return score == rank.score && gameType == rank.gameType && user.equals(rank.user);
    }

    @Override
    public int hashCode() {
        return Objects.hash(gameType, user, score);
    }

}
