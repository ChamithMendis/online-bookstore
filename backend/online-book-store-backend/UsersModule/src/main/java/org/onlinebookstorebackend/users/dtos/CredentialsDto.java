package org.onlinebookstorebackend.auth.dtos;

public record CredentialsDto(String login, char[] password) {
}
