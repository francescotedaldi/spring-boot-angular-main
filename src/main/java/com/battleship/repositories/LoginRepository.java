package com.battleship.repositories;

import com.battleship.entities.Login;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LoginRepository extends CrudRepository<Login, Long> {
    boolean existsById(Long id);
}