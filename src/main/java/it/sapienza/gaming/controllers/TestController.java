package it.sapienza.gaming.controllers;

import it.sapienza.gaming.dtos.TestDto;
import it.sapienza.gaming.services.TestService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/tests")
public class TestController {
  private static final Logger LOGGER = LoggerFactory.getLogger(TestController.class);

  private final TestService testService;

  @Autowired
  public TestController(final TestService testService) {
    this.testService = testService;
  }

  @GetMapping
  public List<TestDto> getTests(@RequestParam(required = false) String name, @RequestParam(required = false) String surname) {
    LOGGER.debug("Called GET /tests");
    return testService.findAll(name, surname);
  }

  @GetMapping("/{id}")
  public TestDto findById(@PathVariable Long id) {
    LOGGER.debug("Called GET /tests/" + id);
    return testService.findById(id);
  }

  @PostMapping
  public TestDto save(@RequestBody TestDto test) {
    LOGGER.debug("Called POST /tests");
    return testService.save(test);
  }

  @PutMapping
  public TestDto update(@RequestBody TestDto test) {
    LOGGER.debug("Called PUT /tests");
    return testService.update(test);
  }

  @DeleteMapping("/{id}")
  public TestDto deleteTest(@PathVariable Long id) {
    LOGGER.debug("Called DELETE /tests/" + id);
    return testService.delete(id);
  }
}
