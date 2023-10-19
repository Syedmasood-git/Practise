import React,{useState} from 'react'
// import Increment from "./Components/Increment"
// import Todo from "./Components/Todo"
import Moviedisplay from './Components/Moviedisplay'
import MovieDetails from './Components/MovieDetails'
// import MovieDetails from "./Components/MovieDetails"

const App = () => {
  const [selected,setSelected]=useState(null)
  return (
    <div>
        {/* <Increment/> */}
        {/* <Todo/> */}
        <Moviedisplay updateSelectedMovie={setSelected}/>
        <MovieDetails clickedMovie={selected}/>
    </div>
  ) 
}

export default App