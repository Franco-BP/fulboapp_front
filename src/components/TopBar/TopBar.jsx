import { AppBar, Button, IconButton, Toolbar, Typography, Backdrop, Modal, Fade, Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React from 'react'
import './TopBar.css'
import LoginForm from './LoginForm'
import RegistrationForm from './RegistrationForm'
import { useTheme } from '@mui/material/styles'
import { useMediaQuery } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const TopBar = () => {
    const SXAPPBAR = {
        // backgroundColor: "#196f3a",
        backgroundImage: "linear-gradient(#196f3a, #282c34)",
        position: "sticky",
        border: "none"
    }

    const STYLE = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: "50%",
        bgcolor: 'background.paper',
        border: '2px solid #000',
        borderRadius: 4,
        boxShadow: 24,
        p: 4,
    }

    const [open, setOpen] = React.useState(false);
    const [modalForm, setForm] = React.useState(null);
    const theme = useTheme();
    const mobileMatch = useMediaQuery(theme.breakpoints.down('500'));
    const navigate = useNavigate();

    const navigateToHome = () => {
        navigate('/');
    }

    const handleMenu = () => {

    }

    const handleOpen = (modalForm) => {
        setForm(modalForm);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }

    return (
        <div className="main-div-topbar">
            <AppBar sx={SXAPPBAR}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr : 2}}
                        onClick={handleMenu}
                    >
                        <MenuIcon />
                    </IconButton>
                    {!mobileMatch? 
                    <div className="fulboapp-name-container">
                        <Typography
                            className="fulboapp-name" variant="h6" component="div" align="left"
                            sx={{ flexGrow: 1 }} onClick={navigateToHome}
                        >
                            FulboApp
                        </Typography>
                    </div>
                    :
                    <div></div>}
                    <Button color="inherit" onClick={() => handleOpen("login")}>Iniciar Sesión</Button>
                    <Button color="inherit" onClick={() => handleOpen("registration")}>Registrarse</Button>
                </Toolbar>
            </AppBar>

            <Modal
                aria-labelledby="profile-login-form"
                aria-describedby="login-or-registration"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                    backdrop: {timeout: 500},
                }}
            >
                <Fade in={open}>
                    <Box sx={STYLE}>
                        <Typography id="profile-login-title" variant="h6" component="h2" align="center">
                            {modalForm === "login" ? "Iniciar sesión" : "Registrarse"}
                        </Typography>
                        <Typography id="login-description" sx={{ mt: 2 }}>
                            {modalForm === "login" ? <LoginForm onClose={handleClose}/> : <RegistrationForm onClose={handleClose}/>}
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default TopBar