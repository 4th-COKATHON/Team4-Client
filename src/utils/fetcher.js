import api from "../api";

const fetcher = (url) =>
  api
    .get(url)
    .then((res) => res.data)
    .catch((err) => console.error(err));

export default fetcher;
