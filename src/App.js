import './css/main.css';
import { Paper, Container } from '@mui/material';
import AddMovie from './components/AddMovie';
import './App.css';

const key = '1fa787f2afbefc67f678bb5455234cbb'; // 발급키
const KOBIS_MOVIE_INFO_URL = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/movie/searchMovieInfo.json'; // 영화상세정보 API json 요청 URL
const BASE_URL = 'http://localhost:8181/api/movie';  // 영화상세정보 백엔드 URL
function App() {
  

  const add = (item) => {
    const url = `${KOBIS_MOVIE_INFO_URL}?key=${key}&movieCd=${item.movieCd}`;  // movieCd (영화코드)
    console.log(url);

    const reqjson = {
      movieCd: '',      // 영화코드
      movieNm: '',      // 영화명(국문)
      movieNmEn: '',    // 영화명(영문)
      prdtYear: '',     // 제작연도
      showTm: '',       // 상영시간(런타임)
      openDt: '',       // 개봉년도(일 포함)
      nations: '',      // 제작국가
      genres: '',       // 장르
      directors: '',    // 감독
      actors: '',       // 배우
      showTypes: '',    // 쇼타입 (디지털, 3D 디지털, 4D, IMAX, IMAX 3D)
      watchGradeNm: ''  // 관람등급
    };
    
    fetch(url)
    .then(response => response.json())
    .then(json => {
      reqjson.movieCd = json.movieInfoResult.movieInfo.movieCd;
      reqjson.movieNm = json.movieInfoResult.movieInfo.movieNm;
      reqjson.movieNmEn = json.movieInfoResult.movieInfo.movieNmEn;
      reqjson.prdtYear = json.movieInfoResult.movieInfo.prdtYear;
      reqjson.showTm = json.movieInfoResult.movieInfo.showTm;
      reqjson.openDt = json.movieInfoResult.movieInfo.openDt;

      for(let i = 0; i < json.movieInfoResult.movieInfo.nations.length; i++) {
          if(i === json.movieInfoResult.movieInfo.nations.length-1)
            reqjson.nations = reqjson.nations.concat(json.movieInfoResult.movieInfo.nations[i].nationNm);  
          else
            reqjson.nations = reqjson.nations.concat(json.movieInfoResult.movieInfo.nations[i].nationNm, '|');  
          
      }

      for(let i = 0; i < json.movieInfoResult.movieInfo.genres.length; i++) {
        if(i === json.movieInfoResult.movieInfo.genres.length-1)
          reqjson.genres = reqjson.genres.concat(json.movieInfoResult.movieInfo.genres[i].genreNm);  
        else
          reqjson.genres = reqjson.genres.concat(json.movieInfoResult.movieInfo.genres[i].genreNm, '|');
          
      }

      for(let i = 0; i < json.movieInfoResult.movieInfo.directors.length; i++) {
        if(i === json.movieInfoResult.movieInfo.directors.length-1)
          reqjson.directors = reqjson.directors.concat(json.movieInfoResult.movieInfo.directors[i].peopleNm);  
        else
          reqjson.directors = reqjson.directors.concat(json.movieInfoResult.movieInfo.directors[i].peopleNm, '|');
      }

      for(let i = 0; i < json.movieInfoResult.movieInfo.actors.length; i++) {
        if(i === json.movieInfoResult.movieInfo.actors.length-1)  
          reqjson.actors = reqjson.actors.concat(json.movieInfoResult.movieInfo.actors[i].peopleNm);
        else
          reqjson.actors = reqjson.actors.concat(json.movieInfoResult.movieInfo.actors[i].peopleNm, '|');
        
      }

      for(let i = 0; i < json.movieInfoResult.movieInfo.showTypes.length; i++) {
        if(i === json.movieInfoResult.movieInfo.showTypes.length-1)
          reqjson.showTypes = reqjson.showTypes.concat(json.movieInfoResult.movieInfo.showTypes[i].showTypeNm);
        else
          reqjson.showTypes = reqjson.showTypes.concat(json.movieInfoResult.movieInfo.showTypes[i].showTypeNm, '|');
      }
      
      if(json.movieInfoResult.movieInfo.audits.length > 1) {
        reqjson.watchGradeNm = json.movieInfoResult.movieInfo.audits[json.movieInfoResult.movieInfo.audits.length-2].watchGradeNm;
      }
      else {
        reqjson.watchGradeNm = json.movieInfoResult.movieInfo.audits[json.movieInfoResult.movieInfo.audits.length-1].watchGradeNm;
      }
      
      if(json.movieInfoResult.movieInfo.movieCd !== null) {
        console.log('reqjson: ' + reqjson);
        fetch(BASE_URL, {
          method: 'POST',
          headers:{ 'Content-type': 'application/json;charset=UTF-8' },
          body: JSON.stringify(reqjson)

        })
        .then(response => response.json())
        .then(json => {
          console.log('json(backend)' + json);
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