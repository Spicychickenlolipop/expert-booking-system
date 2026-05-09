import axios from "axios";

const API = axios.create({
  baseURL: "https://expert-booking-system-qkml.onrender.com/api",
});

export default API;