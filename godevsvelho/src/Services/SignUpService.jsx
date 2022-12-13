import axios from 'axios';

const urlBase = process.env.REACT_APP_API_ADDRESS;
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Allow-Credentials': 'true',
  'Content-Type': 'application/json',
};

class SignUpService {
  constructor() {
    this.state = {
      res: []
    };
  }

  postUser(userDto) {
    return axios.post(`${urlBase}/dev`, {
      "nome": userDto.name,
      "email": userDto.email,
      "senha": userDto.senha,
      "cpf": userDto.cpf,
      "nivelCon": userDto.nivel,
      "telefone": userDto.telefone,
      "dataNasc": userDto.dataNasc,
    }, {
      headers: headers
    })
      .then(res => { this.state.res = res })
      .catch((err) => {
        console.error(`request failed ${err}`);
      });
  }

  postCont(contDto) {
    return axios.post(`${urlBase}/contratante`, {
      "nome": contDto.name,
      "email": contDto.email,
      "senha": contDto.senha,
      "cpfCNPJ": contDto.cpfCNPJ,
    }, {
      headers: headers
    })
      .then(res => { this.state.res = res })
      .catch((err) => {
        console.error(`request failed ${err}`);
      });
  }

}


export default SignUpService;