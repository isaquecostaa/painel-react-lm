import axios from "axios";

const api = axios.create({
  // baseURL: "webservices",
  baseURL: "https://api.lmsalgados.com.br",
  // baseURL: "https://beta.lmsalgados.com.br/webservices",
});

export default api;
