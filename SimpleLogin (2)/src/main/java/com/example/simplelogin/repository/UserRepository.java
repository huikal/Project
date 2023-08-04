package com.example.simplelogin.repository;

import com.example.simplelogin.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * packageName : com.example.simplelogin.repository
 * fileName : UserRepository
 * author : 502
 * date : 2023-06-01
 * description : 유저 JPA 레포지토리
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-06-01         502          최초 생성
 */
@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    //    유저명으로 상세조회하는 함수
    Optional<User> findByUsername(String username);

    //    유저가 있는지 확인하는 함수 : true/false
    Boolean existsByUsername(String username);

    //    이메일이 있는지 확인하는 함수 : true/false
    Boolean existsByEmail(String email);
}