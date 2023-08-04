// ReservationDetail.js - 인덱스 검색 결과 상품 페이지
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import initScripts from "../../../assets/js/scripts";
import initCustom from "../../../assets/js/custom.js";
import ReservationDataService from "../../../services/ReservationDataService";
// 통신 함수(CRUD)
import TourDataService from "../../../services/TourDataService";
import Pagination from "@material-ui/lab/Pagination";

function ReservationDetail() {
  // 인덱스 검색 변수/함수 정의
  const [tagOne, setTagOne] = useState("tag1");
  const [tagSecond, seTagSecond] = useState("tag2");
  const onChangeTagOne = (e) => {
    setTagOne(e.target.value);
  };
  const onChangeTagSecond = (e) => {
    seTagSecond(e.target.value);
  };

  // 변수 정의
  // TODO: 벡엔드에서 전송한 tour객체배열을 저장할 변수
  const [tour, setTour] = useState([]);

  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const [reservation, setReservation] = useState([]);
  const [currentData, setCurrentData] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  // 공통 페이지 관련 변수
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [pageSize, setPageSize] = useState(3);
  const pageSizes = [3, 6, 9];

  // [page, pageSize] :
  //  page, pageSize 값이 변경되면 useEffect() 재실행됨
  useEffect(() => {
    initScripts();
    initCustom();
    retrieveReservation();
  }, [page, pageSize]);
  // page, pageSize 의 값이 변하면 다시 재실행(retrieveTour())
  useEffect(retrieveTour, [page, pageSize]);
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

  const retrieveReservation = () => {
    console.log(tagOne, tagSecond);
    ReservationDataService.getAll(tagOne, tagSecond, page - 1, pageSize)
      .then((response) => {
        const { reservation, totalPages } = response.data;

        setReservation(reservation);
        setCount(totalPages);

        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // 예제 파트
  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
    setPage(1);
  };

  const setActive = (data, index) => {
    setCurrentData(data);
    setCurrentIndex(index);
  };

  return (
    <div>
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

      {/* index 검색 파트 시작 */}
      <div class="menu-searchIndex">
        <ul className="menu-searchIndex-container">
          <p class="index-text-sm"></p>

          <li class="index-text">나의</li>

          <span class="index-gap"></span>
          <span class="index-gap"></span>

          {/* 드롭다운 index 버튼 1 시작 */}
          <li>
            <select
              name="tagOne"
              id="tagOne"
              value={tagOne}
              onChange={onChangeTagOne}
              class="btn-index form-control custom-select"
            >
              <option disabled selected value="tag1">
                어떤
              </option>
              <option value="tag1-1">
                <a class="index-item" href="#">
                  시원~한<p>&#127940;</p>
                </a>
              </option>
              <option value="tag1-2">
                <a class="index-item" href="#">
                  힐링되는<p>&#127808;</p>
                </a>
              </option>
              <option value="tag1-3">
                <a class="index-item" href="#">
                  짜릿한<p>&#128518;</p>
                </a>
              </option>
              <option value="tag1-4">
                <a class="index-item" href="#">
                  FLEX한<p>&#128526;</p>
                </a>
              </option>
              <option value="tag1-5">
                <a class="index-item" href="#">
                  낭만적인<p>&#127904;</p>
                </a>
              </option>
            </select>
          </li>
          {/* 드롭다운 index 버튼 1 끝 */}

          <span class="index-gap"></span>
          <span class="index-gap"></span>

          {/* 드롭다운 index 버튼 2 시작 */}
          <li>
            <select
              name="tagSecond"
              id="tagSecond"
              value={tagSecond}
              onChange={onChangeTagSecond}
              class="btn-index form-control custom-select"
            >
              <option disabled selected value="tag2">
                어디로
              </option>
              <option value="tag2-1">
                <a class="index-item" href="#">
                  도시<p>&#127747;</p>
                </a>
              </option>
              <option value="tag2-2">
                <a class="index-item" href="#">
                  시골<p>⛺</p>
                </a>
              </option>
              <option value="tag2-3">
                <a class="index-item" href="#">
                  바다<p>⛵</p>
                </a>
              </option>
              <option value="tag2-4">
                <a class="index-item" href="#">
                  산<p>🌄</p>
                </a>
              </option>
              <option value="tag2-5">
                <a class="index-item" href="#">
                  섬<p>🌴</p>
                </a>
              </option>
            </select>
          </li>
          {/* 드롭다운 index 버튼 2 끝 */}

          <span class="index-gap"></span>
          <span class="index-gap"></span>

          <li class="index-text">여행</li>

          <li>
            <span class="index-gap"></span>
            <span class="index-gap"></span>

            <Link
              class="btn-index"
              to={"/reservation/" + tagOne + "/" + tagSecond}
            >
              GO
            </Link>
          </li>
        </ul>
      </div>
      {/* index 검색 파트 끝 */}

      <div class="spacer"></div>

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
                  // src={data.Url}
                  src="https://via.placeholder.com/150x150"
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

      {/* 페이지 시작 */}
      <div className="mt-3 d-inline-block">
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
      </div>
      {/* 페이지 끝 */}

      {/* -------------------------------예제 파트------------------------------ */}

      <div className="untree_co-section">
        <div className="container" data-aos="fade-left" data-aos-delay="200">
          <div className="row">
            <div className="col-lg-6 mx-auto text-center">
              {/* <!--    Todo : page 바 시작 --> */}
              {/* <div className="col-lg-8 offset-4">
                <div className="mb-3">
                  Items per Page:
                  <select value={pageSize} onChange={handlePageSizeChange}>
                    {pageSizes.map((size) => (
                      <option key={size} value={size}>
                        {size}
                      </option>
                    ))}
                  </select>
                </div>
              </div> */}
              {/* <!--    Todo : page 바 끝 --> */}

              {/* <table className="table col-lg-8 offset-1">
                <thead>
                  <tr>
                    <th scope="col">Email</th>
                    <th scope="col">이름</th>
                    <th scope="col">여행지</th>
                    <th scope="col">시작일시</th>
                    <th scope="col">종료일시</th>
                    <th scope="col">여부</th>
                  </tr>
                </thead>
                <tbody>
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
                </tbody>
              </table> */}

              {/* <!--    Todo : page 바 시작 --> */}
              {/* <div className="col-lg-8 offset-3">
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
              {/* <!--    Todo : page 바 끝 --> */}
            </div>

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
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservationDetail;
