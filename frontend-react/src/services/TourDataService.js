import http from "../utils/http-common";

const getTour = (main, page, size) => {
  return http.get(`/tour?main=${main}&page=${page}&size=${size}`);
}

const getReservation = (reservationYn, page, size) => {
  return http.get(`/resin?reservationYn=${reservationYn}&page=${page}&size=${size}`);
}

const getSearch = (tname, page, size) => {
  return http.get(`/tours?tname=${tname}&page=${page}&size=${size}`);
};

const get = tid => {
  return http.get(`/tour/${tid}`);
};

const create = data => {
  return http.post("/tour", data);
};

const update = (tid, data) => {
  return http.put(`/tour/${tid}`, data);
};

const remove = (tid) => {
  return http.delete(`/tour/deletion/${tid}`);
};

const removeAll = () => {
  return http.delete(`/tour/all`);
};

const TourDataService =  {
  getTour,
  getReservation,
  getSearch,
  get,
  create,
  update,
  remove,
  removeAll,
};

export default TourDataService;
