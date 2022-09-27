import { Button, TextField } from "@mui/material";
import { useState } from 'react';

const SendMessageForm = ({ sendMessage }) => {
    const [message, setMessage] = useState('');

    return <form
        style={{width: "100%"}}
        onSubmit={e => {
            e.preventDefault();
            sendMessage(message);
            setMessage('');
        }}>
        <TextField
            label={'Mensagem'}
            fullWidth
            value={message}
            onChange={e => setMessage(e.target.value)}
            variant="standard" 
            size='small' />
        <Button fullWidth variant="contained" type="submit" disabled={!message}>Enviar</Button>
    </form>
}

export default SendMessageForm;