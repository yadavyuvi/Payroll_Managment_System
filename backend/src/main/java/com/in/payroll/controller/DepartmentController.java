package com.in.payroll.controller;

import com.in.payroll.entity.Department;
import com.in.payroll.repository.DepartmentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/departments")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class DepartmentController {

    private final DepartmentRepository departmentRepository;

    @GetMapping
    public List<Department> getAllDepartments() {
        return departmentRepository.findAll();
    }

    @PostMapping
    public Department createDepartment(@RequestBody Department department) {
        return departmentRepository.save(department);
    }

    @DeleteMapping("/{id}")
    public String deleteDepartment(@PathVariable Long id) {
        departmentRepository.deleteById(id);
        return "Department deleted successfully";
    }
}