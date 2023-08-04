package com.example.simplelogin.security.services;

import com.example.simplelogin.model.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

// 아래 @Override 이 부분이 인터페이스에서 정의한 함수로
// id, email 은 개발자가 추가한 정보이고,
// 나머지 속성은 Spring Security에서 제공한 속성/함수 정보임
public class UserDetailsImpl implements UserDetails {
  private static final long serialVersionUID = 1L;

  private Long id; // 개발자 추가 속성

  private String fullname;

  private String email; // 개발자 추가 속성

  private String nickname; // Spring Security

  private String phone; // Spring Security

  private String address; // Spring Security

  private String username; // Spring Security

  // json 역직렬화(변환) 시 대상 속성 무시
  @JsonIgnore
  private String password; // Spring Security

//  계정이 갖고 있는 권한 목록을 저장하는 속성
  private Collection<? extends GrantedAuthority> authorities; // Spring Security

  public UserDetailsImpl(Long id, String fullname, String email, String nickname, String phone, String address, String username, String password,
      Collection<? extends GrantedAuthority> authorities) {
    this.id = id;
    this.fullname = fullname;
    this.email = email;
    this.nickname = nickname;
    this.phone = phone;
    this.address = address;
    this.username = username;
    this.password = password;
    this.authorities = authorities;
  }

  public static UserDetailsImpl build(User user) {
//    role.getName().name() : 롤 정보 ( ROLE_USER 등 )
//    스프링부트 권한 생성 : new SimpleGrantedAuthority(권한문자열) 생성자를 호출 해서 생성
//    아래는 권한이 여러개 있을 수 있으므로 배열로(List) 생성함
    List<GrantedAuthority> authorities = user.getRoles().stream()
        .map(role -> new SimpleGrantedAuthority(role.getName().name()))
        .collect(Collectors.toList());

    return new UserDetailsImpl(
        user.getId(), 
        user.getFullname(),
        user.getEmail(),
        user.getNickname(),
        user.getPhone(),
        user.getAddress(),
        user.getUsername(),
        user.getPassword(),
        authorities);
  }

  //  계정이 갖고 있는 권한 목록을 리턴하는 함수
  @Override
  public Collection<? extends GrantedAuthority> getAuthorities() {
    return authorities;
  }

  public Long getId() {
    return id;
  }

  public String getFullname() {
    return fullname;
  }

  public String getEmail() {
    return email;
  }

  public String getNickname() {
    return nickname;
  }

  public String getPhone() {
    return phone;
  }

  public String getAddress() {
    return address;
  }

  @Override
  public String getPassword() {
    return password;
  }

//  계정의 이름를 리턴 (주로 로그인 ID가 사용됨)
  @Override
  public String getUsername() {
    return username;
  }

//  계정이 만료되지 않았는지를 리턴( true 이면 만료되지 않았음을 의미 )
//  아래는 만료 체크가 필요없어서 항상 true 를 리턴하게 되어 있음
//  만약 필요하다면 DB에서 만료여부 컬럼을 관리하고 그 정보를 쿼리해서 사용하면 됨
  @Override
  public boolean isAccountNonExpired() {
    return true;
  }

//  계정이 잠겨있지 않은지를 리턴( true 이면 잠겨있지 않음을 의미 )
  @Override
  public boolean isAccountNonLocked() {
    return true;
  }

//  계정의 패스워드(Credential) 가 만료되지 않는지를 리턴( true 이면 패스워드가 만료되지 않음을 의미 )
  @Override
  public boolean isCredentialsNonExpired() {
    return true;
  }

//  계정이 사용 가능한 계정인지를 리턴( true 이면 사용 가능한 계정을 의미 )
  @Override
  public boolean isEnabled() {
    return true;
  }

//  equals 재정의
  @Override
  public boolean equals(Object o) {
    if (this == o)
      return true;
    if (o == null || getClass() != o.getClass())
      return false;
    UserDetailsImpl user = (UserDetailsImpl) o;
    return Objects.equals(id, user.id);
  }
}
