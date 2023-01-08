import React from "react";

const MovieDetailMain = ({movie}) => {
    return(
        <>
            <div>
                {movie.plot}
            </div>
        </>
    );
}

export default MovieDetailMain;