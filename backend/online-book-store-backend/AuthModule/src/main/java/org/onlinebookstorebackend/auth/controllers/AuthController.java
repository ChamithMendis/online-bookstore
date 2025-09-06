package org.onlinebookstorebackend.auth.controllers;

import org.onlinebookstorebackend.auth.dtos.SignUpDto;
import org.onlinebookstorebackend.common.dtos.UserDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;

@RestController
public class AuthController {
    public AuthController() {
    }

    @PostMapping("/register")
    public ResponseEntity<UserDto> register(@RequestBody SignUpDto signUpDto) {
        System.out.println("Rest call success");
        UserDto user = new UserDto();
        return ResponseEntity.created(URI.create("/register/" + user.getId())).body(user);
    }
}
