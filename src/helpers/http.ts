import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:4333/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
  timeout: 60 * 1000,
});

http.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

http.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default http;
