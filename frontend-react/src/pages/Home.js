// Home.js - 홈페이지 (로고 버튼)
// rfce
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// 메뉴 라이브러리 import
import { Link } from "react-router-dom";

// 통신 함수(CRUD) - 매거진 뷰어용
import CustomerDataService from "../services/CustomerDataService";
import ReservationDataService from "../services/ReservationDataService";

// 테마 js import
import initScripts from "../assets/js/scripts";
import initCustom from "../assets/js/custom";

// 이미지 import
import LogoColor from "../assets/images/easytrip-logo-color.png";
import LogoMono from "../assets/images/easytrip-logo-mono.png";
import Arrow from "../assets/images/arrow-black.png";
import Banner1 from "../assets/images/banner-1.png";
import Banner2 from "../assets/images/banner-2.png";
import LoopBanner from "../assets/images/loopBanner.gif";
import ThumbMag01 from "../assets/images/mag/thumb-mag-01.jpg";
import ThumbMag02 from "../assets/images/mag/thumb-mag-02.jpg";
import ThumbMag03 from "../assets/images/mag/thumb-mag-03.jpg";
import ThumbMag04 from "../assets/images/mag/thumb-mag-04.jpg";
import BrandStoryLeft from "../assets/images/brand-story-left.png";
import BrandStoryRight from "../assets/images/brand-story-right.png";

