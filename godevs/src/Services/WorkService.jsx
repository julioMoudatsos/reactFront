import axios from 'axios';
import {  toast } from 'react-toastify';

const urlBase = process.env.REACT_APP_API_ADDRESS;
const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*',
    'Access-Control-Allow-Credentials': 'true',
    'Content-Type': 'application/json',
};

class WorkService {
    constructor() {
        this.state = {
            res: [],
        };
    }

    getWorks() {
        return axios.get(`${urlBase}/works`,
            {
                headers: headers
            })
            .then(res => {
                this.state.res = res
            })
            .catch((err) => {
                console.error(`request failed ${err}`);
            });
    }

    getWorksByCont(id) {
        return axios.get(`${urlBase}/works/cont/${id}`,
            {
                headers: headers
            })
            .then(res => {
                this.state.res = res;
                console.log(res)
            })
            .catch((err) => {
                console.error(`request failed ${err}`);
            });
    }

    getWorksByDev(id) {
        return axios.get(`${urlBase}/works/dev/${id}`,
            {
                headers: headers
            })
            .then(res => {
                this.state.res = res;
                console.log(res)
            })
            .catch((err) => {
                console.error(`request failed ${err}`);
            });
    }


    getHistoricoByCont(id) {
        return axios.get(`${urlBase}/works/hist/cont/${id}`,
            {
                headers: headers
            })
            .then(res => {
                this.state.res = res;
                console.log(res)
            })
            .catch((err) => {
                console.error(`request failed ${err}`);
            });
    }


    getWorksById(id) {
        return axios.get(`${urlBase}/works/${id}`,
            {
                headers: headers
            })
            .then(res => {
                this.state.res = res
                if (res.status === 204) {
                    toast.warn('Projeto não encontrado.', {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                }
            })
            .catch((err) => {
                console.error(`request failed ${err}`);
            });
    }

    postWork(id, workDto) {
        return axios.post(`${urlBase}/contratante/projeto/${id}`, {
            "titulo": workDto.titulo,
            "contratante": workDto.contratante,
            "data_limite": workDto.limite,
            "valor": workDto.valor,
            "descricao": workDto.descricao,
            "categoria": workDto.categoria,
        }, {
            headers: headers
        })
            .then(res => {
                this.state.res = res;
                if (res.status === 201) {
                    toast.success('Projeto cadastrado com sucesso.', {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                }
            })
            .catch((err) => {
                console.error(`request failed ${err}`);
            });
    }

    pickWork(devid, projetoid) {
        return axios.post(`${urlBase}/contrato/dev/${devid}/projeto/${projetoid}`, {
            headers: headers
        })
            .then(res => {
                this.state.res = res;
            })
            .catch((err) => {
                console.error(`request failed ${err}`);
            });
    }

    attFinalizado(projetoid) {
        return axios.post(`${urlBase}/contrato/projeto/finalizado/${projetoid}`, {
            headers: headers
        })
            .then(res => {
                this.state.res = res;
                if (res.status === 201) {
                    toast.success('Projeto finalizado com sucesso, aguarde aprovação.', {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                }
            })
            .catch((err) => {
                console.error(`request failed ${err}`);
            });
    }

    attAprovado(projetoid) {
        return axios.post(`${urlBase}/contrato/projeto/aprovado/${projetoid}`, {
            headers: headers
        })
            .then(res => {
                this.state.res = res;
                if (res.status === 201) {
                    toast.success('Projeto aprovado.', {
                        position: toast.POSITION.TOP_RIGHT,
                    });
                }
            })
            .catch((err) => {
                console.error(`request failed ${err}`);
            });
    }
}


export default WorkService;
