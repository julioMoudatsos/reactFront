import React, { useState, useEffect } from 'react';
import '../perfiluser.scss';
import { TextField, Typography, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import LogoReact from '../imgs/logoReact.png';
import LogoSpring from '../imgs/springlogo.png';
import LogoHtml from '../imgs/htmlLogo.png';
import LogoJs from '../imgs/jslogos.png';
import LogoCss from '../imgs/csslogo.jpg';
import LogoAngular from '../imgs/angularlogo.jpg';
import InfoUserService from '../../../Services/InfoUserService';
import face from '../imgs/face.png'
import linkedin from '../imgs/linkedin.png'

export const InfoUser = () => {
  const [name, setName] = useState(localStorage.getItem('name'));
  const [telefone, setTelefone] = useState(localStorage.getItem('telefone'));
  const [email, setEmail] = useState(localStorage.getItem('email'));
  const [id, setId] = useState(localStorage.getItem('id'));

  const [infoUser, setInfoUser] = useState([]);
  useEffect(async () => {
    const Service = new InfoUserService
    await Service.getContratadoById(id)
    if (Service.state.res.status === 200) {
      setInfoUser(Service.state.res.data)
    }
  }, []);

  const exportOnClick = async () => {
    window.open(`http://localhost:8080/works/relatorio/${id}`, '_blank');
  }
  return (
    <div className="infoUser">

      <div className="div1">
        <Button
          fullWidth
          onClick={exportOnClick}
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Exportar Trabalhos
        </Button>

        <Button
          fullWidth
          onClick={exportOnClick}
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Editar perfil 
        </Button>
      </div>
      <div className="div2">
        <h2>Minhas experiências: </h2>
        <p>
          {infoUser.experiencias ? infoUser.experiencias : "Sem dados"}
        </p>
      </div>
      <div className="div3">

        <div className="redes">

          <a href={infoUser.facebook ? infoUser.facebook : '/'}><img style={{marginTop:'3vh', height: '40px' }} src={face} alt="" /></a>

          <a href={infoUser.linkedin ? infoUser.linkedin : '/'}><img style={{ marginTop:'4vh',height: '40px' }} src={linkedin} alt="" /></a>


        </div>
      </div>
    </div>
  );
};
