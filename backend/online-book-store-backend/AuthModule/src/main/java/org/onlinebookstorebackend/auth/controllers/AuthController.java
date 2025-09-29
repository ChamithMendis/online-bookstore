package org.onlinebookstorebackend.auth.controllers;

import org.onlinebookstorebackend.users.dtos.CredentialsDto;
import org.onlinebookstorebackend.users.dtos.SignUpDto;
import org.onlinebookstorebackend.users.dtos.UserDto;
import org.onlinebookstorebackend.users.services.UserServiceI;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RestController
public class AuthController {

    private final UserServiceI userServiceI;

    public AuthController(UserServiceI userServiceI) {
        this.userServiceI = userServiceI;
    }

    @PostMapping("/register")
    public ResponseEntity<UserDto> register(@RequestBody SignUpDto signUpDto) {
        UserDto user = userServiceI.register(signUpDto);
        return ResponseEntity.created(URI.create("/users/" + user.getId())).body(user);
    }

    @PostMapping("/login")
    public ResponseEntity<UserDto> login(@RequestBody CredentialsDto credentialsDto) throws Exception {
        UserDto user = userServiceI.login(credentialsDto);
//        user.setToken(userAuthProvider.createToken(user));
//        return ResponseEntity.ok(user);
        return null;
    }
}
