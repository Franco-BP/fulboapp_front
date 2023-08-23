import React from 'react';
import "./Home.css";
import { Typography, useMediaQuery } from '@mui/material';
import { useTheme, createTheme, ThemeProvider } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import { useNavigate } from 'react-router-dom';
import fulboAppLogo from '../../images/IMG_5248.jpg';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import TopBar from '../TopBar/TopBar';
import Footer from '../Footer/Footer';

const theme = createTheme({
    palette: {
        primary: green,
        secondary: green,
    },
});

const Home = () => {
    const screen = useTheme();
    const mobileMatch = useMediaQuery(screen.breakpoints.down('700'));
    const navigate = useNavigate();

    const navigateToPlay = () => {
        navigate('/play');
    }

    const navigateToCreate = () => {
        navigate('/create');
    }

    return (
        <div className="main-div-home">
            <TopBar />
            <div className="hero-section-home">
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
                <ThemeProvider theme={theme}>
                    <Button variant="contained" color="primary" onClick={navigateToPlay}>
                        Unirme
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={navigateToCreate}>
                        Crear
                    </Button>
                </ThemeProvider>
                </Stack>
            </div>
            <Footer/>
        </div>
  )
}

export default Home