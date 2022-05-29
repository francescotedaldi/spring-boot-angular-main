package it.sapienza.gaming.services;

import it.sapienza.gaming.dtos.TestDto;
import it.sapienza.gaming.entities.Test;
import it.sapienza.gaming.mappers.TestMapper;
import it.sapienza.gaming.repositories.TestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class TestServiceImpl implements TestService {

    private final TestRepository repository;
    private final TestMapper mapper;

    @Autowired
    public TestServiceImpl(
            final TestRepository repository,
            final TestMapper mapper
    ) {
        this.repository = repository;
        this.mapper = mapper;
    }

    @Override
    public List<TestDto> findAll(String name, String surname) {
        List<Test> result = new ArrayList<>();
        repository.findAll().forEach(result::add);
        return mapper.convertEntityListToDtoList(result);
    }

    @Override
    public TestDto findById(Long id) {
        Optional<Test> test = repository.findById(id);
        return test.map(mapper::convertEntityToDto).orElse(null);
    }

    @Override
    public TestDto save(TestDto testDto) {
        Test test = mapper.convertDtoToEntity(testDto);
        repository.save(test);
        return mapper.convertEntityToDto(test);
    }

    @Override
    public TestDto update(TestDto testDto) {
        Test test = repository.findById(testDto.getId()).orElseThrow(null);
        mapper.mergeDtoToEntity(test, testDto);
        repository.save(test);
        return mapper.convertEntityToDto(test);
    }

    @Override
    public TestDto delete(Long id) {
        Optional<Test> test = repository.findById(id);
        test.ifPresent(repository::delete);
        return test.map(mapper::convertEntityToDto).orElse(null);
    }
}
