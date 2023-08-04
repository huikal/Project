import React, { useEffect, useState } from "react";
import ReplyBoardDataService from "../../services/ReplyBoardDataService";

// 테마 js import
import initScripts from "../../assets/js/scripts";
import initCustom from "../../assets/js/custom";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Pagination } from "@material-ui/lab";

function MyReview() {
  const [replyBoard, setReplyBoard] = useState([]);
  const [searchBoardTitle, setSearchBoardTitle] = useState("");

  // 리뷰 삭제
  // 리플라이 보드 (리뷰 폼 생성)
  const initialReplyState = {
    bid: null,
    boardTitle: "",
    // textarea:"", // 추가
    // currentDateDiv:"", // 추가
    // boardImg:"", // 추가
    // uProfile:"", //추가
    // selectBox:"", // 추가
    // boardCount:"", seParams// 추가
    // boardName:"", //추가
    // selectEvaluation:"", //추가
    // inputBox:"", //추가
    boardContent: "",
    boardWriter: "",
    viewCnt: 0,
    boardGroup: null,
    boardParent: 0,
  };
  const { bid, boardParent } = useParams();
  let navigate = useNavigate();

  // 화면 시작 이벤트 함수
  useEffect(() => {
    // 테마 js 실행
    initScripts();
    initCustom();
  });
  // 데이터 불러오기
  // const [reservation, setReservation] = useState([]);
  // const [currentData, setCurrentData] = useState(null);
  // const [currentIndex, setCurrentIndex] = useState(-1);

  // const setActive = (data, index) => {
  //     setCurrentData(data);
  //     setCurrentIndex(index);
  // };

  // 하트 카운팅 및 댓글 작성
  // 하트 카운팅
  function redhart() {
    var image = document.getElementById("img");
    var countElement = document.getElementById("hartCount");
    var count = parseInt(countElement.textContent);

    if (image.src.endsWith("red_hart.png")) {
      image.src = "../../../images/white_hart.png";
      count--;
    } else {
      image.src = "../../../images/red_hart.png";
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
      profileImg.src = reply.img; // 댓글 프로필
      profileImg.alt = "Profile Picture";
      profileImg.classList.add("img_propil");
      reviewDiv.appendChild(profileImg);

      var reviewTextSpan = document.createElement("span");
      reviewTextSpan.textContent = reviewText;
      reviewDiv.appendChild(reviewTextSpan);

      var deleteButton = document.createElement("span");
      deleteButton.textContent = "댓글삭제"; // 삭제 버튼
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
  // 하트 카운팅 및 댓글 작성

  // 벡엔드 리뷰 폼 연동 반복문 함수
  const [reply, setReply] = useState(initialReplyState);
  const [searchSelect, setSearchSelect] = useState("boardTitle");
  const [searchKeyword, setSearchKeyword] = useState("");

  const [page, setPage] = useState(1); // 현재 페이지
  const [count, setCount] = useState(0); // 데이터 총개수
  const [pageSize, setPageSize] = useState(6); // 1페이지에 보여줄 개수

  const pageSizes = [3, 6, 9];

  const onChangeSearchSelect = (e) => {
    setSearchSelect(e.target.value);
  };
  const onChangeSearchKeyword = (e) => {
    setSearchKeyword(e.target.value);
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
  const handlePageChange = (event, value) => {
    setPage(value); // 현재 페이지 변경
  };

  const handlePageSizeChange = (event) => {
    setPageSize(event.target.value);
    setPage(1); // 현재 페이지
  };
  // 벡엔드 리뷰 폼 연동 반복문 함수

  // 페이지 반복문 함수
  // const [currentPage, setCurrentPage] = useState(1);
  // const pagelolSize = 1;
  // const pagelolitems = pageSizes;
  // const totalPages = Math.ceil(pagelolitems.length / pagelolSize);

  // const handlepagelolSizeChange = (sizes) => {
  // setCurrentPage(1);
  // };
  // const handlePreviousPage = () => {
  //     if (currentPage > 1) {
  //         setCurrentPage(currentPage - 1);
  //     }
  // };
  // const handleNextPage = () => {
  //     if (currentPage < totalPages) {
  //         setCurrentPage(currentPage + 1);
  //     }
  // };
  // 페이지 반복문 함수

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
        retrieveReplyBoard();
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  // 댓글 저장 함수

  // 게시물만 삭제
  // const [currentReplyBoard, setCurrentReplyBoard] = useState(
  //     initialReplyState
  // );

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setReply({ ...reply, [name]: value });
  };

  const newReply = (data) => {
    // setReply(data);
    setReply({ ...data, boardContent: "" });
    // reply 버튼 클릭시 답변 입력창 보이기 : true
    setReplyClicked(true);
  };

  useEffect(retrieveReplyBoard, [page, pageSize]);

  return (
    <div class="myaccount-container">
      {/* 화면 상단 고정 바 시작 */}
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
      {/* 화면 상단 고정 바 끝 */}

      <div class="sider_review">
        {/* 좌측 사이드메뉴 시작 */}
        <div class="sidebar">
          <div class="sidebar-menu">
            <Link to={"/myAccount"}>
              <p>회원정보</p>
            </Link>
          </div>
          <div class="sidebar-menu">
            <Link to={"/"}>
              <p>장바구니</p>
            </Link>
          </div>
          <div class="sidebar-menu">
            <Link to={"/myReservation"}>
              <p>내 예약</p>
            </Link>
          </div>
          <div class="sidebar-menu">
            <Link to={"/my-review"}>
              <p class="selected">내 리뷰</p>
            </Link>
          </div>
        </div>
        {/* 좌측 사이드메뉴 끝 */}

        <div class="my_Review_page">
          <div class="my_Review_Box">
            {/* page control start */}
            <div className="mt-3">
              {"Items per Page: "}
              <select onChange={handlePageSizeChange} value={pageSize}>
                {pageSizes.map((size) => (
                  <option key={size} value={size}>
                    {size}
                  </option>
                ))}
              </select>
            </div>
            <div class="my_Review_select_div my_review_creat_button_div">
              {/* 리뷰쓰기 버튼 */}
              <p class="span_text">
                <Link to={"/creat"} class="font">
                  {" "}
                  리뷰쓰기 +{" "}
                </Link>{" "}
              </p>
              {/* 리뷰쓰기 버튼 */}
            </div>

            <div className="my_Review_Box_small">
              {/* 리뷰 반복문 */}
              <tbody>
                {replyBoard &&
                  replyBoard.map((data, index) => (
                    <div key={index} class="review_box_size_cc">
                      {/* 리뷰 양식 폼 */}
                      <div class="review_box">
                        <div class="image_text_input_box">
                          <div class="img_img">
                            <p class="hart_count font" id="hartCount">
                              {data.boardCount}
                            </p>
                            <img
                              src="../../images/white_hart.png"
                              class="hart"
                              id="img"
                              onClick={redhart}
                            ></img>
                            <Link
                              to={
                                "/my-reivew/" +
                                data.bid +
                                "/" +
                                data.boardParent
                              }
                              class="cc_position line"
                            >
                              <span class="font review_select_cc">
                                수정 및 삭제
                              </span>
                            </Link>

                            <div class="position review_nickname font">
                              {data.boardName} 님
                            </div>
                            <div class="position review_day_time font">
                              {data.currentDateDiv}
                            </div>
                            <img src={data.boardImg} class="image_box" />
                          </div>

                          <div>
                            <div class="div_reviewText"> {data.boardTitle}</div>
                            <div class="div_reviewText_Big">
                              {data.boardContent}
                            </div>
                            <div className="font select_review_top">
                              여행지 : {data.selectBox}
                            </div>
                          </div>
                        </div>

                        <div class="review_select">
                          <div class="review_select_box">
                            <div class="font review_select_1p">
                              {data.selectEvaluation}
                            </div>
                            <div class="font review_select_1p">
                              {data.selectEvaluation}
                            </div>
                            <div class="font review_select_1p">
                              {data.selectEvaluation}
                            </div>
                            <div class="font review_select_1p">
                              {data.selectEvaluation}
                            </div>

                            <div class="font review_select_1p">
                              {data.selectEvaluation}
                            </div>
                            <div class="font review_select_1p">
                              {data.selectEvaluation}
                            </div>
                            <div class="font review_select_1p">
                              {data.selectEvaluation}
                            </div>
                            <div class="font review_select_1p">
                              {data.selectEvaluation}
                            </div>
                          </div>

                          {/* 댓글 */}
                          <div>
                            <div class="review_output"></div>

                            <div class="input_clickText">
                              {/* 입력후 엔터시 댓글 달기 */}
                              <input
                                type="text"
                                class="font review_input"
                                id="inputBox"
                                placeholder={data.inputBox}
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
              </tbody>
              {/* 리뷰 반복문 */}

              {/* 임시 리뷰 양식 */}
              {/* <div class="review_box_size_cc">
                                <div class="review_box">
                                    <div class="image_text_input_box">

                                        <div class="img_img">

                                            <p class="hart_count font" id="hartCount">0</p>
                                            <img src="../../../images/white_hart.png" class="hart" id="img" onClick={redhart} ></img>


                                            <Link to={'/edit-review'} class="cc_position line" >
                                                <p class="font review_select_cc">수정 및 삭제</p>
                                            </Link>

                                            <div class="position review_nickname font">김X성 님</div>
                                            <div class="position review_day_time font"></div>

                                            <img src="../images/img_1.jpg" class="image_box" />
                                        </div>

                                        <div >
                                            <div class="div_reviewText"> 송정 화이트시티 후기 ! </div>
                                            <div class="div_reviewText_Big">
                                                진짜 너무 경치가 좋아요 ~
                                                <br></br>
                                                <br></br>
                                                이번에 송정에있는 화이트시티 갔다왔는데
                                                너무 깔끔하고 경치도좋고 완전 좋았습니다.
                                                <br></br>
                                                <br></br>
                                                호실마다 간격도 멀어서 그런지 다른사람들 노는소리 잘 안들리구
                                                이게 여행이다 싶을정도로 힐링하고왔어요 !
                                                <br></br>
                                                <br></br>
                                                여기는 찜해놨다가 무조건 다음번에 한번 더 올거에요. 가격도 이정도면
                                                가성비 좋은편이라고 생각합니다 완전 강추 ~!
                                            </div>
                                            <div className="font select_review_top">
                                                여행지 : 송정 화이트 시티
                                            </div>
                                        </div>

                                    </div>

                                    <div class="review_select">

                                        <div class="review_select_box">
                                            <div class="font review_select_1p">깨끗해요</div>
                                            <div class="font review_select_1p">친절해요</div>
                                            <div class="font review_select_1p">가성비굿</div>
                                            <div class="font review_select_1p">즐거워요</div>

                                            <div class="font review_select_1p">만족해요</div>
                                            <div class="font review_select_1p">재밌어요</div>
                                            <div class="font review_select_1p">추천해요</div>
                                            <div class="font review_select_1p">신기해요</div>
                                        </div>

                                        <div>
                                            <div class="review_output">
                                                <div class="review_output_text font"><img src="../images/gal_3.jpg" alt="Image" class="img_propil"></img> 대박..사진 잘찍으셨네요</div>
                                                <div class="review_output_text font"><img src="../images/gal_4.jpg" alt="Image" class="img_propil"></img> 저도 가봐야겠어요 !</div>
                                            </div>

                                            <div class="input_clickText">
                                                <input class="font review_input" id="inputBox" onKeyDown={handleKeyDown}></input>
                                                <h5 class="click_reviewText">▶</h5>
                                            </div>

                                        </div>
                                    </div>


                                </div>
                            </div> */}
              {/* 임시 리뷰 양식 */}

              {/* 페이지 반복문 */}
              {/* 페이지 반복문 */}
            </div>
            <Pagination
              className="my-3"
              count={count}
              page={page}
              siblingCount={1}
              boundaryCount={1}
              variant="outlined"
              shape="rounded"
              onChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyReview;
