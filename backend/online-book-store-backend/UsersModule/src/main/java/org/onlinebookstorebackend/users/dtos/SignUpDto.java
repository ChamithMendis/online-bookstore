package org.onlinebookstorebackend.users.dtos;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record SignUpDto(Long id, String firstName, String lastName, String username,String email, char[] password) {
}

//public class SignUpDto {
//    private Integer id;
//    @NotBlank(message = "Firstname is required")
//    private String firstName;
//    @NotBlank(message = "Lastname is required")
//    private String lastName;
//    @NotBlank(message = "Username is required")
//    private String username;
//    @Email(message = "Invalid email format")
//    @NotBlank(message = "Email is required")
//    private String email;
//    @NotBlank(message = "Password is required")
//    private String password;
//
//    public SignUpDto() {
//    }
//
//    public SignUpDto(Integer id, String firstName, String lastName, String username, String email, String password) {
//        this.id = id;
//        this.firstName = firstName;
//        this.lastName = lastName;
//        this.username = username;
//        this.email = email;
//        this.password = password;
//    }
//
//    public Integer getId() {
//        return id;
//    }
//
//    public void setId(Integer id) {
//        this.id = id;
//    }
//
//    public String getFirstName() {
//        return firstName;
//    }
//
//    public void setFirstName(String firstName) {
//        this.firstName = firstName;
//    }
//
//    public String getLastName() {
//        return lastName;
//    }
//
//    public void setLastName(String lastName) {
//        this.lastName = lastName;
//    }
//
//    public String getUsername() {
//        return username;
//    }
//
//    public void setUsername(String username) {
//        this.username = username;
//    }
//
//    public String getEmail() {
//        return email;
//    }
//
//    public void setEmail(String email) {
//        this.email = email;
//    }
//
//    public String getPassword() {
//        return password;
//    }
//
//    public void setPassword(String password) {
//        this.password = password;
//    }
//}
