import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// 통신 함수(CRUD)
import CustomerDataService from "../../services/CustomerDataService";
// 페이징
import Pagination from "@material-ui/lab/Pagination";

// 테마 js import
import initScripts from "../../assets/js/scripts";
import initCustom from "../../assets/js/custom";
import { Link } from "react-router-dom";

import LogoColor from "../../assets/images/easytrip-logo-color.png";

function MyReservation() {
  // 화면 시작 이벤트 함수
  useEffect(() => {
    // 테마 js 실행
    initScripts();
    initCustom();
  });
  // 전체목록 페이지에서 전달한 부서번호를 가져오기 함수 실행
  const { cid } = useParams();
  // 강제 페이지 이동 함수 정의
  let navigate = useNavigate();
  // 페이징
  const [customer, setCustomer] = useState([]);
  const [searchEmail, setSearchEmail] = useState("");
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [pageSize, setPageSize] = useState(3);
  const pageSizes = [3, 6, 9];
  const onChangeSearchEmail = (e) => {
    const searchEmail = e.target.value;
    setSearchEmail(searchEmail);
  };
  const retrieveCustomer = () => {
    CustomerDataService.getAll(searchEmail, page - 1, pageSize)
      .then((response) => {
        const { customer, totalPages } = response.data;

        setCustomer(customer);
        setCount(totalPages);

        console.log(response.data);
        console.log("customer", customer);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(retrieveCustomer, [page, pageSize]);
  const handlePageChange = (event, value) => {
    setPage(value);
  };
  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
    setPage(1);
  };
  const initialCustomerState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };
  // 벡엔드에서 전송한 부서객체를 저장할 변수
  const [currentCustomer, setCurrentCustomer] = useState(initialCustomerState);
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

      <div class="sider_review">
        {/* 좌측 사이드메뉴 시작 */}
        <div class="sidebar">
          <div class="sidebar-menu">
            <Link to={"/myAccount"}>
              <p>회원정보</p>
            </Link>
          </div>
          <div class="sidebar-menu">
            <Link to={"/cart"}>
              <p>장바구니</p>
            </Link>
          </div>
          <div class="sidebar-menu">
            <Link to={"/myReservation"}>
              <p class="selected">내 예약</p>
            </Link>
          </div>
          <div class="sidebar-menu">
            <Link to={"/my-review"}>
              <p>내 리뷰</p>
            </Link>
          </div>
        </div>
        {/* 좌측 사이드메뉴 끝 */}

        <div class="my-reservation">
          {/* page control start */}
          <div class="page-control">
            {"화면 보기 선택 "}
            <select
              onChange={handlePageSizeChange}
              value={pageSize}
              class="page-selectbox"
            >
              {pageSizes.map((size) => (
                <option key={size} value={size}>
                  {size}
                </option>
              ))}
            </select>

            <div class="reservation-control">
              {/* 예약 카드 아이템 반복문 시작 */}
                {customer &&
                  customer.map((data) => (
                    <div class="item-card" key={data.email}>
                      {/* 상품 박스 시작 */}
                      <div class="item-card-block">
                        <div class="magazine-card-thumbnail">
                          {data.firstName}
                        </div>
                        <div class="magazine-card-text">
                          <Link to={"/magazine"}>
                            <h5>{data.firstName}</h5>
                          </Link>
                        </div>
                      </div>
                      {/* 상품 박스 끝 */}

                      {/* 예약 상태 박스 시작 */}
                      <div class="item-card-block  itemcard-border">
                        <div class="reservation-card-text">
                          구매일시{data.lastName}
                        </div>
                        <div class="reservation-card-text">
                          <div class="reservation-info">성인</div>
                          <div class="reservation-info itemcard-border">1</div>
                        </div>
                        <div class="reservation-card-text">
                          <div class="reservation-info">유아</div>
                          <div class="reservation-info itemcard-border">0</div>
                        </div>
                        <div class="reservation-card-text">
                          예약기간{data.address}
                        </div>
                        <div class="reservation-card-btn">
                          <div class="btn-reservation btn-edit">
                            <Link to={"/reservationEdit"}>
                              <p class="link-black">변경/취소</p>
                            </Link>
                          </div>
                          {/* <div class="btn-reservation btn-cancle">
                      <Link to={"/reservationCancle"}>
                        <p class="link-white">취소</p>
                      </Link>
                    </div> */}
                        </div>
                      </div>
                      {/* 예약 상태 박스 끝 */}
                    </div>
                  ))}
                {/* 예약 카드 아이템 반복문 시작 */}
            </div>
          </div>

          <Pagination
            class="page-button ms-3"
            count={count}
            page={page}
            siblingCount={1}
            boundaryCount={1}
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
          />

          {/* 예약 카드 2 시작 */}
          {/* <div class="item-card">
            <div class="item-card-block">
              <div class="magazine-card-thumbnail">
                <img src={LogoColor} alt="이미지 테스트" width={"200px"} />
              </div>
              <div class="magazine-card-text">
                <Link to={"/magazine"}>
                  <h5>콘텐츠 제목</h5>
                  <h6>콘텐츠 설명</h6>
                </Link>
              </div>
            </div>

            <div class="item-card-block  itemcard-border">
              <div class="reservation-card-text">구매일시</div>
              <div class="reservation-card-text">
                <div class="reservation-info">성인</div>
                <div class="reservation-info itemcard-border">1</div>
              </div>
              <div class="reservation-card-text">
                <div class="reservation-info">유아</div>
                <div class="reservation-info itemcard-border">1</div>
              </div>
              <div class="reservation-card-text">예약기간</div>
              <div class="reservation-card-btn">
                <div class="btn-reservation btn-edit">
                  <Link to={"/reservationEdit"}>
                    <p class="link-black">변경</p>
                  </Link>
                </div>
                <div class="btn-reservation btn-cancle">
                  <Link to={"/reservationCancle"}>
                    <p class="link-white">취소</p>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
          {/* 예약 카드 2 끝 */}

          {/* 예약 카드 3 시작 */}
          {/* <div class="item-card">
            <div class="item-card-block">
              <div class="magazine-card-thumbnail">
                <img src={LogoColor} alt="이미지 테스트" width={"200px"} />
              </div>
              <div class="magazine-card-text">
                <Link to={"/magazine"}>
                  <h5>콘텐츠 제목</h5>
                  <h6>콘텐츠 설명</h6>
                </Link>
              </div>
            </div>

            <div class="item-card-block  itemcard-border">
              <div class="reservation-card-text">구매일시</div>
              <div class="reservation-card-text">
                <div class="reservation-info">성인</div>
                <div class="reservation-info itemcard-border">1</div>
              </div>
              <div class="reservation-card-text">
                <div class="reservation-info">유아</div>
                <div class="reservation-info itemcard-border">1</div>
              </div>
              <div class="reservation-card-text">예약기간</div>
              <div class="reservation-card-btn">
                <div class="btn-reservation btn-edit">
                  <Link to={"/reservationEdit"}>
                    <p class="link-black">변경</p>
                  </Link>
                </div>
                <div class="btn-reservation btn-cancle">
                  <Link to={"/reservationCancle"}>
                    <p class="link-white">취소</p>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
          {/* 예약 카드 3 끝 */}

          {/* 예약 카드 4 시작 */}
          {/* <div class="item-card">
            <div class="item-card-block">
              <div class="magazine-card-thumbnail">
                <img src={LogoColor} alt="이미지 테스트" width={"200px"} />
              </div>
              <div class="magazine-card-text">
                <Link to={"/magazine"}>
                  <h5>콘텐츠 제목</h5>
                  <h6>콘텐츠 설명</h6>
                </Link>
              </div>
            </div>

            <div class="item-card-block  itemcard-border">
              <div class="reservation-card-text">구매일시</div>
              <div class="reservation-card-text">
                <div class="reservation-info">성인</div>
                <div class="reservation-info itemcard-border">1</div>
              </div>
              <div class="reservation-card-text">
                <div class="reservation-info">유아</div>
                <div class="reservation-info itemcard-border">1</div>
              </div>
              <div class="reservation-card-text">예약기간</div>
              <div class="reservation-card-btn">
                <div class="btn-reservation btn-edit">
                  <Link to={"/reservationEdit"}>
                    <p class="link-black">변경</p>
                  </Link>
                </div>
                <div class="btn-reservation btn-cancle">
                  <Link to={"/reservationCancle"}>
                    <p class="link-white">취소</p>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}
          {/* 예약 카드 4 끝 */}
        </div>
      </div>
    </div>
  );
}

export default MyReservation;
