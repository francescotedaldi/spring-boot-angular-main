package it.sapienza.gaming.dtos;

import it.sapienza.gaming.enums.UserRole;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.StringJoiner;

public class UserDto implements UserDetails {

  private Long id;
  private String username;
  private String password;
  private String email;
  private String presentation;
  private UserRole role;
  private String token;

  private Collection<? extends GrantedAuthority> authorities;
  private boolean accountNonExpired;
  private boolean accountNonLocked;
  private boolean credentialsNonExpired;
  private boolean enabled;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

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

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getPresentation() {
    return presentation;
  }

  public void setPresentation(String presentation) {
    this.presentation = presentation;
  }

  public UserRole getRole() {
    return role;
  }

  public void setRole(UserRole role) {
    this.role = role;
  }

  public String getToken() {
    return token;
  }

  public void setToken(String token) {
    this.token = token;
  }

  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return authorities;
  }

  public void setAuthorities(Collection<? extends GrantedAuthority> authorities) {
    this.authorities = authorities;
  }

  @Override
  public boolean isAccountNonExpired() {
    return accountNonExpired;
  }

  public void setAccountNonExpired(boolean accountNonExpired) {
    this.accountNonExpired = accountNonExpired;
  }

  @Override
  public boolean isAccountNonLocked() {
    return accountNonLocked;
  }

  public void setAccountNonLocked(boolean accountNonLocked) {
    this.accountNonLocked = accountNonLocked;
  }

  @Override
  public boolean isCredentialsNonExpired() {
    return credentialsNonExpired;
  }

  public void setCredentialsNonExpired(boolean credentialsNonExpired) {
    this.credentialsNonExpired = credentialsNonExpired;
  }

  @Override
  public boolean isEnabled() {
    return enabled;
  }

  public void setEnabled(boolean enabled) {
    this.enabled = enabled;
  }

  @Override
  public String toString() {
    return new StringJoiner(", ", UserDto.class.getSimpleName() + "[", "]")
            .add("id=" + id)
            .add("username='" + username + "'")
            .add("password='" + password + "'")
            .add("email='" + email + "'")
            .add("presentation='" + presentation + "'")
            .add("role=" + role)
            .add("token='" + token + "'")
            .add("authorities=" + authorities)
            .add("accountNonExpired=" + accountNonExpired)
            .add("accountNonLocked=" + accountNonLocked)
            .add("credentialsNonExpired=" + credentialsNonExpired)
            .add("enabled=" + enabled)
            .toString();
  }
}
