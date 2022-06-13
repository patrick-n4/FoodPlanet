import axios from "axios";
const instance = axios.create({
  baseURL: "https://backend.supamenu.rw/supapp/",
  headers: {
    accept: "*/*",
    "Content-Type": "Application/json",
  },
});
export default instance;
