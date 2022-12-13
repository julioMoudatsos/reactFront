import React, { useState, useEffect } from 'react';
import InfoUserService from '../../Services/InfoUserService';
import './ata.css';
import { MiniAta } from './MiniAta';
export const AtaDev = () => {
  const [infoUser, setInfoUser] = useState([]);
  const [infook, setInfook] = useState(false);
  const [id] = useState(localStorage.getItem('id'));
  const [carregar, setCarregar] = React.useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(async () => {
    const Service = new InfoUserService();
    await Service.getAtasDev(id);
    if (Service.state.res.status === 200) {
      if (Service.state.res.data.length > 0) {
        setInfoUser(Service.state.res.data);
        setInfook(false);
      } else {
        setInfook(true);
      }
      setCarregar(false);
    }
  }, [id]);
  async function refazer(idata) {
    const Service = new InfoUserService();
    await Service.getRefazer();
    if (Service.state.res.status === 200) {
      console.log('ata refeita');
      alert('Ata Refeita');
    }
  }
  return (
    <>
      {' '}
      <h1>
        Criar Nova Ata <button className="btnAta">+</button>
        Refazer Ata Excluida{' '}
        <button className="btnAta" onClick={refazer}>
          Refazer
        </button>
      </h1>
      <div className="divContAtaDev">
        {infook && <h1>Não Possui Atas</h1>}
        {carregar && <h1>Carregando Suas Atas ...</h1>}
        {infoUser &&
          infoUser.map((ata) => {
            return <MiniAta ata={ata} />;
          })}
      </div>
    </>
  );
};
