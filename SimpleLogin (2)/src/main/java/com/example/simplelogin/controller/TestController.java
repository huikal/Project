package com.example.simplelogin.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

//@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/test")
public class TestController {
  @GetMapping("/all")
  public String allAccess() {
//    TODO: TOUR 보내기
    return "Public Content.";
  }

  @GetMapping("/user")
//  @PreAuthorize 로 권한체크함
//  아래 페이지는 USER, ADMIN 가능
//  @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
  @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
  public String userAccess() {
    return "User Content.";
  }

//  @GetMapping("/mod")
//  @PreAuthorize("hasRole('MODERATOR')")
//  public String moderatorAccess() {
//    return "Moderator Board.";
//  }

//  아래 페이지는 ADMIN 만 가능
  @GetMapping("/admin")
  @PreAuthorize("hasRole('ADMIN')")
  public String adminAccess() {
    return "Admin Board.";
  }
}
