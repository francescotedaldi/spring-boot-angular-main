package com.battleship.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
@SequenceGenerator(name = "LOGIN_SEQUENCE_GENERATOR", allocationSize = 1, sequenceName = "LOGIN_SEQ")
public class Login {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "LOGIN_SEQUENCE_GENERATOR")
    private Long id;

    @Column(nullable = false, unique = true) // identifica che non è annullabile ed è una chiave
    private String username;

    @Column(nullable = false) // identifica che è una chiave
    private String password;

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
}
