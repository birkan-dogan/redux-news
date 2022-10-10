import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
const Cards = ({ urlToImage, title, content, url }) => {
  return (
    <>
      <CardMedia
        component="img"
        height="250"
        image={
          urlToImage ??
          "https://ichef.bbci.co.uk/news/976/cpsprodpb/5A8B/production/_122497132_tesla.png"
        }
        alt="img"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title ?? "Tesla disables gaming while driving feature"}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content ??
            "It follows an inquiry into Passenger Play, which allowed games to be played while a car was moving."}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" href={url} target="_blank">
          Detail
        </Button>
      </CardActions>
    </>
  );
};

export default Cards;
