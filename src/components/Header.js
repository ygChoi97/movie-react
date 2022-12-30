import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import React from "react";
import { Link } from "react-router-dom";

import '../css/style.css';

const Header = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log('Header Value: ' + newValue);
    };

    return(
        <div className='Header'>
        <Box marginTop={'30px'} marginBottom={'100px'} sx={{ borderBottom: 1, borderColor: "divider", width: '100%', bgcolor: 'background.paper' } }>
            <Tabs value={value} onChange={handleChange} indicatorColor="primary" centered>
                <Tab style={{fontSize: 'large'}} to="/movie" component={Link} label="영화" />
                <Tab style={{fontSize: 'large'}} to="/booking" component={Link} label="예매" />
                <Tab style={{fontSize: 'large'}} to="/theater" component={Link} label="극장" />
            </Tabs>
        </Box>
        </div>
    );
}

export default Header;