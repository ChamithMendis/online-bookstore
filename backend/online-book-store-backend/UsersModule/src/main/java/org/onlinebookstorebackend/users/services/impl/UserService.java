package org.onlinebookstorebackend.users.services.impl;

import org.onlinebookstorebackend.common.exceptions.AppException;
import org.onlinebookstorebackend.users.dtos.CredentialsDto;
import org.onlinebookstorebackend.users.dtos.UserDto;
import org.onlinebookstorebackend.users.entities.User;
import org.onlinebookstorebackend.users.mappers.UserMapper;
import org.onlinebookstorebackend.users.repositories.UserRepository;
import org.onlinebookstorebackend.users.services.UserServiceI;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.nio.CharBuffer;

@Service
public class UserService implements UserServiceI {

    private static final Logger logger = LoggerFactory.getLogger(UserService.class);
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserMapper userMapper;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.userMapper = userMapper;
    }

    public UserDto login(CredentialsDto credentialsDto) {
        User user = userRepository.findByUsername(credentialsDto.login()).orElseThrow(() -> new AppException("Unknows User", HttpStatus.NOT_FOUND));

        if (passwordEncoder.matches(CharBuffer.wrap(credentialsDto.password()), user.getPassword())) {
            return userMapper.userToUserDto(user);
        }
        throw new AppException("Invalid Password", HttpStatus.BAD_REQUEST);
    }
}
