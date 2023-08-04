// ReservationList.js
// rfce
import React, { useEffect, useState } from "react";

// 테마 js import
import initScripts from "../../../assets/js/scripts";
import initCustom from "../../../assets/js/custom";

// 페이지 import 
import Pagination from "@material-ui/lab/Pagination";
// 벡엔드 연동 js 파일 import
import TourDataService from "../../../services/TourDataService";

function ReservationList() {
  // 변수 정의
  // 벡엔드에서 전송된 객체배열을 저장할 변수
  const [tour, setTour] = useState([]);
  // 현재 클릭한 데이터를 저장할 변수
  const [currentData, setCurrentData] = useState(null);
  // 클릭시 현재 인덱스번호를 저장할 변수
  const [currentIndex, setCurrentIndex] = useState(-1);
  // email 검색어를 저장할 변수
  const [searchRes, setSearchRes] = useState("Y");

  // 공통 페이지 관련 변수
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [pageSize, setPageSize] = useState(3);
  const pageSizes = [3, 6, 9];

  // 함수 정의
  // 수동 바인딩 : 화면값 변경 -> 변수도 저장하는 코딩
  const onChangeSearchRes = (e) => {
    setSearchRes(e.target.value);
  };

  // 화면 시작 이벤트 함수
  // [page, pageSize] : 
  //  page, pageSize 값이 변경되면 useEffect() 재실행됨
  useEffect(() => {
    initScripts();  // Typed 객체 생성
    initCustom();   // 여러 라이브러리 객체 생성
    retrieveTour(); // 전체조회 함수 실행
  }, [page, pageSize]);

  // 전체 조회 함수 정의
  const retrieveTour = () => {
    // 벡엔드로 전체 조회 요청
    TourDataService.getReservation(searchRes, page - 1, pageSize)
    .then((response) => {
      // 성공 : response.data(벡엔드에서 전송한 데이터)
      const {tour, totalPages} = response.data;

      setTour(tour); // 고객배열객체 저장
      setCount(totalPages); // 총페이지 개수 저장
      // 벡엔드 전송된 데이터를 콘솔 출력
      console.log(response.data);
    })
    .catch((e) => {
      // 실패
      console.log(e);
    });
};

  // 공통 : 페이지 관련 함수
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  // 공통 : 페이지 관련 함수
  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
    setPage(1);
  };

  // 테이블의 1개의 항목을 클릭하면
  // 오른쪽에 간략 상세화면을 표시하는 함수
  const setActive = (data, index) => {
    setCurrentData(data);
    setCurrentIndex(index);
  };

  return (
    <div>
      {/* tour 테마 윗부분 시작 */}
      <div className="hero hero-inner">
        <div className="container" data-aos="fade-left" data-aos-delay="200">
          <div className="row align-items-center">
            <div className="col-lg-6 mx-auto text-center">
              <div className="intro-wrap">
                <h1 className="mb-0">Reservation Info</h1>
                <p className="text-white">
                  예약한 여행 정보를 여기서 확인할 수 있습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tour 테마 윗부분 끝 */}

      <div className="untree_co-section">
        <div className="container" data-aos="fade-left" data-aos-delay="200">
          <div className="row">
            <div className="col-lg-7 mx-auto text-center">
              {/* <!-- search 관련 div 시작 --> */}
              <div className="col-md-8 offset-2">
                <div className="input-group mb-3">
                  {/* <!--            Todo : 수정 시작 --> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by Res"
                    value={searchRes}
                    onChange={onChangeSearchRes}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => {
                        retrieveTour();
                      }}
                    >
                      Search
                    </button>
                  </div>
                  {/* <!--            Todo : 수정 끝 --> */}
                </div>
              </div>
              {/* <!-- search 관련 div 끝 --> */}

              {/* <!--    Todo : page 바 시작 --> */}
              <div className="col-md-8 offset-4">
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
              </div>
              {/* <!--    Todo : page 바 끝 --> */}

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">이름</th>
                    <th scope="col">여행지</th>
                    <th scope="col">시작일시</th>
                    <th scope="col">종료일시</th>
                    <th scope="col">예약가능</th>
                  </tr>
                </thead>
                <tbody>
                  {tour &&
                    tour.map((data, index) => (
                      <tr onClick={() => setActive(data, index)} key={index}>
                        <td>{data.tname}</td>
                        <td>{data.sights}</td>
                        <td>{data.start_date}</td>
                        <td>{data.end_date}</td>
                        <td>{data.reservation}</td>
                      </tr>
                    ))}
                </tbody>
              </table>

              {/* <!--    Todo : page 바 시작 --> */}
              <div className="col-md-8 offset-3">
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
              {/* <!--    Todo : page 바 끝 --> */}
            </div>

            {/* 테이블의 한개의 값을 클릭하면 */}
            {/* 우측에 간략 상세가 나오도록 하는 부분 */}
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

export default ReservationList;