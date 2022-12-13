import { Typography } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import DashboardContratante from "../../../Components/Dashboard/DashboardContratante";
import InfoUserService from "../../../Services/InfoUserService";
import WorkService from "../../../Services/WorkService";

export const PerfilDev = () => {
  const { id } = useParams();
  const { idProjeto } = useParams();
  const [infoUser, setInfoUser] = useState([]);
  const [infoWork, setInfoWork] = useState([]);
  
  useEffect(() => {
    async function fetchData() {
      const Service = new InfoUserService();
      await Service.getContratadoById(id);
      if (Service.state.res.status === 200) {
        setInfoUser(Service.state.res.data);
      }
      const ServiceWork = new WorkService();
      await ServiceWork.getWorksById(idProjeto);
      if (ServiceWork.state.res.status === 200) {
        setInfoWork(ServiceWork.state.res.data);
      }
    }
    fetchData();
  }, [id, idProjeto]);

  return (
    <>
      <DashboardContratante>
        <div className="HeaderApp">
          <div className="fotoPerfil">
            <img
              style={{ width: "150px", borderRadius: "50%" }}
              src={'/aaaa.jpg'}
              alt="caio"
            />
          </div>
          <div>
            <Typography variant="h5" sx={{ paddingTop: 3 }}>
              {infoUser.nome}
            </Typography>
            <Typography sx={{ paddingTop: 2 }}>
              {" "}
              <b>Telefone: </b>
              {infoUser.telefone}
            </Typography>
            <Typography>
              {" "}
              <b>Email: </b>
              {infoUser.email}
            </Typography>
          </div>
          <div className="info2" style={{ paddingLeft: "13vh" }}>
            <Typography variant="h5" sx={{ paddingTop: 3 }}>
              Quem sou eu:
            </Typography>

            <Typography style={{ width: "400px" }} sx={{ paddingTop: 2 }}>
              {" "}
              {!infoUser.quem_sou ? "Sem dados" : infoUser.quem_sou}{" "}
            </Typography>
            <Typography style={{ width: "400px" }} sx={{ paddingTop: 2 }}>
              {" "}
              {!infoUser.experiencias
                ? "Sem dados"
                : infoUser.experiencias}{" "}
            </Typography>
          </div>
        </div>
        <div>
          Esta aplicando para:
          <Typography style={{ width: "400px" }} sx={{ paddingTop: 2 }}>
            {" "}
            {!infoWork.titulo ? "Sem dados" : infoWork.titulo}{" "}
          </Typography>
        </div>
      </DashboardContratante>
    </>
  );
};
