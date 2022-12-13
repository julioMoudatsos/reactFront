import { Grid } from '@mui/material';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { useEffect, useState } from 'react';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import RoomBlock from '../../../Components/RoomBlock/RoomBlock';
import ChatService from '../../../Services/ChatService';
import ChatDev from '../../../Components/ChatBlock/ChatBlockDev';

export default function Messages() {
  const [id] = useState(localStorage.getItem("id"));
  const [myName] = useState(localStorage.getItem("name"));
  const [outroName, setOutroName] = useState();
  const [rooms, setRooms] = useState([])
  const [connection, setConnection] = useState();
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState();
  const [idRoom, setIdRoom] = useState();


  const sendMessage = async (message) => {
    try {
      await connection.invoke("SendMessage", message);
    } catch (e) {
      console.log(e);
    }
  }

  const closeConnection = async () => {
    try {
      await connection.stop();
    } catch (e) {
      console.log(e);
    }
  }
  
    useEffect(() => {
      async function loadChats() {
        const service = new ChatService();
        await service.getRoomsByDev(id);
        if(service.state.res.status === 200)
        setRooms(service.state.res.data)
      }
      loadChats();
    }, [id]);

    const click = async (name, id) =>{
      if(connection !== undefined){
        console.log("fechou")
        closeConnection();
    }
      setOutroName(name)
      setIdRoom(id)
      // eslint-disable-next-line no-undef
      joinRoom(myName,id.toString())
    }

    return (
      <>
        <Dashboard>
          <Grid container>
            <Grid item xs={12} sm={3}>
              {rooms.map((item) => (
                <RoomBlock
                  click={click}
                  item={item}
                  key={item.id_Room}
                ></RoomBlock>
              ))}
            </Grid>
            <Grid item xs={12} sm={9}>
            {!users
               ? <p>Selecione um Chat </p>
               : <ChatDev sendMessage={sendMessage} myName={myName} messages={messages} users={outroName} id_room={idRoom}/>
              }
            </Grid>
          </Grid>
        </Dashboard>
      </>
    );
  }
