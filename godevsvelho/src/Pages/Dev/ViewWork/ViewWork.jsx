import Dashboard from "../../../Components/Dashboard/Dashboard";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WorkService from "../../../Services/WorkService";
import Typography from "@mui/material/Typography";
import Moment from "react-moment";
import Button from "@mui/material/Button";
import bonecoDinheiro from "../../../Components/Index/imgs/bonecoDinheiro.png";
import { toast } from 'react-toastify';

export const ViewWork = () => {
  const { id } = useParams();
  const [idDev] = useState(localStorage.getItem("id"));
  const [work, setWork] = useState("");
  const [contratante, setContratante] = useState("");

  const pickWorkOnClick = async () => {
    const service = new WorkService();
    await service.pickWork(idDev, id);
    if (service.state.res.status === 201) {
      toast.success("Seu perfil foi enviado para o contratante.", {
        position: toast.POSITION.TOP_RIGHT
    });
    }
  };

  useEffect(() => {
    async function fetchData() {
      const service = new WorkService();
      await service.getWorksById(id);
      if (service.state.res.status === 200) {
        setWork(service.state.res.data);
        setContratante(service.state.res.data.contratante);
      }
    }
    fetchData()
  }, [id]);

  return (
    <Dashboard>
      <div className="App">
        <div className="infos">
          <Typography variant="h3">{work.titulo}</Typography>
          <Typography marginTop={2} variant="h6">
            <b>Contratante: </b>
            {contratante.nome}
          </Typography>
          <Typography marginTop={2} variant="h6">
            <b>Linguagem:</b> {work.categoria}
          </Typography>
          <Typography marginTop={2} variant="h6">
            <b>Data Limite:</b>{" "}
            <Moment format="DD/MM/YYYY">{work.data_limite}</Moment>
          </Typography>
          <Typography marginTop={2} variant="h6">
            <b>Valor: </b>R${work.valor}
          </Typography>
          <Typography className="descri" marginTop={2} variant="h6">
            <b>Descrição:</b> <br />
            {work.descricao}
          </Typography>
          <Button
            onClick={pickWorkOnClick}
            style={{ marginTop: 20 }}
            size="medium"
            variant="contained"
          >
            Candidatar-se
          </Button>
        </div>
        <div className="img-dinheiro">
          <img src={bonecoDinheiro} alt="" />
        </div>
      </div>
    </Dashboard>
  );
};
