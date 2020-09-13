import axios from "axios";

const instance = axios.create({
  baseURL: "https://counter-a0c10.firebaseio.com/"
});

export default instance;