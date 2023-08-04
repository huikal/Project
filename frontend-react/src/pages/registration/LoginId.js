// LoginId.js - 아이디찾기 페이지
// rfce
import React, { useEffect, useState } from "react";
// 테마 js import
import initScripts from "../../assets/js/scripts";
import initCustom from "../../assets/js/custom";
import { Link, useNavigate } from "react-router-dom";

// 배경 이미지 import
import img01 from "../../assets/images/loginBg/LoginBg01.png";
import img02 from "../../assets/images/loginBg/LoginBg02.png";
import img03 from "../../assets/images/loginBg/LoginBg03.png";
import img04 from "../../assets/images/loginBg/LoginBg04.png";
import img05 from "../../assets/images/loginBg/LoginBg05.png";
import img06 from "../../assets/images/loginBg/LoginBg06.png";
import img07 from "../../assets/images/loginBg/LoginBg07.png";

function LoginId() {
  // 화면 시작 이벤트 함수
  useEffect(() => {
    // 테마 js 실행
    initScripts();
    initCustom();
  });

  // 랜덤 배경 이미지
  const backgrounds = [
    img01,
    img02,
    img03,
    img04,
    img05,
    img06,
    img07,
  ];
  const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  const backgroundStyle = {
    backgroundImage: `url(${randomBackground})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };


  // 아이디 찾기
  const handleFindId = () => {
    const idInput = document.getElementById("idInput").value;
    const emailInput = document.getElementById("emailInput").value;

    // 백엔드와 통신하여 비교 로직을 처리하는 부분입니다.
    // 필요한 API 요청을 보내고 응답을 처리합니다.
    // fetch나 axios를 사용하여 백엔드 API에 요청을 보낼 수 있습니다.

    // fetch를 사용한 예시:
    fetch("/api/findId", {
      method: "POST",
      body: JSON.stringify({ id: idInput, email: emailInput }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // 백엔드로부터의 응답을 처리합니다.
        // 응답 결과를 표시하거나 응답에 따라 다른 페이지로 리디렉션할 수 있습니다.
        console.log(data); // 예시: 응답 데이터를 로그로 출력합니다.
        // 필요한 경우 성공 페이지로 리디렉션합니다.
        navigate("/id-found");
      })
      .catch((error) => {
        alert("아이디가 없습니다.");
        console.error(error);
        // 요청 중에 발생한 오류를 처리합니다.
        // 오류 메시지를 표시하거나 오류 페이지로 리디렉션할 수 있습니다.
      });
  };
  // 아이디 찾기

  return (
    <div>

      {/* 상단 프로모션 비디오 시작 */}
      <div class="login-page" style={backgroundStyle}><img src={randomBackground} alt="이미지 테스트" />
        {/* 로그인 회원가입 화면 시작 */}
        <div class="loginId_Box">
          <label for="id">
            <input class="input_id" placeholder="이름" id="idInput"></input>
          </label>
          <br />
          <label for="email">
            <input
              class="input_email"
              placeholder="이메일"
              id="emailInput"
            ></input>
          </label>
          <br />

          {/* 로그인 온클릭 버튼 시작 */}
          <div class="login2 login_botton">
            <a href="#" class="line" onClick={handleFindId}>
              아이디 찾기
            </a>
          </div>
          <br />
          {/* 로그인 온클릭 버튼 끝 */}

          {/* ID/PW 찾기 온클릭 버튼 시작 */}
          <div class="login2 id_button sub-button">
            <Link to={"/login-password"} class="line">
              비밀번호 찾기
            </Link>
          </div>
          {/* ID/PW 찾기 온클릭 버튼 끝 */}

          {/* 회원가입 버튼 시작 */}
          <div class="login2 id_button sub-button">
            <Link to={"/membership"} class="line">
              회원가입
            </Link>
          </div>
          {/* 회원가입 버튼 끝 */}
        </div>
        {/* 로그인 회원가입 화면 끝 */}
      </div>
    </div>
  );
}
export default LoginId;
