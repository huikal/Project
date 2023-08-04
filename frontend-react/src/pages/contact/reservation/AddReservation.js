// AddReservation.js
// rfce
import React, { useState, useEffect } from "react";

// 테마 js import
import initScripts from "../../../assets/js/scripts";
import initCustom from "../../../assets/js/custom";
// 벡엔드 연동 js 파일 import
import ReservationDataService from "../../../services/ReservationDataService";

function AddReservation() {
  // 변수 정의
  // 객체 초기화 정의
  const initialReservationState = {
    rid: null,
    email: "",
    firstName: "",
    lastName: "",
    sights: "Destination",
    startDate: "",
    endDate: "",
    address: "",
    phone: "",
  };
  // 벡엔드에서 전송된 객체배열을 저장할 변수
  const [reservation, setReservation] = useState(initialReservationState);
  // 저장버튼 클릭시(true) 상태를 저장할 변수
  const [submitted, setSubmitted] = useState(false);

  // 날짜 라이브러리를 위한 변수
  // htnl 태그 직접접근을 위한 ref 변수
  let daterangeRef = React.createRef();

  // 셀렉트 박스의 목록 : 관광지 목록
  const sightsValue = [
    "Peru",
    "Japan",
    "Thailand",
    "Brazil",
    "United States",
    "Israel",
    "China",
    "Russia",
  ];

  // 함수 정의
  // 화면 시작 이벤트 함수
  useEffect(() => {
    initScripts(); 
    initCustom();
  }, []);

  // 수동 바인딩 : 화면값 변경 -> 변수값도 변경 코딩
  const handleInputChange = (event) => {
    const { name, value } = event.target; // 화면값
    // 변수값 수정 저장
    setReservation({ ...reservation, [name]: value });
  };

  // 예약 저장 함수
  const saveReservation = () => {
    // 시작날짜 / 종료날짜 문자열 자르기
    // ref 접근 : ref변수명.current.value (값)
    let daterange = daterangeRef.current.value;

    console.log("daterange", daterange);
    let dateArr = daterange.split("-");
    // alert(dateArr)
    reservation.startDate = dateArr[0]; // 시작날짜
    reservation.endDate = dateArr[1];   // 종료날짜

    // 저장할 예약 임시 객체
    var data = {
      email: reservation.email,
      firstName: reservation.firstName,
      lastName: reservation.lastName,
      sights: reservation.sights,
      startDate: reservation.startDate,
      endDate: reservation.endDate,
      address: reservation.address,
      phone: reservation.phone,
    };

    console.log("data : ", data);

    // 새로운 예약 정보를 벡엔드로 저장 요청
    ReservationDataService.create(data)
      .then((response) => {
        // 성공
        // 벡엔드 전송된 데이터를 reservation 객체에 저장
        setReservation({
          rid: response.data.rid,
          email: response.data.email,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          sights: response.data.sights,
          startDate: response.data.startDate,
          endDate: response.data.endDate,
          address: response.data.address,
          phone: response.data.phone,
        });
        // 저장버튼 눌림 상태 : true
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        // 에러
        console.log(e);
      });
  };

  // 새로운 예약 정보 추가
  // Add 버튼 클릭시 실행되는 함수
  const newReservation = () => {
    // 바닐라 자바스크립트 : window.location.replace(이동url)
    // react useLocation(이동url) 비슷
    window.location.replace("/add-reservation");
    // setReservation(initialReservationState);
    // setSubmitted(false);
  };

  return (
    <div>
      <div>
        <div className="hero hero-inner">
          <div className="container" data-aos="fade-left" data-aos-delay="200">
            <div className="row align-items-center">
              <div className="col-lg-6 mx-auto text-center">
                <div className="intro-wrap">
                  <h1 className="mb-0">Reservation</h1>
                  <p className="text-white">
                    예약은 여기서 확인할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="untree_co-section">
          <div className="container" data-aos="fade-left" data-aos-delay="200">
            <div className="row">
              <div className="col-lg-6 mx-auto">
                {/* <!-- TODO:  --> */}
                <div className="submit-form">
                  {submitted ? (
                    <div>
                      <h4>You submitted successfully!</h4>
                      <button
                        className="btn btn-success"
                        onClick={newReservation}
                      >
                        Add
                      </button>
                    </div>
                  ) : (
                    <div>
                      {/* <!-- <form> --> */}
                      <div className="form-group">
                        <label htmlFor="sights">sights</label>
                        <select
                          className="form-control"
                          required
                          value={reservation.sights}
                          onChange={handleInputChange}
                          name="sights"
                        >
                          {sightsValue.map((sights) => (
                            <option key={sights} value={sights}>
                              {sights}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group">
                        <label htmlFor="daterange">daterange</label>
                        <input
                          type="text"
                          className="form-control"
                          required
                          id="daterange"
                          name="daterange"
                          ref={daterangeRef}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="email">email</label>
                        <input
                          type="text"
                          className="form-control"
                          id="email"
                          required
                          value={reservation.email}
                          onChange={handleInputChange}
                          name="email"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="firstName">firstName</label>
                        <input
                          className="form-control"
                          id="firstName"
                          required
                          value={reservation.firstName}
                          onChange={handleInputChange}
                          name="firstName"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="lastName">lastName</label>
                        <input
                          className="form-control"
                          id="lastName"
                          required
                          value={reservation.lastName}
                          onChange={handleInputChange}
                          name="lastName"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="address">address</label>
                        <input
                          className="form-control"
                          id="address"
                          required
                          value={reservation.address}
                          onChange={handleInputChange}
                          name="address"
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="phone">phone</label>
                        <input
                          className="form-control"
                          id="phone"
                          required
                          value={reservation.phone}
                          onChange={handleInputChange}
                          name="phone"
                        />
                      </div>

                      <div className="text-center">
                        <button
                          onClick={saveReservation}
                          className="btn btn-primary"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddReservation;
