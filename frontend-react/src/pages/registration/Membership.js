import React, { useEffect, useState } from "react";
import initScripts from "../../assets/js/scripts";
import initCustom from "../../assets/js/custom";
import { Link, useNavigate } from "react-router-dom";

// TODO: 공유저장소(Redux) import :
// 공유함수 : useDispatch , 공유변수 : useSelector
import { useDispatch, useSelector } from "react-redux";
// 공유액션함수 import
import { register } from "../../store/actions/auth";

// 배경 이미지 import
import img01 from "../../assets/images/loginBg/LoginBg01.png";
import img02 from "../../assets/images/loginBg/LoginBg02.png";
import img03 from "../../assets/images/loginBg/LoginBg03.png";
import img04 from "../../assets/images/loginBg/LoginBg04.png";
import img05 from "../../assets/images/loginBg/LoginBg05.png";
import img06 from "../../assets/images/loginBg/LoginBg06.png";
import img07 from "../../assets/images/loginBg/LoginBg07.png";

function Membership() {
  // 화면 시작 이벤트 함수
  useEffect(() => {
    // 테마 js 실행
    initScripts();
    initCustom();
  });

  // 랜덤 배경 이미지
  const backgrounds = [img01, img02, img03, img04, img05, img06, img07];
  const randomBackground =
    backgrounds[Math.floor(Math.random() * backgrounds.length)];
  const backgroundStyle = {
    backgroundImage: `url(${randomBackground})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  // 회원가입 빈칸 감시
  const navigate = useNavigate();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [address, setAddress] = useState("");

  // TODO: 유효성 체크 모두 통과하면 successful = true
  // 처리할 변수
  const [successful, setSuccessful] = useState(false);
  // 공유저장소 함수 접근 정의
  const dispatch = useDispatch();

  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setSuccessful(false); // 초기화(false)

    if (fullname.length > 3) {
      alert("이름 : 3글자까지 가능합니다.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("이메일 : 이메일 형태대로 입력하시오");
      return;
    }

    const phoneRegex = /^010\d{8}$/;
    if (!phoneRegex.test(phone)) {
      alert("휴대폰 번호가 틀렸습니다.");
      return;
    }
    else {
      // 공유저장소의 액션함수 : register 실행(벡엔드통신함수_정의)
      dispatch(register(fullname, email, nickname, phone, address, userid, password))
        .then(() => {
          // 성공
          setSuccessful(true);    // 화면에 성공메시지 출력
        })
        .catch(() => {
          // 실패
          setSuccessful(false);   // 화면에 다시 입력박스 나옴
        });
    }

    if (password !== confirmPassword) {
      alert("비밀번호 확인 : 비밀번호가 다름");
      return;
    }
    
    alert("회원가입이 완료되었습니다");
    navigate("/contact");
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    const numericInput = input.replace(/\D/g, ""); // Remove non-numeric characters
    const formattedPhone = numericInput.slice(0, 11);

    setPhone(formattedPhone);
    setPhoneError(
      formattedPhone.length === 11 ? "" : "핸드폰 번호를 확인하시오"
    );
  };
  // 회원가입 빈칸 감시

  return (
    <div>

      {/* 상단 프로모션 비디오 시작 */}
      <div class="login-page" style={backgroundStyle}><img src={randomBackground} alt="이미지 테스트" />
        {/* 로그인 회원가입 화면 시작 */}
        <div>
          <div className="membershipBox">
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="fullname">
                <input
                  className="input_name"
                  placeholder="이름"
                  name="fullname"
                  id="nameInput"
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </label>
              <br />

              <label htmlFor="email">
                <input
                  className="input_email"
                  placeholder="이메일"
                  id="emailInput"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </label>
              <br />

              <label htmlFor="nickname">
                <input
                  className="input_email"
                  placeholder="닉네임"
                  id="nickNameInput"
                  value={nickname}
                  onChange={(e) => setNickname(e.target.value)}
                />
              </label>
              <br />

              <label htmlFor="phone">
                <input
                  className="input_phonNumber"
                  placeholder="핸드폰 번호"
                  id="phonNumberInput"
                  value={phone}
                  onChange={handlePhoneChange}
                />
                {phoneError && (
                  <p className="error">{phoneError}</p>
                )}
              </label>
              <br />


              <label htmlFor="address">
                <input
                  className="input_email"
                  placeholder="주소"
                  id="addressInput"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </label>
              <br />

              <label htmlFor="userid">
                <input
                  className="input_id"
                  placeholder="아이디"
                  id="idInput"
                  value={userid}
                  onChange={(e) => setUserid(e.target.value)}
                />
              </label>
              <br />

              <label htmlFor="password">
                <input
                  className="input_password"
                  type="password"
                  placeholder="비밀번호"
                  id="passwordInput"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <br />

              <label htmlFor="confirmPassword">
                <input
                  className="input_password"
                  type="password"
                  placeholder="비밀번호 확인"
                  id="confirmPasswordInput"
                  value={confirmPassword}
                  onChange={(e) => {
                    setConfirmPassword(e.target.value);
                    setPasswordError("");
                  }}
                />
                {passwordError && <p className="error">{passwordError}</p>}
              </label>
              <br />

              <div className="membership_div">
                <button type="submit" className="line membership_botton">
                  회원가입 완료
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Membership;
