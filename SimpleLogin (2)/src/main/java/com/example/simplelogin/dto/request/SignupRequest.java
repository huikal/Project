package com.example.simplelogin.dto.request;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;
import java.util.Set;

@Getter
@Setter
@ToString
public class SignupRequest {

    private String username;

    private  String fullname;

    private String email;

    private String nickname;

    private String phone;

    private String address;

    private Set<String> role;

    private String password;
}
