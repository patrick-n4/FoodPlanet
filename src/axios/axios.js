import axios from "axios";

const instance = axios.create({
  baseURL: "https://backend.supamenu.rw"
});

export default instance;
