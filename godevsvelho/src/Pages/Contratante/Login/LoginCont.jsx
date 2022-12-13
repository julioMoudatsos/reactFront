import { TextField, Typography, Link, Button } from "@mui/material";
import FormPage from "../../../Components/Form/Form"
import LoginIcon from '@mui/icons-material/Login';
import * as React from 'react';
import './login.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AuthContext } from "../../../Context/AuthContext";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginCont(props) {
    const auth = React.useContext(AuthContext);
    const [cnpj, setCnpj] = React.useState("");
    const [senha, setSenha] = React.useState("");

    const loginOnClick = async () => {
        if (cnpj && senha) {
            const isLogged = await auth.signInCont(cnpj, senha);
            if(isLogged){
                localStorage.setItem('authTokenCont', btoa(cnpj, senha));
                window.location.href = '/cont/home'
            }
        } else {
            toast.warn("Preencha todos os campos.", {
                position: toast.POSITION.TOP_RIGHT
              });
        }
    }

    return (
        <section>
            <FormPage></FormPage>
            <div className="right">
            <ToastContainer />

                <Link fontSize="large" underline="none" className="voltar" href="/" variant="body">
                    <ArrowBackIcon sx={{ fontSize: 32 }} />
                </Link>
                <div className="form">
                    <Typography mb={'16px'} fontWeight={'bold'} fontSize={'32px'}>SEJA BEM VINDO(A)</Typography>
                    <Typography mb={'8px'} fontWeight={'bold'} fontSize={'18px'}>Entre com sua Conta</Typography>
                    <div className="fields">
                        <TextField
                            label={'CNPJ'}
                            id="outlined-basic"
                            fullWidth
                            variant="outlined"
                            value={cnpj}
                            onChange={(event) => setCnpj(event.target.value)}
                            size='small' />
                        <TextField
                            label={'Senha'}
                            id="outlined-basic"
                            type={'password'}
                            value={senha}
                            onChange={(event) => setSenha(event.target.value)}
                            fullWidth
                            variant="outlined"
                            size='small' />
                    </div>
                    <Link href="/recover-password" variant="body2">
                        Esqueceu sua senha?
                    </Link>
                    <Button
                        size='large'
                        endIcon={<LoginIcon />}
                        type="submit"
                        fullWidth
                        onClick={loginOnClick}
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Entrar
                    </Button>
                    <Typography>Ainda não tem uma conta?
                        <Link href="/cont/sign-up" variant="body">
                            Cadastre-se Agora
                        </Link>
                    </Typography>
                </div>
            </div>
        </section>
    );
}
