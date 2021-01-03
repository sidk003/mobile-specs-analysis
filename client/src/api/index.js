import axios from "axios";

const url = "http://localhost:5000/about";

export const fetchAboutContent = () =>
  axios.get(url).then((res) => {
    const heading = res.data.title;
    const content = res.data.body;
  });
