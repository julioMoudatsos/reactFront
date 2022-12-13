import { TextField, Typography, Link, Button } from "@mui/material";
import * as React from 'react';
import FormPage from "../../../Components/Form/Form"
import LoginIcon from '@mui/icons-material/Login';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Grid from '@mui/material/Grid';
import './SignUp.scss'
import InputMask from 'react-input-mask';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import SignUpService from "../../../Services/SignUpService";
import MenuItem from '@mui/material/MenuItem';
import UserDto from "../../../DTO/UserDto";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const answer = [
    {
        value: 'select',
        label: 'Selecione',
    },
    {
        value: 1,
        label: 'Básico',
    },
    {
        value: 2,
        label: 'Intermediário',
    },
    {
        value: 3,
        label: 'Avançado',
    }
];


export default function SignUp() {
    const [value, setValue] = React.useState(null);
    const [nameValue, setNameValue] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [telefone, setTelefone] = React.useState("");
    const [nivel, setNivel] = React.useState('select');
    const [senha, setSenha] = React.useState("");
    const [confSenha, setConfSenha] = React.useState("");
    const [cpf, setCpf] = React.useState("");

    const signUpOnClick = async () => {
        if (nameValue !== "" && email !== "" && telefone !== "" &&
            nivel !== 'select' && senha !== "" && cpf !== "") {
            if (senha !== confSenha) {
                toast.warn("As senhas não coincidem.", {
                    position: toast.POSITION.TOP_RIGHT
                });
            } else {
                const services = new SignUpService();
                const userDto = new UserDto(nameValue, email, cpf, telefone, nivel, senha, value);
                await services.postUser(userDto);
                console.log(services.state.res)
                if (services.state.res.status === 201) {
                    toast.success("Usuário cadastrado com sucesso.", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                    window.location.href = '/dev/login'
                } else if (services.state.res.status === 200) {
                    toast.warn("Esse e-mail já está cadastrado.", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }
                else {
                    toast.error("Ocorreu um erro ao cadastrar o usuário.", {
                        position: toast.POSITION.TOP_RIGHT
                    });
                }
            }
        } else {
            toast.warn("Preencha todos os campos.", {
                position: toast.POSITION.TOP_RIGHT
            });
        }
    }

    const handleChangeNameValue = (event) => { setNameValue(event.target.value); };
    const handleChangeEmailValue = (event) => { setEmail(event.target.value); };
    const handleChangeTelefoneValue = (event) => { setTelefone(event.target.value); };
    const handleChangeNivelValue = (event) => { setNivel(event.target.value); };
    const handleChangeSenhaValue = (event) => { setSenha(event.target.value); };
    const handleChangeConfSenhaValue = (event) => { setConfSenha(event.target.value); };
    const handleChangeCpfValue = (event) => { setCpf(event.target.value); };

    return (
        <section>
            <FormPage></FormPage>
            <div className="right">
                <ToastContainer />
                <Link fontSize="large" underline="none" className="voltar" href="/" variant="body">
                    <ArrowBackIcon sx={{ fontSize: 32 }} />
                </Link>
                <div className="form">
                    <Typography mb={'8px'} fontWeight={'bold'} fontSize={'32px'}>Cadastre-se Agora!</Typography>
                    <Typography mb={'12px'} fontSize={'16px'}>Entre agora na GoDevs e comece
                        a prestar serviços para diversos clientes.</Typography>
                    <Grid container rowSpacing={1} columnSpacing={1}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label={'Nome'}
                                id="outlined-basic"
                                fullWidth
                                value={nameValue}
                                onChange={handleChangeNameValue}
                                variant="outlined"
                                size='small' />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label={'Email'}
                                id="outlined-basic"
                                fullWidth
                                value={email}
                                onChange={handleChangeEmailValue}
                                variant="outlined"
                                size='small' />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputMask
                                mask="(99)99999-9999"
                                maskChar=""
                                value={telefone}
                                onChange={handleChangeTelefoneValue}
                            >
                                {() => <TextField
                                    label={'Telefone'}
                                    id="outlined-basic"
                                    fullWidth
                                    variant="outlined"
                                    size='small' />}
                            </InputMask>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputMask
                                mask="999.999.999-99"
                                value={cpf}
                                maskChar=""
                                onChange={handleChangeCpfValue}
                            >
                                {() => <TextField
                                    label={'CPF'}
                                    id="outlined-basic"
                                    fullWidth
                                    variant="outlined"
                                    size='small' />}
                            </InputMask>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <MobileDatePicker
                                    label="Data de Nascimento"
                                    inputFormat="dd/MM/yyyy"
                                    value={value}
                                    pickTime={false}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField
                                        fullWidth
                                        size="small" {...params} />}
                                />
                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label={'Nível de Conhecimento'}
                                id="outlined-select-currency"
                                select
                                fullWidth
                                value={nivel}
                                onChange={handleChangeNivelValue}
                                size='small'
                            >
                                {answer.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label={'Senha'}
                                id="outlined-basic"
                                fullWidth
                                value={senha}
                                onChange={handleChangeSenhaValue}
                                variant="outlined"
                                type={'password'}
                                size='small' />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                label={'Confirmar Senha'}
                                id="outlined-basic"
                                fullWidth
                                value={confSenha}
                                onChange={handleChangeConfSenhaValue}
                                variant="outlined"
                                type={'password'}
                                size='small' />
                        </Grid>
                    </Grid>
                    <Button
                        size='large'
                        endIcon={<LoginIcon />}
                        type="submit"
                        fullWidth
                        onClick={signUpOnClick}
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Cadastrar
                    </Button>
                    <Typography>Já possui uma conta?
                        <Link href="/dev/login" variant="body">
                            Entre agora
                        </Link>
                    </Typography>
                </div>
            </div>
        </section>
    );
}
