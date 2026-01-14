import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Rating,
} from "@mui/material";

interface MovieProps {
  title: string;
  rating: number;
  poster: string;
  year: string;
}

const MovieCard: React.FC<MovieProps> = ({ title, rating, poster, year }) => {
  return (
    <Card
      sx={{
        bgcolor: "#1e293b",
        color: "white",
        borderRadius: 4,
        height: "100%",
      }}
    >
      <CardMedia component="img" height="350" image={poster} alt={title} />
      <CardContent>
        <Typography variant="subtitle1" noWrap sx={{ fontWeight: 700 }}>
          {title}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
          <Typography variant="body2" color="gray">
            {year}
          </Typography>
          <Rating value={rating / 2} precision={0.5} size="small" readOnly />
        </Box>
      </CardContent>
    </Card>
  );
};

export default MovieCard;
