package it.sapienza.gaming.dtos.games.battleship;

import java.util.StringJoiner;

public class BattleshipGameDto {

  private SettingsDto instance;

  public SettingsDto getInstance() {
    return instance;
  }

  public void setInstance(SettingsDto instance) {
    this.instance = instance;
  }


  @Override
  public String toString() {
    return new StringJoiner(", ", BattleshipGameDto.class.getSimpleName() + "[", "]")
      .add("instance=" + instance)
      .toString();
  }
}
