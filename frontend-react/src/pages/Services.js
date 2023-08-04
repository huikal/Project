// Services.js - 매거진 전체 조회 페이지
// rfce
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

// 매거진 상세 페이지 import
import Magazine from "./Magazine";
import { Link } from "react-router-dom";

// 테마 js import
import initScripts from "../assets/js/scripts";
import initCustom from "../assets/js/custom";

// 통신 함수(CRUD)
import CustomerDataService from "../services/CustomerDataService";
// 페이징
import Pagination from "@material-ui/lab/Pagination";

// 이미지 import
import LogoColor from "../assets/images/easytrip-logo-color.png";

function Services() {
  // 화면 시작 이벤트 함수
  useEffect(() => {
    // 테마 js 실행
    initScripts();
    initCustom();
  });

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

  // 전체목록 페이지에서 전달한 부서번호를 가져오기 함수 실행
  const { cid } = useParams();
  // 강제 페이지 이동 함수 정의
  let navigate = useNavigate();

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
      <div class="magazine-background">
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

          {/* <Pagination
          class="page-button"
          count={count}
          page={page}
          siblingCount={1}
          boundaryCount={1}
          variant="outlined"
          shape="rounded"
          onChange={handlePageChange}
        /> */}
        </div>
        {/* page control end */}
        <div class="magazine-align">
          {/* 매거진 뷰어 카드 폼 반복문 시작 */}
          {customer &&
            customer.map((data) => (
              <div class="magazine-card" key={data.email}>
                <div class="magazine-card-thumbnail">
                  <img
                    src={data.firstName}
                    alt="이미지 테스트"
                    width={"100%"}
                    height={"100%"}
                  />
                </div>
                <div class="magazine-card-text">
                  <Link to={"/magazine/" + data.cid}>
                    <h5>{data.email}</h5>
                    <h6>{data.phone}</h6>
                  </Link>
                </div>
              </div>
            ))}
          {/* 매거진 뷰어 카드 폼 반복문 끝 */}
        </div>

        <Pagination
          class="page-button"
          count={count}
          page={page}
          siblingCount={1}
          boundaryCount={1}
          variant="outlined"
          shape="rounded"
          onChange={handlePageChange}
        />
      </div>

      <div class="magazine col-12">
        {/* 매거진 카드1 시작 */}
        {/* <div class="magazine-card ">
          <div class="magazine-card-thumbnail">
            <img src={LogoColor} alt="이미지 테스트" width={"400px"} />
          </div>
          <div class="magazine-card-text">
            <Link to={"/magazine/" + currentCustomer.cid}>
              <h5>콘텐츠 제목</h5>
              <h6>콘텐츠 설명</h6>
            </Link>
          </div>
        </div> */}
        {/* 매거진 카드1 끝 */}

        {/* 매거진 카드2 시작 */}
        {/* <div class="magazine-card ">
          <div class="magazine-card-thumbnail">
            <img src={LogoColor} alt="이미지 테스트" width={"400px"} />
          </div>
          <div class="magazine-card-text">
            <h5>콘텐츠 제목</h5>
            <h6>Lorem ipsum dollar sit amet </h6>
          </div>
        </div> */}
        {/* 매거진 카드2 끝 */}

        {/* 매거진 카드3 시작 */}
        {/* <div class="magazine-card ">
          <div class="magazine-card-thumbnail">
            <img src={LogoColor} alt="이미지 테스트" width={"400px"} />
          </div>
          <div class="magazine-card-text">
            <h5>콘텐츠 제목</h5>
            <h6>콘텐츠 설명</h6>
          </div>
        </div> */}
        {/* 매거진 카드3 끝 */}

        {/* 매거진 카드4 시작 */}
        {/* <div class="magazine-card ">
          <div class="magazine-card-thumbnail">
            <img src={LogoColor} alt="이미지 테스트" width={"400px"} />
          </div>
          <div class="magazine-card-text">
            <h5>콘텐츠 제목</h5>
            <h6>콘텐츠 설명</h6>
          </div>
        </div> */}
        {/* 매거진 카드4 끝 */}
      </div>

      {/* <div class="spacer"></div> */}

      {/* -------------------------------예제 파트------------------------------ */}

      {/* 이미지 + 텍스트 콘텐츠 시작 */}
      {/* <div class="untree_co-section">
        <div class="container">
          <div class="row">
            <div class="col-6 col-md-6 col-lg-3">
              <div class="media-1">
                <a href="#" class="d-block mb-3">
                  <img
                    src="images/hero-slider-1.jpg"
                    alt="Image"
                    class="img-fluid"
                  />
                </a>
                <div class="d-flex">
                  <div>
                    <h3>
                      <a href="#">Excellence in Travel</a>
                    </h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-6 col-lg-3">
              <div class="media-1">
                <a href="#" class="d-block mb-3">
                  <img
                    src="images/hero-slider-2.jpg"
                    alt="Image"
                    class="img-fluid"
                  />
                </a>
                <div class="d-flex">
                  <div>
                    <h3>
                      <a href="#">Discovering Best</a>
                    </h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-6 col-lg-3">
              <div class="media-1">
                <a href="#" class="d-block mb-3">
                  <img
                    src="images/hero-slider-3.jpg"
                    alt="Image"
                    class="img-fluid"
                  />
                </a>
                <div class="d-flex">
                  <div>
                    <h3>
                      <a href="#">A New Moments of Life</a>
                    </h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6 col-md-6 col-lg-3">
              <div class="media-1">
                <a href="#" class="d-block mb-3">
                  <img
                    src="images/hero-slider-4.jpg"
                    alt="Image"
                    class="img-fluid"
                  />
                </a>
                <div class="d-flex">
                  <div>
                    <h3>
                      <a href="#">Joy To Your Journey</a>
                    </h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* 이미지 + 텍스트 콘텐츠 끝 */}

      {/* 아이콘 요소 부분 시작 */}
      {/* <div class="untree_co-section">
        <div class="container">
          <div class="row">
            <div class="col-6 col-md-6 col-lg-3">
              <div class="service text-center">
                <span class="icon-paper-plane"></span>
                <h3>Excellence in Travel</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div class="col-6 col-md-6 col-lg-3">
              <div class="service text-center">
                <span class="icon-tag"></span>
                <h3>Discover Best</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div class="col-6 col-md-6 col-lg-3">
              <div class="service text-center">
                <span class="icon-user"></span>
                <h3>A New Moments of Life</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
            <div class="col-6 col-md-6 col-lg-3">
              <div class="service text-center">
                <span class="icon-support"></span>
                <h3>Joy To Your Journey</h3>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* 아이콘 요소 부분 끝 */}

      {/* More Servicex 부분 시작 */}
      {/* <div class="untree_co-section">
        <div class="container">
          <div class="row mb-5 justify-content-center">
            <div class="col-lg-6 text-center">
              <h2 class="section-title text-center mb-3">More Services</h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
          </div>
          <div class="row align-items-stretch">
            <div class="col-lg-4 order-lg-1">
              <div class="h-100">
                <div class="frame h-100">
                  <div
                    class="feature-img-bg h-100"
                    style={{backgroundImage: "url('images/hero-slider-1.jpg')"}}
                  ></div>
                </div>
              </div>
            </div>

            <div class="col-6 col-sm-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-1">
              <div class="feature-1 d-md-flex">
                <div class="align-self-center">
                  <span class="flaticon-house display-4 text-primary"></span>
                  <h3>Beautiful Condo</h3>
                  <p class="mb-0">
                    Even the all-powerful Pointing has no control about the
                    blind texts.
                  </p>
                </div>
              </div>

              <div class="feature-1 ">
                <div class="align-self-center">
                  <span class="flaticon-restaurant display-4 text-primary"></span>
                  <h3>Restaurants & Cafe</h3>
                  <p class="mb-0">
                    Even the all-powerful Pointing has no control about the
                    blind texts.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-6 col-sm-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-3">
              <div class="feature-1 d-md-flex">
                <div class="align-self-center">
                  <span class="flaticon-mail display-4 text-primary"></span>
                  <h3>Easy to Connect</h3>
                  <p class="mb-0">
                    Even the all-powerful Pointing has no control about the
                    blind texts.
                  </p>
                </div>
              </div>

              <div class="feature-1 d-md-flex">
                <div class="align-self-center">
                  <span class="flaticon-phone-call display-4 text-primary"></span>
                  <h3>24/7 Support</h3>
                  <p class="mb-0">
                    Even the all-powerful Pointing has no control about the
                    blind texts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* More Servicex 부분 끝 */}

      {/* Get In Touch 시작 */}
      {/* <div class="py-5 cta-section">
        <div class="container">
          <div class="row text-center">
            <div class="col-md-12">
              <h2 class="mb-2 text-white">
                Lets you Explore the Best. Contact Us Now
              </h2>
              <p class="mb-4 lead text-white text-white-opacity">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Excepturi, fugit?
              </p>
              <p class="mb-0">
                <a
                  href="booking.html"
                  class="btn btn-outline-white text-white btn-md font-weight-bold"
                >
                  Get in touch
                </a>
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* Get In Touch 끝 */}
    </div>
  );
}

export default Services;
