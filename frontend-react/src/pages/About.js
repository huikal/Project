// About.js - 커뮤니티 페이지
// rfce
import React, { useEffect, useState } from "react";
import ReplyBoardDataService from "./../services/ReplyBoardDataService";
import Pagination from "@material-ui/lab/Pagination";

// 테마 js import
import initScripts from "../assets/js/scripts";
import initCustom from "../assets/js/custom";
import { Link } from "react-router-dom";
import LoginPassword from './registration/LoginPassword';

function About() {

  // 화면 시작 이벤트 함수
  useEffect(() => {
    // 테마 js 실행
    initScripts(); // Type 라이브러리 실행
    initCustom();
  });


  // 하트 카운팅
  function redhart() {
    var image = document.getElementById("img");
    var countElement = document.getElementById("hartCount");
    var count = parseInt(countElement.textContent);

    if (image.src.endsWith("red_hart.png")) {
      image.src = "../../images/white_hart.png";
      count--;
    } else {
      image.src = "../../images/red_hart.png";
      count++;
    }
    countElement.textContent = count;
  }
  // 하트 카운팅

  // 댓글작성
  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      createReviewOutput();
      clearInputBox();
      saveReply();
    }
  }

  function createReviewOutput() {
    var inputBox = document.getElementById("inputBox");
    var reviewOutput = document.querySelector(".review_output");

    var reviewText = inputBox.value;
    if (reviewText.trim() !== "") {
      var reviewDiv = document.createElement("div");
      reviewDiv.classList.add("review_output_text", "font");

      var profileImg = document.createElement("img");
      profileImg.src = reply.img;   // 댓글 프로필 불러오기
      profileImg.alt = "Profile Picture";
      profileImg.classList.add("img_propil");
      reviewDiv.appendChild(profileImg);

      var reviewTextSpan = document.createElement("span");
      reviewTextSpan.textContent = reviewText;
      reviewDiv.appendChild(reviewTextSpan);

      var deleteButton = document.createElement("span");
      deleteButton.textContent = "삭제"; // 댓글 삭제 버튼
      deleteButton.classList.add("delete_button");
      deleteButton.addEventListener("click", function () {
        reviewOutput.removeChild(reviewDiv);
      });
      reviewDiv.appendChild(deleteButton);

      reviewOutput.appendChild(reviewDiv);
    }
  }

  function clearInputBox() {
    var inputBox = document.getElementById("inputBox");
    inputBox.value = "";
  }
  // 댓글작성

  // 벡엔드 리뷰 폼 연동 반복문 함수
  const [searchSelect, setSearchSelect] = useState("boardTitle");
  const [searchKeyword, setSearchKeyword] = useState("");

  const [page, setPage] = useState(1);          // 현재 페이지
  const [count, setCount] = useState(0);        // 데이터 총개수
  const [pageSize, setPageSize] = useState(8);  // 1페이지에 보여줄 개수

  const pageSizes = [3, 6, 9];

  const onChangeSearchSelect = (e) => {
    setSearchSelect(e.target.value);
  };

  const onChangeSearchKeyword = (e) => {
    setSearchKeyword(e.target.value);
  };

  const retrieveReply = () => {
    ReplyBoardDataService.getAll(searchSelect, searchKeyword, page - 1, pageSize)
      .then((response) => {
        const { reply, totalPages } = response.data;

        setReply(reply);
        setCount(totalPages);

        console.log(response.data);
        console.log("reply", reply);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  // vue 의 생명주기 이벤트와 같다. 화면이 뜨자마자 실행되는 이벤트
  useEffect(retrieveReply, [page, pageSize]);

  const handlePageChange = (event, value) => {
    setPage(value); // 현재 페이지 변경
  };

  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
    setPage(1); // 현재 페이지
  };
  // 벡엔드 리뷰 폼 연동 반복문 함수



  // 페이지 반복문 함수
  const [currentPage, setCurrentPage] = useState(1);
  const pagelolSize = 1;
  const pagelolitems = pageSizes;
  const totalPages = Math.ceil(pagelolitems.length / pagelolSize);
  // 페이지 반복문 함수

  const initialReplyBoardState = {
    bid: null,
    boardTitle: "",
    // textarea:"", // 추가
    // currentDateDiv:"", // 추가
    // boardImg:"", // 추가
    // uProfile:"", //추가
    // selectBox:"", // 추가
    // boardCount:"", // 추가
    // boardName:"", //추가
    // selectEvaluation:"", //추가
    // inputBox:"", //추가
    boardContent: "",
    boardWriter: "",
    viewCnt: 0,
    boardGroup: null,
    boardParent: 0,
};
const [reply, setReply] = useState(initialReplyBoardState);
const [replyBoard, setReplyBoard] = useState([]);
const [searchBoardTitle, setSearchBoardTitle] = useState("");

const onChangeSearchBoardTitle = (e) => {
  const searchBoardTitle = e.target.value;
  setSearchBoardTitle(searchBoardTitle);
};

const retrieveReplyBoard = () => {
  ReplyBoardDataService.getAll(searchBoardTitle, page - 1, pageSize)
    .then((response) => {
      const { replyBoard, totalPages } = response.data;

      setReplyBoard(replyBoard);
      setCount(totalPages);

      console.log(response.data);
      console.log("replyBoard", replyBoard);
    })
    .catch((e) => {
      console.log(e);
    });
};
useEffect(retrieveReplyBoard, [page, pageSize]);

  // 댓글 저장 함수
  const saveReply = () => {
    var data = {
      boardTitle: reply.boardTitle,
      boardContent: reply.boardContent, // reply 는 본문만 넣기
      // textarea:reply.textarea, // 추가
      // currentDateDiv:reply.currentDateDiv, // 추가
      // boardImg:reply.boardImg, // 추가
      // uProfile:reply.uProfile, //추가
      // selectBox:reply.selectBox, // 추가
      // boardCount:reply.boardCount, // 추가
      // boardName:reply.boardName, //추가
      // selectEvaluation:reply.selectEvaluation, //추가
      // inputBox:reply.inputBox, //추가
      boardWriter: reply.boardWriter,
      viewCnt: 0,
      boardGroup: reply.bid, // 답변이 있는 부모 게시물 번호를 그룹 번호로 정함
      boardParent: reply.bid, // 부모 게시물 번호
    };

    ReplyBoardDataService.create(data)
      .then((response) => {
        alert("insert the reply sucessfully");
        retrieveReply();
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  // 댓글 저장 함수


  return (
    <div className="">
      <div class="bg">
        <p class="media-font">이지트립 프로모션 영상 HERE</p>
        <video muted autoplay loop>
          <source src="" type="video/mp4" />
        </video>
      </div>


      <br />

      {/* 리뷰쓰기 버튼, 인기순 박스 */}

      <div class="select_review">
        {/* 셀렉트박스 */}
        <div class="select_div">
          <select class="select_Box">
            <option value="option1">인기순</option>
            <option value="option2">댓글순</option>
            <option value="option4">커밍순</option>
          </select>
        </div>
        {/* 셀렉트박스 */}

        {/* 리뷰쓰기 버튼 */}
        <span class="review_creat_button_div"><p class="span_text">
          <Link to={"/creat"} class="font">  리뷰쓰기 + </Link> </p></span>
        {/* 리뷰쓰기 버튼 */}

      </div>
      {/* 리뷰쓰기 버튼, 인기순 박스 */}



      <br />

      {/* 리뷰전체 시작 */}
      <div className="height">

          {/* 리뷰 반복문 */}
          {replyBoard && replyBoard.map((data, index) => (
            <div key={index} class="review_all">

              {/* 리뷰 양식 폼 */}
              <div class="review_box" >
                <div class="image_text_input_box">

                  {/* <div class="image_box"> */}
                  {/* </div> */}

                  <div class="img_img">
                    <p class="hart_count font" id="hartCount">{data.boardCount}</p> 
                    <img src="../../images/white_hart.png" class="hart" id="img" onClick={redhart} ></img>
                    <div class="position review_nickname font">{data.boardName} 님</div>
                    <div class="position review_day_time font">{data.currentDateDiv}</div>
                     <img src={data.boardImg} class="image_box" />
                  </div>

                  <div >

                    <div class="div_reviewText"> {data.boardTitle}
                    </div>
                    <div class="div_reviewText_Big">
                      {data.textarea}
                    </div>
                    <div className="font select_review_top">
                      여행지 : {data.selectBox}
                    </div>
                  </div>

                </div>

                <div class="review_select">

                  <div class="review_select_box">
                    <div class="font review_select_1p">{data.selectEvaluation}</div>
                    <div class="font review_select_1p">{data.selectEvaluation}</div>
                    <div class="font review_select_1p">{data.selectEvaluation}</div>
                    <div class="font review_select_1p">{data.selectEvaluation}</div>

                    <div class="font review_select_1p">{data.selectEvaluation}</div>
                    <div class="font review_select_1p">{data.selectEvaluation}</div>
                    <div class="font review_select_1p">{data.selectEvaluation}</div>
                    <div class="font review_select_1p">{data.selectEvaluation}</div>
                  </div>

                  {/* 댓글 */}
                  <div>
                    <div class="review_output">
                    </div>

                    <div class="input_clickText">
                      {/* 입력후 엔터시 댓글 달기 */}
                      <input
                      type="text"
                      class="font review_input" 
                      id="inputBox"
                      placeholder={reply.inputBox}
                      disabled
                      name="inputBox"
                      onKeyDown={handleKeyDown}
                      ></input>
                      <h5 class="click_reviewText">▶</h5>
                    </div>
                  </div>
                  {/* 댓글 */}

                </div>
              </div>
              {/* 리뷰 양식 폼 */}

            </div>
          ))}
        {/* 리뷰 반복문 */}


        <select onChange={handlePageSizeChange} value={pageSize}>
            {pageSizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>

        {/* 페이지 반복문 */}
        <div>
          <Pagination
            className="pagination"
            count={count}
            page={page}
            siblingCount={1}
            boundaryCount={1}
            variant="outlined"
            shape="rounded"
            onChange={handlePageChange}
          />
        </div>
        {/* 페이지 반복문 */}
      </div>
      {/* 리뷰전체 끝 */}
    </div>
  );
}

export default About;
