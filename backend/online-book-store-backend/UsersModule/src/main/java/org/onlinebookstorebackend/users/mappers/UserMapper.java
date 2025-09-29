package org.onlinebookstorebackend.users.mappers;

import org.onlinebookstorebackend.users.dtos.UserDto;
import org.onlinebookstorebackend.users.entities.User;
import org.mapstruct.Builder;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring", builder = @Builder(disableBuilder = true))
public interface UserMapper {
    UserDto userToUserDto(User user);
}
