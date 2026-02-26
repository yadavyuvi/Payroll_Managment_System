package com.in.payroll.service;

import org.springframework.stereotype.Service;

@Service
public class SalaryService {

    public double calculateNetSalary(double basicSalary) {

        double hra = basicSalary * 0.20;   // 20%
        double pf = basicSalary * 0.12;    // 12%
        double tax = basicSalary * 0.10;   // 10%

        return basicSalary + hra - pf - tax;
    }
}