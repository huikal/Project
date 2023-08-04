package com.example.simplelogin.controller;

import com.example.simplelogin.dto.request.LoginRequest;
import com.example.simplelogin.dto.request.SignupRequest;
import com.example.simplelogin.dto.response.JwtResponse;
import com.example.simplelogin.dto.response.MessageResponse;
import com.example.simplelogin.model.ERole;
import com.example.simplelogin.model.Role;
import com.example.simplelogin.model.User;
import com.example.simplelogin.repository.RoleRepository;
import com.example.simplelogin.repository.UserRepository;
import com.example.simplelogin.security.jwt.JwtUtils;
import com.example.simplelogin.security.services.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

//@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {

  // 스프링 시큐리티에서 사용하는 인증/권한체크 처리를 위한 객체
  @Autowired
  AuthenticationManager authenticationManager;

  @Autowired
  UserRepository userRepository; // 유저 레포

  @Autowired
  RoleRepository roleRepository; // 롤 레포

  @Autowired
  PasswordEncoder encoder;       // 암호화 객체

  @Autowired
  JwtUtils jwtUtils;             // 웹토큰 객체

  //  로그인 함수 : GET 방식 아닌 POST 방식으로 객체를 body 에 숨겨서 전송됨
//  조회(select) -> Get 방식(@GetMapping) 권고
//  예) http://localhost:8000/api/signin?id=forbob&password=123456
//  보안 (Post 방식) -> http 의 바디에 문서를 넣어서 보내는 방식
  @PostMapping("/signin")
  public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {

//  TODO : 1)/2) 인증 시작 : 스프링시큐리티에서 제공하는 인증 객체
//  스프링시큐리티가 DB 접근(id/pwd) 우리 사용자가 맞으면 인증태그를 붙여서 인증객체 넣어줌
    Authentication authentication = authenticationManager.authenticate(
            // 아이디와 패스워드로, Security 가 알아 볼 수 있는 token 객체로 생성해서 인증처리
//   UsernamePasswordAuthenticationToken 의 매개변수로 유저명/패스워드 전달
            new UsernamePasswordAuthenticationToken(loginRequest.getUsername(), loginRequest.getPassword()));

// TODO : 3)인증된 객체를(authentication) 홀더에 저장
// 홀더(필통) : 인증된 객체들의 모임
    SecurityContextHolder.getContext().setAuthentication(authentication);

//  TODO: 4)
//    JWT 토큰(웹토큰) 발행 : (나중에 리액트로 전달함)
//  generateJwtToken(인증된객체) : 웹토큰 생성하는 함수 호출
//    return 값 : 웹토큰(jwt) 문자열 리턴
    String jwt = jwtUtils.generateJwtToken(authentication);

//  TODO: 5) authentication.getPrincipal() : 인증된 유저 정보 가져오기
//    인증된 유저 정보를 userDetails 에 저장
//    유저 정보 == userDetails == authentication.getPrincipal()
    UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
//  TODO: 5-2) 권한이 배열로 관리됨 : USER_ROLE, ADMIN_ROLE
//        권한 가져와서 roles 에 저장
    //    roles : 권한 배열
    List<String> roles = userDetails.getAuthorities().stream()
            .map(item -> item.getAuthority())
            .collect(Collectors.toList());

//    클라이언트에 인증된 사용자 정보 전송(토큰 + 사용자 정보(권한포함) :
//         JwtResponse DTO 객체에 정보를 담아 리액트로 전송
    return ResponseEntity.ok(new JwtResponse(jwt,
            userDetails.getId(),
            userDetails.getFullname(),
            userDetails.getEmail(),
            userDetails.getNickname(),
            userDetails.getPhone(),
            userDetails.getAddress(),
            userDetails.getUsername(),
            roles));
  }

  //  새 사용자 등록 함수 : insert
  // @PostMapping 사용 : signup(회원가입)
//  SignupRequest : 회원가입용 DTO ( 유저명, 이메일, 패스워드)
  @PostMapping("/signup")
  public ResponseEntity<?> registerUser(@RequestBody SignupRequest signUpRequest) {
//  TODO : 1) 사용자가 DB 에 있는 지 확인
    if (userRepository.existsByUsername(signUpRequest.getUsername())) {
      return ResponseEntity
              .badRequest()
              .body(new MessageResponse("Error: Username is already taken!"));
    }

//  TODO: 2) 이메일이 DB 에 있는 지 확인
    if (userRepository.existsByEmail(signUpRequest.getEmail())) {
      return ResponseEntity
              .badRequest()
              .body(new MessageResponse("Error: Email is already in use!"));
    }

    // TODO : 3) 새로운 유저 생성 : 패스워드 암호화
    User user = new User(signUpRequest.getFullname(),
            signUpRequest.getEmail(), signUpRequest.getNickname(),
            signUpRequest.getPhone(),signUpRequest.getAddress(),
            signUpRequest.getUsername(),
            // encoder.encode("password") : password 를 암호화
            encoder.encode(signUpRequest.getPassword()));

//  TODO: 4) 새로운 권한 만들기
//    혹시 signUpRequest(리액트 정보) 에 권한이 있으면 가져오기
    Set<String> strRoles = signUpRequest.getRole();
    Set<Role> roles = new HashSet<>(); // 권한 배열(집합)

//    리액트에서 보내준 권한이 없으면
    if (strRoles == null) {
//      권한이 없으면(새로운 일반유저)
//      새로운 유저권한을 가져와서 roles 자료구조(집합)에 넣기
      Role userRole = roleRepository.findByName(ERole.ROLE_USER)
              .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
      roles.add(userRole);
    } else {
//    TODO : 5) 권한을 보내 주었으면 : 지정된 권한으로 유저 생성
      strRoles.forEach(role -> {
        switch (role) {
          case "admin":
            Role adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(adminRole);

            break;
          default:
            Role userRole = roleRepository.findByName(ERole.ROLE_USER)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            roles.add(userRole);
        }
      });
    }

//  TODO: 6) 최종 생성된 권한을 유저에 setter 이용해서 추가
    user.setRoles(roles);
//    DB 에 새로운 유저 저장
    userRepository.save(user);

//  TODO: 7) 리액트로 성공메세지 전송
    return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
  }
}