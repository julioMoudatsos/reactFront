import React, { useState, useEffect } from 'react';
import '../perfiluser.scss';
import InfoUserService from '../../../Services/InfoUserService'
import { Typography } from '@mui/material';

export const HeaderUser = () => {

  const [id, setId] = useState(localStorage.getItem('id'));

  const [infoUser, setInfoUser] = useState([]);
  useEffect(async () => {
    const Service = new InfoUserService
    await Service.getContratadoById(id)
    if (Service.state.res.status === 200) {
      setInfoUser(Service.state.res.data)
    }
  }, []);

  return (
    <div className="HeaderApp">
      <div className="fotoPerfil">
        <img style={{ width: '150px' }} src="https://i.pinimg.com/originals/1d/4d/69/1d4d69c694c8ba1034c0e9552f457ecf.jpg" alt="caio" />
      </div>
      <div className="info1">
        <Typography variant='h5' sx={{ paddingTop: 3 }}>{infoUser.nome}</Typography>
        <Typography sx={{ paddingTop: 2 }}> <b>Telefone: </b>{infoUser.telefone}</Typography>
        <Typography> <b>Email: </b>{infoUser.email}</Typography>
      </div>
      <div className="info2" style={{ paddingLeft: '13vh' }}>
        <Typography variant='h5' sx={{ paddingTop: 3 }}>Quem sou eu:</Typography>

        <Typography style={{width:'400px'}} sx={{ paddingTop: 2}}> {!infoUser.quem_sou ? 'Sem dados' : infoUser.quem_sou} </Typography>
       
      </div>
    </div>
  );
};
