import axios from 'axios';

const urlBase = process.env.REACT_APP_API_ADDRESS + '/dev';
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Allow-Credentials': 'true',
  'Content-Type': 'application/json',
};

class InfoUserService {
  constructor() {
    this.state = {
      res: [],
    };
  }

  getContratadoById(id) {
    return axios
      .get(`${urlBase}/${id}`, {
        headers: headers,
      })
      .then((res) => {
        this.state.res = res;
      })
      .catch((err) => {
        console.error(`request failed ${err}`);
      });
  }

  getRefazer() {
    return axios
      .get(`${urlBase}/atadev/undoAta`, {
        headers: headers,
      })
      .then((res) => {
        this.state.res = res;
      })
      .catch((err) => {
        console.error(`request failed ${err}`);
      });
  }

  deleteAta(id) {
    return axios
      .delete(`${urlBase}/atadev/delete/${id}`, {
        headers: headers,
      })
      .then((res) => {
        this.state.res = res;
      })
      .catch((err) => {
        console.error(`request failed ${err}`);
      });
  }

  postAta(
    titulo,
    observacao,
    descricao,
    dataAta,
    devId,
    projId,
    contratanteId,
  ) {
    return axios
      .post(
        `${urlBase}/devid/${+devId}/contratante/${contratanteId}/projeto/${projId}`,
        {
          titulo,
          observacao,
          descricao,
          data_Ata: dataAta,
        },
        { headers: headers },
      )
      .then((res) => {
        this.state.res = res;
        if (res.status === 204) {
          this.state.res = 204;
        }
      })
      .catch((err) => {
        console.error(`request failed ${err}`);
      });
  }
  getProjeto(id) {
    let urlCont = 'http://localhost:8080/contratante/projetos';
    return axios
      .get(`${urlCont}/${id}`, {
        headers: headers,
      })
      .then((res) => {
        this.state.res = res;
      })
      .catch((err) => {
        console.error(`request failed ${err}`);
      });
  }
  getAtas(id) {
    let urlCont = 'http://localhost:8080/dev/atas/work';
    return axios
      .get(`${urlCont}/${id}`, {
        headers: headers,
      })
      .then((res) => {
        this.state.res = res;
      })
      .catch((err) => {
        console.error(`request failed ${err}`);
      });
  }

  getAtasDev(id) {
    return axios
      .get(`${urlBase}/atadev/${id}`, {
        headers: headers,
      })
      .then((res) => {
        this.state.res = res;
      })
      .catch((err) => {
        console.error(`request failed ${err}`);
      });
  }

  postEnviarArquivoTxt(id, formdata) {
    let urlCont = 'http://localhost:8080/contratante/txt';
    return axios
      .post(
        `${urlCont}/${id}`,
        {
          data: formdata,
        },
        { headers: headers },
      )
      .then((res) => {
        this.state.res = res;
        if (res.status === 204) {
          this.state.res = 204;
        }
      })
      .catch((err) => {
        console.error(`request failed ${err}`);
      });
  }
}

export default InfoUserService;
