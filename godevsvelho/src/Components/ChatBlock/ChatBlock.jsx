import { TextField, Button } from "@mui/material";
import { useEffect, useState } from 'react';
import SendMessageForm from './SendMessageForm';
import MessageContainer from './MessageContainer';
import ChatService from "../../Services/ChatService";
import WorkService from "../../Services/WorkService";
import MenuItem from '@mui/material/MenuItem';
import CloseIcon from '@mui/icons-material/Close';

function Chat({ sendMessage, messages, idUser, users, myName, id_room }) {
    const [setMessagesAntigas] = useState([]);
    const [works, setWorks] = useState([]);
    const [selected, setSelected] = useState("");
    const [aprovado, setAprovado] = useState(false);
    const [id] = useState(localStorage.getItem("idCont"));
    const pickWork = () => {
        const workService = new WorkService();
        workService.pickWork(idUser, selected)
    }
    useEffect(() => {
        async function loadChat() {
            const service = new ChatService();
            await service.getMessageByRoom(id_room);
            if (service.state.res.status === 200)
                setMessagesAntigas(messages => [...messages, service.state.res.data]);
        }
        async function loadWorks() {
            const workService = new WorkService();
            await workService.getWorksByCont(id);
            if (workService.state.res.status === 200)
                setWorks(workService.state.res.data)
        }
        loadChat();
        loadWorks();
    }, [id, id_room, setMessagesAntigas])
    return (
        <div style={{
            backgroundColor: "#D7D7D7", maxHeight: "75vh", height: "75vh", width: "100%", display: "flex", flexDirection: "column",
            justifyContent: "space-between"
        }}>
            <div style={{ backgroundColor: "White", justifyContent: "space-between", height: "40px", widht: "100%", display: "flex", alignItems: "center" }}>
                <p>{users}</p>
                <Button
                    size='small'
                    type="submit"
                    onClick={() => setAprovado(true)}
                    variant="contained"
                >
                    Aprovar
                </Button>
            </div>
            <MessageContainer messages={messages} nome={users} myName={myName} />
            <SendMessageForm sendMessage={sendMessage} />
            {aprovado ?
                <div style={{
                    position: "absolute",
                    zIndex: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: "auto",
                    height: "auto"
                }}>
                    <div style={{
                        width: '350px',
                        backgroundColor: '#ffffff',
                        borderRadius: '8px',
                        display: 'flex',
                        padding: 8,
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxShadow: '1px 1px 7px rgb(0, 0, 0, 1)',
                    }}>
                        <div style={{alignSelf: "flex-end"}}>
                            <CloseIcon onClick={()=>setAprovado(false)} />
                        </div>
                        <TextField
                            label={'Escolha o Trabalho'}
                            id="outlined-select-currency"
                            select
                            fullWidth
                            value={selected}
                            sx={{ mt: 1, mb: 1 }}
                            onChange={(e) => { setSelected(e.target.value) }}
                            size='small'
                        >
                            {works.map((option) => (
                                <MenuItem key={option.id_work} value={option.id_work}>
                                    {option.titulo}
                                </MenuItem>
                            ))}
                        </TextField>
                        {selected ? <Button
                            size='large'
                            type="submit"
                            fullWidth
                            onClick={pickWork}
                            variant="contained"
                        >
                            Confirmar
                        </Button> : null}
                    </div>
                </div>
                : null}
        </div>
    )
}
export default Chat;