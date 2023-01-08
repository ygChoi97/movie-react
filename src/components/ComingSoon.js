import { Grid } from '@mui/material';
import React, {useEffect, useState} from 'react'
import MovieThumbnail from './MovieThumbnail.js';

export const BASE_URL = 'http://localhost:8181/api/movie';  // 영화상세정보 백엔드 URL

export default function ComingSoon() {

    const [movieList, setMovieList] = useState([
        
    ]);
    console.log("박스오피스 진입");

    // const movieListItem = movieList.map(movie => 
    //     <MovieThumbnail key={movie.movieCd} movie={movie} />
    // ); 
    
    const movieListItem = movieList.map(function(movie) {
      if(movie.screeningType === 1 || movie.screeningType === 2)
        return <MovieThumbnail key={movie.movieCd} movie={movie} />
    });

    useEffect(() => {
        fetch(BASE_URL)
        .then(res => res.json())
        .then(json => {
            console.log(json.movies);
            setMovieList(json.movies);
        })
    }, []);

  return (
    <div className="wrapper" style={{marginTop: 100}} >   
     
    <Grid container rowSpacing={8} columnSpacing={{ xs: 4}}>
      {movieListItem}          
    </Grid>

    </div>
  );
}