import React, { useState, useEffect } from "react";

// css import
import "../../assets/css/product/Product.css";

// isotope 관련 import
import initIsotopeFilter from "../../assets/js/initIsotopeFilter";
import "../../assets/css/product/IsotopeFilter.css";

// 통신 함수(CRUD)
import TourDataService from "../../services/TourDataService";

// 달력 관련 import
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import "react-datepicker/dist/react-datepicker.css";
import "../../assets/css/product/Calendar.css";
import leftArrow from "../../assets/images/icon/caret-left.svg";
import rightArrow from "../../assets/images/icon/caret-right.svg";

import arrow from "../../assets/images/icon/arrow-right.svg";

// 테마 js import
import initScripts from "../../assets/js/scripts";
import initCustom from "../../assets/js/custom";
import { Link } from "react-router-dom";

// Material-ui 에서 Pagination import
import Pagination from "@material-ui/lab/Pagination";

/* eslint-disable */
function Activity() {
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

  // 변수 정의
  // TODO: 벡엔드에서 전송한 tour객체배열을 저장할 변수
  const [tour, setTour] = useState([]);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // 검색어를 저장할 변수
  const [searchMain, setSearchMain] = useState("액티비티");

  const [selectedCity, setSelectedCity] = useState("*");

  // 공통 페이지 부분
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [pageSize, setPageSize] = useState(5);

  // start 검색어를 저장할 변수
  const [searchStart, setSearchStart] = useState("");
  // end 검색어를 저장할 변수
  const [searchEnd, setSearchEnd] = useState("");

  // 전체 조회 함수
  const retrieveTour = () => {
    // 콘솔로그 : searchTname, page-1, pageSize 출력
    console.log("retrieveTour", searchMain, page - 1, pageSize);

    // 벡엔드 전체조회요청 함수
    // searchTname : Tname검색어(화면입력값)
    // page : 현재페이지
    // pageSize : 현재 페이지당 개수
    TourDataService.getTour(searchMain, page - 1, pageSize)
      .then((response) => {
        // 성공 : response.data(벡엔드에서 전송한 데이터)
        const { tour, totalPages } = response.data;

        setTour(tour); // 고객배열객체 저장
        setCount(totalPages); // 총페이지 개수 저장
        // 벡엔드 전송된 데이터를 콘솔 출력
        console.log(response.data);
        // TODO: 벡엔드 데이터가 전송되면 isotope 실행
        initIsotopeFilter();
      })
      .catch((e) => {
        // 실패
        console.log(e);
      });
  };

  // 공통 페이지
  const handlePageChange = (event, value) => {
    setPage(value); // 변경된 현재페이지 번호를 저장
    const change = true;
  };

  // 화면이 뜨자마자 실행되는 이벤트
  // page, pageSize 의 값이 변하면 다시 재실행(retrieveTour())
  useEffect(retrieveTour, [page, pageSize]);

  // 함수 정의
  // 날짜 선택 제한
  const isPossibleDay = (date) => {
    const currentDate = startDate;
    const selectedDate = new Date(date);
    return currentDate <= selectedDate;
  };

  // 중분류 필터를 위한 함수
  const selectedItem = (item) => {
    setSelectedCity(item);
  };

  // 수동 바인딩 : 화면값 변경 -> 변수도 저장하는 코딩
  const onChangeSearchStart = (e) => {
    setSearchStart(e.target.value);
    console(e.target.value);
  };

  // endDate 함수
  const onChangeSearchEnd = (e) => {
    const searchEnd = e.target.value; // 화면 입력값
    setSearchEnd(searchEnd); // 변수에 저장
    console(e.target.value); // 확인
  };

  // onClickEvent
  const onClickEvent = () => {
    // start 데이터
    var startYear = startDate.getFullYear();
    var startMonth = startDate.getMonth() + 1;
    var startDay = startDate.getDate();
    const startDateResult = `${startYear}/${startMonth}/${startDay}`;
    console.log(startDateResult);

    // end 데이터
    var endYear = endDate.getFullYear();
    var endMonth = endDate.getMonth() + 1;
    var endDay = endDate.getDate();
    const endDateResult = `${endYear}/${endMonth}/${endDay}`;
    console.log(endDateResult);
  };

  return (
    <div>
      {/* 상단바 시작 */}
      <div className="hero hero-inner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mx-auto text-center">
              <div className="intro-wrap">
                <h1 className="mb-0"></h1>
                <p className="text-white"> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 상단바 끝 */}

      {/* 카테고리 필터 시작 */}
      <div className="filters">
        <div className="ui-group">
          <div
            className="button-group js-radio-button-group"
            data-filter-group="sights"
          >
            <button className="button is-checked" data-filter="">
              All
            </button>
            <button className="button" data-filter=".서울">
              서울
            </button>
            <button className="button" data-filter=".부산">
              부산
            </button>
            <button className="button" data-filter=".대구">
              대구
            </button>
            <button className="button" data-filter=".인천">
              인천
            </button>
            <button className="button" data-filter=".광주">
              광주
            </button>
            <button className="button" data-filter=".대전">
              대전
            </button>
            <button className="button" data-filter=".울산">
              울산
            </button>
            <button className="button" data-filter=".세종">
              세종
            </button>
            <button className="button" data-filter=".경기">
              경기
            </button>
            <button className="button" data-filter=".강원">
              강원
            </button>
            <button className="button" data-filter=".충북">
              충북
            </button>
            <button className="button" data-filter=".전북">
              전북
            </button>
            <button className="button" data-filter=".전남">
              전남
            </button>
            <button className="button" data-filter=".경북">
              경북
            </button>
            <button className="button" data-filter=".경남">
              경남
            </button>
            <button className="button" data-filter=".제주">
              제주
            </button>
          </div>
        </div>

        <div className="ui-group">
          <div
            className="button-group js-radio-button-group"
            data-filter-group="sub1"
          >
            <button
              className="button is-checked"
              data-filter=""
              onClick={() => selectedItem("*")}
            >
              All
            </button>
            <button
              className="button"
              data-filter=".수상레저"
              onClick={() => selectedItem("수상레저")}
            >
              수상레저
            </button>
            <button
              className="button"
              data-filter=".익스트림"
              onClick={() => selectedItem("익스트림")}
            >
              익스트림
            </button>
            <button
              className="button"
              data-filter=".테마파크"
              onClick={() => selectedItem("테마파크")}
            >
              테마파크
            </button>
            <button
              className="button"
              data-filter=".문화공간"
              onClick={() => selectedItem("문화공간")}
            >
              문화공간
            </button>
            <button
              className="button"
              data-filter=".캠핑"
              onClick={() => selectedItem("캠핑")}
            >
              캠핑
            </button>
          </div>
        </div>

        {/* 소분류(수상레저) 시작 */}
        <div
          className={`ui-group ${
            selectedCity === "수상레저" ? "isoVisible" : "isoHidden"
          }`}
        >
          <div
            className="button-group js-radio-button-group"
            data-filter-group="sub2"
          >
            <button class="button is-checked" data-filter="*">
              All
            </button>
            <button className="button" data-filter=".실내스쿠버다이빙">
              실내스쿠버다이빙
            </button>
            <button className="button" data-filter=".프리다이빙">
              프리다이빙
            </button>
            <button className="button" data-filter=".요트투어">
              요트투어
            </button>
            <button className="button" data-filter=".유람선투어">
              유람선투어
            </button>
            <button className="button" data-filter=".서핑">
              서핑
            </button>
            <button className="button" data-filter=".패들보드">
              패들보드
            </button>
            <button className="button" data-filter=".카약">
              카약
            </button>
            <button className="button" data-filter=".스노쿨링">
              스노쿨링
            </button>
            <button className="button" data-filter=".레프팅">
              레프팅
            </button>
            <button className="button" data-filter=".선상낚시">
              선상낚시
            </button>
          </div>
        </div>
        {/* 소분류(수상레저) 끝 */}

        {/* 소분류(익스트림) 시작 */}
        <div
          className={`ui-group ${
            selectedCity === "익스트림" ? "isoVisible" : "isoHidden"
          }`}
        >
          <div
            className="button-group js-radio-button-group"
            data-filter-group="sub2"
          >
            <button class="button is-checked" data-filter="*">
              All
            </button>
            <button className="button" data-filter=".번지점프">
              번지점프
            </button>
            <button className="button" data-filter=".스카이다이빙">
              스카이다이빙
            </button>
            <button className="button" data-filter=".실내스카이다이빙">
              실내스카이다이빙
            </button>
            <button className="button" data-filter=".패러글라이딩">
              패러글라이딩
            </button>
            <button className="button" data-filter=".짚와이어">
              짚와이어
            </button>
            <button className="button" data-filter=".짚트랙">
              짚트랙
            </button>
            <button className="button" data-filter=".레일바이크">
              레일바이크
            </button>
            <button className="button" data-filter=".스캐드다이빙">
              스캐드다이빙
            </button>
            <button className="button" data-filter=".카트라이더">
              카트라이더
            </button>
            <button className="button" data-filter=".스카이브릿지">
              스카이브릿지
            </button>
          </div>
        </div>
        {/* 소분류(익스트림) 끝 */}

        {/* 소분류(테마파크) 시작 */}
        <div
          className={`ui-group ${
            selectedCity === "테마파크" ? "isoVisible" : "isoHidden"
          }`}
        >
          <div
            className="button-group js-radio-button-group"
            data-filter-group="sub2"
          >
            <button class="button is-checked" data-filter="*">
              All
            </button>
            <button className="button" data-filter=".VR테마파크">
              VR테마파크
            </button>
            <button className="button" data-filter=".워터파크">
              워터파크
            </button>
            <button className="button" data-filter=".놀이공원">
              놀이공원
            </button>
            <button className="button" data-filter=".아쿠아리움">
              아쿠아리움
            </button>
            <button className="button" data-filter=".수목원">
              수목원
            </button>
          </div>
        </div>
        {/* 소분류(테마파크) 끝 */}

        {/* 소분류(문화공간) 시작 */}
        <div
          className={`ui-group ${
            selectedCity === "문화공간" ? "isoVisible" : "isoHidden"
          }`}
        >
          <div
            className="button-group js-radio-button-group"
            data-filter-group="sub2"
          >
            <button class="button is-checked" data-filter="*">
              All
            </button>
            <button className="button" data-filter=".공연장">
              공연장
            </button>
            <button className="button" data-filter=".박물관">
              박물관
            </button>
            <button className="button" data-filter=".기념관">
              기념관
            </button>
            <button className="button" data-filter=".유적지">
              유적지
            </button>
          </div>
        </div>
        {/* 소분류(문화공간) 끝 */}

        {/* 소분류(캠핑) 시작 */}
        <div
          className={`ui-group ${
            selectedCity === "camping" ? "isoVisible" : "isoHidden"
          }`}
        >
          <div
            className="button-group js-radio-button-group"
            data-filter-group="sub2"
          >
            <button class="button is-checked" data-filter="*">
              All
            </button>
            <button className="button" data-filter=".글램핑">
              글램핑
            </button>
            <button className="button" data-filter=".오토캠핑">
              오토캠핑
            </button>
            <button className="button" data-filter=".차박캠핑">
              차박캠핑
            </button>
            <button className="button" data-filter=".카라반캠핑">
              카라반캠핑
            </button>
            <button className="button" data-filter=".낭만캠핑">
              낭만 준전문 캠핑장
            </button>
          </div>
        </div>
        {/* 소분류(캠핑) 시작 */}
      </div>
      {/* 카테고리 필터 끝 */}

      {/*  캐러셀 이미지 시작 */}
      <div className="bgColor">
        <div className="owl-carousel testimonial-carousel-long">
          {/* 1st 이미지 시작 */}
          <div className="mb-5">
            {/* 이미지 넣기(리액트) : require("이미지경로") */}
            <img
              className="img-fluid p-2 mx-auto"
              src={require("../../assets/images/banner-1.png")}
            />
          </div>
          {/* 1st 이미지 끝 */}

          {/* 2nd 이미지 시작 */}
          <div className="mb-5">
            {/* 이미지 넣기(리액트) : require("이미지경로") */}
            <img
              className="img-fluid p-2 mx-auto"
              src={require("../../assets/images/banner-2.png")}
            />
          </div>
          {/* 2nd 이미지 끝 */}
        </div>
        {/* 캐러셀 이미지 끝 */}

        {/* 최신순 / 날짜 선택 / 검색 시작 */}
        <div className="d-flex bd-highlight mb-3">
          {/* 최신순/인기순 시작 */}
          <div className="me-auto mt-auto mb-auto flex-grow-1 p-2 bd-highlight">
            <form>
              <select className="sort ms-3" name="sort">
                <option className="sort"> 최신순 </option>
                <option className="sort"> 인기순 </option>
              </select>
            </form>
          </div>
          {/* 최신순/인기순 시작 */}

          {/* 날짜 선택 시작 */}
          <div className="p-2 bd-highlight">
            <span>시작 날짜</span>
            <div className="p-2 calContent">
              <DatePicker
                locale={ko} // 언어설정 기본값은 영어
                dateFormat="yyyy-MM-dd" // 날짜 형식 설정
                className="datePickerTest" // 클래스 명 지정 css주기 위해
                minDate={new Date()} // 선택할 수 있는 최소 날짜값 지정
                closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
                placeholderText="시작 날짜 선택" // placeholder
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
                      <img width="20" height="20" src={leftArrow} alt="arrow" />
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

          {/* {endDateFun} */}
          <div className="p-2 bd-highlight">
            <span>체크아웃</span>
            <div className="p-2 calContent">
              <DatePicker
                locale={ko} // 언어설정 기본값은 영어
                dateFormat="yyyy-MM-dd" // 날짜 형식 설정
                className="datePickerTest" // 클래스 명 지정 css주기 위해
                minDate={new Date()} // 선택할 수 있는 최소 날짜값 지정
                closeOnScroll={true} // 스크롤을 움직였을 때 자동으로 닫히도록 설정 기본값 false
                placeholderText="마지막 날짜 선택" // placeholder
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
          {/* 날짜 선택 끝 */}

          {/* 검색 버튼 시작 */}
          <button
            className="mt-3 whiteBtn"
            type="button"
            onClick={() => {
              onClickEvent();
            }}
          >
            검색
          </button>
          {/* 검색 버튼 끝 */}
        </div>
        {/* 최신순 / 날짜 선택 / 검색 끝 */}

        <div className="grid-wrapper">
          {/* 반복문 이미지 시작 */}
          <div className="row d-flex grid p-3">
            {tour &&
              tour.map((data) => (
                <div
                  className={`content-box ${data.sights} ${data.sub1} ${data.sub2}`}
                  key={data.tid}
                >
                  {/* <div className="col-sm-3" key={index}> */}
                  <div className="card m-3" style={{ width: 18 + "rem" }}>
                    {/* 이미지 출력 시작 */}
                    <img
                      // src="https://via.placeholder.com/150x150"
                      src={data.fileName}
                      className="card-img-top"
                      alt="..."
                    />
                    {/* 이미지 출력 끝 */}

                    {/* 카드 시작 */}
                    <div className="card-body align">
                      {/* 제목 시작 */}
                      <h5 className="card-title">{data.tname}</h5>
                      {/* 제목 끝 */}

                      {/* 상세 조회 링크 시작 */}
                      <Link to={"/tour/" + data.tid} className="btnAcc">
                        <img
                          width="20"
                          height="20"
                          src={arrow}
                          alt="arrow"
                          className="linkArrow"
                        />
                      </Link>
                      {/* 상세 조회 링크 끝 */}
                    </div>
                    {/* 카드 끝 */}
                  </div>
                </div>
              ))}
          </div>
          {/* 반복문 이미지 끝 */}
        </div>
        {/* 페이지 시작 */}
        {/* <div className="mt-3 d-inline-block">
          <Pagination
            className="my-3"
            count={count}
            page={page}
            siblingCount={1}
            boundaryCount={1}
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
          />
        </div> */}
        {/* 페이지 끝 */}
      </div>
    </div>
  );
}

export default Activity;
