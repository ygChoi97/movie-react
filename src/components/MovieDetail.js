import React, { useEffect, useState } from 'react';
import { NavLink, Route, Routes, useSearchParams } from 'react-router-dom';
import { BASE_URL } from './BoxOffice';
import MovieDetailCrew from './MovieDetailCrew';
import MovieDetailMain from './MovieDetailMain';
import "../css/moviedetail.css";
import "../css/nav.css";

const MovieDetail = () => {

    console.log('무비디테일 페이지 진입');
    
    // const movieCd = useParams().movieCd;
    const [searchParams, SetSearchParams] = useSearchParams();
    const movieCd = searchParams.get('movieCd');
    const [movie, setMovie] = useState({});
    
    useEffect(() => {
        fetch(BASE_URL + `/${movieCd}`)
        .then(res => res.json())
        .then(json => {
            setMovie(json);
        })
    }, []);
    
    // const openDt2 = movie.openDt.substring(0,4) + '.' + movie.openDt.substring(4,6) + '.' + movie.openDt.substring(6,8);
    
    return(
        <>
            <div className='movie-basic'>
                <div className='info-poster'>
                    <img src={movie.imgURL}/>
                </div>
                <div className='info-detail'>
                    <div className='detail-tit'>
                        <div className='tit-movie'>
                            <span className='txt-tit'> {movie.movieNm} </span>
                        </div>
                    
                        <div className='tit-movie-en'>
                            <span className='txt-name'> {movie.movieNmEn} </span>
                        </div>
                    </div>
                
                    <div className='detail-cont'>
                        <div className='inner-cont'>
                            <dl class='list-cont'>
                                <dt>개봉</dt> 
                                <dd>{movie.openDt}</dd>
                            </dl>
                            <dl class='list-cont'>
                                <dt>장르</dt> 
                                <dd>{movie.genres}</dd>
                            </dl>
                            <dl class='list-cont'>
                                <dt>국가</dt> 
                                <dd>{movie.nations}</dd>
                            </dl>
                            <dl class='list-cont'>
                                <dt>등급</dt> 
                                <dd>{movie.watchGradeNm}</dd>
                            </dl>
                            <dl class='list-cont'>
                                <dt>러닝타임</dt> 
                                <dd>{movie.showTm}분</dd>
                            </dl>
                            <dl class='list-cont'>
                                <dt>감독</dt> 
                                <dd>{movie.directors}</dd>
                            </dl>
                            <dl class='list-cont'>
                                <dt>상영타입</dt> 
                                <dd>{movie.showTypes}</dd>
                            </dl>
                        </div>
                        <div className='inner-cont'>
                            <dl class='list-cont'>
                                <dt>평점</dt> 
                                <dd>8.9</dd>
                            </dl>
                            <dl class='list-cont'>
                                <dt>예매율</dt> 
                                <dd>62/5%</dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
            
                {/* <NavLink to="/movie-detail"><li>주요정보</li></NavLink>
                <NavLink to="/movie-detail/crew"><li>출연/제작</li></NavLink> */}

            <nav id="nav2">
                <ul>
                    <NavLink to="/movie-detail"><li>주요정보</li></NavLink>
                    <NavLink to="/movie-detail/crew"><li>출연/제작</li></NavLink>
                </ul>
            </nav>
            <hr/>
            
            <Routes>
                <Route path="/" element={<MovieDetailMain key={movie.movieCd} movie={movie}/>} />
                <Route path="/crew" element={<MovieDetailCrew key={movie.movieCd} movie={movie}/>} />
        </Routes>
        </>
    );
}

export default MovieDetail;