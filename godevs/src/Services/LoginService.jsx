import axios from 'axios';
import { toast } from 'react-toastify';

const urlBase = process.env.REACT_APP_API_ADDRESS;
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Allow-Credentials': 'true',
  'Content-Type': 'application/json',
};

class LoginService {
  constructor() {
    this.state = {
      res: [],
    };
  }

  loginDev(email, senha) {
    return axios
      .post(
        `${urlBase}/dev/login-contratado`,
        {
          email: email,
          senha: senha,
        },
        { headers: headers },
      )
      .then((res) => {
        this.state.res = res;
        if (res.status === 204) {
          toast.warn('Usuário não encontrado.', {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((err) => {
        console.error(`request failed ${err}`);
      });
  }

  loginCont(cnpj, senha) {
    return axios
      .post(
        `${urlBase}/contratante/login-contratante`,
        {
          cpfCNPJ: cnpj,
          senha: senha,
        },
        { headers: headers },
      )
      .then((res) => {
        this.state.res = res;
        if (res.status === 204) {
          toast.warn('Usuário não encontrado.', {
            position: toast.POSITION.TOP_RIGHT,
          });
        }
      })
      .catch((err) => {
        console.error(`request failed ${err}`);
      });
  }
}

export default LoginService;
