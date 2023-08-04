import React, { useState, useEffect } from "react";
// useParams : 다른페이지에서 기본키(qno)를 전달받는 함수 import
// useNavigate : 강제 페이지 이동 함수
import { useParams, useNavigate } from "react-router-dom";

// 달력 관련 import
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import "../../assets/css/product/Calendar.css";
import leftArrow from "../../assets/images/icon/caret-left.svg";
import rightArrow from "../../assets/images/icon/caret-right.svg";

import "../../assets/css/product/Product.css";

// 테마 js import
import initScripts from "../../assets/js/scripts";
import initCustom from "../../assets/js/custom";

// 통신 라이브러리(CRUD)
import TourDataService from "../../services/TourDataService";

/* eslint-disable */
function ProductDetail() {
  // 화면 시작 이벤트 함수
  useEffect(() => {
    // 테마 js 실행
    initScripts();
    initCustom();

    // 캐러셀 정의 : jQuery
    // jQuery 선택자 : $(css선택자)
    $(".owl-carousel").owlCarousel({
      // 옵션
      autoplay: true, // 자동으로 이미지가 돌아가게함
      smartSpeed: 1000, // 이미지 변경될때 변경 속도
      nav: false, // 메뉴
      items: 1, // 화면에 이미지가 표시될 개수
      loop: true, // 마지막 도달했을대 처음으로 돌아가는지 여부
      dotsClass: false,
    });
  }, []);

  // TODO: 프론트 구현 부분
  // 변수 정의
  // 다른페이지에서(전체조회) 기본키(fid)를 전달받는 함수
  const { tid } = useParams();
  // 강제 페이지 이동 함수
  let navigate = useNavigate();

  // tour 객체 초기화 정의
  const initialTourState = {
    tid: null,
    tname: "",
    startDate: "",
    endDate: "",
    reservation: "",
    price1: "",
    price2: "",
  };

  // 벡엔드에서 전송한 부서객체를 저장할 변수
  const [currentTour, setCurrentTour] = useState(initialTourState);
  // 화면에 성공메세지를 보여줄 변수
  const [message, setMessage] = useState("");

  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [reservation, setReservation] = useState("N");

  const [countAdult, setCountAdult] = useState(1);
  const [countKid, setCountKid] = useState(0);

  // 함수 정의
  // 날짜 선택 제한
  const isPossibleDay = (date) => {
    const currentDate = startDate;
    const selectedDate = new Date(date);
    return currentDate <= selectedDate;
  };

  // count onclick 이벤트 함수
  // 어른 count
  const onIncreaseA = () => {
    setCountAdult((prevCountAdult) => prevCountAdult + 1);
  };

  const onDecreaseA = () => {
    setCountAdult((prevCountAdult) => prevCountAdult - 1);
  };

  // 아동 count
  const onIncreaseK = () => {
    setCountKid((prevCountKid) => prevCountKid + 1);
  };

  const onDecreaseK = () => {
    setCountKid((prevCountKid) => prevCountKid - 1);
  };

  const countAlert = () => {};

  // TODO: 벡엔드 통신 부분 시작
  // 변수 정의

  // cart 객체 초기화 정의
  const initialCartState = {
    tid: null,
    tname: "",
    sight: "",
    startDate: "",
    endDate: "",
    reservation: "",
    price1: "",
    price2: "",
  };

  // 벡엔드에서 전송된 객체를 저장할 cart객체변수
  const [cart, setCart] = useState(initialCartState);
  // 저장버튼클릭여부를 저장할 변수(클릭(true), 안하면(false))
  const [submitted, setSubmitted] = useState(false);

  // 함수 정의
  // 번호(tid)로 부서정보를 조회하는 함수(상세조회함수)
  const getTour = (tid) => {
    // 벡엔드로 상세조회요청(tid(부서번호))
    TourDataService.get(tid)
      .then((response) => {
        // 성공
        // 벡엔드 전송 데이터 : response.data
        // 벡엔드 전송 데이터를 currentTour 변수에 저장
        setCurrentTour(response.data);
        // 콘솔 로그 출력
        console.log(response.data);
      })
      .catch((e) => {
        // 실패
        console.log(e);
      });
  };

  // 화면이 뜨자마자 실행되는 이벤트 함수
  // [변수] : 변수의 값이 변경되면 앞의 함수가 재실행됨
  useEffect(() => {
    // tid(부서번호) 있으면 상세조회요청(getTour(tid))
    if (tid) getTour(tid);
  }, [tid]);

  // 수동 바인딩 : 화면값 변경 -> 변수도 변경 코딩
  const handleInputChange = (event) => {
    const { name, value } = event.target; // 화면값
    // 변수에 저장
    setCurrentTour({ ...currentTour, [name]: value });
  };

  // 수정 요청 함수(수정버튼 클릭시 실행)
  const updateTour = () => {
    // 벡엔드 수정요청(tid(부서번호), currentTour(부서객체))
    TourDataService.update(currentTour.tid, { ...currentTour, reservation: 'Y' })
      .then((response) => {
        // 성공
        console.log(response.data); // 콘솔 로그 출력
        // 화면에 update 성공 메세지를 출력
        setMessage("The tour was updated successfully!");
      })
      .catch((e) => {
        // 실패
        console.log(e);
      });
  };

  // 삭제 함수
  const deleteTour = () => {
    // 벡엔드로 삭제요청(tid(부서번호))
    TourDataService.remove(currentTour.tid)
      .then((response) => {
        // 성공
        console.log(response.data); // 로그 출력
        // 페이지 이동 : "/tour" (전체조회화면)
        navigate("/tour");
      })
      .catch((e) => {
        // 실패
        console.log(e);
      });
  };

  // TODO: 벡엔드 통신 부분 끝

  // TODO: 결제관련 시작
  function onClickPayment() {
    const { IMP } = window;
    IMP.init("imp76037483"); // 발급받은 가맹점 식별코드를 사용합니다.

    const payData = {
      pg: "html5_inicis", // PG사
      pay_method: "card", // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: 100, // 결제금액
      name: `${getTour.tname}`, // 주문명
      buyer_name: "홍길동", // 구매자 이름
      buyer_tel: "01012341234", // 구매자 전화번호
      buyer_email: "example@example", // 구매자 이메일
      buyer_addr: "신사동 661-16", // 구매자 주소
      buyer_postcode: "06018", // 구매자 우편번호
    };
    /* 4. 결제 창 호출하기 */
    IMP.request_pay(payData, callback);
  }
  /* 3. 콜백 함수 정의하기 */
  function callback(response) {
    const { success, merchant_uid, error_msg } = response;

    if (success) {
      alert("결제 성공");
      location.href = "http://localhost:3000/"; // 결제 성공 후 이동할 페이지
      getTour.reservation = "y";
    } else {
      alert(`결제 실패: ${error_msg}`);
      // location.href = "http://localhost:3000/"; // 성공
      // console.log(`${getTour.tname}`);
      updateTour();
    }
  }
  // TODO: 결제관련 끝

  return (
    <div>
      {/* 상단바 시작 */}
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
      {/* 상단바 끝 */}

      <div class="hero-spacer"></div>

      {/* 상품 detail 시작 */}
      <div className="detailBox">
        {/*  캐러셀 이미지 시작 */}
        <div className="owl-carousel testimonial-carousel">
          {/* 1st 이미지 시작 */}
          <div className="mb-5">
            {/* 이미지 넣기(리액트) : require("이미지경로") */}
            <img
              className="img-fluid p-2 mx-auto"
              src={require("../../assets/images/slider-1.jpg")}
            />
          </div>
          {/* 1st 이미지 끝 */}

          {/* 2nd 이미지 시작 */}
          <div className="mb-5">
            {/* 이미지 넣기(리액트) : require("이미지경로") */}
            <img
              className="img-fluid p-2 mx-auto"
              src={require("../../assets/images/slider-2.jpg")}
            />
          </div>
          {/* 2nd 이미지 끝 */}

          {/* 3rd 이미지 시작 */}
          <div className="mb-5">
            {/* 이미지 넣기(리액트) : require("이미지경로") */}
            <img
              className="img-fluid p-2 mx-auto"
              src={require("../../assets/images/slider-3.jpg")}
            />
          </div>
          {/* 3rd 이미지 끝 */}

          {/* 4th 이미지 시작 */}
          <div className="mb-5">
            {/* 이미지 넣기(리액트) : require("이미지경로") */}
            <img
              className="img-fluid p-2 mx-auto"
              src={require("../../assets/images/slider-4.jpg")}
            />
          </div>
          {/* 4th 이미지 끝 */}

          {/* 5th 이미지 시작 */}
          <div className="mb-5 item">
            {/* 이미지 넣기(리액트) : require("이미지경로") */}
            <img
              className="img-fluid p-2 mx-auto"
              src={require("../../assets/images/slider-5.jpg")}
            />
          </div>
          {/* 5th 이미지 끝 */}
        </div>
        {/* 캐러셀 이미지 끝 */}

        {/* 상품 내용 시작 */}
        <div>
          <div className="container titleBox">
            <span>{currentTour.tname}</span>
          </div>
          {/* 날짜 선택 시작 */}
          <div className="container text-center">
            <div className="row">
              <span className="col">Start</span>
              <span className="col">End</span>
            </div>
            <div className="row">
              <div className="p-2 bd-highlight col">
                <div className="p-2 calContent">
                  <DatePicker
                    locale={ko} // 언어설정 기본값은 영어
                    dateFormat="yyyy-MM-dd" // 날짜 형식 설정
                    className="datePickerTest" // 클래스 명 지정 css주기 위해
                    minDate={new Date()} // 선택할 수 있는 최소 날짜값 지정
                    closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
                    placeholderText={currentTour.start_date} // placeholder
                    selected={startDate} // value
                    onChange={(date) => setStartDate(date)} // 날짜를 선택하였을 때 실행될 함수
                    withPortal
                    renderCustomHeader={({
                      date,
                      decreaseMonth,
                      increaseMonth,
                      prevMonthButtonDisabled,
                      nextMonthButtonDisabled,
                    }) => (
                      <div className="date-customheader">
                        <button
                          onClick={decreaseMonth}
                          disabled={prevMonthButtonDisabled}
                          className="arrow"
                        >
                          <img
                            width="20"
                            height="20"
                            src={leftArrow}
                            alt="arrow"
                          />
                        </button>
                        <div className="custom-month">
                          {" "}
                          {date.getFullYear()}년 {date.getMonth() + 1}월
                        </div>
                        <button
                          onClick={increaseMonth}
                          disabled={nextMonthButtonDisabled}
                          className="arrow"
                        >
                          <img
                            width="20"
                            height="20"
                            src={rightArrow}
                            alt="arrow"
                          />
                        </button>
                      </div>
                    )}
                  />
                </div>
              </div>

              {/* endDate 시작 */}
              <div className="p-2 bd-highlight col">
                <div className="p-2 calContent">
                  <DatePicker
                    locale={ko} // 언어설정 기본값은 영어
                    dateFormat="yyyy-MM-dd" // 날짜 형식 설정
                    className="datePickerTest" // 클래스 명 지정 css주기 위해
                    minDate={new Date()} // 선택할 수 있는 최소 날짜값 지정
                    closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
                    placeholderText={currentTour.end_date} // placeholder
                    filterDate={isPossibleDay}
                    selected={endDate} // value
                    onChange={(date) => setEndDate(date)} // 날짜를 선택하였을 때 실행될 함수
                    withPortal
                    renderCustomHeader={({
                      date,
                      decreaseMonth,
                      increaseMonth,
                      prevMonthButtonDisabled,
                      nextMonthButtonDisabled,
                    }) => (
                      <div className="date-customheader">
                        <button
                          onClick={decreaseMonth}
                          disabled={prevMonthButtonDisabled}
                          className="arrow"
                        >
                          <img
                            width="20"
                            height="20"
                            src={leftArrow}
                            alt="arrow"
                            className="arrow"
                          />
                        </button>
                        <div className="custom-month">
                          {" "}
                          {date.getFullYear()}년 {date.getMonth() + 1}월
                        </div>
                        <button
                          onClick={increaseMonth}
                          disabled={nextMonthButtonDisabled}
                          className="arrow"
                        >
                          <img
                            width="20"
                            height="20"
                            src={rightArrow}
                            alt="arrow"
                            className="arrow"
                          />
                        </button>
                      </div>
                    )}
                  />
                </div>
              </div>
              {/* endDate 끝 */}
            </div>
          </div>
          {/* 날짜 선택 끝 */}

          {/* 인원수 선택 시작 */}
          <div class="container text-center">
            <table class="table table-borderless tableLine">
              <tr>
                <th scope="row" className="col-md-3">
                  인원수
                </th>
                <th>성인</th>
                <td className="col-md-4">
                  <span className="empText">{countAdult}</span> 명
                </td>
                {/* +버튼 시작 */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-plus-lg countBtn"
                  viewBox="0 0 16 16"
                  type="button"
                  onClick={onIncreaseA}
                  onChange={handleInputChange}
                >
                  <path
                    fillRule="evenodd"
                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                  />
                </svg>
                {/* +버튼 끝 */}

                {/* -버튼 시작 */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-dash-lg countBtn"
                  viewBox="0 0 16 16"
                  type="button"
                  onClick={countAdult > 1 ? onDecreaseA : countAlert}
                  onChange={handleInputChange}
                >
                  <path
                    fillRule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
                {/* -버튼 끝 */}
              </tr>
              <tr>
                <th scope="row" className="col-md-3">
                  인원수
                </th>
                <th>아동</th>
                <td className="col-md-4">
                  <span className="empText">{countKid}</span> 명
                </td>

                {/* +버튼 시작 */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-plus-lg countBtn"
                  viewBox="0 0 16 16"
                  type="button"
                  onClick={onIncreaseK}
                  onChange={handleInputChange}
                >
                  <path
                    fillRule="evenodd"
                    d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                  />
                </svg>
                {/* +버튼 끝 */}

                {/* -버튼 시작 */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-dash-lg countBtn"
                  viewBox="0 0 16 16"
                  type="button"
                  onClick={countKid > 0 ? onDecreaseK : countAlert}
                  onChange={handleInputChange}
                >
                  <path
                    fillRule="evenodd"
                    d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                  />
                </svg>
                {/* -버튼 끝 */}
              </tr>
            </table>
          </div>
          {/* 인원수 선택 끝 */}

          {/* 총 결제금액 시작 */}
          <div class="row justify-content-around priceBox">
            <div class="col-4">총 결제금액</div>
            <div class="col-4">
              <span className="empText">
                {`${(
                  currentTour.price1 * countAdult +
                  currentTour.price2 * countKid
                ).toLocaleString("ko-KR")}`}
              </span>
              원
            </div>
          </div>
          {/* 총 결제금액 끝 */}

          {/* 약관 시작 */}
          {/* <!-- Button trigger modal --> */}
          <button
            type="button"
            class="termsBtn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            약관 보기
          </button>

          {/* <!-- Modal --> */}
          <div
            class="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <p class="modal-title fs-5" id="exampleModalLabel">
                    국내여행표준약관
                  </p>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">약관 내용</div>
              </div>
            </div>
          </div>
          {/* 약관 끝 */}

          {/* 버튼 시작 */}
          <div className="">
            <button
              type="button"
              className="detailBtn cartBtn"
              onClick={updateTour}
            >
              상품담기
            </button>
            <button
              type="button"
              className="detailBtn payBtn"
              onClick={onClickPayment}
            >
              결제하기
            </button>
          </div>
          {/* 버튼 끝 */}
        </div>
        {/* 상품 내용 끝 */}
      </div>
      {/* 상품 detail 끝 */}
    </div>
  );
}
export default ProductDetail;
