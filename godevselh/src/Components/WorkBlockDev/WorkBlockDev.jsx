import { Component } from "react"
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Moment from 'react-moment';
import WorkService from '../../Services/WorkService';

export default class WorkBlockDev extends Component {
    constructor(props) {
        super(props);
        this.state = {
            item: props.item
        };
    }
    render() {
        console.log(this.state.item)
        return (
            <div style={{
                width: 300, minHeight: 250, display: "flex", flexDirection: "column", justifyContent: "center",
                boxShadow: "0px 3px 6px 0px rgba(0,0,0,0.4)", padding: 20
            }}>
                <Typography variant="h6" style={{ fontWeight: "bold" }}>{this.state.item.titulo}</Typography>
                <Typography>Data Limite: <Moment format="DD/MM/YYYY">{this.state.item.data}</Moment> </Typography>
                <Typography >Valor: R${this.state.item.valor},00</Typography>
                {this.state.item.fk__ ?
                    <>
                        <Typography>Responsável: {this.state.item.fk__ ? this.state.item.fk__.nome : "Nenhum"}</Typography>
                        <Typography>Email: {this.state.item.fk__ ? this.state.item.fk__.email : "Nenhum"}</Typography>
                    </> : null}
                <Typography>Disponivel: {this.state.item.disponivel ? "Sim" : "Não"}</Typography>
                <Typography>Finalizado: {this.state.item.finalizado ? "Sim" : "Não"}</Typography>
                <Typography>Aprovado: {this.state.item.aprovado ? "Sim" : "Não"}</Typography>
                <div style={{ backgroundColor: "#001F2F", minWidth: "30%", borderRadius: "20px", padding: "2px", color: "white", display: "flex", justifyContent: "center" }}>
                    <Typography >{this.state.item.categoria}</Typography>
                </div>
                <Typography sx={{ color: 'primary.gray' }}>Descrição</Typography>
                <div className="scroll" style={{ height: 100, overflow: "auto", margin: "0 0 8px 0" }}>
                    <Typography maxLength="10" variant="body1">{this.state.item.descricao}</Typography>
                </div>
                {!this.state.item.aprovado ? 
                this.state.item.finalizado ? <Button
                    onClick={() => {
                        const service = new WorkService();
                        service.attAprovado(this.state.item.id_work)
                    }}
                    size="medium"
                    variant="contained"
                >
                    Aprovar
                </Button> : <Typography sx={{ textAlign: "center", color: 'primary.gray' }}>Aguardando Desenvolvimento.</Typography>
                : <Typography sx={{ textAlign: "center", color: 'primary.gray' }}>Concluído.</Typography>}
                
            </div>
        );
    }
}