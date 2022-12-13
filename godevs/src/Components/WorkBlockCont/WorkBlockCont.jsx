import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Moment from "react-moment";
import WorkService from "../../Services/WorkService";
import React from "react";
import { useState } from "react";

export default function WorkBlockCont(props) {
  const [item] = useState(props.item);
  console.log(props.item);
  return (
    <div
      style={{
        width: 300,
        minHeight: 250,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        boxShadow: "0px 3px 6px 0px rgba(0,0,0,0.4)",
        padding: 20,
      }}
    >
      <Typography variant="h6" style={{ fontWeight: "bold" }}>
        {item.titulo}
      </Typography>
      <Typography>
        Data Limite: <Moment format="DD/MM/YYYY">{item.data}</Moment>{" "}
      </Typography>
      <Typography>Valor: R${item.valor},00</Typography>
      {item.fk__ ? (
        <>
          <Typography>
            Responsável: {item.fk__ ? item.fk__.nome : "Nenhum"}
          </Typography>
          <Typography>
            Email: {item.fk__ ? item.fk__.email : "Nenhum"}
          </Typography>
        </>
      ) : null}
      <Typography>Disponivel: {item.disponivel ? "Sim" : "Não"}</Typography>
      <Typography>Finalizado: {item.finalizado ? "Sim" : "Não"}</Typography>
      <Typography>Aprovado: {item.aprovado ? "Sim" : "Não"}</Typography>
      <Typography>Dev Aprovado: {item.dev_aprovado ? "Sim" : "Não"}</Typography>
      <div
        style={{
          backgroundColor: "#001F2F",
          minWidth: "30%",
          borderRadius: "20px",
          padding: "2px",
          color: "white",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography>{item.categoria}</Typography>
      </div>

      {!item.finalizado ? (
        <>
          <Typography sx={{ color: "primary.gray" }}>Descrição</Typography>
          <div
            className="scroll"
            style={{ height: 100, overflow: "auto", margin: "0 0 8px 0" }}
          >
            <Typography maxLength="10" variant="body1">
              {item.descricao}
            </Typography>
          </div>
        </>
      ) : (
        <Typography maxLength="10" variant="body1">
          Entre em contato com Desenvolvedor para avaliar a entrega.
        </Typography>
      )}
      {!item.aprovado ? (
        item.finalizado ? (
          <Button
            onClick={() => {
              const service = new WorkService();
              service.attAprovado(item.id_work);
            }}
            style={{ marginTop: 20 }}
            size="medium"
            variant="contained"
          >
            Aprovar
          </Button>
        ) : item.dev_aprovado ? (
          <Typography sx={{ textAlign: "center", color: "primary.gray" }}>
            Aguardando Desenvolvimento.
          </Typography>
        ) : item.disponivel ? (
          <Typography sx={{ textAlign: "center", color: "primary.gray" }}>
            Aguardando Dev.
          </Typography>
        ) : (
          <Button
            onClick={() => {
              window.location.href = `/cont/projeto/${item.id_work}/dev/${item.fk__.id_contratado}`;
            }}
            style={{ marginTop: 20 }}
            size="medium"
            variant="contained"
          >
            Ver Desenvolvedor
          </Button>
        )
      ) : (
        <Typography sx={{ textAlign: "center", color: "primary.gray" }}>
          Concluído.
        </Typography>
      )}
    </div>
  );
}
