import React from 'react'
import movieData from '../data/movieData';



const Moviedisplay = ({updateSelectedMovie}) => {


  return (
    <div>
        <h1>Movies</h1>
        {
            movieData.map((movie)=>(
                <div>
                    <h3 onClick={()=>updateSelectedMovie(movie)}>{movie.title}</h3>
                    <hr></hr>
                </div>
            ))
        }
    </div>
  )
}

export default Moviedisplay