import axios from "axios";
import config from "../config";

// TODO: Add to constants.js
const BASE_URL = "https://ace-restapi.herokuapp.com/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxMTAxMDN9LCJpYXQiOjE1NjUzNDY3OTEsImV4cCI6MTU2NzkzODc5MX0.hU06s6OGwVd2AB7uF7xUkp1JGzteU6kmZYUxqlmUmWQ";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 15000,
  headers: {
    "X-Access-Token": TOKEN,
    post: { "Content-Type": "application/json" }
  }
});

const debugLoading = resolvedValue => {
  const DELAY_TIME = 300;

  return new Promise(resolve => {
    if (config.debug) {
      setTimeout(() => resolve(resolvedValue), DELAY_TIME);
    } else {
      resolve(resolvedValue);
    }
  });
};

export default class Request {
  static get(url, config) {
    return instance.get(url, config).then(debugLoading);
  }

  static post(url, data) {
    return instance.post(url, data).then(debugLoading);
  }

  static put(url, data) {
    return instance.put(url, data).then(debugLoading);
  }

  static delete(url) {
    return instance.delete(url).then(debugLoading);
  }
}
