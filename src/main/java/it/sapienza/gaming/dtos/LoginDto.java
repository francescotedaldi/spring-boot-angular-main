package it.sapienza.gaming.dtos;

import java.util.StringJoiner;

public class LoginDto {

  private String username;
  private String password;

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  @Override
  public String toString() {
    return new StringJoiner(", ", LoginDto.class.getSimpleName() + "[", "]")
            .add("username='" + username + "'")
            .add("password='" + password + "'")
            .toString();
  }
}
