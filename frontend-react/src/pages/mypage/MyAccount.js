import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// 테마 js import
import initScripts from "../../assets/js/scripts";
import initCustom from "../../assets/js/custom";
import { Link } from "react-router-dom";

// TODO: 공유저장소 import
import { useSelector } from "react-redux";

import CustomerDataService from "../../services/CustomerDataService";

function MyAccount() {
  // 화면 시작 이벤트 함수
  useEffect(() => {
    // 테마 js 실행
    initScripts();
    initCustom();
  });

  // 공유저장소의 user 객체 가져오기
  // currentUser = 공유저장소 user 정보
  const { user: currentUser } = useSelector((state) => state.auth);

  //   정보 변경 파트
  const { cid } = useParams();
  let navigate = useNavigate();

  const initialCustomerState = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
  };
  // 벡엔드에서 전송한 부서객체를 저장할 변수
  const [currentCustomer, setCurrentCustomer] = useState(initialCustomerState);
  // 화면에 성공메세지를 보여줄 변수
  const [message, setMessage] = useState("");

  // 함수 정의
  // 고객번호(cid)로 고객정보를 조회하는 함수(상세조회함수)
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
    setCurrentCustomer({ ...currentCustomer, [name]: value });
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
            <Link to={"/reservation"}>
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
            <div class="account-img">{currentCustomer.firstName}</div>
            <div class="account-form">
              {/* <table>
              {reservation &&
                reservation.map((data, index) => (
                  <tr onClick={() => setActive(data, index)} key={index}>
                    <td>{data.email}</td>
                    <td>{data.lastName + " " + data.firstName}</td>
                    <td>{data.sights}</td>
                    <td>{data.startDate}</td>
                    <td>{data.endDate}</td>
                    <td>{data.reservationYn}</td>
                  </tr>
                ))}
            </table> */}
              <div class="info-form">
                <div class="info-title">이름</div>
                <div class="info-show">{currentUser.fullname}</div>
              </div>
              <div class="info-form">
                <div class="info-title">닉네임</div>
                <div class="info-show">{currentUser.nickname}</div>
              </div>
              <div class="info-form">
                <div class="info-title">이메일</div>
                <div class="info-show">{currentUser.email}</div>
              </div>
              <div class="info-form">
                <div class="info-title">전화번호</div>
                <div class="info-show">{currentUser.phone}</div>
              </div>
              <div class="info-form">
                <div class="info-title">주소</div>
                <div class="info-show">{currentUser.address}</div>
              </div>
              <div class="info-form">
                <Link to={"/myAccount/" + currentUser.id}>
                  <div class="btn-edit-info">내 정보 수정하기</div>
                </Link>
              </div>
            </div>

            {/* 
          {currentData && (
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

export default MyAccount;
