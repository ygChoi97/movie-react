import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link, Route, Routes } from "react-router-dom";
import ComingSoon from "./ComingSoon";
import BoxOffice from './BoxOffice';
import CarouselEx from'./CarouselEx';
import { fontSize } from '@mui/system';
import SlickEx from './SlickEx';

export default function MovieInfo() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log('MovieInfo Value: ' + newValue);
  };

  return (
    
    <div className='MovieInfo'>
        <Box marginBottom={'50px'} sx={{ width: '100%', bgcolor: 'background.paper' }}>
            <Tabs value={value} 
                  onChange={handleChange} 
                  indicatorColor="secondary" 
                  centered
            >
                <Tab to="/movie" component={Link} label="박스오피스" />
                <Tab to="/movie/comingsoon" component={Link} label="상영예정작" />    
            </Tabs>
        </Box>
        <Routes>
            <Route path="/" element={<SlickEx/>} />
            <Route path="/comingsoon" element={<CarouselEx/>} />
        </Routes>
    </div>  

  );
}