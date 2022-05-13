package com.battleship.entities;

import com.battleship.enums.BattleColor;

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
  private Long time;

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

  public Long getTime() {
    return time;
  }

  public void setTime(Long time) {
    this.time = time;
  }

  public void setColor(BattleColor color) {
    this.color = color;
  }

  public BattleColor getColor() {
    return color;
  }
}
