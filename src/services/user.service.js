import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8000/api/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  axios.get(API_URL + "profile", { headers: authHeader() }).then((response) => {
    return axios.get(API_URL + `users/${response.data.id}`, { headers: authHeader() });
  });
};

/* const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
}; */

export default {
  getPublicContent,
  getUserBoard,
  /* getModeratorBoard,
  getAdminBoard, */
};
