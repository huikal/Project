// LoginPassword.js - 비번 찾기 페이지
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


function LoginPassword() {
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


  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name || !id || !email) {
      alert('빈칸을 입력해주세요');
      return;
    }

    // 백엔드 통신 함수 호출 및 필요한 데이터 전달
    handleBackendCommunication(name, id, email);
  };

  const handleBackendCommunication = (name, id, email) => {
    // 백엔드 통신 로직을 이곳에 구현합니다.
    // fetch 또는 axios를 사용하여 백엔드 API에 요청을 보낼 수 있습니다.

    // fetch를 사용한 예시:
    fetch("/api/findPassword", {
      method: "POST",
      body: JSON.stringify({ name, id, email }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // 백엔드로부터의 응답을 처리합니다.
        // 응답 결과를 화면에 표시하거나 응답에 따라 다른 페이지로 리다이렉트할 수 있습니다.
        console.log(data); // 예시: 응답 데이터를 콘솔에 출력합니다.
        // 필요한 경우 성공 페이지로 리다이렉트합니다.
        navigate("/password-reset");
      })
      .catch((error) => {
        alert('입력한 정보를 다시 확인해주세요.');
        console.error(error);
        // 요청 도중 발생한 모든 에러를 처리합니다.
        // 에러 메시지를 표시하거나 에러 페이지로 리다이렉트할 수 있습니다.
      });
  };


  return (

    <div>
      <div class="hero">
        <div class="container">
          <div class="row align-items-center">
          </div>
        </div>
      </div>




      {/* 상단 프로모션 비디오 시작 */}
      <div class="login-page" style={backgroundStyle}><img src={randomBackground} alt="이미지 테스트" />
        {/* 로그인 회원가입 화면 시작 */}
        <div class="loginPassword_Box">
          <form onSubmit={handleFormSubmit}>
            <label for="id">
              <input
                class="input_id font"
                placeholder="이름"
                id="idInput"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>
            <br />
            <label for="password">
              <input
                class="input_password font"
                placeholder="아이디"
                id="passwordInput"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </label>
            <br />
            <label for="email">
              <input
                class="input_email font"
                placeholder="이메일"
                id="emailInput"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />

          {/* 로그인 온클릭 버튼 시작 */}
          <div class="login2">
          <button type="submit" className="login_botton">
                  비밀번호 찾기
                </button></div><br />
          {/* 로그인 온클릭 버튼 끝 */}

          {/* ID/PW 찾기 온클릭 버튼 시작 */}
          <div class="login2 id_button sub-button">
            <Link to={"/login-id"} class="line">아이디 찾기</Link></div>
          {/* ID/PW 찾기 온클릭 버튼 끝 */}

          {/* 회원가입 버튼 시작 */}
          <div class="login2 id_button sub-button"><Link to={"/membership"} class="line">회원가입</Link></div>
          {/* 회원가입 버튼 끝 */}
</form>

        </div>
        {/* 로그인 회원가입 화면 끝 */}




      </div>
    </div>
  )
}

export default LoginPassword