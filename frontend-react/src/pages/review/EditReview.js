import React, { useEffect, useState } from 'react';
import initScripts from "./../../assets/js/scripts";
import initCustom from "./../../assets/js/custom";
import { Link, useNavigate, useParams } from 'react-router-dom';
import ReplyBoardDataService from "../../services/ReplyBoardDataService";

function EditReview() {
    // 업뎃 함수
    const { bid, boardParent } = useParams();
    let navigate = useNavigate();

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

    const [currentReplyBoard, setCurrentReplyBoard] = useState(
        initialReplyBoardState
    );

    const [message, setMessage] = useState("");

    // 업뎃 함수


    // 이미지 추가/삭제 시작
    const [selectedImage, setSelectedImage] = useState(null);
    const [photos, setPhotos] = useState([]);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file));
        }
    };

    const handleAddPhoto = () => {
        if (selectedImage) {
            setPhotos([...photos, selectedImage]);
            setSelectedImage(null);
        }
    };

    const handleDeletePhoto = (index) => {
        const updatedPhotos = [...photos];
        updatedPhotos.splice(index, 1);
        setPhotos(updatedPhotos);
    };

    const handleDeleteAllPhotos = () => {
        setPhotos([]);
    };

    // 이미지 추가/삭제 끝


    // 본문 내용 작성
    const maxLength = 500; // Maximum number of characters

    // 본문 내용 작성


    // 평가 선택 버튼 최대8개
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    const handleOptionClick = (option) => {
        const isSelected = selectedOptions.includes(option);
        const selectedOptionsCount = selectedOptions.length;

        if (isSelected) {
            const updatedOptions = selectedOptions.filter((selectedOption) => selectedOption !== option);
            setSelectedOptions(updatedOptions);
        } else {
            if (selectedOptionsCount < 8) {
                setSelectedOptions([...selectedOptions, option]);
            } else {
                alert('최대 8개까지 가능 !');
            }
        }
    };

    useEffect(() => {
        if (selectedOptions.length < 8) {
            setErrorMessage('');
        }
    }, [selectedOptions]);
    { errorMessage && <p>{errorMessage}</p> }

    // 평가 선택 버튼 최대8개
    useEffect(() => {
        initScripts();
        initCustom();
    }, []);

    // 여행다녀온 선택지 셀렉트박스 옵션 스크롤

    // 여행다녀온 선택지 셀렉트박스 옵션 스크롤


    const getReplyBoard = (bid) => {
        ReplyBoardDataService.get(bid)
            .then((response) => {
                setCurrentReplyBoard(response.data);
                console.log(response.data);
            })
            .catch((e) => {
                console.log(e);
            });
    };

    useEffect(() => {
        if (bid) getReplyBoard(bid);
    }, [bid]);

    const handle_InputChange = (event) => {
        const { name, value } = event.target;
        setCurrentReplyBoard({ ...currentReplyBoard, [name]: value });
    };

    const updateReplyBoard = () => {
        ReplyBoardDataService.update(currentReplyBoard.bid, currentReplyBoard)
            .then((response) => {
                console.log(response.data);
                navigate("/my-review");
            })
            .catch((e) => {
                console.log(e);
            });
    };
    // 업뎃 함수



    const deleteReply = () => {
        ReplyBoardDataService.remove(currentReplyBoard.bid)
          .then((response) => {
            console.log(response.data);
            // 페이지 이동
            navigate("/my-review");
          })
          .catch((e) => {
            console.log(e);
          });
      };
    

    return (
        <div>
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

            <div className="bg">

                {/* 리뷰박스 */}
                <div className="creat_rivew_all" >
                    <div>
                        <div class="nickName_div font">ㅇㅇㅇ 님</div>
                        <div id="currentDateDiv_" class="position review_day_time_cerat font"></div>

                        {/* 텍스트,이미지박스를 감싼 박스 */}
                        <div class="top_box">
                            {/* 이미지 관련 시작 */}
                            <div class="div_img_div">
                                {/* 이미지 들어가는 박스 */}
                                <div className="creat_rivew_img_box">
                                    {/* 이미지 추가할때 들어갈 함수 */}
                                    {selectedImage && <img src={selectedImage} alt="Selected Image" className='loaded-image' />}
                                </div>
                                {/* 이미지 추가 버튼 */}
                                <div className="img_plus_box">
                                    <label htmlFor="img-input" className="img_plus font" onClick={(e) => e.stopPropagation()}>
                                        <p>사진 추가</p>
                                    </label>
                                    <input
                                        id='img-input'
                                        type="file"
                                        accept="image/*"
                                        style={{ display: "none" }}
                                        onChange={handleImageChange}
                                    />
                                    {/* 이미지 추가 버튼 */}

                                    {/* 이미지 삭제 버튼 */}
                                    <div className="img_delet font" onClick={() => setSelectedImage(null)}>
                                        <p onClick={handleDeleteAllPhotos}>사진 삭제</p>
                                    </div>
                                </div>
                                {photos.map((photo, index) => (
                                    <div key={index} className="create_rivew_img_box">
                                        <img src={photo} alt={`Photo ${index + 1}`}
                                            id="boardImg"
                                            required
                                            value={currentReplyBoard.boardImg}
                                            onChange={handleImageChange}
                                        />
                                    </div>
                                ))}
                                {/* 이미지 삭제 버튼 */}
                                {/* 이미지 들어가는 박스 */}
                                {/* 이미지 관련 끝 */}
                            </div>
                            {/* 텍스트 박스 */}
                            <div>
                                {/* 제목 입력 시작 */}
                                <input
                                    class="BigText"
                                    type="text"
                                    id="boardTitle"
                                    required
                                    value={currentReplyBoard.boardTitle}
                                    onChange={handle_InputChange}
                                    name="boardTitle"
                                ></input>
                                {/* 제목 입력 끝*/}

                                {/* 셀렉트 박스 */}
                                <div class="inline_block">
                                    <div class="font select_options_qna">어디를 다녀 오셨나요?
                                        <div class="select_options_div inline_block">
                                            <select
                                                class="select_options"
                                                id="selectBox"
                                                required
                                                value={currentReplyBoard.selectBox}
                                                onChange={handle_InputChange}
                                            >
                                                <option class="select_option_first">{currentReplyBoard.option}</option>
                                                <option>asd</option>
                                                <option>asd</option>
                                                <option>asd</option>
                                                <option>asd</option>
                                                <option>asd</option>
                                            </select >
                                        </div>
                                    </div>
                                    {/* 셀렉트 박스 */}
                                    {/* 내용 시작 */}
                                    <textarea
                                        id="boardContent"
                                        required
                                        value={currentReplyBoard.boardContent}
                                        class="text_box_small text_area"
                                        onChange={handle_InputChange}
                                        maxLength={maxLength}
                                    ></textarea>
                                    {/* 내용 끝 */}
                                </div>
                                {/* 텍스트 박스 */}



                            </div>
                        </div>

                        {/* 평가 시작 */}
                        <div class="bottom_box">
                            <h3 class="font h3_8p">※ 최대 8개 까지 선택가능</h3>

                            <div class="happy_end_bad">
                                <div class="happy_select font">
                                    <p> 긍정평가 </p>
                                    <br />

                                    <span className={`select_box_all click_motion 
                                ${selectedOptions.includes('재밌어요') ? 'bg_color_select_box' : 'selected'}`}
                                        onClick={() => handleOptionClick('재밌어요')}
                                    >재밌어요</span>

                                    <span className={`select_box_all click_motion 
                                ${selectedOptions.includes('깨끗해요') ? 'bg_color_select_box' : 'selected'}`}
                                        onClick={() => handleOptionClick('깨끗해요')}
                                    >깨끗해요</span>

                                    <span className={`select_box_all click_motion 
                                ${selectedOptions.includes('안전해요') ? 'bg_color_select_box' : 'selected'}`}
                                        onClick={() => handleOptionClick('안전해요')}
                                    >안전해요</span>

                                    <span className={`select_box_all click_motion 
                                ${selectedOptions.includes('조용해요') ? 'bg_color_select_box' : 'selected'}`}
                                        onClick={() => handleOptionClick('조용해요')}
                                    >조용해요</span>

                                    <br />
                                    <br />

                                    <span className={`select_box_all click_motion 
                                ${selectedOptions.includes('친절해요') ? 'bg_color_select_box' : 'selected'}`}
                                        onClick={() => handleOptionClick('친절해요')}
                                    >친절해요</span>

                                    <span className={`select_box_all click_motion 
                                ${selectedOptions.includes('신기해요') ? 'bg_color_select_box' : 'selected'}`}
                                        onClick={() => handleOptionClick('신기해요')}
                                    >신기해요</span>

                                    <span className={`select_box_all click_motion 
                                ${selectedOptions.includes('경치좋음') ? 'bg_color_select_box' : 'selected'}`}
                                        onClick={() => handleOptionClick('경치좋음')}
                                    >경치좋음</span>

                                    <span className={`select_box_all click_motion 
                                ${selectedOptions.includes('공기좋음') ? 'bg_color_select_box' : 'selected'}`}
                                        onClick={() => handleOptionClick('공기좋음')}
                                    >공기좋음</span>

                                </div>

                                <div class="border_height_line"></div>
                                <div class="bad_select font">
                                    <p> 부정평가 </p>
                                    <br />

                                    <span className={`select_box_all click_motion 
                                ${selectedOptions.includes('불친절함') ? 'bg_color_select_box' : 'selected'}`}
                                        onClick={() => handleOptionClick('불친절함')}
                                    >불친절함</span>

                                    <span className={`select_box_all click_motion 
                                ${selectedOptions.includes('벌레많음') ? 'bg_color_select_box' : 'selected'}`}
                                        onClick={() => handleOptionClick('벌레많음')}
                                    >벌레많음</span>

                                    <span className={`select_box_all click_motion 
                                ${selectedOptions.includes('시설고장') ? 'bg_color_select_box' : 'selected'}`}
                                        onClick={() => handleOptionClick('시설고장')}
                                    >시설고장</span>

                                    <span className={`select_box_all click_motion 
                                ${selectedOptions.includes('공기탁함') ? 'bg_color_select_box' : 'selected'}`}
                                        onClick={() => handleOptionClick('공기탁함')}
                                    >공기탁함</span>

                                    <br />
                                    <br />

                                    <span className={`select_box_all click_motion 
                                ${selectedOptions.includes('시끄러움') ? 'bg_color_select_box' : 'selected'}`}
                                        onClick={() => handleOptionClick('시끄러움')}
                                    >시끄러움</span>

                                    <span className={`select_box_all click_motion 
                                ${selectedOptions.includes('너무비쌈') ? 'bg_color_select_box' : 'selected'}`}
                                        onClick={() => handleOptionClick('너무비쌈')}
                                    >너무비쌈</span>

                                    <span className={`select_box_all click_motion 
                                ${selectedOptions.includes('허위사진') ? 'bg_color_select_box' : 'selected'}`}
                                        onClick={() => handleOptionClick('허위사진')}
                                    >허위사진</span>

                                    <span className={`select_box_all click_motion 
                                ${selectedOptions.includes('재미없음') ? 'bg_color_select_box' : 'selected'}`}
                                        onClick={() => handleOptionClick('재미없음')}
                                    >재미없음</span>

                                </div>
                                <div className='update_div'>
                                    <button
                                        type="submit"
                                        class="pinish_review font click_motion line none solid update_left" onClick={updateReplyBoard}>
                                        수정 완료</button>

                                    <div className='update_right'>
                                        <button
                                            type="submit"
                                            class="pinish_review font click_motion line none solid"
                                            onClick={deleteReply}
                                            >
                                            삭제 하기</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* 평가 끝 */}
                    {/* 텍스트,이미지박스를 감싼 박스 끝*/}
                </div>
                {/* 리뷰박스 끝*/}

            </div>

        </div>


    );
}
export default EditReview