import { Component, useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import InfoContrantanteService from '../../Services/InfoContratanteService';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function RoomBlock(props) {
    const [nome, setNome] = useState();
    const [idContratante] = useState(props.item.fk_contratante);
    useEffect(async () => {
        const service = new InfoContrantanteService();
        await service.getContratanteById(idContratante)
        setNome(service.state.res.data.nome)
    }, []);
    return (
        <>
            <div
                style={{
                    width: "100%",
                    minHeight: "60px",
                    maxHeight: "60px",
                    display: 'flex',
                    paddingLeft : "30px",
                    columnGap: "10px",
                    alignItems: "center",
                    cursor: "pointer"
                }}
                onClick={()=> props.click(nome, props.item.id_Room)}

            >
                <AccountCircleIcon fontSize="large"/>
                <Typography>
                    {nome}
                </Typography>
            </div>
            <div style={{
                width: "100%",
                display: 'flex',
                justifyContent: "center",
                height: "1px"
            }}>
                <div style={{
                    height: "1px",
                    backgroundColor: "gray",
                    width: "80%",
                    borderRadius: "5%",
                    opacity: "80%"
                }}>
              </div>
            </div>
        </>
    );
}
