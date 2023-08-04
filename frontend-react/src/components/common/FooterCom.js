// FooterCom.js - 최하단 푸터 파트
// rfce
import React from "react";
import { Link } from "react-router-dom";


function FooterCom() {
  // <scrip> 태그 부분 -> 리액트 함수로 전환
  // function currentDate() {
  //   return new Date().getFullYear();
  // }

  return (
    <div>
      <div class="site-footer">
        <div class="inner first">
          <div class="footer-spacer">
            <div class="row">
              <div class="col-md-3 col-lg-3 ">
                <div class="widget">
                  <h3 class="heading">사업자 정보</h3>
                  <p>
                    ㈜이지트립 | 대표 XXX
                    <br />
                    사업자 등록번호 XXX-XX-XXXXX
                    <br />
                    통신판매업 신고번호 2023-서울강남-XXXXX
                    <br />
                    서울특별시 강남구 삼성로 XXX XXX빌딩 X층
                  </p>
                </div>
                {/* <div class="widget">
                  <ul class="list-unstyled social">
                    <li>
                      <a href="#">
                        <span class="icon-twitter"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon-instagram"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon-facebook"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon-linkedin"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon-dribbble"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon-pinterest"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon-apple"></span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="icon-google"></span>
                      </a>
                    </li>
                  </ul>
                </div> */}
              </div>
              <div class="col-md-3 col-lg-2">
                <div class="widget">
                  <h3 class="heading">고객센터</h3>
                  <ul class="list-unstyled quick-info links">
                    <li class="">
                      <a href="#">mail@example.com</a>
                    </li>
                    <li class="">
                      <a href="#">국내 XXXX-XXXX</a>
                    </li>
                    <li class="">
                      <p>
                        오전 9시 - 오후 6시 (한국시간 기준, 연중무휴)
                        <br />
                        단, 항공문의는 주말/공휴일 제외
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-md-6 col-lg-2 pl-lg-5">
                <div class="widget">
                  <h3 class="heading">
                  <Link to={"/servicePolicy"}>서비스 이용 약관</Link>
                  </h3>
                  {/* <ul class="links list-unstyled">
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul> */}
                </div>
              </div>
              <div class="col-md-6 col-lg-2  pl-lg-0
              
              ">
                <div class="widget">
                  <h3 class="heading">
                  <Link to={"/dataPolicy"}>개인정보 처리방침</Link>
                  </h3>
                  {/* <ul class="links list-unstyled">
                    <li>
                      <a href="#">Blog</a>
                    </li>
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                  </ul> */}
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* <div class="inner dark">
          <div class="container">
            <div class="row">
              <div class="col-md-3 col-lg-12 footer-copyright">
                <p>
                  Copyright &copy;{currentDate()}. All Rights Reserved. &mdash;
                  Designed with love by{" "}
                  <a href="https://untree.co" class="link-highlight">
                    Untree.co
                  </a>{" "}
                  Distributed By{" "}
                  <a href="https://themewagon.com" target="_blank">
                    ThemeWagon
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      <div id="overlayer"></div>
      {/* <div class="loader">
        <div class="spinner-border" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div> */}
    </div>
  );
}

export default FooterCom;
