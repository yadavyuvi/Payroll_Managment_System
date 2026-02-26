package com.in.payroll.controller;

import com.in.payroll.entity.Employee;
import com.in.payroll.repository.EmployeeRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/employees")
@CrossOrigin(origins = "http://localhost:5173")
public class EmployeeController {

    private final EmployeeRepository repo;

    public EmployeeController(EmployeeRepository repo) {
        this.repo = repo;
    }

    // ✅ ADD Employee
    @PostMapping
    public Employee save(@RequestBody Employee emp) {
        return repo.save(emp);
    }

    // ✅ GET All Employees
    @GetMapping
    public List<Employee> getAll() {
        return repo.findAll();
    }

    // ✅ GET by ID
    @GetMapping("/{id}")
    public Employee getById(@PathVariable Long id) {
        return repo.findById(id).orElse(null);
    }

    // ✅ DELETE
    @DeleteMapping("/{id}")
    public String delete(@PathVariable Long id) {
        repo.deleteById(id);
        return "Employee Deleted";
    }

    // ✅ TEST
    @GetMapping("/test")
    public String test() {
        return "Employee API Working";
    }
}