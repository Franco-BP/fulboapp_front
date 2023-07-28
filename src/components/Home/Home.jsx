import React from 'react'
import "./Home.css"
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Home = () => {
    const handleClick = () => {
        console.log("Clicked button")
    }
    

    return (
        <div className="main-div">
            <header className="App-header">
            <h1>FulboApp</h1>
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