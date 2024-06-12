import axios from "axios";

export const ApiService = axios.create({
  baseURL: "http://ijodkor-api.apptest.uz",
  withCredentials: true,
  timeout: 1000,
  headers: { "X-Custom-Header": "foobar" },
});
