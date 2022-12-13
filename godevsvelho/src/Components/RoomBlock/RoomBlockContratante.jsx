import { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import InfoUserService from '../../Services/InfoUserService';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function RoomBlockContratante(props) {
    const [nome, setNome] = useState();
    const [idContratado] = useState(props.item.fk_contratado);
    useEffect(() => {
        async function fetchData(){
            const service = new InfoUserService();
            await service.getContratadoById(idContratado)
            setNome(service.state.res.data.nome)
        }
        fetchData()
    }, [idContratado]);
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
                onClick={()=> props.click(nome, props.item.id_Room, idContratado)}

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
