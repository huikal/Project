import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../assets/css/product/Product.css";

// 테마 js import
import initScripts from "../assets/js/scripts";
import initCustom from "../assets/js/custom";

// 통신 라이브러리(CRUD)

function Cart() {
  // 화면 시작 이벤트 함수
  useEffect(() => {
    // 테마 js 실행
    initScripts();
    initCustom();
  }, []);

  // 변수 정의
  const [countAdult, setCountAdult] = useState(1);
  const [countKid, setCountKid] = useState(0);
  const [countItems, setCountItems] = useState(0);

  // 빈 입력양식을 저장할 객체(결제 -> 내 예약)
  const initialCustomerState = {
    cid: null,
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  // 벡엔드에서 전송된 객체를 저장할 고객객체변수(to 예약)
  const [customer, setCustomer] = useState(initialCustomerState);
  // 저장버튼클릭여부를 저장할 변수(클릭(true), 안하면(false))(to 예약)
  const [submitted, setSubmitted] = useState(false);

  // 저장함수(to 예약)
  const saveCustomer = () => {
    // 임시 고객 객체
    var data = {
      firstName: customer.firstName,
      lastName: customer.lastName,
      email: customer.email,
      phone: customer.phone,
    };

    // 새로운 고객정보를 벡엔드에 저장 요청(to 예약)
    CustomerDataService.create(data)
      .then((response) => {
        // 성공 : response.data(벡엔드에서 전송한 데이터)
        // 벡엔드에 전송한 객체를 customer 저장
        setCustomer({
          cid: response.data.cid,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          phone: response.data.phone,
        });
        // submitted = true 로 변경(저장버튼 클릭했음)
        setSubmitted(true);
        // 콘솔 로그 출력
        console.log(response.data);
      })
      .catch((e) => {
        // 실패
        console.log(e);
      });
  };

  // Add 버튼 클릭하면 실행되는 함수(예약 추가)
  const newCustomer = () => {
    setCustomer(initialCustomerState); // 고객 변수 초기화
    setSubmitted(false); // submitted 변수 초기화
  };

  // TODO: 벡엔드에서 전송한 tour객체배열을 저장할 변수
  const [tour, setTour] = useState([]);
  // TODO: 연동할 때 반복문에 tourList를 tour로 바꾸기!!
  const [tourList, setTourList] = useState([
    { tid: 1, tname: "Shirt", price: 1000000, countAdult: 1, countKid: 0 },
    { tid: 2, tname: "Pants", price: 2000, countAdult: 1, countKid: 0 },
    { tid: 3, tname: "Shoes", price: 3000 },
    { tid: 4, tname: "hat", price: 4000 },
  ]);
  // TODO: 끝

  // count onclick 이벤트 함수
  // 어른 count
  const onIncreaseA = () => {
    setCountAdult((prevCountAdult) => prevCountAdult + 1);
  };

  const onDecreaseA = () => {
    setCountAdult((prevCountAdult) => prevCountAdult - 1);
  };

  // 아동 count
  const onIncreaseK = () => {
    setCountKid((prevCountKid) => prevCountKid + 1);
  };

  const onDecreaseK = () => {
    setCountKid((prevCountKid) => prevCountKid - 1);
  };

  const countAlert = () => {};

  // 수동 바인딩 : 화면값 변경 -> 변수값도 같이 변경하는 코딩
  const handleInputChange = (event) => {
    const { name, value } = event.target; // 화면값
    // 변수에 값을 저장
    // setUpload({ ...upload, [name]: value });
  };

  // onClickEvent
  const onClickEvent = () => {
    // 선택된 목록 가져오기
    const query = 'input[value="cartItem"]:checked';
    const selectedElements = document.querySelectorAll(query);

    // 선택된 목록의 갯수 세기
    setCountItems(selectedElements.length);
  };

  // 체크박스
  // 체크박스 시작
  const [checkedListById, setCheckedListById] = useState([]);
  const numChecked = checkedListById.length;

  const handleOnChange = (id) => {
    const isChecked = checkedListById.includes(id);

    if (isChecked) {
      setCheckedListById((prev) => prev.filter((el) => el !== id));
      console.log(id);
    } else {
      setCheckedListById((prev) => [...prev, id]);
      console.log(id);
    }
  };

  const toggleAllCheckedById = ({ target: { checked } }) => {
    // 전체 선택 클릭
    if (checked) {
      // tourList : 반복할 배열 명
      setCheckedListById(tourList.map((tour) => tour.tid));
      console.log("전체선택");
      // 전체 선택 해체
    } else {
      setCheckedListById([]);
      console.log("전체해체");
    }
  };
  // 체크박스 끝

  // 삭제(검토 필요)
  const removeItemFromCart = (index) => {
    const updatedTour = [...tourList];
    updatedTour.splice(index, 1);
    setTour(updatedTour);
  };

  // 합계
  const sumPrice = (tour) => {
    let sum = 0;
    for (const tour of tourList) {
      if (checkedListById.includes(tour.tid)) sum += tour.price;
    }
    return sum;
  };

  // TODO: 결제관련 시작
  function onClickPayment() {
    const { IMP } = window;
    IMP.init("imp76037483"); // 발급받은 가맹점 식별코드를 사용합니다.

    const data = {
      pg: "html5_inicis", // PG사
      pay_method: "card", // 결제수단
      merchant_uid: `mid_${new Date().getTime()}`, // 주문번호
      amount: 100, // 결제금액
      name: "아임포트 결제 데이터 분석", // 주문명
      buyer_name: "홍길동", // 구매자 이름
      buyer_tel: "01012341234", // 구매자 전화번호
      buyer_email: "example@example", // 구매자 이메일
      buyer_addr: "신사동 661-16", // 구매자 주소
      buyer_postcode: "06018", // 구매자 우편번호
      // m_redirect_url: "http://localhost:3000",    // 결제 완료 후 페이지 이동
    };
    /* 4. 결제 창 호출하기 */
    IMP.request_pay(data, callback);
  }
  /* 3. 콜백 함수 정의하기 */
  function callback(response) {
    const { success, merchant_uid, error_msg } = response;

    if (success) {
      alert("결제 성공");
      // saveCustomer();
      window.location.href="http://localhost:3000/"; // 결제 성공 후 이동할 페이지
    } else {
      alert(`결제 실패: ${error_msg}`);
      window.location.href="http://localhost:3000/"; // 성공
    }
  }
  // TODO: 결제관련 끝

  return (
    <div>
      {/* 상단바 시작 */}
      <div className="hero hero-inner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mx-auto text-center">
              <div className="intro-wrap">
                <h1 className="mb-0"></h1>
                <p className="text-white"> </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* 상단바 끝 */}

      <div className="hero-spacer-cart"></div>

      <div className="sider_review">
        {/* 좌측 사이드메뉴 시작 */}
        <div className="sidebar">
          <div className="sidebar-menu">
            <Link to={"/myAccount"}>
              <p>회원정보</p>
            </Link>
          </div>
          <div className="sidebar-menu">
            <Link to={"/cart"}>
              <p className="selected">장바구니</p>
            </Link>
          </div>
          <div className="sidebar-menu">
            <Link to={"/reservation"}>
              <p>내 예약</p>
            </Link>
          </div>
          <div className="sidebar-menu">
            <Link to={"/my-review"}>
              <p>내 리뷰</p>
            </Link>
          </div>
        </div>
        {/* 좌측 사이드메뉴 끝 */}

        <div className="bgCart">
          {/* 장바구니 목록 페이지 시작 */}
          <div className="cartList">
            <div>
              {/* 전체 선택 버튼 시작 */}
              <div className="align mb-2">
                <input
                  // className="mb-3 mt-2"
                  className="form-check-input"
                  type="checkbox"
                  // onClick={toggleAllCheckedById}
                  onChange={toggleAllCheckedById}
                  checked={numChecked === tourList.length}
                />
                전체 선택
              </div>
              {/* 전체 선택 버튼 끝 */}

              {/* 상품 목록 머리말 시작 */}
              <div className="d-flex flex-row mb-2 pb-2 empText2">
                <div className="col-md-4"></div>
                <div className="d-inline col-md-11">상품 정보</div>
                <div className="d-inline col-md-4">상품 금액</div>
              </div>
              {/* 상품 목록 머리말 끝 */}

            </div>
            {/* 장바구니 목록_1 시작 */}
            {tourList &&
              tourList?.map((data) => (
                <div className="d-flex flex-row">
                  {/* 체크 박스 시작 */}
                  <div className="form-check align" key={data.tid}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      onChange={() => handleOnChange(data.tid)}
                      checked={checkedListById.includes(data.tid)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor={`learner_check_checkbox ${data.tid}`}
                    >
                      <img
                        src="https://via.placeholder.com/150x150"
                        className="rounded float-start"
                        alt="..."
                      />
                    </label>
                  </div>
                  {/* 체크 박스 끝 */}

                  <div className="d-flex flex-column mb-4 col-md-12">
                    {/* 상품명 시작 */}
                    <div className="cartBox">
                      <span>{data.tname}</span>
                    </div>
                    {/* 상품명 끝 */}

                    {/* 인원수 시작 */}
                    <div className="d-flex flex-row mt-2">
                      <div className="cartBox d-inline col-md-3">성인</div>
                      <div className="cartBox d-inline col-md-3">
                        <span className="empText">{countAdult}</span> 명
                        {/* <span className="empText">{data.countAdult}</span> 명 */}
                      </div>

                      <div className="cartBox d-inline col-md-3">아동</div>
                      <div className="cartBox d-inline col-md-3">
                        <span className="empText">{countKid}</span> 명
                        {/* <span className="empText">{data.countKid}</span> 명 */}
                      </div>
                    </div>
                  {/* 인원수 끝 */}
                  </div>

                  {/* 상품 가격 시작 */}
                  <div className="empText w-100 col-md-4 mt-5">
                    {`${data.price.toLocaleString("ko-KR")}원`}
                  </div>
                  {/* 상품 가격 끝 */}

                  {/* 수정/삭제 버튼 시작 */}
                  <div className="d-flex flex-column aligBox">
                    <button
                      type="button"
                      className="modifyBtn m-1"
                      data-bs-toggle="modal"
                      data-bs-target="#updateModal"
                    >
                      수정
                    </button>
                    {/* <!-- Modal --> */}
                    <div
                      className="modal fade"
                      id="updateModal"
                      tabIndex="-1"
                      aria-labelledby="exampleModalLabel"
                      aria-hidden="true"
                    >
                      <div className="modal-dialog">
                        <div className="modal-content">
                          <div className="modal-header">
                            <p
                              className="modal-title fs-5"
                              id="exampleModalLabel"
                            >
                              수정하기
                            </p>
                            <button
                              type="button"
                              className="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div className="modal-body">
                            {/* 인원수 선택 시작 */}
                            <div className="container text-center">
                              <table className="table table-borderless tableLine">
                                <tr>
                                  <th scope="row" className="col-md-3">
                                    인원수
                                  </th>
                                  <th>성인</th>
                                  <td className="col-md-4">
                                    <span className="empText">
                                      {data.countAdult}
                                    </span>{" "}
                                    명
                                  </td>
                                  {/* +버튼 시작 */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-plus-lg countBtn"
                                    viewBox="0 0 16 16"
                                    type="button"
                                    onClick={onIncreaseA}
                                    onChange={handleInputChange}
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                                    />
                                  </svg>
                                  {/* +버튼 끝 */}

                                  {/* -버튼 시작 */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-dash-lg countBtn"
                                    viewBox="0 0 16 16"
                                    type="button"
                                    onClick={
                                      countAdult > 1 ? onDecreaseA : countAlert
                                    }
                                    onChange={handleInputChange}
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                                    />
                                  </svg>
                                  {/* -버튼 끝 */}
                                </tr>
                                <tr>
                                  <th scope="row" className="col-md-3">
                                    인원수
                                  </th>
                                  <th>아동</th>
                                  <td className="col-md-4">
                                    <span className="empText">
                                      {data.countKid}
                                    </span>{" "}
                                    명
                                  </td>

                                  {/* +버튼 시작 */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-plus-lg countBtn"
                                    viewBox="0 0 16 16"
                                    type="button"
                                    onClick={onIncreaseK}
                                    onChange={handleInputChange}
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                                    />
                                  </svg>
                                  {/* +버튼 끝 */}

                                  {/* -버튼 시작 */}
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="currentColor"
                                    className="bi bi-dash-lg countBtn"
                                    viewBox="0 0 16 16"
                                    type="button"
                                    onClick={
                                      countKid > 0 ? onDecreaseK : countAlert
                                    }
                                    onChange={handleInputChange}
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"
                                    />
                                  </svg>
                                  {/* -버튼 끝 */}
                                </tr>
                              </table>
                            </div>
                            {/* 인원수 선택 끝 */}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* 약관 끝 */}
                    <button
                      type="button"
                      className="deleteBtn m-1"
                      onClick={removeItemFromCart}
                    >
                      삭제
                    </button>
                  </div>
                  {/* 수정/삭제 버튼 끝 */}
                </div>
              ))}

            {/* 장바구니 목록_1 끝 */}

            {/* 총 결제 개수 / 총 결제 금액 시작 */}
            <div className="payBox">
              {/* 총 결제 개수 시작 */}
              <div className="d-inline-block">
                <div className="d-flex d-inline-block">
                  <div className="p-2 priceBox">
                    <div>
                      총{" "}
                      <span className="empText">
                        {numChecked ? `${numChecked}` : "0"}
                      </span>
                      개 상품 선택
                    </div>
                  </div>
                  {/* 총 결제 개수 끝 */}

                  {/* 총 결제 금액 시작 */}
                  <div className="p-2 priceBox">
                    <div className="d-inline col-md-3">결제 예상 금액</div>
                    <div className="d-inline col-md-3">
                      <span className="empText">
                        {sumPrice().toLocaleString("ko-KR")}
                      </span>
                      원
                    </div>
                  </div>
                  {/* 총  결제 금액 끝 */}
                </div>
              </div>
              {/* 총 결제 개수 / 총 결제 금액 끝 */}

              {/* 결제 버튼 시작 */}
              <div>
                <button
                  type="button"
                  className="detailBtn cartBtn"
                  onClick={onClickPayment}
                >
                  선택 상품 결제
                </button>
                <button
                  type="button"
                  className="detailBtn payBtn"
                  onClick={onClickPayment}
                >
                  전체 상품 결제
                </button>
              </div>
              {/* 결제 버튼 끝 */}
            </div>
          </div>
          {/* 장바구니 목록 페이지 끝 */}
        </div>
      </div>
    </div>
  );
}

export default Cart;
