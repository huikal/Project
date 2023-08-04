package com.example.simplelogin.repository;

import com.example.simplelogin.model.ERole;
import com.example.simplelogin.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

/**
 * packageName : com.example.simplelogin.repository
 * fileName : RoleRepository
 * author : 502
 * date : 2023-06-01
 * description : 권한 JPA 레포지토리
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-06-01         502          최초 생성
 */
@Repository
public interface RoleRepository extends JpaRepository<Role, Integer> {
    //    권한이름으로 상세조회 함수
    Optional<Role> findByName(ERole name);
}