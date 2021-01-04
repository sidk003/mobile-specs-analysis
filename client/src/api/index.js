import axios from "axios";

const url = "http://localhost:5000/about";

export const fetchAboutContent = () => axios.get(url);
