import React, { useState, useEffect } from "react";
import "../perfiluser.scss";
import InfoUserService from "../../../Services/InfoUserService";
import { Typography } from "@mui/material";

export const HeaderUser = () => {
  const [id] = useState(localStorage.getItem("id"));

  const [infoUser, setInfoUser] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const Service = new InfoUserService();
      await Service.getContratadoById(id);
      if (Service.state.res.status === 200) {
        setInfoUser(Service.state.res.data);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div className="HeaderApp">
      <div className="fotoPerfil">
        <img
          style={{ width: "150px", borderRadius: "50%"}}
          src={'/aaaa.jpg'}
          alt="caio"
        />
      </div>
      <div className="info1">
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
      </div>
    </div>
  );
};
