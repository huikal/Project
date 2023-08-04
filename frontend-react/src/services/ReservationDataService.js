// ReservatioDataService.js
import http from "../utils/http-common";

// TODO: email -> tagOne, tagSecond
const getAll = (tagOne, tagSecond, page, size) => {
  return http.get(`/reservation?tagOne=${tagOne}&tagSecond=${tagSecond}&page=${page}&size=${size}`);
};

const get = (rid) => {
  return http.get(`/reservation/${rid}`);
};

const create = (data) => {
  console.log(data);
  return http.post("/reservation", data);
};

const update = (rid, data) => {
  return http.put(`/reservation/${rid}`, data);
};

const deleteReservation = (rid) => {
  return http.delete(`/reservation/deletion/${rid}`);
};

const deleteAll = () => {
  return http.delete("/reservation/all");
};

export default {
    getAll,
    get,
    create,
    update,
    deleteReservation,
    deleteAll
}
