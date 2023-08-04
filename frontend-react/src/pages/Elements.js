// Elements.js - 여행상품 프로모션 상세 페이지 (06/23 기준 여행상품에 Link 걸려있는 상태)
// rfce
import React, { useEffect } from "react";

// 테마 js import
import initScripts from "../assets/js/scripts";
import initCustom from "../assets/js/custom";

// 이미지 import
import Banner1 from "../assets/images/banner-1.png"

function Elements() {
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
                <p class="text-white">
                 {" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="spacer-product-promo"></div>

      <img src={Banner1} alt="이미지 테스트" width={"100%"}/>









{/* --------------------------------- 예제 파트 ----------------------------- */}
      <div class="untree_co-section">
        <div class="container my-5">
          <div class="mb-5">
            {/* 이미지 슬라이드 시작 */}
            {/* <div class="owl-single dots-absolute owl-carousel">
              <img
                src="images/slider-1.jpg"
                alt="Free HTML Template by Untree.co"
                class="img-fluid"
              />
              <img
                src="images/slider-2.jpg"
                alt="Free HTML Template by Untree.co"
                class="img-fluid"
              />
              <img
                src="images/slider-4.jpg"
                alt="Free HTML Template by Untree.co"
                class="img-fluid"
              />
            </div> */}
            {/* 이미지 슬라이드끝  */}
          </div>

          {/* 콘텐츠 시작 */}
          <div class="row justify-content-center">
            <div class="col-lg-4">
              {/* 아코디언 부분 시작 */}
              {/* <div class="custom-block" data-aos="fade-up">
                <h2 class="section-title">Accordion</h2>
                <div class="custom-accordion" id="accordion_1">
                  <div class="accordion-item">
                    <h2 class="mb-0">
                      <button
                        class="btn btn-link"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                      >
                        How to download and register?
                      </button>
                    </h2>

                    <div
                      id="collapseOne"
                      class="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordion_1"
                    >
                      <div class="accordion-body">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove right at
                        the coast of the Semantics, a large language ocean.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="mb-0">
                      <button
                        class="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                      >
                        How to create your paypal account?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      class="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordion_1"
                    >
                      <div class="accordion-body">
                        A small river named Duden flows by their place and
                        supplies it with the necessary regelialia. It is a
                        paradisematic country, in which roasted parts of
                        sentences fly into your mouth.
                      </div>
                    </div>
                  </div>
                  <div class="accordion-item">
                    <h2 class="mb-0">
                      <button
                        class="btn btn-link collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                      >
                        How to link your paypal and bank account?
                      </button>
                    </h2>

                    <div
                      id="collapseThree"
                      class="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordion_1"
                    >
                      <div class="accordion-body">
                        When she reached the first hills of the Italic
                        Mountains, she had a last view back on the skyline of
                        her hometown Bookmarksgrove, the headline of Alphabet
                        Village and the subline of her own road, the Line Lane.
                        Pityful a rethoric question ran over her cheek, then she
                        continued her way.
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
              {/* 아코디언 부분 끝 */}

              {/* <!-- 갤러리 부분 시작 --> */}
              {/* <div class="custom-block" data-aos="fade-up">
                <h2 class="section-title">Gallery</h2>
                <div class="row gutter-v2 gallery">
                  <div class="col-4">
                    <a
                      href="images/gal_1.jpg"
                      class="gal-item"
                      data-fancybox="gal"
                    >
                      <img
                        src="images/gal_1.jpg"
                        alt="Image"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                  <div class="col-4">
                    <a
                      href="images/gal_2.jpg"
                      class="gal-item"
                      data-fancybox="gal"
                    >
                      <img
                        src="images/gal_2.jpg"
                        alt="Image"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                  <div class="col-4">
                    <a
                      href="images/gal_3.jpg"
                      class="gal-item"
                      data-fancybox="gal"
                    >
                      <img
                        src="images/gal_3.jpg"
                        alt="Image"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                  <div class="col-4">
                    <a
                      href="images/gal_4.jpg"
                      class="gal-item"
                      data-fancybox="gal"
                    >
                      <img
                        src="images/gal_4.jpg"
                        alt="Image"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                  <div class="col-4">
                    <a
                      href="images/gal_5.jpg"
                      class="gal-item"
                      data-fancybox="gal"
                    >
                      <img
                        src="images/gal_5.jpg"
                        alt="Image"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                  <div class="col-4">
                    <a
                      href="images/gal_6.jpg"
                      class="gal-item"
                      data-fancybox="gal"
                    >
                      <img
                        src="images/gal_6.jpg"
                        alt="Image"
                        class="img-fluid"
                      />
                    </a>
                  </div>
                </div>
              </div> */}
              {/* <!-- 갤러리 부분 시작 --> */}

              {/* 비디오 부분 시작 */}
              {/* <div class="custom-block" data-aos="fade-up">
                <h2 class="section-title">Video</h2>

                <a
                  href="https://vimeo.com/342333493"
                  data-fancybox
                  class="video-wrap"
                >
                  <span class="play-wrap">
                    <span class="icon-play"></span>
                  </span>
                  <img
                    src="images/bg_1.jpg"
                    alt="Image"
                    class="img-fluid rounded"
                  />
                </a>
              </div> */}
              {/* 비디오 부분 시작 */}
            </div>

            {/* Form 양식 시작 */}
            {/* <div class="col-lg-4">
              <div class="custom-block" data-aos="fade-up" data-aos-delay="100">
                <h2 class="section-title">Form</h2>
                <form class="contact-form bg-white">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="text-black" for="fname">
                          First name
                        </label>
                        <input type="text" class="form-control" id="fname" />
                      </div>
                    </div>
                    <div class="col-md-6">
                      <div class="form-group">
                        <label class="text-black" for="lname">
                          Last name
                        </label>
                        <input type="text" class="form-control" id="lname" />
                      </div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label class="text-black" for="email">
                      Email address
                    </label>
                    <input
                      type="email"
                      class="form-control"
                      id="email"
                      aria-describedby="emailHelp"
                    />
                    <small id="emailHelp" class="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small>
                  </div>
                  <div class="form-group">
                    <label class="text-black" for="password">
                      Password
                    </label>
                    <input type="password" class="form-control" id="password" />
                  </div>
                  <div class="form-group">
                    <label class="text-black" for="message">
                      Message
                    </label>
                    <textarea
                      name=""
                      class="form-control"
                      id="message"
                      cols="30"
                      rows="5"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label class="text-black" for="select">
                      Select
                    </label>

                    <select name="" id="select" class="custom-select">
                      <option value="">Untree.co</option>
                      <option value="">
                        Offers high quality free template
                      </option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label class="control control--checkbox">
                      <span class="caption">Custom checkbox</span>
                      <input type="checkbox" checked="checked" />
                      <div class="control__indicator"></div>
                    </label>
                  </div>
                  <button type="submit" class="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>

              <div class="custom-block" data-aos="fade-up">
                <h2 class="section-title">Social Icons</h2>
                <ul class="list-unstyled social-icons light">
                  <li>
                    <a href="#">
                      <span class="icon-facebook"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon-twitter"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon-linkedin"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon-google"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span class="icon-play"></span>
                    </a>
                  </li>
                </ul>
              </div>

              <div class="custom-block" data-aos="fade-up" data-aos-delay="100">
                <div class="text-center">
                  <h2 class="section-title text-center">Slider</h2>
                </div>
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
                        &ldquo;There live the blind texts. Separated they live
                        in Bookmarksgrove right at the coast of the Semantics, a
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
                        &ldquo;There live the blind texts. Separated they live
                        in Bookmarksgrove right at the coast of the Semantics, a
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
                        &ldquo;There live the blind texts. Separated they live
                        in Bookmarksgrove right at the coast of the Semantics, a
                        large language ocean.&rdquo;
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div> */}
            {/* Form 양식 끝 */}
          </div>
          {/* 콘텐츠 끝 */}

          {/* Our Team 시작 */}
          {/* <div class="row justify-content-center mt-5 section">
            <div class="col-lg-10">
              <div class="row mb-5">
                <div class="col text-center">
                  <h2 class="section-title text-center">Our Team</h2>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-3 mb-4">
                  <div class="team">
                    <img
                      src="images/person_1.jpg"
                      alt="Image"
                      class="img-fluid mb-4"
                    />
                    <div class="px-3">
                      <h3 class="mb-0">James Watson</h3>
                      <p>Co-Founder &amp; CEO</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 mb-4">
                  <div class="team">
                    <img
                      src="images/person_2.jpg"
                      alt="Image"
                      class="img-fluid mb-4"
                    />
                    <div class="px-3">
                      <h3 class="mb-0">Carl Anderson</h3>
                      <p>Co-Founder &amp; CEO</p>
                    </div>
                  </div>
                </div>

                <div class="col-lg-3 mb-4">
                  <div class="team">
                    <img
                      src="images/person_4.jpg"
                      alt="Image"
                      class="img-fluid mb-4"
                    />
                    <div class="px-3">
                      <h3 class="mb-0">Michelle Allison</h3>
                      <p>Co-Founder &amp; CEO</p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 mb-4">
                  <div class="team">
                    <img
                      src="images/person_3.jpg"
                      alt="Image"
                      class="img-fluid mb-4"
                    />
                    <div class="px-3">
                      <h3 class="mb-0">Drew Wood</h3>
                      <p>Co-Founder &amp; CEO</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* Our Team 끝 */}
        </div>
      </div>

      {/* Get in Touch 시작 */}
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
      {/* Get in Touch 끝 */}
    </div>
  );
}

export default Elements;
