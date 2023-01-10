import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../css/nav.css";
import '../css/style.css';

const Header = () => {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
        console.log('Header Value: ' + newValue);
    };

    return(
        <div className='Header'>
        {/* <Box marginTop={'30px'} marginBottom={'50px'} sx={{ borderBottom: 1, borderColor: "divider", width: '100%', bgcolor: 'background.paper' } }>
            <Tabs value={value} onChange={handleChange} indicatorColor="primary" centered>
                <Tab style={{fontSize: 'large'}} to="/movie" component={Link} label="영화" />
                <Tab style={{fontSize: 'large'}} to="/theater" component={Link} label="극장" />
                <Tab style={{fontSize: 'large'}} to="/booking" component={Link} label="예매" />
                
            </Tabs>
        </Box> */}
            <div className='right-rink' style={{display:'flex', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end'}}>
                <div className='before' style={{display:'flex', flexDirection: 'row', justifyContent: 'flex-end'}}><NavLink to='/signin'><span>로그인</span></NavLink><NavLink to="/join"><span style={{padding:'0 10px'}}>회원가입</span></NavLink></div>
                <div className='after' style={{padding: '0 10px'}}><NavLink to="/booking">빠른예매</NavLink></div>
            </div>
            <div className='nav_main'>
                <nav id="nav1">
                    <ul>
                        <NavLink to ="/"><li>HOME</li></NavLink>
                        <NavLink to ="/movie"><li>영화</li></NavLink>
                        <NavLink to ="/theater"><li>극장</li></NavLink>
                        <NavLink to ="/booking"><li>예매</li></NavLink>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;