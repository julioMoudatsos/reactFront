import axios from 'axios';

const urlBase = process.env.REACT_APP_API_ADDRESS + "/works";
const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': '*',
  'Access-Control-Allow-Methods': '*',
  'Access-Control-Allow-Credentials': 'true',
  'Content-Type': 'application/json',
};

class FilterService {
  constructor() {
    this.state = {
      res: []
    };
  }

  getByFilter(filter) {
    return axios.get(`${urlBase}/filtrado/${filter}`,
      { headers: headers })
      .then(res => { this.state.res = res })
      .catch((err) => {
        console.error(`request failed ${err}`);
      });
  }

}


export default FilterService;