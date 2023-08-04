// EmpList.js : MAGAZINE 검색 결과 페이지
// TODO: 1) 연습문제 부서전체조회페이지를 참고하여
// TODO:  사원 전체 조회 페이지를 완성하세요(html 먼저 드림)
// TODO: 리액트를 참고해서 스프링부트(벡엔드)도 완성하세요
//       (전체조회(like검색포함), 전체삭제함수)
// rfce
import React, { useState, useEffect } from "react";
import EmpDataService from "../services/EmpDataService";
import Pagination from "@material-ui/lab/Pagination";
import { Link, useParams } from "react-router-dom";



function EmpList() {
  const { ename }= useParams();
    const [emp, setEmp] = useState([]);
    const [currentEmp, setCurrentEmp] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [searchEname, setSearchEname] = useState(ename);


    const [page, setPage] = useState(1);
    const [count, setCount] = useState(0);
    const [pageSize, setPageSize] = useState(3);
    const pageSizes = [3, 6, 9];

    const onChangeSearchEname = (e) => {
        const searchEname = e.target.value; // 화면 입력값
        setSearchEname(searchEname); // 변수에 저장
      };

      const retrieveEmp = () => {
        console.log("retrieveEmp", searchEname, page - 1, pageSize);
    
        EmpDataService.getAll(searchEname, page - 1, pageSize)
          .then((response) => {
            const { emp, totalPages } = response.data;
            setEmp(emp); // 부서배열객체 저장
            setCount(totalPages); // 총페이지 개수 저장
            console.log(response.data);
          })
          .catch((e) => {
            // 실패
            console.log(e);
          });
      };

      useEffect(retrieveEmp, [page, pageSize]);

      const setActiveEmp = (emp, index) => {
        setCurrentEmp(emp); // 클릭한 부서객체를 저장
        setCurrentIndex(index); // 클릭한 인덱스번호도 저장
      };
    
      // TODO: 전체 삭제 함수 : 삭제버튼 클릭시 실행
      const removeAllEmp = () => {
        // 벡엔트 전체 삭제 요청
        EmpDataService.removeAll()
          .then((response) => {
            // 성공
            console.log(response.data); // 콘솔 로그 출력
            retrieveEmp();      // 전체 조회 재실행
            setCurrentEmp(null); // currentDept = null 초기화
            setCurrentIndex(-1); // currentIndex = -1 초기화
          })
          .catch((e) => {
            // 실패
            console.log(e);
          });
      };
    
      const handlePageChange = (event, value) => {
        setPage(value); // 변경된 현재페이지 번호를 저장
      };
    
      const handlePageSizeChange = (event) => {
        setPageSize(event.target.value); // 화면의 입력값
        setPage(1);   // 현재페이지 1로 고정 저장
      };


  return (
    <div className="list row">
      {/* <div className="col-md-8">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Search by ename"
            value={searchEname}
            onChange={onChangeSearchEname}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={retrieveEmp}
            >
              Search
            </button>
          </div>
        </div>
      </div> */}
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
      <div className="col-md-6">

        <div className="mt-3">
          {"Items per Page: "}
          <select onChange={handlePageSizeChange} value={pageSize}>
            {pageSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>

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

        <ul className="list-group">
          {emp &&
            emp.map((emp, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveEmp(emp, index)}
                key={index}
              >
                {emp.ename}
              </li>
            ))}
        </ul>

        {/* <button className="m-3 btn btn-sm btn-danger" onClick={removeAllEmp}>
          Remove All
        </button> */}
      </div>

      {/* <div className="col-md-6">
        {currentEmp ? (
          <div>
            <h4>Emp</h4>
            <div>
              <label>
                <strong>Ename:</strong>
              </label>{" "}
              {currentEmp.ename}
            </div>
            <div>
              <label>
                <strong>Job:</strong>
              </label>{" "}
              {currentEmp.job}
            </div>
            <div>
              <label>
                <strong>Manager:</strong>
              </label>{" "}
              {currentEmp.manager}
            </div>
            <div>
              <label>
                <strong>Hiredate:</strong>
              </label>{" "}
              {currentEmp.hiredate}
            </div>
            <div>
              <label>
                <strong>Salary:</strong>
              </label>{" "}
              {currentEmp.salary}
            </div>
            <div>
              <label>
                <strong>Commission:</strong>
              </label>{" "}
              {currentEmp.commission}
            </div>
            <div>
              <label>
                <strong>Dno:</strong>
              </label>{" "}
              {currentEmp.dno}
            </div>




            <Link to={"/emp/" + currentEmp.eno}>
              <span className="badge bg-warning">Edit</span>
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Emp...</p>
          </div>
        )}
      </div> */}
    </div>
  );
}

export default EmpList;