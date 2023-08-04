// 요약 : 1) 로그인 2) 회원가입 3) 로그아웃
// 액션함수 정의 파일
// 액션함수 : 신호를 리듀서함수로 전달하는 함수
// 페이지컴포넌트 -> 액션함수 호출 -> 리듀서함수

// types.js (신호 정의) import
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from "./types";

// 벡엔드 서비스 함수 import
import AuthService from "../../services/auth.service";

// 회원가입 액션함수
export const register = (fullname, email, nickname, phone, address, username, password) => (dispatch) => {
  // 벡엔드 회원가입 저장 요청
  return AuthService.register(fullname, email, nickname, phone, address, username, password)
    .then((response) => {
      // 성공
      // 1st 리듀서(auth)
      dispatch({
        type: REGISTER_SUCCESS, // 회원가입 성공
      });

      // 2nd 리듀서(message)
      dispatch({
        type: SET_MESSAGE,  // 저장 메시지 신호
        payload: response.data.message, // 성공 메시지 저장
      });

      // 비동기 객체 : 성공 호출(resolve())
      return Promise.resolve();
    })
    .catch((error) => {
      // 실패
      // 에러코드(메시지)
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

        // 1st 리듀서(auth)
      dispatch({
        type: REGISTER_FAIL,  // 회원가입 실패 신호
      });

        // 2nd 리듀서(message)
      dispatch({
        type: SET_MESSAGE,  // 저장 메시지 신호
        payload: message,   // 에러메시지 저장
      });

      return Promise.reject(); 
    });
};

// 로그인 액션함수
export const login = (username, password) => (dispatch) => {
  // 1) 벡엔드 로그인 요청
  return AuthService.login(username, password)
    .then(
      // 성공
      // data : 벡엔드 데이터
      (data) => {
        // 공유저장소함수(리듀서)를 호출
        // payload : 네트워크에서 사용하는 용어(일반 데이터(정보))
        dispatch({
          type: LOGIN_SUCCESS,      // 로그인 성공
          payload: { user: data },  // 유저정보
        });
        // Promise객체 호출 : resolve() 성공 의미
        return Promise.resolve();
      }
    )
    .catch((error) => {
      // 실패
      // 실패 메시지(에러 코드)
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

        // 1st 리듀서(auth)
      dispatch({
        type: LOGIN_FAIL, // 로그인 실패 신호
      });

      // 2nd 리듀서(message)
      dispatch({
        type: SET_MESSAGE,  // 저장 메시지 선호
        payload: message,   // 에러코드 데이터
      });
      // Promise 객체 : reject() 실패 의미
      return Promise.reject();
    });
};

// 로그아웃 액션함수
export const logout = () => (dispatch) => {
  // 1) 로컬스토리지에서 user 객체 제거
  AuthService.logout();

  // 2) 리듀서 함수 호출(신호 : LOGOUT)
  dispatch({
    type: LOGOUT,
  });
};
