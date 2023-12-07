
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MovieList from './Component/MovieList';
import Filtered from './Component/Filter';
import Movies from './Component/MovieJson';
import { useState } from 'react';
 

function App() {
  const [movieTab, setMovieTab]= useState(Movies)
  const [movieFilter, setMovieFilter] = useState({title:"", rating:""})
  const handlerOn = (type, value) => {
    setMovieFilter({...movieFilter, [type] : value })
  } 
  const reset=()=>{
    setMovieFilter({ title: "", rating: "" })
  }
  
  const filterTab = movieTab.filter((film) =>{
    return (
    film.title.toLowerCase().includes(movieFilter.title.toLowerCase())
    && String(film.rating).toLowerCase().includes(movieFilter.rating.toLowerCase())
    )
  });
 

  console.log(filterTab);
  return (
  <>
    
      <Filtered handlerOnChange={handlerOn} reset={reset} />
    <MovieList  filter = {filterTab}/>
    </>
  );
}

export default App;
