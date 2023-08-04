// NavCom.js - 최상단 Navbar 파트
// rfce
// TODO: 로그인 관련
import React, { useEffect, useState, useCallback  } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";

// 메뉴 라이브러리 import
import LogoColor from "../../assets/images/easytrip-logo-color.png";

// TODO: 로그인 시작
// 공유저장소를 위한 import
import { useDispatch, useSelector } from "react-redux";
// 액션함수를 위한 import
import { logout } from "../../store/actions/auth";
import { clearMessage } from "../../store/actions/message";
// TODO: 로그인 끝

function NavCom() {
  // 검색 옵션
  const [selectedOption, setSelectedOption] = useState("tour");
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSearchKeywordChange = (e) => {
    setSearchKeyword(e.target.value);
  };

  const handleSearch = () => {
    // 선택한 옵션에 따라 다른 결과를 처리하는 로직입니다.
    switch (selectedOption) {
      case "dept":
        // 검색어를 쿼리 매개변수로 사용하여 DEPTLIST 페이지로 이동합니다. <=1번 방법, 본 페이지에서 이동 실행.
        // navigate(`/dept?search=${searchKeyword}`);
        navigate(`/dept/${searchKeyword}`);
        break;
      case "employee":
        // EMPLOYEE 옵션에 대한 로직입니다. <=2번 방법, 함수화된 이동 실행.
        navigate(`/emp/${searchKeyword}`);
        break;
      case "faq":
        // FAQ 옵션에 대한 로직입니다.
        navigate(`/faq/${searchKeyword}`);
        break;
      case "tour":
        // FAQ 옵션에 대한 로직입니다.
        navigate(`/tours/${searchKeyword}`);
        break;
      default:
        break;
    }
  };

  // 최상단 이동 버튼 변수/함수 정의
  const [ScrollY, setScrollY] = useState(0);
  const [BtnStatus, setBtnStatus] = useState(false); // 버튼 상태
  const handleFollow = () => {
    setScrollY(window.pageYOffset);
    if (ScrollY > 100) {
      // 100 이상이면 버튼이 보이게
      setBtnStatus(true);
    } else {
      // 100 이하면 버튼이 사라지게
      setBtnStatus(false);
    }
  };

  const handleTop = () => {
    // 클릭하면 스크롤이 위로 올라가는 함수
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setScrollY(0); // ScrollY 의 값을 초기화
    setBtnStatus(false); // BtnStatus의 값을 false로 바꿈 => 버튼 숨김
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener("scroll", handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener("scroll", handleFollow);
    };
  });

  // TODO: 로그인 시작
  // 변수 정의
  // showAdminBoard = true 이면 어드민 메뉴 보이게 하고,
  // 아니면 (false) 안보이게 하는 변수
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  // 공유저장소의 user 객체 정보 가져오기
  // currentUser = 공유저장소user(현재 로그인한 유저)
  const { user: currentUser } = useSelector((state) => state.auth);
  // 공유저장소의 액션함수를 실행하기 위한 함수 정의
  const dispatch = useDispatch();

  // 현재 페이지의 url 정보를 가져오는 훅함수
  let location = useLocation();

  // 화면 시작 이벤트 함수
  // dispatch, location 변경여부 감시해서 변경되면 재실행
  useEffect(() => {
    // 현재 url 정보 : location.pathname
    // 현재 url 정보가 /login, /register 이면
    // 화면에 에러메시지를 지우기 실행
    if (["/login", "/register"].includes(location.pathname)) {
      dispatch(clearMessage()); // clear message when changing location
    }
  }, [dispatch, location]);

  // 로그아웃 함수 : 공유저장소의 액션함수(logout()) 호출
  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  // 화면 시작하면 실행되는 이벤트 함수
  // currentUser, logOut 변경여부 감시 재실행
  useEffect(() => {
    // currentUser(로그인한 유저)
    if (currentUser) {
      // ROLE_ADMIN 권한 있는지 체크해서 있으면
      // showAdminBoard = true 저장
      setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      // ROLE_ADMIN 권한 없으면, false 저장
      setShowAdminBoard(false);
    }
  }, [currentUser, logOut]);
  // TODO: 로그인 끝

  return (
    <div>
      <div class="site-mobile-menu site-navbar-target">
        <div class="site-mobile-menu-header">
          <div class="site-mobile-menu-close">
            <span class="icofont-close js-menu-toggle"></span>
          </div>
        </div>
        <div class="site-mobile-menu-body"></div>
      </div>

      <nav class="site-nav">
        {/* <div class="container"> */}
        <div class="site-navigation">
          {/* <Link to={"/"} class="logo m-0">
              EASY TRIP <span class="text-primary">.</span>
            </Link> */}

          {/* nav 좌측 : PRODUCT, MAGAZINE, COMMUNITY 시작 */}
          <ul class="js-clone-nav d-none d-lg-inline-block text-left site-menu float-left gap">
            {/* 드롭다운 메뉴 시작 */}
            <li class="has-children">
              {/* 대메뉴 */}
              <a href="#">여행상품</a>
              {/* 중메뉴 시작 */}
              <ul class="dropdown">
                <li>
                  <Link to={"/accommodation"}>숙박</Link>
                </li>
                <li>
                  <Link to={"/transport"}>교통</Link>
                </li>
                <li>
                  <Link to={"/activity"}>액티비티</Link>
                </li>
              </ul>
              {/* 중메뉴 끝 */}
            </li>
            {/* 드롭다운 메뉴 끝 */}
            <span class="gap"></span>
            <li>
              <Link to={"/services"}>MAGAZINE</Link>
            </li>
            <span class="gap"></span>
            <li>
              <Link to={"/about"}>COMMUNITY</Link>
            </li>
          </ul>
          {/* nav 좌측 : PRODUCT, MAGAZINE, COMMUNITY 끝 */}

          <span class="gap"></span>

          {/* 로고(홈버튼) 시작 */}
          <ul class="js-clone-nav d-none d-lg-inline-block text-left site-menu">
            <Link to={"/"} class="logo">
              {/* LOGO */}
              <img src={LogoColor} alt="이미지 테스트" width={"120px"} />
            </Link>
          </ul>
          {/* 로고(홈버튼) 끝 */}

          <span class="gap"></span>

          {/* nav 우측 : 검색창, 로그인 시작 */}
          <ul class="js-clone-nav d-none d-lg-inline-block text-left site-menu float-right ">
            {/* 검색창 폼 시작 */}
            <li class="search-select-container">
              <li>
                <select
                  class="search-select"
                  value={selectedOption}
                  onChange={handleOptionChange}
                >
                  <option value="tour">여행상품</option>
                  <option value="employee">MAGAZINE</option>
                  <option value="faq">COMMUNITY</option>
                </select>
              </li>
              <span class="gap-small"></span>
              <li>
                <form class="d-flex">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="검색어를 입력하세요"
                    aria-label="Search"
                    value={searchKeyword}
                    onChange={handleSearchKeywordChange}
                  />
                  <button
                    class="btn-search"
                    type="submit"
                    onClick={handleSearch}
                  >
                    GO
                  </button>
                </form>
              </li>
            </li>
            {/* 검색창 폼 끝 */}

            <span class="gap"></span>

            {/* 로그인 버튼 시작 */}
            {/* <li>
              <Link to={"/myAccount"}>LOGIN</Link>
            </li> */}
            {/* 로그인 버튼 끝 */}
            {/* 로그인 시작 */}
            {/* showAdminBoard 이 true 이면 admin 메뉴가 보이고 */}
            {/* 아니면 안보임(ROLE_ADMIN 있으면) */}
            {showAdminBoard && (
              <li>
                {/* <Link to={"/myAccount"} className="nav-link">
                  관리자
                </Link> */}
              </li>
            )}
            {/* <!-- menu #7 끝 --> */}

            {/* <!-- 비로그인시 시작 --> */}
            {/* currentUser(로그인한 유저)가 없으면 */}
            {/* /register 와 /login 메뉴를 보여주고 */}
            {!currentUser && (
              <li>
                <Link to={"/contact"} className="nav-link">
                  LOGIN
                </Link>
              </li>
            )}
            {/* <!-- 비로그인시 끝 --> */}

            {/* <!-- 일반회원 로그인 시작 --> */}
            {/* currentUser(로그인한 유저)가 있으면 */}
            {/* /profile 와 /LogOut 메뉴를 보여주고 */}
            {currentUser && (
              <li>
                <Link to={"/myAccount"} className="nav-link">
                  {currentUser.fullname}
                </Link>

                <Link to={"/"} className="nav-link" onClick={logOut}>
                  LOGOUT
                </Link>
              </li>
            )}
            {/* <!-- 일반회원 로그인 끝 --> */}
            {/* 로그인 끝 */}

            <span class="gap"></span>
          </ul>

          {/* nav 좌측 : 검색창, 로그인 끝 */}

          <a
            href="#"
            class="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
            data-toggle="collapse"
            data-target="#main-navbar"
          >
            <span></span>
          </a>
        </div>
        {/* </div> */}
      </nav>

      {/* 최상단 이동 버튼 시작 */}
      <button
        className={BtnStatus ? "topBtn active" : "topBtn"} // 버튼 노출 여부
        onClick={handleTop} // 버튼 클릭시 함수 호출
      >
        UP
      </button>
      {/* 최상단 이동 버튼 끝 */}
    </div>
  );
}

export default NavCom;
