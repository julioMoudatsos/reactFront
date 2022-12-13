import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Moment from "react-moment";
import React from "react";

const WorkBlock = ({
  titulo,
  id,
  categoria,
  contratante,
  data,
  valor,
  descricao,
}) => {
  return (
    <div
      style={{
        width: 300,
        minHeight: 250,
        display: "flex",
        flexDirection: "column",
        boxShadow: "0px 3px 6px 0px rgba(0,0,0,0.4)",
        padding: 20,
        marginRight: "25px",
        marginTop: "30px",
      }}
    >
      <Typography variant="h6" style={{ fontWeight: "bold" }}>
        {titulo}
      </Typography>
      <Typography style={{ paddingTop: "8px" }}>Contratante: {contratante}</Typography>
      <Typography style={{ paddingTop: "5px" }}>
        Data Limite: <Moment format="DD/MM/YYYY">{data}</Moment>{" "}
      </Typography>
      <Typography style={{ paddingTop: "5px" }}>Valor: R${valor},00</Typography>
      <Typography style={{ paddingTop: "5px" }}>Categoria: {categoria}</Typography>

      <Typography sx={{ paddingTop: 3, color: "primary.gray" }}>
        Descrição
      </Typography>
      <div
        className="scroll"
        style={{ height: 100, overflow: "auto", margin: "0 0 8px 0" }}
      >
        <Typography maxLength="10" variant="body1">
          {descricao}
        </Typography>
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          onClick={() => (window.location = `works/${id}`)}
          style={{ marginTop: 5 }}
          size="medium"
          variant="contained"
        >
          Ver Mais
        </Button>
      </div>
    </div>
  );
};

export default WorkBlock