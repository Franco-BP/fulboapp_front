import React from 'react';
import { TextField, Button } from '@mui/material';

const SXTEXTFIELD = {
    width: '100%',
    mt: 2
}

const RegistrationForm = ({onClose}) => {
    const handleSubmit = () => {
        /*
        Logica para guardar los datos y mandarlos a la BD.
        */
        onClose();
    }

    return (
        <div>
            <TextField label="e-mail" variant="outlined" sx={SXTEXTFIELD}/>
            <TextField label="contraseña" variant="outlined" type="password" sx={SXTEXTFIELD}/>
            <Button variant="contained" color="success" sx={{mt: 2}} onClick={handleSubmit}>Enviar</Button>
        </div>
    )
}

export default RegistrationForm;