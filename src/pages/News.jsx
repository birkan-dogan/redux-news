import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import image from "../assets/loading.gif";
import getNews from "../redux/thunk/newsThunk";
import Cards from "../components/Cards";

const News = () => {
  const dispatch = useDispatch();
  const { newsList } = useSelector((state) => state.news);
  const loading = useSelector((state) => state.app.loading);

  useEffect(() => {
    dispatch(getNews); // we are giving async function to dispatch as a parameter.
  }, []);

  return (
    <>
      {loading ? (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          height="100vh"
        >
          <img src={image} alt="loadingGif" style={{ width: "500px" }} />
        </Box>
      ) : (
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-evenly"
          flexWrap="wrap"
          style={{ marginTop: "4rem" }}
        >
          {newsList.map((item, index) => (
            <Card sx={{ maxWidth: 345, m: 5, maxHeight: 600 }} key={index}>
              <Cards
                urlToImage={item.urlToImage}
                title={item.title}
                content={item.content}
                url={item.url}
              />
            </Card>
          ))}
        </Box>
      )}
    </>
  );
};

export default News;
