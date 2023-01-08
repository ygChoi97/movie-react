import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link, NavLink, Route, Routes } from "react-router-dom";
import ComingSoon from "./ComingSoon";
import BoxOffice from './BoxOffice';
import CarouselEx from'./CarouselEx';
import { fontSize } from '@mui/system';
import SlickEx from './SlickEx';
import "../css/nav.css";

export default function NavMovie() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log('NavMovie: ', newValue);
  };

  console.log('NavMovie 진입');

  return (
    
    <div className='NavMovie'>
        {/* <Box marginBottom={'50px'} sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} 
                  onChange={handleChange} 
                  indicatorColor="secondary" 
                  centered
            >
                <Tab to="/movie" component={Link} label="박스오피스" />
                <Tab to="/movie/comingsoon" component={Link} label="상영예정작" />    
            </Tabs>
        </Box> */}
        
        <nav id="nav2">
                <ul>
                    <NavLink to ="/movie"><li>박스오피스</li></NavLink>
                    <NavLink to ="/movie/comingsoon"><li>상영예정작</li></NavLink>
                </ul>
        </nav>
        <Routes>
            <Route path="/" element={<BoxOffice/>} />
            <Route path="/comingsoon" element={<ComingSoon/>} />
        </Routes>
    </div>  

  );
}