package com.battleship.utils;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;


public class PasswordMaker {

    public static void main(String[] args) {
        System.out.println(new BCryptPasswordEncoder(12).encode("gamer"));
    }
}
