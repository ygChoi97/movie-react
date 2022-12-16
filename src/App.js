import React, {useState, useEffect} from 'react';
import './css/main.css';
import { List, Paper, Container } from '@mui/material';
import AddMovie from './components/AddMovie';
import './App.css';
import { BoyRounded } from '@mui/icons-material';

const key = '1fa787f2afbefc67f678bb5455234cbb';
const KOBIS_MOVIEINFO_URL = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json';
const BASE_URL = 'http://localhost:8181/api/movies';

function App() {
  

  const add = (item) => {
    const url = `${KOBIS_MOVIEINFO_URL}?key=${key}&movieCd=${item.movieCd}`;
    console.log(url);
    fetch(url)
    .then(response => response.json())
    .then(json_mi => {
      console.log(json_mi);
      // console.log(json_mi.movieInfoResult.movieInfo.actors[0]);
      
      if(json_mi.movieInfoResult.movieInfo.movieCd !== null) {
        // console.log(json_mi.movieInfoResult.movieInfo.movieCd);
        fetch(BASE_URL, {
          method: 'POST',
          headers:{ 'Content-type': 'application/json;charset=UTF-8' },
          body: JSON.stringify(json_mi.movieInfoResult.movieInfo)

        })
        .then(response => response.json())
        .then(json => {
          console.log(json);
        });
      }
    });
  
  };

  return (
    <div className = "wrapper">
      <Container maxWidth="md">
        <AddMovie add={add} />
        <Paper style={{margin: 16}}>
        </Paper>
      </Container>  
    </div>
  );
}

export default App;
