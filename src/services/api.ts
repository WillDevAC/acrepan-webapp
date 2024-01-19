import axios from "axios";

import Cookies from "js-cookie";

const APIURL = "https://acrepan-api-v2-production.up.railway.app/";

const api = axios.create({
  baseURL: APIURL,
});

const SESSION_TOKEN = Cookies.get("auth-SESSION_TOKEN");

if (SESSION_TOKEN) {
  api.defaults.headers.common["Authorization"] = `Bearer ${SESSION_TOKEN}`;
}

export { APIURL };

export default api;
