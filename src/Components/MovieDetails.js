import React from "react";

const MovieDetails = ({clickedMovie}) => {
    console.log(clickedMovie);
  return (
    <div>
      {
            clickedMovie != null && (
            <div>
              <h1>{clickedMovie.title}</h1>
              <h1>{clickedMovie.year}</h1>
              <h1>{clickedMovie.director}</h1>
              <h1>{clickedMovie.genre}</h1>
            </div>
          )
            }
    </div>
  );
};

export default MovieDetails;
