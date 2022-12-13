import DashboardContratante from '../../../Components/Dashboard/DashboardContratante';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import { TextField, Button } from "@mui/material";
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import investigation from '../../../Components/Index/imgs/investigation.png'
import WorkService from '../../../Services/WorkService';
import WorkDto from "../../../DTO/WorkDto";

export default function AddWork() {
    const [selected, setSelected] = useState();
    const [titulo, setTitulo] = React.useState("");
    const [idCont] = React.useState(localStorage.getItem("id"));
    const [descricao, setDescricao] = React.useState("");
    const [valor, setValor] = React.useState("");
    const [date, setDate] = useState(null);
    const [filters] = useState([
        {
            id: 1,
            description: "React"
        },
        {
            id: 2,
            description: "Java"
        },
        {
            id: 3,
            description: "Java Script"
        },
        {
            id: 4,
            description: "HTML"
        },
        {
            id: 5,
            description: "Angular"
        },
        {
            id: 6,
            description: "C#"
        },
        {
            id: 7,
            description: "PHP"
        },
        
    ]);
    const handleChange = (e) => {
        setSelected(e.target.value)
    }

    const postOnClick = async () => {
        const service = new WorkService();
        const workDto = new WorkDto(titulo, idCont, date, valor, descricao, selected);
        await service.postWork(localStorage.getItem('idCont'), workDto);
    }
    return (
        <>
            <DashboardContratante caminho="Novo Projeto">
                <div style={{ height: "100%", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ width: "50%" }}>
                        <Grid container rowSpacing={1.5} columnSpacing={1}>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    label={'Nome do Projeto'}
                                    id="outlined-basic"
                                    fullWidth
                                    onChange={(e) => setTitulo(e.target.value)}
                                    variant="outlined"
                                    size='small' />
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <FormControl style={{ width: "100%" }}>
                                    <InputLabel id="demo-simple-select-autowidth-label">Linguagem</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        label={'Linguagem'}
                                        value={selected ||""}
                                        style={{ width: "100%" }}
                                        onChange={handleChange}>
                                        {filters.map(item => (
                                            <MenuItem key={item.id} value={item.description}>
                                                {item.description}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <TextField
                                    label={'Descrição'}
                                    id="outlined-basic"
                                    fullWidth
                                    inputProps={{ maxLength: 255 }}
                                    onChange={(e) => setDescricao(e.target.value)}
                                    multiline
                                    rows={4}
                                    variant="outlined"
                                    size='small' />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <MobileDatePicker
                                        label="Data Limite"
                                        inputFormat="dd/MM/yyyy"
                                        pickTime={false}
                                        value={date}
                                        onChange={(newValue) => {
                                            setDate(newValue)
                                        }}
                                        renderInput={(params) => <TextField
                                            fullWidth
                                            size="small" {...params} />}
                                    />
                                </LocalizationProvider>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    type="numeric"
                                    label={'Valor'}
                                    id="outlined-basic"
                                    fullWidth
                                    onChange={(e) => setValor(e.target.value)}
                                    variant="outlined"
                                    size='small' />
                            </Grid>
                            <Button
                                size='large'
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={postOnClick}
                            >
                                Cadastrar Trabalho
                            </Button>
                        </Grid>

                    </div>
                    <div style={{ width: "50%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                        <img style={{ width: "75%", marginTop: "-25px" }} alt='' src={investigation} />
                    </div>
                </div>
            </DashboardContratante>
        </>
    );
}