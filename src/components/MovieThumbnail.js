import { Button, Grid } from '@mui/material';
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../css/moviethumbnail.css';

const MovieThumbnail = ({movie}) => {
    
    const [movieState, setMovieState] = useState(movie);

    const {movieCd, movieNm, openDt, imgURL, watchGradeNm} = movieState;

    const openDt2 = openDt.substring(0,4) + '.' + openDt.substring(4,6) + '.' + openDt.substring(6,8);

    console.log('movie: ', movieNm.length);

    const navigate = useNavigate();
    const bookingClickHandler = e => {
        navigate(`/booking?movieCd=${movieCd}`);
    }
    return(

        <Grid item lg={3} md={4} sm={6} xs={12}>
            
                <div className="movie-thumbnail">
                    
                    <div className="movie-lanking">
                        <p>No. 1</p>
                    </div>
                    
                    <div className="movie-image" >
                        <Link to={`/movie-detail/?movieCd=${movieCd}`}>
                            <img src={imgURL} alt={{movieNm}} />                                
                        </Link>
                    </div>
                    
                    <div className="movie-content">
                        <span className='movie-grade'></span> 
                        <span className='movie_title'>{movieNm}</span>
                    </div>
                    <div className="movie-openday">
                        <span>{openDt2} 개봉</span>
                        <Button variant="contained" size="small" color="primary" onClick={bookingClickHandler}>예매</Button>
                    </div>
                </div>           
                 
        </Grid>
 
    );
}

export default MovieThumbnail;