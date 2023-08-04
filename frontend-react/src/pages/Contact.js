// Contact.js - 로그인 페이지
// rfce
// TODO: 로그인
import React, { useState, useEffect, useRef } from "react";
// 공유저장소 import
// useDispatch : 공유함수, useSelector : 공유변수
import { useDispatch, useSelector } from "react-redux";
// 공유액션함수 import : login
import { login } from "../store/actions/auth";

// 테마 js import
import initScripts from "../assets/js/scripts";
import initCustom from "../assets/js/custom";
// TODO: 강제 url 이동 : 메뉴 라이브러리 import
import { Link, Navigate, useNavigate } from "react-router-dom";

// 배경 이미지 import
import img01 from "../assets/images/loginBg/LoginBg01.png";
import img02 from "../assets/images/loginBg/LoginBg02.png";
import img03 from "../assets/images/loginBg/LoginBg03.png";
import img04 from "../assets/images/loginBg/LoginBg04.png";
import img05 from "../assets/images/loginBg/LoginBg05.png";
import img06 from "../assets/images/loginBg/LoginBg06.png";
import img07 from "../assets/images/loginBg/LoginBg07.png";

function Contact() {
  // 화면 시작 이벤트 함수
  useEffect(() => {
    // 테마 js 실행
    initScripts();
    initCustom();
  });

  const backgrounds = [img01, img02, img03, img04, img05, img06, img07];
  const randomBackground =
    backgrounds[Math.floor(Math.random() * backgrounds.length)];
  const backgroundStyle = {
    backgroundImage: `url(${randomBackground})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  // 페이지 강제이동 함수 변수 정의
  let navigate = useNavigate();

  // TODO: 로그인 시작
  const form = useRef(); // Form 태그 직접접근 함수
  const checkBtn = useRef(); // CheckButton 태그 직접접근 함수

  // 유저명을 위한 변수
  const [userid, setUserid] = useState("");
  // 패스워드를 위한 변수
  const [password, setPassword] = useState("");
  // 로딩 이미지(스피너)를 위한 변수
  const [loading, setLoading] = useState(false);

  // 공유저장소(auth) 변수 : isLoggedIn
  const { isLoggedIn } = useSelector((state) => state.auth);
  // 공유저장소(message) 변수 : message
  const { message } = useSelector((state) => state.message);

  // 공유저장소 함수를 가져오기 위한 함수정의
  const dispatch = useDispatch();

  // 함수 정의
  // 수동 바인딩 : 화면값(유저명) 변경 -> 변수값도 변경 코딩
  const onChangeUserid = (e) => {
    const userid = e.target.value;
    setUserid(userid);
  };

  // 수동 바인딩 : 화면값(패스워드) 변경 -> 변수값도 변경 코딩
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  // 로그인 함수
  const handleLogin = (e) => {
    e.preventDefault(); // form 기본 이벤트 막기(중단)

    setLoading(true); // 스피너 이미지 보이기

    // 폼 유효성 체크 시작 : form(useRef())
    // form.current.validateAll();

    // 폼 체크 후 에러가 0개이면 로그인 요청 진행
    // 아니면 진행하지 않음
    if (userid != "" || password != "") {
      // 벡엔드로 로그인 요청(공유저장소 login함수 이용)
      dispatch(login(userid, password))
        .then(() => {
          // 성공
          navigate("/"); // 강제 페이지 이동
          // 바닐라 자바함수 : 화면 새로고침
          alert(`${userid}님 로그인 성공!`);
          window.location.reload();
        })
        .catch(() => {
          // 실패
          setLoading(false); // 스피너 이미지 안보임
          alert("아이디 혹은 비밀번호를 잘못 입력하였습니다.")
        });
    } else {
      // 유효성 에러가 발생하면
      setLoading(false); // 스피너 이미지 안보임
    }
  };

  // 공유저장소의 공유변수 isLoggedIn가 true이면
  // 현재 유저가 로그인된 상태 : 로그인 할 필요없음
  if (isLoggedIn) {
    // 강제 페이지 이동
    return <Navigate to="/" />;
  }

  // TODO: 로그인 끝

  return (
    <div>
      {/* 상단 프로모션 비디오 시작 */}
      <div>
        <div class="login-page" style={backgroundStyle}>
          <img src={randomBackground} alt="이미지 테스트" />
          {/* 로그인 회원가입 화면 시작 */}
          <div class="loginBox">
            <label for="userid">
              <input
                class="input_id"
                placeholder="아이디"
                id="idInput"
                value={userid}
                onChange={onChangeUserid}
              ></input>
            </label>
            <br />
            <label for="password">
              <input
                class="input_password"
                type="password"
                placeholder="비밀번호"
                id="passwordInput"
                value={password}
                onChange={onChangePassword}
              ></input>
            </label>
            <br />

            {/* 로그인 온클릭 버튼 시작 */}
            <div class="login2 login_botton">
              <a href="" onClick={handleLogin} ref={form} class="line">
              {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )}
              <span>로그인</span>
              </a>
            </div>
            <br />
            {/* 로그인 온클릭 버튼 끝 */}

            {/* ID/PW 찾기 온클릭 버튼 시작 */}
            <div class="login2 id_button sub-button">
              <Link to={"/login-id"} class="line">
                ID/PW 찾기
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
      {/* 상단 프로모션 비디오 끝 */}

      {/* Form 입력양식 시작 */}
      {/* <div class="untree_co-section">
        <div class="container">
          <div class="row">
            <div class="col-lg-6 mb-5 mb-lg-0">
              <form
                class="contact-form"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div class="row">
                  <div class="col-6">
                    <div class="form-group">
                      <label class="text-black" for="fname">
                        First name
                      </label>
                      <input type="text" class="form-control" id="fname" />
                    </div>
                  </div>
                  <div class="col-6">
                    <div class="form-group">
                      <label class="text-black" for="lname">
                        Last name
                      </label>
                      <input type="text" class="form-control" id="lname" />
                    </div>
                  </div>
                </div>
                <div class="form-group">
                  <label class="text-black" for="email">
                    Email address
                  </label>
                  <input type="email" class="form-control" id="email" />
                </div>

                <div class="form-group">
                  <label class="text-black" for="message">
                    Message
                  </label>
                  <textarea
                    name=""
                    class="form-control"
                    id="message"
                    cols="30"
                    rows="5"
                  ></textarea>
                </div>

                <button type="submit" class="btn btn-primary">
                  Send Message
                </button>
              </form>
            </div>
            <div class="col-lg-5 ml-auto">
              <div class="quick-contact-item d-flex align-items-center mb-4">
                <span class="flaticon-house"></span>
                <address class="text">
                  155 Market St #101, Paterson, NJ 07505, United States
                </address>
              </div>
              <div class="quick-contact-item d-flex align-items-center mb-4">
                <span class="flaticon-phone-call"></span>
                <address class="text">+1 202 2020 200</address>
              </div>
              <div class="quick-contact-item d-flex align-items-center mb-4">
                <span class="flaticon-mail"></span>
                <address class="text">@info@mydomain.com</address>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Form 입력양식 끝 */}

      {/* Testimonials 부분 시작 */}
      {/* <div class="untree_co-section testimonial-section mt-5 bg-white">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-7 text-center">
              <h2 class="section-title text-center mb-5">Testimonials</h2>

              <div class="owl-single owl-carousel no-nav">
                <div class="testimonial mx-auto">
                  <figure class="img-wrap">
                    <img
                      src="images/person_2.jpg"
                      alt="Image"
                      class="img-fluid"
                    />
                  </figure>
                  <h3 class="name">Adam Aderson</h3>
                  <blockquote>
                    <p>
                      &ldquo;There live the blind texts. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.&rdquo;
                    </p>
                  </blockquote>
                </div>

                <div class="testimonial mx-auto">
                  <figure class="img-wrap">
                    <img
                      src="images/person_3.jpg"
                      alt="Image"
                      class="img-fluid"
                    />
                  </figure>
                  <h3 class="name">Lukas Devlin</h3>
                  <blockquote>
                    <p>
                      &ldquo;There live the blind texts. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.&rdquo;
                    </p>
                  </blockquote>
                </div>

                <div class="testimonial mx-auto">
                  <figure class="img-wrap">
                    <img
                      src="images/person_4.jpg"
                      alt="Image"
                      class="img-fluid"
                    />
                  </figure>
                  <h3 class="name">Kayla Bryant</h3>
                  <blockquote>
                    <p>
                      &ldquo;There live the blind texts. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.&rdquo;
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Testimonials 부분 끝 */}
    </div>
  );
}

export default Contact;
