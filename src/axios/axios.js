import axios from "axios";

const instance = axios.create({
  baseURL: "https://backend.supamenu.rw/supapp/swagger-ui.html#/"
});

export default instance;
