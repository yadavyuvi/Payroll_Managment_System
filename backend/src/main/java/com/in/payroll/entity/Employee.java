package com.in.payroll.entity;

import jakarta.persistence.*;
import lombok.*;
import java.time.LocalDate;

@Entity
@Table(name = "employees")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "first_name")
    private String firstName;

    @Column(name = "last_name")
    private String lastName;

    private String email;
    private String phone;

    @Column(name = "hire_date")
    private LocalDate hireDate;

    @Column(name = "basic_salary")
    private Double basicSalary;

    private String status;

    @ManyToOne
    @JoinColumn(name = "department_id")
    private Department department;
}