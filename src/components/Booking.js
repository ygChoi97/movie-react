import React from "react";
import { useSearchParams } from "react-router-dom";

const Booking = () => {
    console.log('영화예약 페이지 진입');
    
    // const movieCd = useParams().movieCd;
    const [searchParams, SetSearchParams] = useSearchParams();

    
    return(
        <div>
            영화 ({searchParams.get('movieCd')} {searchParams.get('movieNm')}) 예약페이지입니다.
        </div>
    );
}

export default Booking;