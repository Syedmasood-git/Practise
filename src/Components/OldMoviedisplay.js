import React,{useState} from 'react'
import movieData from '../data/movieData';






const Moviedisplay = () => {

    const [selected,setSelected]=useState(null)
    console.log(selected);


  return (
    <div>
        <h1>Movies</h1>
        {
            movieData.map((movie)=>(
                <div>
                    <h3 onClick={()=>setSelected(movie)}>{movie.title}</h3>
                    <hr></hr>
                </div>
            ))
        }
        {
            selected!=null && (
                <div>
                    <h1>{selected.title}</h1>
                    <h1>{selected.year}</h1>
                    <h1>{selected.director}</h1>
                    <h1>{selected.genre}</h1>
                </div>
            )
        }
        
    </div>
  )
}

export default Moviedisplay