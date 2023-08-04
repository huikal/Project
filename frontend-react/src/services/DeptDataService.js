// 비동기 통신 라이브러리 import
import http from "../utils/http-common";

// 1)부서 전체 조회 함수, 2)부서명 like 검색(쿼리스트링)
// page : 현재페이지, size : 페이지 당 개수
const getAll = (dname, page, size) => {
  return http.get(`/dept?dname=${dname}&page=${page}&size=${size}`);
};

// 부서번호(dno)로 상세정보 조회요청 함수
const get = dno => {
  
  return http.get(`/dept/${dno}`);
};

// 새로운 부서정보 추가 요청함수(data(새로운부서객체))
const create = data => {
  return http.post("/dept", data);
};

// 부서정보 수정 요청함수(dno(부서번호),data(수정될부서객체))
const update = (dno, data) => {
  return http.put(`/dept/${dno}`, data);
};

// 부서번호(dno)로 삭제요청 함수
const remove = (dno) => {
  return http.delete(`/dept/deletion/${dno}`);
};

// 부서정보 모두 삭제요청 함수
// TODO: url 수정 (dept -> dept/all)
const removeAll = () => {
  return http.delete(`/dept/all`);
};

// 다른 페이지에서 사용할 수 있게 export 함
export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
};