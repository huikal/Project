import http from "../utils/http-common";

const getAll = (ename, page, size) => {
  return http.get(`/emp?ename=${ename}&page=${page}&size=${size}`);
};

const get = eno => {
  return http.get(`/emp/${eno}`);
};

const create = data => {
  return http.post("/emp", data);
};

const update = (eno, data) => {
  return http.put(`/emp/${eno}`, data);
};

const remove = (eno) => {
  return http.delete(`/emp/deletion/${eno}`);
};

const removeAll = () => {
  return http.delete(`/emp/all`);
};

export default {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
};
