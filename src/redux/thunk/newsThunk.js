import { setNewsList, clearNewsList } from "../actions/newsActions";
import { setLoading, clearLoading } from "../actions/appActions";
import axios from "axios";
const url =
  "https://newsapi.org/v2/everything?" +
  "q=android&" +
  "sortBy=popularity&" +
  "apiKey=785d8add6121478b9cddb28bcaea90f8";
const getNews = async (dispatch) => {
  try {
    dispatch(setLoading());
    const { data } = await axios(url);
    // console.log(data.articles);
    dispatch(setNewsList(data.articles));
  } catch (error) {
    console.log(error);
  } finally {
    dispatch(clearLoading());
  }
};
export default getNews;