function Home() {
  // 변수 정의
  const [email, setEmail] = useState("");

  // 함수 정의
  // nfn
  // 수동 바인딩 함수
  const onChangeEmail = (event) => {
    // 화면값 -> 변수값 저장
    setEmail(event.target.value);
  };

  // 화면 시작 이벤트 함수 : 화면 뜰때 1번만 실행함
  useEffect(() => {
    // 테마 js 실행
    initScripts();
    initCustom();
  }, []);

  // 인덱스 검색 변수/함수 정의
  const [tagOne, setTagOne] = useState("tag1");
  const [tagSecond, seTagSecond] = useState("tag2");
  const onChangeTagOne = (e) => {
    setTagOne(e.target.value);
  };
  const onChangeTagSecond = (e) => {
    seTagSecond(e.target.value);
  };

  // 매거진 뷰어용 아이템 정보 불러오기
  // 전체목록 페이지에서 전달한 부서번호를 가져오기 함수 실행
  const { cid } = useParams();

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

  // 캐러셀 함수
  useEffect(() => {
    // 캐러셀 정의 : jQuery
    // jQuery 선택자 : $(css선택자)
    $(".owl-carousel").owlCarousel({
      // 옵션
      autoplay: true, // 자동으로 이미지가 돌아가게함
      smartSpeed: 1000, // 이미지 변경될때 변경 속도
      nav: true, // 메뉴
      items: 1, // 화면에 이미지가 표시될 개수
      loop: true, // 마지막 도달했을대 처음으로 돌아가는지 여부
    });
  }, []);

  return (
    <div>
      {/* <div class="hero hero-inner">
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
      </div> */}

      {/* 상단 프로모션 비디오 시작 */}
      <div class="bg">
        <p class="media-font">이지트립 프로모션 영상 HERE</p>
        <video muted autoplay loop>
          <source src="" type="video/mp4" />
        </video>
      </div>
      {/* 상단 프로모션 비디오 끝 */}

      {/* 인터미션 그래픽 시작 */}
      <div class="dummySpace">
        <img src={LoopBanner} />
      </div>
      {/* 인터미션 그래픽 끝 */}

      {/* index 검색 파트 시작 */}
      <div class="menu-searchIndex">
        <ul className="menu-searchIndex-container">
          <p class="index-text-sm">지금, 어떤 여행을 떠나고 싶나요?</p>

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

      {/* 첫방문 가이드(firstVisit) 콘텐츠 시작 */}
      <div class="firstVisit-guide">
        <p class="firstVisit-text">
          이지트립이 처음이라면, 이렇게 시작해보세요
        </p>
        <div class="guide">
          <p class="firstVisit-text">
            요즘은 다들 어디로 여행가지? 생생한 여행 리뷰와 소소한 꿀팁까지!
          </p>
          <div class="guide1-contents"></div>
          <Link to={"/about"}>
            <div class="btn-guide">COMMUNITY 보러가기</div>
          </Link>
        </div>
        <div class="guide">
          <p class="firstVisit-text">
            우선 신상품부터 둘러볼까? 새로운 여행상품에 할인 이벤트 진행중!
          </p>
          <div class="guide2-contents"></div>
          <Link to={"/elements"}>
            <div class="btn-guide">여행상품 보러가기</div>
          </Link>
        </div>
      </div>
      {/* 첫방문 가이드(firstVisit) 콘텐츠 끝 */}

      <div class="spacer"></div>

      {/* 매거진 뷰어 시작 */}
      <div class="home-magazin">
        <div class="home-magazine-text-top">
          <div class="title">여행, 알고 가면 더 EASY하니까</div>
          <div class="btn-more">
            <Link to={"/services"}>
              <img src={Arrow} alt="이미지 테스트" class="btn-arrow" />
            </Link>
          </div>
          <div class="bodytext">
            이지트립이 준비한 여행 매거진에서 국내여행에 대한 다양한 콘텐츠를
            확인해보세요
          </div>
        </div>

        {/* 매거진 뷰어 카드 시작 */}
        <div class="home-magazine-contents">
          {/* 매거진 뷰어 카드1 시작 */}
          <div class="magazine-card">
            <div class="magazine-card-thumbnail">
              <img
                src={ThumbMag01}
                alt="이미지 테스트"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div class="magazine-card-text">
              <Link to={"/magazine/" + 1}>
                <h5>양양 바닷가를 따라 걷다</h5>
                <h6>양양 여행, 바닷바람을 만끽할 수 있는 크레킹 코스</h6>
              </Link>
            </div>
          </div>
          {/* 매거진 뷰어 카드1 끝 */}

          {/* 매거진 뷰어 카드2 시작 */}
          <div class="magazine-card">
            <div class="magazine-card-thumbnail">
              <img
                src={ThumbMag02}
                alt="이미지 테스트"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div class="magazine-card-text">
              <Link to={"/magazine/" + 2}>
                <h5>한국의 '작은 유럽' 정읍</h5>
                <h6>라벤더 정원과 스위스 마을을 품은 정읍 여행기</h6>
              </Link>
            </div>
          </div>
          {/* 매거진 뷰어 카드2 끝 */}

          {/* 매거진 뷰어 카드3 시작 */}
          <div class="magazine-card">
            <div class="magazine-card-thumbnail">
              <img
                src={ThumbMag03}
                alt="이미지 테스트"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div class="magazine-card-text">
              <Link to={"/magazine/" + 3}>
                <h5>&lt;더글로리&gt;, &lt;도깨비&gt; 속 강릉</h5>
                <h6>김은숙 작가가 사랑한 강릉의 아름다운 바다</h6>
              </Link>
            </div>
          </div>
          {/* 매거진 뷰어 카드3 끝 */}

          {/* 매거진 뷰어 카드4 시작 */}
          <div class="magazine-card">
            <div class="magazine-card-thumbnail">
              <img
                src={ThumbMag04}
                alt="이미지 테스트"
                width={"100%"}
                height={"100%"}
              />
            </div>
            <div class="magazine-card-text">
              <Link to={"/magazine/" + 4}>
                <h5>대세는 ZERO! 디저트 카페 5</h5>
                <h6>열량은 줄이고 맛은 올린 서울 디저트카페 탐방기</h6>
              </Link>
            </div>
          </div>
          {/* 매거진 뷰어 카드4 끝 */}
        </div>
        {/* 매거진 뷰어 카드 끝 */}
      </div>
      {/* 매거진 뷰어 끝 */}

      <div class="spacer"></div>

      {/* 프로모션 뷰어 시작 */}
      <div class="home-magazin">
        <div class="home-magazine-text-top">
          <div class="title">혜택도 EASY하게, 역대급 프로모션</div>
          <div class="btn-more">
            <Link to={"/elements"}>
              <img src={Arrow} alt="이미지 테스트" class="btn-arrow" />
            </Link>
          </div>
          <div class="bodytext">
            매월 새롭게 업데이트되는 이지트립만의 시원~한 할인 혜택과 제휴사
            이벤트를 지금 확인해보세요
          </div>
        </div>

        {/* 프로모션 뷰어 캐러셀 시작 */}
        {/*  캐러셀 이미지 시작 */}
        <div className="owl-carousel testimonial-carousel-long">
          {/* 1st 이미지 시작 */}
          <div className="mb-5">
            {/* 이미지 넣기(리액트) : require("이미지경로") */}
            <img
              className="img-fluid p-2 mx-auto"
              src={require("../assets/images/banner-1.png")}
            />
          </div>
          {/* 1st 이미지 끝 */}

          {/* 2nd 이미지 시작 */}
          <div className="mb-5">
            {/* 이미지 넣기(리액트) : require("이미지경로") */}
            <img
              className="img-fluid p-2 mx-auto"
              src={require("../assets/images/banner-2.png")}
            />
          </div>
          {/* 2nd 이미지 끝 */}

          {/* 캐러셀 이미지 끝 */}
        </div>
        {/* 캐러셀 이미지 끝 */}
        {/* 프로모션 뷰어 캐러셀 끝 */}
      </div>
      {/* 프로모션 뷰어 끝 */}

      <div class="spacer"></div>

      {/* About Us 시작 */}
      <div class="brand-story">
        <div class="story-image-left">
          <img src={BrandStoryLeft} height={"100%"} width={"100%"} />
        </div>
        <div class="story-text">
          <p class="story-title">About Us:</p>
          <p class="story-body">
            죽기 전 떠오르는 기억 중 하나가 여행이 될 만큼, 여행은 인생에서 잊지
            못할 추억을 만들어줘요. 하지만, 자주 여행을 떠나기엔 현실적인
            어려움들이 있죠. 시간과 돈을 마련해야하고, 목적지로 가는 과정과 목적지에 대한 정보도
            찾아야 하니까요. 만약 이러한 제약들에 대한 고민이 줄어들고, 우리
            모두가 매일 여행하듯 살 수 있다면 얼마나 행복할까요?
            <br/>
            <br/>
            이지트립은 <span class="story-body-bold">떠나기 전부터 쉬운 여행</span>이라는 비전 아래,
            여행자님의 여행 준비가 쉽고 재밌는 시간이 될 수 있도록
            여행에 필요한 모든 상품을 큐레이팅하고 있어요. 하지만 그 중에서도 각 여행자마다 꼭
            필요로 하는 것만을 구매할 수 있도록 상품을 구성하죠.
            <br/>
            국내 여행에 대한 양질의 정보가 담긴 다양한 콘텐츠와 여행이라는 추억을 나누는
            커뮤니티를 경험한다면, 여행자님은 여행의 매력을 더 잘 알게 될거예요.
            <br/>
            <br/>
            여행은 훌륭한 경험이지만, 생각보다 멀리 있지 않을지도 몰라요.
            이지트립과 함께 국내여행을 여행자님의 일상으로 만들어보세요!
          </p>
        </div>
        <div class="story-image-right">
          <img src={BrandStoryRight} height={"100%"} width={"100%"} />
        </div>
        ``
      </div>
      {/* About Us 끝 */}

      {/* -------------------------------예제 파트------------------------------ */}

      {/* 인트로 서치 폼 양식 시작 */}
      {/* <div class="intro-wrap"> */}
      {/* <h1 class="mb-5">
                  <span class="d-block">Let's Enjoy Your</span> Trip In{" "}
                  <span class="typed-words"></span>
                </h1> */}

      {/* <div class="row">
                  <div class="col-12">
                    <form class="form">
                      <div class="row mb-2"> */}
      {/* 셀렉트 박스 시작 */}
      {/* <div class="col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-4">
                          <select
                            name=""
                            id=""
                            class="form-control custom-select"
                          >
                            <option value="">Destination</option>
                            <option value="">Peru</option>
                            <option value="">Japan</option>
                            <option value="">Thailand</option>
                            <option value="">Brazil</option>
                            <option value="">United States</option>
                            <option value="">Israel</option>
                            <option value="">China</option>
                            <option value="">Russia</option>
                          </select>
                        </div> */}
      {/* 셀렉트 박스 끝 */}

      {/* 날짜 박스 시작 */}
      {/* <div class="col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-5">
                          <input
                            type="text"
                            class="form-control"
                            name="daterange"
                          />
                        </div> */}
      {/* 날짜 박스 끝 */}
      {/* 이메일 검색 시작 */}
      {/* <div class="col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-3">
                          <input
                            type="text"
                            class="form-control"
                            placeholder="# of email"
                            value={email}
                            onChange={onChangeEmail}
                          />
                        </div> */}
      {/* 이메일 검색 끝 */}
      {/* </div>
                      <div class="row align-items-center"> */}
      {/*  */}
      {/* <div class="col-sm-12 col-md-6 mb-3 mb-lg-0 col-lg-4"> */}
      {/* search 버튼 시작 */}
      {/* <Link
                            className="btn btn-primary btn-block"
                            to={"/reservation/" + email}
                          >
                            Search
                          </Link> */}
      {/* search 버튼 끝 */}
      {/* </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div> */}
      {/* 인트로 서치 폼 양식 끝 */}

      {/* Our Services 시작 */}
      {/* <div class="untree_co-section">
        <div class="container">
          <div class="row mb-5 justify-content-center">
            <div class="col-lg-12 text-center">
              <h2 class="section-title text-center mb-3">Our Services</h2>
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
      {/* Our Services 끝 */}

      {/* Count Info 시작 */}
      {/* <div class="untree_co-section count-numbers py-5">
        <div class="container">
          <div class="row">
            <div class="col-6 col-sm-6 col-md-6 col-lg-3">
              <div class="counter-wrap">
                <div class="counter">
                  <span class="" data-number="9313">
                    0
                  </span>
                </div>
                <span class="caption">No. of Travels</span>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-6 col-lg-3">
              <div class="counter-wrap">
                <div class="counter">
                  <span class="" data-number="8492">
                    0
                  </span>
                </div>
                <span class="caption">No. of Clients</span>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-6 col-lg-3">
              <div class="counter-wrap">
                <div class="counter">
                  <span class="" data-number="100">
                    0
                  </span>
                </div>
                <span class="caption">No. of Employees</span>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-6 col-lg-3">
              <div class="counter-wrap">
                <div class="counter">
                  <span class="" data-number="120">
                    0
                  </span>
                </div>
                <span class="caption">No. of Countries</span>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Count Info 끝 */}

      {/* Popular Destination 시작 */}
      {/* <div class="untree_co-section">
        <div class="container">
          <div class="row text-center justify-content-center mb-5">
            <div class="col-lg-7">
              <h2 class="section-title text-center">Popular Destination</h2>
            </div>
          </div>

          <div class="owl-carousel owl-3-slider">
            <div class="item">
              <a
                class="media-thumb"
                href="images/hero-slider-1.jpg"
                data-fancybox="gallery"
              >
                <div class="media-text">
                  <h3>Pragser Wildsee</h3>
                  <span class="location">Italy</span>
                </div>
                <img
                  src="images/hero-slider-1.jpg"
                  alt="Image"
                  class="img-fluid"
                />
              </a>
            </div>

            <div class="item">
              <a
                class="media-thumb"
                href="images/hero-slider-2.jpg"
                data-fancybox="gallery"
              >
                <div class="media-text">
                  <h3>Oia</h3>
                  <span class="location">Greece</span>
                </div>
                <img
                  src="images/hero-slider-2.jpg"
                  alt="Image"
                  class="img-fluid"
                />
              </a>
            </div>

            <div class="item">
              <a
                class="media-thumb"
                href="images/hero-slider-3.jpg"
                data-fancybox="gallery"
              >
                <div class="media-text">
                  <h3>Perhentian Islands</h3>
                  <span class="location">Malaysia</span>
                </div>
                <img
                  src="images/hero-slider-3.jpg"
                  alt="Image"
                  class="img-fluid"
                />
              </a>
            </div>

            <div class="item">
              <a
                class="media-thumb"
                href="images/hero-slider-4.jpg"
                data-fancybox="gallery"
              >
                <div class="media-text">
                  <h3>Rialto Bridge</h3>
                  <span class="location">Italy</span>
                </div>
                <img
                  src="images/hero-slider-4.jpg"
                  alt="Image"
                  class="img-fluid"
                />
              </a>
            </div>

            <div class="item">
              <a
                class="media-thumb"
                href="images/hero-slider-5.jpg"
                data-fancybox="gallery"
              >
                <div class="media-text">
                  <h3>San Francisco, United States</h3>
                  <span class="location">United States</span>
                </div>
                <img
                  src="images/hero-slider-5.jpg"
                  alt="Image"
                  class="img-fluid"
                />
              </a>
            </div>

            <div class="item">
              <a
                class="media-thumb"
                href="images/hero-slider-1.jpg"
                data-fancybox="gallery"
              >
                <div class="media-text">
                  <h3>Lake Thun</h3>
                  <span class="location">Switzerland</span>
                </div>
                <img
                  src="images/hero-slider-2.jpg"
                  alt="Image"
                  class="img-fluid"
                />
              </a>
            </div>
          </div>
        </div>
      </div> */}
      {/* Popular Destination 끝 */}

      {/* Testimonials 시작 */}
      {/* <div class="untree_co-section testimonial-section mt-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-7 text-center">
              <h2 class="section-title text-center mb-5">Testimonials</h2>
              <div class="owl-single owl-carousel no-nav">
                <div class="testimonial mx-auto">
                  <figure class="img-wrap">
                    <img
                      src="images/person_2.jpg"
                      alt="Image"
                      class="img-fluid"
                    />
                  </figure>
                  <h3 class="name">Adam Aderson</h3>
                  <blockquote>
                    <p>
                      &ldquo;There live the blind texts. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.&rdquo;
                    </p>
                  </blockquote>
                </div>

                <div class="testimonial mx-auto">
                  <figure class="img-wrap">
                    <img
                      src="images/person_3.jpg"
                      alt="Image"
                      class="img-fluid"
                    />
                  </figure>
                  <h3 class="name">Lukas Devlin</h3>
                  <blockquote>
                    <p>
                      &ldquo;There live the blind texts. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.&rdquo;
                    </p>
                  </blockquote>
                </div>

                <div class="testimonial mx-auto">
                  <figure class="img-wrap">
                    <img
                      src="images/person_4.jpg"
                      alt="Image"
                      class="img-fluid"
                    />
                  </figure>
                  <h3 class="name">Kayla Bryant</h3>
                  <blockquote>
                    <p>
                      &ldquo;There live the blind texts. Separated they live in
                      Bookmarksgrove right at the coast of the Semantics, a
                      large language ocean.&rdquo;
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Testimonials 끝 */}

      {/* Special Offers & Discounts 시작 */}
      {/* <div class="untree_co-section">
        <div class="container">
          <div class="row justify-content-center text-center mb-5">
            <div class="col-lg-6">
              <h2 class="section-title text-center mb-3">
                Special Offers &amp; Discounts
              </h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
              <div class="media-1">
                <a href="#" class="d-block mb-3">
                  <img
                    src="images/hero-slider-1.jpg"
                    alt="Image"
                    class="img-fluid"
                  />
                </a>
                <span class="d-flex align-items-center loc mb-2">
                  <span class="icon-room mr-3"></span>
                  <span>Italy</span>
                </span>
                <div class="d-flex align-items-center">
                  <div>
                    <h3>
                      <a href="#">Rialto Mountains</a>
                    </h3>
                    <div class="price ml-auto">
                      <span>$520.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
              <div class="media-1">
                <a href="#" class="d-block mb-3">
                  <img
                    src="images/hero-slider-2.jpg"
                    alt="Image"
                    class="img-fluid"
                  />
                </a>
                <span class="d-flex align-items-center loc mb-2">
                  <span class="icon-room mr-3"></span>
                  <span>United States</span>
                </span>
                <div class="d-flex align-items-center">
                  <div>
                    <h3>
                      <a href="#">San Francisco</a>
                    </h3>
                    <div class="price ml-auto">
                      <span>$520.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
              <div class="media-1">
                <a href="#" class="d-block mb-3">
                  <img
                    src="images/hero-slider-3.jpg"
                    alt="Image"
                    class="img-fluid"
                  />
                </a>
                <span class="d-flex align-items-center loc mb-2">
                  <span class="icon-room mr-3"></span>
                  <span>Malaysia</span>
                </span>
                <div class="d-flex align-items-center">
                  <div>
                    <h3>
                      <a href="#">Perhentian Islands</a>
                    </h3>
                    <div class="price ml-auto">
                      <span>$750.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-6 col-sm-6 col-md-6 col-lg-3 mb-4 mb-lg-0">
              <div class="media-1">
                <a href="#" class="d-block mb-3">
                  <img
                    src="images/hero-slider-4.jpg"
                    alt="Image"
                    class="img-fluid"
                  />
                </a>

                <span class="d-flex align-items-center loc mb-2">
                  <span class="icon-room mr-3"></span>
                  <span>Switzerland</span>
                </span>

                <div class="d-flex align-items-center">
                  <div>
                    <h3>
                      <a href="#">Lake Thun</a>
                    </h3>
                    <div class="price ml-auto">
                      <span>$520.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* Special Offers & Discounts 끝 */}

      {/* 에펠탑 영상 시작 */}
      {/* <div class="untree_co-section">
        <div class="container">
          <div class="row justify-content-between align-items-center">
            <div class="col-lg-6">
              <figure class="img-play-video">
                <a
                  id="play-video"
                  class="video-play-button"
                  href="https://www.youtube.com/watch?v=mwtbEGNABWU"
                  data-fancybox
                >
                  <span></span>
                </a>
                <img
                  src="images/hero-slider-2.jpg"
                  alt="Image"
                  class="img-fluid rounded-20"
                />
              </figure>
            </div>

            <div class="col-lg-5">
              <h2 class="section-title text-left mb-4">
                Take a look at Tour Video
              </h2>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean.
              </p>

              <p class="mb-4">
                A small river named Duden flows by their place and supplies it
                with the necessary regelialia. It is a paradisematic country, in
                which roasted parts of sentences fly into your mouth.
              </p>

              <ul class="list-unstyled two-col clearfix">
                <li>Outdoor recreation activities</li>
                <li>Airlines</li>
                <li>Car Rentals</li>
                <li>Cruise Lines</li>
                <li>Hotels</li>
                <li>Railways</li>
                <li>Travel Insurance</li>
                <li>Package Tours</li>
                <li>Insurance</li>
                <li>Guide Books</li>
              </ul>

              <p>
                <a href="#" class="btn btn-primary">
                  Get Started
                </a>
              </p>
            </div>
          </div>
        </div>
      </div> */}
      {/* 에펠탑 영상 끝 */}

      {/* GEt in touch 시작 */}
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
      {/* GEt in touch 끝 */}
    </div>
  );
}

export default Home;
