package org.onlinebookstorebackend.users.mappers;

import org.onlinebookstorebackend.users.dtos.SignUpDto;
import org.onlinebookstorebackend.users.dtos.UserDto;
import org.onlinebookstorebackend.users.entities.User;
import org.mapstruct.*;

@Mapper(componentModel = "spring", builder = @Builder(disableBuilder = true))
public interface UserMapper {
    @Mapping(target = "password", ignore = true)
    User signUpToUser(SignUpDto signUpDto);
    UserDto userToUserDto(User user);
}
