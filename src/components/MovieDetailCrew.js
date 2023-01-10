import React, { useState } from "react";

const MovieDetailCrew = ({movie}) => {

    const [movieState, setMovieState] = useState(movie);
    const {directors, actors, companys} = movieState;
    const companysArr = [{companyPartNm:'', companyNm:''}];

    const eachCompany = companys.split(',');
    for(let i=0; i<eachCompany.length; i++) {
        let companyInfo = eachCompany.split(':');  
        eachCompany[i].companyPartNm = companyInfo[0];
        eachCompany[i].companyNm = companyInfo[1];
    }

    return(
        

                <>
                <div style={{marginBottom:'20px'}}>
                    감독 : {directors}
                </div>
                <div style={{marginBottom:'20px'}}>
                    배우 : {actors}
                </div>
                </>
        
    );
        
}

export default MovieDetailCrew;