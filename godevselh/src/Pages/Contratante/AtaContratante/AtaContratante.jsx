import axios from 'axios';

import React from 'react';
import DashboardContratante from '../../../Components/Dashboard/DashboardContratante';
import InfoUserService from '../../../Services/InfoUserService';
import './ata.css';
export const AtaContratante = () => {
  const [projetos, setProjetos] = React.useState(false);
  const [id, setId] = React.useState(localStorage.getItem('idCont'));
  const [download, setDownload] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [modalAtas, setModalAtas] = React.useState(false);
  const [atasProd, setAtasProd] = React.useState([]);
  const [loding, setLoding] = React.useState(true);
  const [semAtas, setSemAtas] = React.useState(false);

  const [state, setState] = React.useState(null);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  React.useEffect(async () => {
    const Service = new InfoUserService();
    await Service.getProjeto(id);
    if (Service.state.res.status === 200) {
      setProjetos(Service.state.res.data);
    }
  }, [id]);
  function gerarAta(id) {
    const url = `http://localhost:8080/contratante/relatorios/${id}`;
    setDownload(url);
    setCount((c) => c + 1);
  }

  async function atas(id) {
    setModalAtas(true);
    const Service = new InfoUserService();
    await Service.getAtas(id);
    if (Service.state.res.status === 200) {
      setLoding(false);

      if (Service.state.res.data.length <= 0) {
        setSemAtas(true);
        setAtasProd([]);
      } else {
        setAtasProd(Service.state.res.data);
        setSemAtas(false);
      }
    }
  }
  async function enviarTxt(e, id) {
    e.preventDefault();

    let formdata = new FormData();

    formdata.append('file', state);

    axios({
      method: 'patch',
      url: `http://localhost:8080/contratante/txt/${id}`,
      data: formdata,
      headers: { 'Content-Type': 'multipart/form-data' },
    })
      .then(function (response) {
        //handle success
        alert('Informativo enviado com sucesso !');
      })
      .catch(function (response) {
        //handle error
        console.log(response);
      });
    /*   const Service = new InfoUserService();
    await Service.postEnviarArquivoTxt(id, formdata); */
  }

  function handleFile(e) {
    setState(e.target.files[0]);
    console.log(state);
  }
  return (
    <DashboardContratante>
      {modalAtas && (
        <div className="atasDiv">
          <div className="leave">
            <button
              onClick={() => {
                setModalAtas(false);
                setAtasProd([]);
              }}
            >
              X
            </button>
          </div>

          {loding && (
            <p style={{ margin: '50px 0px' }}>Carregando suas Ata...</p>
          )}
          {semAtas && (
            <p style={{ margin: '50px 0px' }}>Não há atas nesse Projeto </p>
          )}
          {atasProd &&
            atasProd.map((ata) => {
              return (
                <div key={ata.id_ata} className="ataDev">
                  <p>
                    {' '}
                    <span>Titulo:</span> {ata.titulo}
                  </p>
                  <h1>
                    <span>Nome:</span> {ata.dev.nome}
                  </h1>

                  <p>
                    {' '}
                    <span>Descricao:</span> {ata.descricao}
                  </p>
                  <p>
                    <span>Oberservação:</span>
                    {ata.observacao}
                  </p>

                  <form style={{ margin: '15px 0px' }} action="">
                    <p
                      style={{
                        marginBottom: '10px',
                        padding: '5px',
                        borderRadius: '4px',
                        background: '#ccc',
                      }}
                    >
                      Enviar Uma Observação.TXT
                    </p>
                    <input
                      type="file"
                      name="file"
                      onChange={(e) => {
                        handleFile(e);
                      }}
                    />
                    <button
                      onClick={(e) => enviarTxt(e, ata.id_ata)}
                      style={{
                        display: 'block',
                        margin: '10px 0px',
                        width: '115px',
                      }}
                    >
                      Enviar
                    </button>
                  </form>
                </div>
              );
            })}
        </div>
      )}
      <section
        style={{
          width: '100%',
          height: 'auto',
        }}
        className="divcontainerAta"
      >
        {projetos &&
          projetos.map((p) => {
            return (
              <div key={p.id_work}>
                {' '}
                <button
                  onClick={() => {
                    atas(p.id_work);
                  }}
                  style={{
                    background: 'transparent',
                    padding: '5px',
                    borderRadius: '4px',
                    margin: '10px 0px',
                    height: '25px',
                    textAlign: 'center',
                    display: 'flex',
                    alignItems: 'center',
                    cursor: 'pointer',
                  }}
                >
                  Visualizar Atas
                </button>
                <div
                  className="corpoAta"
                  onClick={() => {
                    gerarAta(p.id_work);
                  }}
                  style={{
                    background: 'none',
                    padding: '10px',
                    minHeight: '175px',
                    maxHeight: '230px',
                    borderRadius: '4px',
                    backgroundColor: '#fcffd9',
                    boxShadow: '0px 1px 5px #3333331f',
                    cursor: 'pointer',
                    marginRight: '30px',
                  }}
                  key={p.id_work}
                >
                  <h1 style={{ background: '#ffbc118b', padding: '1px 2px' }}>
                    Gerar Ata TXT
                  </h1>
                  <p>
                    <b>Titulo:</b>
                    {p.titulo}
                  </p>
                  <p>
                    <b>Prazo:</b> {p.data_limite.substring(0, 10)}
                  </p>
                  <p>
                    <b>Status:</b>{' '}
                    {p.finalizado ? 'Finalizado' : 'Em andamento'}
                  </p>
                  <iframe
                    title="ata"
                    width={'0px'}
                    src={download + '?c=' + count}
                  ></iframe>
                </div>
              </div>
            );
          })}
      </section>
    </DashboardContratante>
  );
};
