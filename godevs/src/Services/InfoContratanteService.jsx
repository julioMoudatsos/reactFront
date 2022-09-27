import axios from 'axios';

const urlBase = process.env.REACT_APP_API_ADDRESS + '/contratante';
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Allow-Credentials': 'true',
  'Content-Type': 'application/json',
};

class InfoContrantanteService {
  constructor() {
    this.state = {
      res: [],
    };
  }

  getContratanteById(id) {
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


}

export default InfoContrantanteService;
