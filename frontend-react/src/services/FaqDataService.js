import http from "../utils/http-common";

const getAll = (title, page, size) => {
  return http.get(`/faq?title=${title}&page=${page}&size=${size}`);
};

const get = no => {
  return http.get(`/faq/${no}`);
};

const create = data => {
  return http.post("/faq", data);
};

const update = (no, data) => {
  return http.put(`/faq/${no}`, data);
};

const remove = (no) => {
  return http.delete(`/faq/deletion/${no}`);
};

const removeAll = () => {
  return http.delete(`/faq/all`);
};

const FaqDataService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
}

export default FaqDataService;