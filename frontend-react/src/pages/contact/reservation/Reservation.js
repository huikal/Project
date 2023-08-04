// Reservation.js
// rfce
import { useState, useEffect } from "react";
// 다른 페이지에서 보낸 기본키 정보 받기 훅함수 라이브러리
import { useParams } from "react-router-dom";

// 테마 js import
import initScripts from "../../../assets/js/scripts";
import initCustom from "../../../assets/js/custom.js";
// axios 벡엔드 함수 import
import ReservationDataService from "../../../services/ReservationDataService";
// Pagination 태그 import
import Pagination from "@material-ui/lab/Pagination";

function Reservation() {
  // 변수 정의
  // 다른 페이지에서 전송한 기본키(email) 받기 함수
  const { email } = useParams();

  // 벡엔드 전송한 데이터를 저장할 변수
  const [reservation, setReservation] = useState([]);
  // 현재 클릭했을때의 객체를 저장할 변수
  const [currentData, setCurrentData] = useState(null);
  // 현재 클릭했을때의 index를 저장할 변수
  const [currentIndex, setCurrentIndex] = useState(-1);
  // email 검색어를 저장할 변수
  const [searchEmail, setSearchEmail] = useState(email);

  // 공통 페이지 관련 변수
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [pageSize, setPageSize] = useState(3);
  const pageSizes = [3, 6, 9];

  // 함수 정의
  // 수동 바인딩 : 화면값 변경 -> 변수값 변경 코딩
  const onChangeSearchEmail = (e) => {
    setSearchEmail(e.target.value);
  };

  // 화면 시작시의 이벤트 함수
  // [page, pageSize] : page, pageSize 감시해서 변경되면
  //     useEffect 재실행 함
  useEffect(() => {
    initScripts();
    initCustom();
    retrieveReservation(); // 전체 조회 함수
  }, [page, pageSize]);

  // 전체 조회 함수
  const retrieveReservation = () => {
    // 벡엔드에 전체 조회를 요청
    ReservationDataService.getAll(searchEmail, page - 1, pageSize)
      .then((response) => {
        // 성공
        const { reservation, totalPages } = response.data;

        // 벡엔드에서 전송한 객체배열을 저장
        setReservation(reservation);
        setCount(totalPages);  // 페이지 정보 저장

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
  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
    setPage(1);
  };

  // 간략 상세 (오른쪽) 보이는 함수
  // 테이블의 1개 항목 클릭시 간략상세화면을 보여줌
  const setActive = (data, index) => {
    setCurrentData(data);
    setCurrentIndex(index);
  };

  return (
    <div>
      <div className="hero hero-inner">
        <div className="container" data-aos="fade-left" data-aos-delay="200">
          <div className="row align-items-center">
            <div className="col-lg-6 mx-auto text-center">
              <div className="intro-wrap">
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="untree_co-section">
        <div className="container" data-aos="fade-left" data-aos-delay="200">
          <div className="row">
            <div className="col-lg-6 mx-auto text-center">
              {/* <!-- search 관련 div 시작 --> */}
              <div className="col-md-8 offset-2">
                <div className="input-group mb-3">
                  {/* <!--            Todo : 수정 시작 --> */}
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search by Email"
                    value={searchEmail}
                    onChange={onChangeSearchEmail}
                  />
                  <div className="input-group-append">
                    <button
                      className="btn btn-outline-secondary"
                      type="button"
                      onClick={() => {
                        retrieveReservation();
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
                    <th scope="col">Email</th>
                    <th scope="col">이름</th>
                    <th scope="col">여행지</th>
                    <th scope="col">시작일시</th>
                    <th scope="col">종료일시</th>
                    <th scope="col">예약가능여부</th>
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

export default Reservation;
