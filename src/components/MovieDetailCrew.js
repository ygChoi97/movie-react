import React from "react";

const MovieDetailCrew = ({movie}) => {
    return(
        <div style={{}}>
            <div style={{marginBottom:'20px'}}>
                감독 : {movie.directors}
            </div>
            <div>
                배우 : {movie.actors}
            </div>
        </div>
    );
}

export default MovieDetailCrew;