// TourList.js : 전체 조회 페이지
// rfce
import React, { useState, useEffect } from "react";
// 통신 함수(CRUD)
import TourDataService from "../services/TourDataService";
// Material-ui 에서 Pagination import
import Pagination from "@material-ui/lab/Pagination";
// Link 메뉴 라이브러리 import
import initScripts from "../assets/js/scripts";
import initCustom from "../assets/js/custom";
import { Link, useParams } from "react-router-dom";

function TourDetail() {
  // 변수 정의
  const { tname }= useParams();

  // 벡엔드에서 전송한 고객객체배열을 저장할 변수
  const [tour, setTour] = useState([]);
  // 검색어를 저장할 변수
  const [searchTname, setSearchTname] = useState(tname);

  // 공통 페이지 부분
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [pageSize, setPageSize] = useState(3);
  const pageSizes = [3, 6, 9];

  // 함수 정의
  // 수동 바인딩 : 화면입력값 변경 -> 변수도 변경 코딩
  // onchange 함수 : Tname 검색
  const onChangeSearchTname = (e) => {
    const searchTname = e.target.value; // 화면 입력값
    setSearchTname(searchTname); // 변수에 저장
  };

  // 전체 조회 함수
  const retrieveTour = () => {
    // 콘솔로그 : searchTname, page-1, pageSize 출력
    console.log("retrieveTour", searchTname, page - 1, pageSize);

    // 벡엔드 전체조회요청 함수
    // searchTname : Tname검색어(화면입력값)
    // page : 현재페이지
    // pageSize : 현재 페이지당 개수
    TourDataService.getSearch(searchTname, page - 1, pageSize)
      .then((response) => {
        // 성공 : response.data(벡엔드에서 전송한 데이터)
        const { tour, totalPages } = response.data;

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

  // 화면이 뜨자마자 실행되는 이벤트

  // 화면 시작 이벤트 함수
  useEffect(retrieveTour, [page, pageSize],() => {
    // 테마 js 실행
    initScripts(); // Type 라이브러리 실행
    initCustom();
  });
 
  // 공통 페이지
  const handlePageChange = (event, value) => {
    setPage(value); // 변경된 현재페이지 번호를 저장
  };
  // 공통 페이지
  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value); // 화면의 입력값
    setPage(1); // 현재페이지 1로 고정 저장
  };

  return (
    <div>
      {/* 검색어 시작 */}
       {/* <div className="col-md-8"> */}
        {/* <div className="input-group mb-3"> */}
          {/* 검색어 입력양식 시작 */}
          {/* <input
            type="text"
            className="form-control"
            placeholder="Search by tname"
            value={searchTname}
            onChange={onChangeSearchTname}
          /> */}
          {/* 검색어 입력양식 끝 */}

          {/* 검색 버튼 시작 */}
          {/* <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={retrieveTour}
            >
              Search
            </button>
          </div> */}
          {/* 검색 버튼 끝 */}
        {/* </div> */}
      {/* </div> */}
      {/* 검색어 끝 */}

      {/* 전체 테이블 + 페이징 시작 */}
      <div className="col-md-12">
        {/* 제목 */}
        <h4>.</h4>

        {/* 페이징 시작 */}
        <div className="mt-3">
          {/* 셀렉트박스(size:3,6,9) 시작 */}
          {"Items per Page: "}
          <select onChange={handlePageSizeChange} value={pageSize}>
            {pageSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
          {/* 셀렉트박스(3,6,9) 끝 */}

          {/* Material UI 페이지 컨트롤 시작 */}
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
          {/* Material UI 페이지 컨트롤 끝 */}
        </div>
        {/* 페이징 끝 */}

        {/* 테이블 시작*/}
        <table className="table">
          {/* 테이블 제목 시작 */}
          <thead>
            <tr>
              <th scope="col">Tname</th>
              <th scope="col">MAIN</th>
              <th scope="col">SUB1</th>
              <th scope="col">SUB2</th>
              <th scope="col">Phone</th>

              {/* 상세페이지 이동 링크 */}
              <th scope="col">Actions</th>
            </tr>
          </thead>
          {/* 테이블 제목 끝 */}

          {/* 테이블 내용 시작 */}
          <tbody>
            {/* 반복문 내용 시작 */}
            {tour &&
              tour.map((data) => (
                <tr key={data.tname}>
                  <td>{data.tname}</td>
                  <td>{data.sights}</td>
                  <td>{data.main}</td>
                  <td>{data.sub1}</td>
                  <td>{data.phone}</td>
                  {/* 상세 페이지 링크 시작 */}
                  <td>
                    <Link to={"/tour/" + data.tid}>
                      <span className="badge bg-success">Edit</span>
                    </Link>
                  </td>
                  {/* 상세 페이지 링크 끝 */}
                </tr>
              ))}
            {/* 반복문 내용 끝 */}
          </tbody>
          {/* 테이블 내용 끝 */}
        </table>
        {/* 테이블 끝*/}
      </div>
      {/* 전체 테이블 + 페이징 끝 */}
    </div>
  );
}

export default TourDetail;