import React from 'react';
import "./Home.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TopBar from '../TopBar/TopBar';
import { Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import fulboAppLogo from '../../images/IMG_5248.jpg';

const Home = () => {
    const theme = useTheme();

    const mobileMatch = useMediaQuery(theme.breakpoints.down('700'));

    const handleClick = () => {
        console.log("Clicked button")
    }
    

    return (
        <div className="main-div">
            <TopBar />
            <header className="hero-section">
            <img className="fulboapp-logo" src={fulboAppLogo} alt='FulboApp logo'></img>
            {!mobileMatch? 
                <Typography variant="h1" sx={{mb: 6}}>
                    FulboApp
                </Typography>
            :
                <Typography variant="h2" sx={{mb: 4}}>
                    FulboApp
                </Typography>
            }
            <Stack direction="row" spacing={2}>
            <Button variant="contained" color='primary' onClick={handleClick}>
                Quiero jugar
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleClick}>
                Quiero crear un partido
            </Button>
            </Stack>
        </header>
        </div>
  )
}

export default Home