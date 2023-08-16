package com.citibridge.arbitrage.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.citibridge.arbitrage.dto.AuthRequest;
import com.citibridge.arbitrage.service.UserService;

@RestController
@CrossOrigin
public class AuthenticateController {

    private final UserService userService;

    @Autowired
    public AuthenticateController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/login/authenticate")
    public ResponseEntity<String> authenticateUser(@RequestBody AuthRequest request) {
        String username = request.getUsername();
        String password = request.getPassword();

        if (userService.authenticateUser(username, password)) {
            return ResponseEntity.ok("Authentication successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Authentication failed");
        }
    }
}
