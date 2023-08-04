import http from "../utils/http-common";

const getAll = (email, page, size) => {
  return http.get(`/customer?email=${email}&page=${page}&size=${size}`);
};

const get = cid => {
  return http.get(`/customer/${cid}`);
};

const create = data => {
  return http.post("/customer", data);
};

const update = (cid, data) => {
  return http.put(`/customer/${cid}`, data);
};

const remove = (cid) => {
  return http.delete(`/customer/deletion/${cid}`);
};

const removeAll = () => {
  return http.delete(`/customer`);
};

const CustomerDataService =  {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
};

export default CustomerDataService;
