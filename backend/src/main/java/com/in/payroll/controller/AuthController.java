package com.in.payroll.controller;

import com.in.payroll.entity.User;
import com.in.payroll.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    private final UserRepository repo;

    @PostMapping("/register")
    public User register(@RequestBody User user) {
        return repo.save(user);
    }

    @PostMapping("/login")
    public String login(@RequestBody User user) {

        User dbUser = repo.findByEmail(user.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if(dbUser.getPassword().equals(user.getPassword()))
            return "Login Success";
        else
            throw new RuntimeException("Wrong password");
    }
}