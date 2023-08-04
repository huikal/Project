package com.example.simplelogin.dto.response;

import java.util.List;

// 스프링부트 -> 리액트 결과전송하는 클래스(객체)
public class JwtResponse {
  private String token;             // 웹토큰(인증정보)
  private String type = "Bearer";   // 고정(웹토큰 관련속성)
  private Long id;                  // 유저 id(시퀀스)
  private String fullname;          // 이름
  private String email;             // 이메일
  private String nickname;
  private String phone;
  private String address;
  private String username;          // userid
  private List<String> roles;       // 권한배열(새로운권한 : ROLE_USER)

  //  생성자
  public JwtResponse(String accessToken, Long id, String fullname, String email, String nickname, String phone, String address, String username, List<String> roles) {
    this.token = accessToken;
    this.id = id;
    this.fullname = fullname;
    this.email = email;
    this.nickname = nickname;
    this.phone = phone;
    this.address = address;
    this.username = username;
    this.roles = roles;
  }

  //  Getter/Setter 함수
  public String getAccessToken() {
    return token;
  }

  public void setAccessToken(String accessToken) {
    this.token = accessToken;
  }

  public String getTokenType() {
    return type;
  }

  public void setTokenType(String tokenType) {
    this.type = tokenType;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getFullname() {
    return fullname;
  }

  public void setFullname(String fullname) {
    this.fullname = fullname;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getNickname() {
    return nickname;
  }

  public void setNickname(String nickname) {
    this.nickname = nickname;
  }

  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public List<String> getRoles() {
    return roles;
  }
}