import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import CustomerDataService from "../../services/CustomerDataService";

// TODO: 공유저장소 import
import { useSelector, useDispatch } from "react-redux";

// 테마 js import
import initScripts from "../../assets/js/scripts";
import initCustom from "../../assets/js/custom";
import { Link } from "react-router-dom";

function MyAccountEdit() {
  // 화면 시작 이벤트 함수
  useEffect(() => {
    // 테마 js 실행
    initScripts();
    initCustom();
  });

  // TODO: 공유저장소의 user 객체 가져오기

  const dispatch = useDispatch();

  const initialUserState = {
    fullname: "",
    nickname: "",
    email: "",
    phone: "",
    address: ""
  }

  const updateUser = () => {
    dispatch(this.editUser());
  }
  // currentUser = 공유저장소 user 정보
  const { user: currentUser } = useSelector((state) => state.auth);

  //   정보 변경 파트
  const { cid } = useParams();
  let navigate = useNavigate();

  const initialCustomerState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };
  // 벡엔드에서 전송한 부서객체를 저장할 변수
  const [currentCustomer, setCurrentCustomer] = useState(initialCustomerState);
  const [updateUserData, setUpdateUserData] = useState(initialUserState);
  // 화면에 성공메세지를 보여줄 변수
  const [message, setMessage] = useState("");

  // 함수 정의
  // 부서번호(cid)로 부서정보를 조회하는 함수(상세조회함수)
  const getCustomer = (cid) => {
    // 벡엔드로 상세조회요청(cid(부서번호))
    CustomerDataService.get(cid)
      .then((response) => {
        // 성공
        // 벡엔드 전송 데이터 : response.data
        // 벡엔드 전송 데이터를 currentCustomer 변수에 저장
        setCurrentCustomer(response.data);
        // 콘솔 로그 출력
        console.log(response.data);
      })
      .catch((e) => {
        // 실패
        console.log(e);
      });
  };

  // 화면이 뜨자마자 실행되는 이벤트 함수
  // 추가기능 : cid 값이 변경되면 다시 함수가 실행됨
  useEffect(() => {
    // cid(부서번호) 있으면 상세조회요청(getCustomer(cid))
    if (cid) getCustomer(cid);
  }, [cid]);

  // 수동 바인딩 : 화면값 변경 -> 변수도 변경 코딩
  const handleInputChange = (event) => {
    const { name, value } = event.target; // 화면값
    // 변수에 저장
    setUpdateUserData({ ...updateUserData, [name]: value });
  };

  // 수정 요청 함수(수정버튼 클릭시 실행)
  const updateCustomer = () => {
    // 벡엔드 수정요청(cid(부서번호), currentCustomer(부서객체))
    CustomerDataService.update(currentCustomer.cid, currentCustomer)
      .then((response) => {
        // 성공
        console.log(response.data); // 콘솔 로그 출력
        // 화면에 update 성공 메세지를 출력
        setMessage("수정이 완료되었습니다.");
        navigate("/myAccount");
      })
      .catch((e) => {
        // 실패
        console.log(e);
      });
  };

  const cancleEdit = () => {
    // 페이지 이동
    navigate("/myAccount");
  };

  return (
    <div class="myaccount-container">
      {/* 화면 상단 고정 바 시작 */}
      <div class="hero hero-inner">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 mx-auto text-center">
              <div class="intro-wrap">
                <h1 class="mb-0"></h1>
                <p class="text-white"> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 화면 상단 고정 바 끝 */}

      <div class="sider_review">
        {/* 좌측 사이드메뉴 시작 */}
        <div class="sidebar">
          <div class="sidebar-menu">
            <Link to={"/myAccount"}>
              <p class="selected">회원정보</p>
            </Link>
          </div>
          <div class="sidebar-menu">
            <Link to={"/cart"}>
              <p>장바구니</p>
            </Link>
          </div>
          <div class="sidebar-menu">
            <Link to={"/"}>
              <p>내 예약</p>
            </Link>
          </div>
          <div class="sidebar-menu">
            <Link to={"/my-review"}>
              <p>내 리뷰</p>
            </Link>
          </div>
        </div>
        {/* 좌측 사이드메뉴 끝 */}

        <div class="my-account">
          <div class="info">
            <div class="account-img">
              {/* <label for="upload-image">
              프로필이미지 업로드
            </label> */}
              <input
                type="file"
                class="upload-image"
                id="profile-image"
                name="profile-image"
                accept="image/*"
                required
                multiple
                value={currentCustomer.firstName}
                onChange={handleInputChange}
              />
            </div>
            <div class="account-form">
              <form>
                <div class="info-form">
                  <div class="info-title-input">
                    <label htmlFor="fullname">이름</label>
                  </div>
                  <div class="info-input-container">
                    <input
                      type="text"
                      class="info-type"
                      id="fullname"
                      disabled
                      name="fullname"
                      value={currentUser.fullname}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div class="info-form">
                  <div class="info-title-input">
                    <label htmlFor="nickname">닉네임</label>
                  </div>
                  <div class="info-input-container">
                    <input
                      type="text"
                      class="info-type"
                      id="nickname"
                      required
                      name="nickname"
                      value={currentUser.nickname}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div class="info-form">
                  <div class="info-title-input">
                    <label htmlFor="email">Email</label>
                  </div>
                  <div class="info-input-container">
                    <input
                      type="text"
                      class="info-type"
                      id="email"
                      disabled
                      name="email"
                      value={currentUser.email}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div class="info-form">
                  <div class="info-title-input">
                    <label htmlFor="phone">전화번호</label>
                  </div>
                  <div class="info-input-container">
                    <input
                      type="text"
                      class="info-type"
                      id="phone"
                      name="phone"
                      value={currentUser.phone}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>

                <div class="info-form">
                  <div class="info-title-input">
                    <label htmlFor="phone">주소</label>
                  </div>
                  <div class="info-input-container">
                    <input
                      type="text"
                      class="info-type"
                      id="phone"
                      name="phone"
                      value={currentUser.address}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </form>

              <button
                type="submit"
                class="btn-info-save"
                onClick={updateUser}
              >
                저장
              </button>

              <button class="btn-info-cancle" onClick={cancleEdit}>
                취소
              </button>
            </div>

            {/* {currentData && (
              <div className="col-lg-5 ml-auto">
                <div className="quick-contact-item d-flex align-items-center mb-4">
                  <span className="flaticon-house"></span>
                  <address className="text">{currentData.address}</address>
                </div>
                <div className="quick-contact-item d-flex align-items-center mb-4">
                  <span className="flaticon-phone-call"></span>
                  <address className="text">{currentData.phone}</address>
                </div>
                <div className="quick-contact-item d-flex align-items-center mb-4">
                  <span className="flaticon-mail"></span>
                  <address className="text">{currentData.email}</address>
                </div>
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyAccountEdit;
