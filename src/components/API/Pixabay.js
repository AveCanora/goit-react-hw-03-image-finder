import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const per_page = 12;
const KEY_API = "21250079-87ab8a231c7222251825c94c0";
const OPTIONS = `&image_type=photo&orientation=horizontal&per_page=${per_page}`;
const fetchImg = async ({ query = "", pageNumber = 1 }) => {
  const r = await axios.get(
    `${BASE_URL}?key=${KEY_API}&q=${query}&page=${pageNumber}${OPTIONS}`
  );

  return r.data.hits;
};

export default fetchImg;
