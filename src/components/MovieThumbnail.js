import { Button, Grid } from '@mui/material';
import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import '../css/moviethumbnail.css';

const MovieThumbnail = ({movie}) => {
    
    const [movieState, setMovieState] = useState(movie);

    const {movieCd, movieNm, openDt, screeningType, imgURL, watchGradeNm} = movieState;

    const openDt2 = openDt.substring(0,4) + '.' + openDt.substring(4,6) + '.' + openDt.substring(6,8);

    console.log('movie: ', movieNm.length);

    const navigate = useNavigate();
    const bookingClickHandler = e => {
        navigate(`/booking?movieCd=${movieCd}`);
    }
    return(

        movie.screeningType === 0 || movie.screeningType === 1 ?
        watchGradeNm.includes('12') ?
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
                        <span className='movie-grade12'></span> 
                        <span className='movie_title'>{movieNm}</span>
                    </div>
                    <div className="movie-openday">
                        <span>{openDt2} 개봉</span>
                            <Button variant="contained" size="small" color="primary" onClick={bookingClickHandler}>예매</Button>
                        
                    </div>
                </div>           
        </Grid>
        : watchGradeNm.includes('15') ?
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
                        <span className='movie-grade15'></span> 
                        <span className='movie_title'>{movieNm}</span>
                    </div>
                    <div className="movie-openday">
                        <span>{openDt2} 개봉</span>
                            <Button variant="contained" size="small" color="primary" onClick={bookingClickHandler}>예매</Button>
                        
                    </div>
                </div>           
        </Grid>

        : watchGradeNm.includes('18') || watchGradeNm.includes('청소년관람불가') ?
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
                        <span className='movie-grade18'></span> 
                        <span className='movie_title'>{movieNm}</span>
                    </div>
                    <div className="movie-openday">
                        <span>{openDt2} 개봉</span>
                            <Button variant="contained" size="small" color="primary" onClick={bookingClickHandler}>예매</Button>
                        
                    </div>
                </div>           
        </Grid>

        :

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
                        <span className='movie-gradeAll'></span> 
                        <span className='movie_title'>{movieNm}</span>
                    </div>
                    <div className="movie-openday">
                        <span>{openDt2} 개봉</span>
                            <Button variant="contained" size="small" color="primary" onClick={bookingClickHandler}>예매</Button>
                        
                    </div>
                </div>           
        </Grid>
        :
        watchGradeNm.includes('12') ?
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
                        <span className='movie-grade12'></span> 
                        <span className='movie_title'>{movieNm}</span>
                    </div>
                    <div className="movie-openday">
                        <span>{openDt2} 개봉</span>
                            <Button variant="contained" size="small" color="primary" disabled="true">개봉예정</Button>
                        
                    </div>
                </div>           
        </Grid>
        : watchGradeNm.includes('15') ?
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
                        <span className='movie-grade15'></span> 
                        <span className='movie_title'>{movieNm}</span>
                    </div>
                    <div className="movie-openday">
                        <span>{openDt2} 개봉</span>
                            <Button variant="contained" size="small" color="primary" disabled="true">개봉예정</Button>
                        
                    </div>
                </div>           
        </Grid>

        : watchGradeNm.includes('18') || watchGradeNm.includes('청소년관람불가') ?
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
                        <span className='movie-grade18'></span> 
                        <span className='movie_title'>{movieNm}</span>
                    </div>
                    <div className="movie-openday">
                        <span>{openDt2} 개봉</span>
                            <Button variant="contained" size="small" color="primary" disabled="true">개봉예정</Button>
                        
                    </div>
                </div>           
        </Grid>

        :

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
                        <span className='movie-gradeAll'></span> 
                        <span className='movie_title'>{movieNm}</span>
                    </div>
                    <div className="movie-openday">
                        <span>{openDt2} 개봉</span>
                            <Button variant="contained" size="small" color="primary" disabled="true">개봉예정</Button>
                        
                    </div>
                </div>           
        </Grid>

 
    );
}

export default MovieThumbnail;