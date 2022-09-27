import { Grid } from '@mui/material';
import { HubConnectionBuilder, LogLevel } from '@microsoft/signalr';
import { Component, useEffect, useState } from 'react';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import RoomBlockContratante from '../../../Components/RoomBlock/RoomBlockContratante';
import ChatService from '../../../Services/ChatService';
import Chat from '../../../Components/ChatBlock/ChatBlock';
import DashboardContratante from '../../../Components/Dashboard/DashboardContratante';

export default function MessagesContratante() {
  const [id] = useState(localStorage.getItem("idCont"));
  const [idUser, setIdUser] = useState();
  const [myName] = useState(localStorage.getItem("nameCont"));
  const [outroName, setOutroName] = useState();
  const [rooms, setRooms] = useState([])
  const [connection, setConnection] = useState();
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState();
  const [idRoom, setIdRoom] = useState();

  const joinRoom = async (user, room) => {
    try {
      const connection = new HubConnectionBuilder()
        .withUrl("https://localhost:44382/chat")
        .configureLogging(LogLevel.Information)
        .build();

      connection.on("ReceiveMessage", (user, message) => {
        setMessages(messages => [...messages, { user, message }]);
      });

      connection.on("UsersInRoom", (users) => {
        setUsers(users);
      });

      connection.onclose(e => {
        setConnection();
        setMessages([]);
        setUsers([]);
      });

      await connection.start();
      await connection.invoke("JoinRoom", { user, room });
      setConnection(connection);
    } catch (e) {
      console.log(e);
    }
  }
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
        await service.getRoomsByCont(id);
        if(service.state.res.status === 200)
        setRooms(service.state.res.data)
      }
      loadChats();
    }, []);

    const click = async (name, id, idContratado) =>{
        if(connection != undefined){
          console.log("fechou")
          closeConnection();
      }
        setOutroName(name)
        setIdRoom(id)
        setIdUser(idContratado)
        joinRoom(myName,id.toString())
      }

    return (
      <>
        <DashboardContratante>
          <Grid container>
            <Grid item xs={12} sm={3}>
              {rooms.map((item) => (
                <RoomBlockContratante
                  click={click}
                  item={item}
                  key={item.id_Room}
                ></RoomBlockContratante>
              ))}
            </Grid>
            <Grid item xs={12} sm={9}>
            {!users
               ? <p>Selecione um Chat </p>
               : <Chat sendMessage={sendMessage} myName={myName} messages={messages} idUser={idUser} users={outroName} id_room={idRoom}/>
              }
            </Grid>
          </Grid>
        </DashboardContratante>
      </>
    );
  }
