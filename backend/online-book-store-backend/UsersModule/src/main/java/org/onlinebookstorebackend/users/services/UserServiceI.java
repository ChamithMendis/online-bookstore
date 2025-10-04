package org.onlinebookstorebackend.users.services;

import org.onlinebookstorebackend.users.dtos.CredentialsDto;
import org.onlinebookstorebackend.users.dtos.SignUpDto;
import org.onlinebookstorebackend.users.dtos.UserDto;

public interface UserServiceI {
    UserDto register(SignUpDto signUpDto);
    UserDto login(CredentialsDto credentialsDto);
}
