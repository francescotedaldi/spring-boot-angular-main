package com.battleship.dtos;

import com.battleship.enums.BattleColor;

import java.util.StringJoiner;


public class SettingsDto {

  private Long id;
  private String name;
  private int moves;
  private BattleColor color;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
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

  @Override
  public String toString() {
    return new StringJoiner(", ", UserDto.class.getSimpleName() + "[", "]")
      .add("id= " + id)
      .add("name= "+ name)
      .add("moves" + moves)
      .add("color" + color)
      .toString();
  }
}
