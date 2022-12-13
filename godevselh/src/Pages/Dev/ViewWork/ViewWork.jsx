import Dashboard from '../../../Components/Dashboard/Dashboard';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import WorkService from '../../../Services/WorkService';
import Typography from '@mui/material/Typography';
import Moment from 'react-moment';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ChatService from '../../../Services/ChatService';
import bonecoDinheiro from '../../../Components/Index/imgs/bonecoDinheiro.png';
import ViewCss from '../ViewWork/ViewWork.scss'


export const ViewWork = () => {
    const { id } = useParams();
    const [idDev] = useState(localStorage.getItem("id"))
    const [work, setWork] = useState("");
    const [contratante, setContratante] = useState("");

    const pickWorkOnClick = async () => {
        const service = new ChatService();
        await service.createRoom(contratante.contratante_id, idDev);
    }

    useEffect(async () => {
        const service = new WorkService();
        await service.getWorksById(id);
        if (service.state.res.status === 200) {
            setWork(service.state.res.data)
            setContratante(service.state.res.data.contratante)
        }
    }, []);

    return (
        <Dashboard>
            {/* <div style={{ display: 'flex' }}>
                <img src={bonecoDinheiro} />
            </div> */}

            <div className="App">
                <div className="infos">
                    <Typography variant="h3">{work.titulo}</Typography>

                    <Typography marginTop={2} variant="h6"><b>Contratante: </b>{contratante.nome}</Typography>
                    <Typography marginTop={2} variant="h6"><b>Linguagem:</b> {work.categoria}</Typography>
                    <Typography marginTop={2} variant="h6"><b>Data Limite:</b> <Moment format="DD/MM/YYYY">{work.data_limite}</Moment></Typography>
                    <Typography marginTop={2} variant="h6"><b>Valor: </b>R${work.valor}</Typography>
                    <Typography className='descri' marginTop={2} variant="h6"><b>Descrição:</b> <br />{work.descricao}</Typography>

                    <Button
                        onClick={pickWorkOnClick}
                        style={{ marginTop: 20 }}
                        size="medium"
                        variant="contained">
                        Pegar Trabalho</Button>
                </div>
                <div className="img-dinheiro">
                    <img src={bonecoDinheiro} alt="" />
                </div>
            </div>

        </Dashboard >
    );
};
