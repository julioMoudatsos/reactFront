import React from 'react';
import InfoUserService from '../../Services/InfoUserService';

export const MiniAta = ({ ata }) => {
  const [download, setDownload] = React.useState(false);
  const [count, setCount] = React.useState(0);
  const [excluir, setExcluir] = React.useState(false);
  const [nexcluir, setNexcluir] = React.useState(true);

  function baixarTxt(idata) {
    console.log(idata);
    const url = `http://localhost:8080/dev/atadevup/${idata}`;
    setDownload(url);
    setCount((c) => c + 1);
  }
  async function excluirAta(idata) {
    console.log(idata);
    const Service = new InfoUserService();
    await Service.deleteAta(idata);
    if (Service.state.res.status === 200) {
      localStorage.setItem('ata', idata);
      console.log('ata deletada');
    }
    setExcluir(true);
    setNexcluir(false);
  }
  function refazerAta(idata) {
    setExcluir(false);
    setNexcluir(true);
  }

  return (
    <>
      <div className="ataDevInfo" key={ata.id_ata}>
        <div className="po">
          {ata.info ? <p className="informativo"></p> : ''}
          <button onClick={() => excluirAta(ata.id_ata)}>Excluir</button>

          {ata.info ? (
            <button onClick={() => baixarTxt(ata.id_ata)}>Baixar TXT</button>
          ) : (
            ''
          )}
        </div>
        {excluir && <h1>Ata Excluida</h1>}
        {nexcluir && (
          <>
            <h1>Data:</h1>
            <span>{ata.data_Ata === null ? '2022-09-03' : ata.data_Ata}</span>
            <h1>Titulo:</h1>
            <span>{ata.titulo}</span>
            <h1>Descrição:</h1>
            <span>{ata.descricao}</span>
            <h1>Observaçã0:</h1>
            <span>{ata.observacao}</span>
          </>
        )}
      </div>
      {download && (
        <iframe
          title="informativo"
          style={{ width: '0px', display: 'none' }}
          src={download + '?c=' + count}
        ></iframe>
      )}
    </>
  );
};
