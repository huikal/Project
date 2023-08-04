package com.example.simplelogin.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

/**
 * packageName : com.example.simplelogin.model
 * fileName : User
 * author : 502
 * date : 2023-06-01
 * description : 유저 모델
 * 요약 :
 * <p>
 * ===========================================================
 * DATE            AUTHOR             NOTE
 * —————————————————————————————
 * 2023-06-01         502          최초 생성
 */
@Entity
@SequenceGenerator(
        name = "SQ_USER_GENERATOR"
        , sequenceName = "SQ_USER"
        , initialValue = 1
        , allocationSize = 1
)
@Table(name = "TB_USER",
//      @UniqueConstraint : 유일성 제약조건(Unique) 설정
        uniqueConstraints = {
                @UniqueConstraint(columnNames = "username"),
                @UniqueConstraint(columnNames = "email")
        })
@Getter
@Setter
@NoArgsConstructor
public class User {
        //    속성 정의
//    id number not null primary key, -- 유저 id(기본키, 시퀀스)
//    email varchar2(1000) unique,    -- 이메일 (유일)
//    password varchar2(1000),        -- 암호
//    username varchar2(1000)         -- 유저명
        @Id
        @GeneratedValue(strategy = GenerationType.SEQUENCE
                , generator = "SQ_USER_GENERATOR")
        @Column
        private Long id; // 유저 id(기본키, 시퀀스)

        @Column
        private String fullname;        // 이름
        @Column
        private String email; // 이메일 (유일)
        @Column
        private String nickname; // 닉네임
        @Column
        private String phone; // 전화번호
        @Column
        private String address; // 주소
        @Column
        private String password; // 암호
        @Column
        private String username; // user_id

        // N+1 문제 방지 : fetch = FetchType.LAZY(지연 로딩(실행))
        @ManyToMany(fetch = FetchType.LAZY)
//    매핑테이블 : TB_USER_ROLE
        @JoinTable(name = "TB_USER_ROLE",
                joinColumns = @JoinColumn(name = "user_id"),
                inverseJoinColumns = @JoinColumn(name = "role_id"))
        private Set<Role> roles = new HashSet<>();

        //    TODO: 순서 바꿈
        public User(String fullname, String email,String nickname, String phone, String address, String username, String password) {
                this.fullname = fullname;
                this.email = email;
                this.nickname = nickname;
                this.phone = phone;
                this.address = address;
                this.username = username;
                this.password = password;
        }

}