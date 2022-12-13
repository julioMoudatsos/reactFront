import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Moment from "react-moment";
import WorkService from "../../Services/WorkService";

const WorkBlockHistoryDev = ({ item }) => {
  console.log(item);
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
      <div
        style={{
          marginTop: 5,
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
      <Typography sx={{ paddingTop: 3, color: "primary.gray" }}>
        Descrição
      </Typography>
      <div
        className="scroll"
        style={{ height: 100, overflow: "auto", margin: "0 0 8px 0" }}
      >
        <Typography maxLength="10" variant="body1">
          {item.descricao}
        </Typography>
      </div>
      {!item.aprovado ? (
        !item.finalizado ? (
          !item.dev_aprovado ? (
            <Typography sx={{ textAlign: "center", color: "primary.gray" }}>
              Você se candidatou a esse trabalho.
            </Typography>
          ) : (
            <Button
              onClick={() => {
                const service = new WorkService();
                service.attFinalizado(item.id_work);
              }}
              size="medium"
              variant="contained"
            >
              Finalizar
            </Button>
          )
        ) : (
          <Typography sx={{ textAlign: "center", color: "primary.gray" }}>
            Aguardando Aprovação.
          </Typography>
        )
      ) : (
        <Typography sx={{ textAlign: "center", color: "primary.gray" }}>
          Concluído.
        </Typography>
      )}
    </div>
  );
};

export default WorkBlockHistoryDev;
