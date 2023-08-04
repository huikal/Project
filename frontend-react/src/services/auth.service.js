import axios from "axios";

import http from '../utils/http-common';

// const API_URL = "http://localhost:8000/api/auth/";

const register = (fullname, email, nickname, phone, address, username, password) => {
  return http.post("/auth/signup", {
    fullname,
    email,
    nickname,
    phone,
    address,
    username,
    password,
  });
};

const login = (username, password) => {
  return http
    .post("/auth/signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};
