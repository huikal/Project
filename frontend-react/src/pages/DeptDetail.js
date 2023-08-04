// DeptList.js : 여행상품 검색 결과 페이지
// rfce
import React, { useState, useEffect } from "react";
// 통신 라이브러리 함수(CRUD) import
import DeptDataService from "../services/DeptDataService";
// 페이지 라이브러리 import
import Pagination from "@material-ui/lab/Pagination";
// 메뉴 라이브러리 import
import { Link, useParams } from "react-router-dom";

function DeptList() {
  // 전체목록 페이지에서 전달한 부서번호를 가져오기 함수 실행
  const { dname } = useParams();
  // 변수 정의
  // 벡엔드에서 전송한 부서객체배열을 저장할 변수
  const [dept, setDept] = useState([]);
  // 현재 클릭한 부서객체를 저장할 변수
  const [currentDept, setCurrentDept] = useState(null);
  // 현재 클릭한 부서배열의 인덱스번호를 저장할 변수
  const [currentIndex, setCurrentIndex] = useState(-1);
  // 검색어를 저장할 변수
  const [searchDname, setSearchDname] = useState(dname);

  // TODO: page : 현재 페이지 번호를 저장할 변수
  // TODO: 벡엔드에서 전송한 현재 페이지 번호
  const [page, setPage] = useState(1);
  // TODO: 벡엔드에서 전송한 총 데이터 개수를 저장할 변수
  const [count, setCount] = useState(0);
  // TODO: 셀렉트 박스에서 기본으로 사용할 변수 : 3
  const [pageSize, setPageSize] = useState(3);

  // TODO: 셀렉트 박스의 내용 : 3, 6, 9 목록이 있음(배열변수)
  const pageSizes = [3, 6, 9];

  // 함수 정의
  // 수동 바인딩 : 화면입력값 변경 -> 변수도 변경 코딩
  // onchange 함수 : 부서명 검색
  const onChangeSearchDname = (e) => {
    const searchDname = e.target.value; // 화면 입력값
    setSearchDname(searchDname); // 변수에 저장
  };

  // 전체 조회 함수
  const retrieveDept = () => {
    // 콘솔로그 : searchDname, page-1, pageSize 출력
    console.log("retrieveDept", searchDname, page - 1, pageSize);

    // 벡엔드 전체조회요청 함수
    // searchDname : 부서명검색어(화면입력값)
    // page : 현재페이지
    // pageSize : 현재 페이지당 개수
    DeptDataService.getAll(searchDname, page - 1, pageSize)
      .then((response) => {
        // 성공 : response.data(벡엔드에서 전송한 데이터)
        // 벡엔드)
        //  map 자료구조로 전송됨
        //  (dept, 현재페이지번호, 총건수, 총페이지개수)
        // 구조 분해 할당
        // const dept = response.data.dept;
        // const totalPages = response.data.totalPages;
        const { dept, totalPages } = response.data;

        setDept(dept); // 부서배열객체 저장
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
  // 전체조회를 실행함(retrieveDept())
  // page, pageSize 의 값이 변하면 다시 재실행(retrieveDept())
  useEffect(retrieveDept, [page, pageSize]);

  // 전체 목록에서 현재 부서객체를 클릭하면 실행되는 함수
  const setActiveDept = (dept, index) => {
    setCurrentDept(dept); // 클릭한 부서객체를 저장
    setCurrentIndex(index); // 클릭한 인덱스번호도 저장
  };

  // TODO: 전체 삭제 함수 : 삭제버튼 클릭시 실행
  const removeAllDept = () => {
    // 벡엔트 전체 삭제 요청
    DeptDataService.removeAll()
      .then((response) => {
        // 성공
        console.log(response.data); // 콘솔 로그 출력
        retrieveDept(); // 전체 조회 재실행
        setCurrentDept(null); // currentDept = null 초기화
        setCurrentIndex(-1); // currentIndex = -1 초기화
      })
      .catch((e) => {
        // 실패
        console.log(e);
      });
  };

  // TODO: Material UI 에서 제공하는 페이지 컨트롤이 변경되었을때
  // TODO: 현재 페이지번호를 변경했을때 : 1 -> 2 등
  const handlePageChange = (event, value) => {
    setPage(value); // 변경된 현재페이지 번호를 저장
  };

  // TODO: 셀렉트박스의 목록의 값을 변경시 실행하는 함수
  // TODO: onchange 함수 : 3,6,9
  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value); // 화면의 입력값
    setPage(1); // 현재페이지 1로 고정 저장
  };

  return (
    <div className="list row">
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
      <div class="spacer-magazine"></div>

      {/* 검색어 시작 */}
      <div className="col-md-8">
        <div className="input-group mb-3">
          {/* 검색어 입력양식 시작 */}
          {/* <input
            type="text"
            className="form-control"
            placeholder="Search by dname"
            value={searchDname}
            onChange={onChangeSearchDname}
          /> */}
          {/* 검색어 입력양식 끝 */}

          {/* 검색 버튼 시작 */}
          {/* <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={retrieveDept}
            >
              Search
            </button>
          </div> */}
          {/* 검색 버튼 끝 */}
        </div>
      </div>
      {/* 검색어 끝 */}

      {/* 전체 목록 부분 + page 컨트롤추가 시작 */}
      <div className="col-md-6">
        {/* 제목 */}

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

        {/* 전체 목록(반복문) 시작 */}
        <ul className="list-group">
          {dept &&
            dept.map((dept, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveDept(dept, index)}
                key={index}
              >
                {dept.dname}
              </li>
            ))}
        </ul>
        {/* 전체 목록 끝 */}

        {/* 전체 삭제 버튼 시작 */}
        {/* <button className="m-3 btn btn-sm btn-danger" onClick={removeAllDept}>
          Remove All
        </button> */}
        {/* 전체 삭제 버튼 끝 */}
      </div>
      {/* 전체 목록 부분 + page 컨트롤추가 끝 */}

      {/* (목록클릭시)간략 상세 정보 시작 */}
      <div className="col-md-6">
        {/* currentDept 있으면 간략 상세 정보 출력*/}
        {/* currentDept 없으면 클릭 메세지 출력*/}
        {currentDept ? (
          <div>
            {/* 부서명 시작 */}
            <div>
              <label>
                <strong>Dname:</strong>
              </label>{" "}
              {currentDept.dname}
            </div>
            {/* 부서명 끝 */}

            {/* 부서위치 시작 */}
            <div>
              <label>
                <strong>Loc:</strong>
              </label>{" "}
              {currentDept.loc}
            </div>
            {/* 부서위치 끝 */}

            {/* 상세페이지 링크 시작 */}
            <Link to={"/dept/" + currentDept.dno}>
              <span className="badge bg-warning">Edit</span>
            </Link>
            {/* 상세페이지 링크 끝 */}
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Dept...</p>
          </div>
        )}
      </div>
      {/* (목록클릭시)간략 상세 정보 끝 */}
    </div>
  );
}

export default DeptList;
