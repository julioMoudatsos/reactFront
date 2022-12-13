import React from 'react';
import Crescimento from '../imgs/crescimento.png';
export const Info = () => {
  return (
    <section className="infoIntro">
      <div className="txtintro">
        <p>
          A <b>GoDevs</b> te ajuda a encontrar uma solução e ganho de
          conhecimento com problemas relacionados com o desenvolvimento de
          sistemas
        </p>
        <h6>
          Criando pontes entre contratantes e Programadores de todo o Brasil
          desde 2022
        </h6>
        <button>Começar</button>
      </div>
      <div className="growup">
        <img src={Crescimento} alt="foto" />
      </div>
    </section>
  );
};
