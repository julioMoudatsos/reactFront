import { TextField, Typography, Link, Button } from "@mui/material";
import InfoContrantanteService from '../../Services/InfoContratanteService';
import { Component, useEffect, useState } from 'react';
import SendMessageForm from './SendMessageForm';
import MessageContainer from './MessageContainer';
import ChatService from "../../Services/ChatService";
import WorkService from "../../Services/WorkService";
import MenuItem from '@mui/material/MenuItem';


function ChatDev({ sendMessage, messages, users, myName, id_room }) {
    const [messagesAntigas, setMessagesAntigas] = useState([]);
    const [works, setWorks] = useState([]);
    const [selected, setSelected] = useState();
    const [aprovado, setAprovado] = useState(false);

    useEffect(() => {
        async function loadChat() {
            const service = new ChatService();
            await service.getMessageByRoom(id_room);
            if (service.state.res.status == 200)
                setMessagesAntigas(messages => [...messages, service.state.res.data]);
        }
        loadChat();
    }, [id_room])
    return (
        <div style={{
            backgroundColor: "#D7D7D7", maxHeight: "75vh", height: "75vh", width: "100%", display: "flex", flexDirection: "column",
            justifyContent: "space-between"
        }}>
            <div style={{ backgroundColor: "White", height: "40px", width: "100%", display: "flex", alignItems: "center" }}>
                <p>{users}</p>
            </div>
            <MessageContainer messages={messages} nome={users} myName={myName} />
            <div>
                <SendMessageForm sendMessage={sendMessage} />
            </div>
        </div>
    )
}
export default ChatDev;