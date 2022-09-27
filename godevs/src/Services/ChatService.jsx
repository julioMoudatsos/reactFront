import axios from 'axios';
import {  toast } from 'react-toastify';

const urlBase = process.env.REACT_APP_CHAT_ADDRESS;
const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*',
    'Content-Type': 'application/json',
};

class ChatService {
    constructor() {
        this.state = {
            res: []
        };
    }

    createRoom(fk_contratante, fk_contratado) {
        return axios.post(`${urlBase}/api/Rooms`,
            {
                fk_contratante: fk_contratante,
                fk_contratado: fk_contratado,
            },
            { headers: headers })
            .then(res => { this.state.res = res
                if (res.status === 201) {
                    toast.success('Foi criado um chat entre você e o contratante.', {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                }})
            .catch((err) => {
                console.error(`request failed ${err}`);
            });
    }

    getMessageByRoom(id){
        return axios.get(`${urlBase}/room/${id}`,
        { headers: headers })
           .then(res => { this.state.res = res})
           .catch((err) => {
               console.error(`request failed ${err}`);
           });
    }

    getRoomsByDev(id) {
        return axios.get(`${urlBase}/contratado/${id}`,
         { headers: headers })
            .then(res => { this.state.res = res})
            .catch((err) => {
                console.error(`request failed ${err}`);
            });
    }
    
    getRoomsByCont(id) {
        return axios.get(`${urlBase}/contratante/${id}`,
         { headers: headers })
            .then(res => { this.state.res = res})
            .catch((err) => {
                console.error(`request failed ${err}`);
            });
    }


}


export default ChatService;