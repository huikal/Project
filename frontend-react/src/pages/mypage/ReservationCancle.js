// 예약 취소 페이지

import React, { useEffect } from "react";

// 테마 js import
import initScripts from "../../assets/js/scripts";
import initCustom from "../../assets/js/custom";
function ReservationCancle() {
  // 화면 시작 이벤트 함수
  useEffect(() => {
    // 테마 js 실행
    initScripts();
    initCustom();
  });
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
    </div>
  );
}

export default ReservationCancle;
