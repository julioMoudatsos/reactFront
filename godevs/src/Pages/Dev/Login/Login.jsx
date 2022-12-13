import { TextField, Typography, Link, Button } from '@mui/material';
import FormPage from '../../../Components/Form/Form';
import LoginIcon from '@mui/icons-material/Login';
import * as React from 'react';
import './login.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { AuthContext } from '../../../Context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login(props) {
  const auth = React.useContext(AuthContext);
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');

  const loginOnClick = async () => {
    if (email && senha) {
      const isLogged = await auth.signIn(email, senha);
      if (isLogged) {
        localStorage.setItem('authToken', btoa(email, senha));
        window.location.href = '/dev/works';
      }
    } else {
      toast.warn('Preencha todos os campos.', {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };

  return (
    <section>
      <FormPage></FormPage>
      <div className="right">
        <ToastContainer />
        <Link
          fontSize="large"
          underline="none"
          className="voltar"
          href="/"
          variant="body"
        >
          <ArrowBackIcon sx={{ fontSize: 32 }} />
        </Link>
        <div className="form">
          <Typography mb={'16px'} fontWeight={'bold'} fontSize={'32px'}>
            SEJA BEM VINDO(A) DEV
          </Typography>
          <Typography mb={'8px'} fontWeight={'bold'} fontSize={'18px'}>
            Entre com sua Conta
          </Typography>
          <div className="fields">
            <TextField
              label={'Email'}
              id="outlined-basic"
              fullWidth
              variant="outlined"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              size="small"
            />
            <TextField
              label={'Senha'}
              id="outlined-basic"
              type={'password'}
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              fullWidth
              variant="outlined"
              size="small"
            />
          </div>
          <Link href="/recover-password" variant="body2">
            Esqueceu sua senha?
          </Link>
          <Button
            size="large"
            endIcon={<LoginIcon />}
            type="submit"
            fullWidth
            onClick={loginOnClick}
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Entrar
          </Button>
          <Typography>
            Ainda não tem uma conta?
            <Link href="/dev/sign-up" variant="body">
              Cadastre-se Agora
            </Link>
          </Typography>
        </div>
      </div>
    </section>
  );
}
