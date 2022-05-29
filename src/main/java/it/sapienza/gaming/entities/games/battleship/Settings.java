package it.sapienza.gaming.entities.games.battleship;

import it.sapienza.gaming.enums.BattleColor;

import javax.persistence.*;


@Entity
@SequenceGenerator(name = "SETTINGS_SEQUENCE_GENERATOR", allocationSize = 1, sequenceName = "SETTINGS_SEQ")
public class Settings {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO, generator = "SETTINGS_SEQUENCE_GENERATOR")
  private Long id;

  @Column(nullable = false)
  private String name;

  @Column
  private int moves;

  @Column(nullable = false)
  @Enumerated(EnumType.STRING)
  private BattleColor color;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getName() {
    return name;
  }

  public int getMoves() {
    return moves;
  }

  public void setMoves(int moves) {
    this.moves = moves;
  }

  public void setColor(BattleColor color) {
    this.color = color;
  }

  public BattleColor getColor() {
    return color;
  }
}
