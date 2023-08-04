package com.example.simplelogin.dto.request;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.validation.constraints.NotBlank;

@Getter
@Setter
@ToString
public class LoginRequest {

    private String username;

    private String password;
}








