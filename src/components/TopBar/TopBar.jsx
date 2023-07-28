import { AppBar, Button, IconButton, Toolbar, Typography, Backdrop, Modal, Fade, Box } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import React, { useState } from 'react'
import './TopBar.css'
// import LoginForm from './LoginForm'
// import RegistrationForm from './RegistrationForm'

const TopBar = () => {
    const SXAPPBAR = {
        backgroundColor: "#196f3a",
        position: "sticky"
    }

    const STYLE = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const [modalForm, setForm] = React.useState(null);

    const handleOpen = (modalForm) => {
        setForm(modalForm);
        setOpen(true);
    }

    const handleClose = () => setOpen(false);

    return (
        <div className="main-div">
            <AppBar sx={SXAPPBAR}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{mr : 2}}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className="fulboapp-name" variant="h6" component="div" align="left" sx={{ flexGrow: 1 }}
                    >
                        FulboApp
                    </Typography>
                    <Button color="inherit" onClick={handleOpen}>Iniciar Sesión</Button>
                    <Button color="inherit" onClick={handleOpen}>Registrarse</Button>
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
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                    Text in a modal
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
                    </Typography>
                </Box>
                </Fade>
            </Modal>
        </div>
    )
}

export default TopBar