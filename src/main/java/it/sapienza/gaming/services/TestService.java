package it.sapienza.gaming.services;

import it.sapienza.gaming.dtos.TestDto;

import java.util.List;

public interface TestService {

    List<TestDto> findAll(String name, String surname);

    TestDto findById(Long id);

    TestDto save(TestDto testDto);

    TestDto update(TestDto testDto);

    TestDto delete(Long id);
}
