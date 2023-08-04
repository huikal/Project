import http from "../utils/http-common";

const getAll = (boardTitle, page, size) => {
  return http.get(`/reply-board?boardTitle=${boardTitle}&page=${page}&size=${size}`);
};

const get = bid => {
  return http.get(`/reply-board/${bid}`);
};

// 답변 생성
const create = data => {
  return http.post("/reply", data);
};

// 게시물 생성
const createBoard = data => {
  console.log(data);
  return http.post("/reply-board", data);
};

const update = (bid, data) => {
  return http.put(`/reply-board/${bid}`, data);
};

// 답변만 삭제
const remove = (bid) => {
  return http.delete(`/reply/deletion/${bid}`);
};

// 게시물 + 답변 모두 삭제
const removeBoard = (boardGroup) => {
  return http.delete(`/reply-board/deletion/${boardGroup}`);
};

const removeAll = () => {
  return http.delete(`/reply-board`);
};

export default {
  getAll,
  get,
  create,
  createBoard,
  update,
  remove,
  removeBoard,
  removeAll,
};
