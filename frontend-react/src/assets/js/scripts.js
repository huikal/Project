// scripts.js
//   react 이동 : 파일(js) scripts.js

/* eslint-disable */
export default function initScripts() {
  $(function () {
    // .typed-words 클래스값이 있을때만
    // Type 라이브러리 실행하세요
    if (document.querySelector(".typed-words")) {
      var slides = $(".slides"),
        images = slides.find("img");

      images.each(function (i) {
        $(this).attr("data-id", i + 1);
      });

      // Typed 라이브러리 사용(실행)
      var typed = new Typed(".typed-words", {
        strings: [
          "San Francisco.",
          " Paris.",
          " New Zealand.",
          " Maui.",
          " London.",
        ],
        typeSpeed: 80,
        backSpeed: 80,
        backDelay: 4000,
        startDelay: 1000,
        loop: true,
        showCursor: true,
        preStringTyped: (arrayPos, self) => {
          arrayPos++;
          console.log(arrayPos);
          $(".slides img").removeClass("active");
          $('.slides img[data-id="' + arrayPos + '"]').addClass("active");
        },
      });
    }
  });
}
