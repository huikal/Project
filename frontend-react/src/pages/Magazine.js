// 매거진 상세 페이지
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import CustomerDataService from '../services/CustomerDataService';


import LogoColor from "../assets/images/easytrip-logo-color.png";
import Mag01 from "../assets/images/mag/mag01.png";

function Magazine() {
   // 전체목록 페이지에서 전달한 부서번호를 가져오기 함수 실행
 const { cid }= useParams();
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
  const getCustomer = cid => {
    // 벡엔드로 상세조회요청(cid(부서번호))
    CustomerDataService.get(cid)
      .then(response => {
        // 성공
        // 벡엔드 전송 데이터 : response.data
        // 벡엔드 전송 데이터를 currentCustomer 변수에 저장
        setCurrentCustomer(response.data);
        // 콘솔 로그 출력
        console.log(response.data);
      })
      .catch(e => {
        // 실패
        console.log(e);
      });
  };

    // 화면이 뜨자마자 실행되는 이벤트 함수
  // 추가기능 : cid 값이 변경되면 다시 함수가 실행됨
  useEffect(() => {
    // cid(부서번호) 있으면 상세조회요청(getCustomer(cid))
    if (cid)
      getCustomer(cid);
  }, [cid]);


  // 수동 바인딩 : 화면값 변경 -> 변수도 변경 코딩
  const handleInputChange = event => {
    const { name, value } = event.target; // 화면값
    // 변수에 저장
    setCurrentCustomer({ ...currentCustomer, [name]: value });
  };
  return (
    <div class="magazine-bg">
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

      <div class="magazine-article">
        <div class="magazine-title">아티클 제목 HERE{currentCustomer.firstName}</div>
        <div class="magazine-upload-date">
          게시일 | {currentCustomer.lastName}
        </div>
        <div class="magazine-body">{currentCustomer.email}
        <img src={Mag01} alt="이미지 테스트"  />
        </div>
      </div>
    </div>
  );
}

export default Magazine;
