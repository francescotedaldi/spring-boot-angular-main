package it.sapienza.gaming.mappers;

import it.sapienza.gaming.dtos.TestDto;
import it.sapienza.gaming.entities.Test;
import org.springframework.stereotype.Service;

@Service
public class TestMapper extends Mapper<TestDto, Test> {

    @Override
    public TestDto convertEntityToDto(Test entity) {

        TestDto dto = new TestDto();
        dto.setId(entity.getId());
        dto.setName(entity.getName());

        return dto;
    }

    @Override
    public Test convertDtoToEntity(TestDto dto) {

        Test entity = new Test();
        entity.setName(dto.getName());

        return entity;
    }

    public void mergeDtoToEntity(Test entity, TestDto dto) {

        entity.setName(dto.getName());

    }

}
