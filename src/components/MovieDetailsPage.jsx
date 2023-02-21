import React from "react";
import { useParams } from "react-router-dom";

import { MovieDetails } from "./Details";

const MovieDetailsPage = () => {
  const { id } = useParams();
  return <MovieDetails movieId={id} />;
};

export default MovieDetailsPage;
