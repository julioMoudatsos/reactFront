import React from 'react';
import grafico from '../imgs/grafico.png';
export const Assistencia = () => {
  return (
    <section className="assistencia">
      <h1 className="titulo">Assistencias</h1>
      <div>
        <ul>
          <li>
            <h5>Datas</h5>
            <p>
              Fique atento com os tempos de seus projetos, no modo Contrante
              nosso layout o ajudar nisso
            </p>
          </li>
          <li>
            <h5>Foco</h5>
            <p>Tenha sempre foco e mantenha a comunicação sempre em aberto</p>
          </li>
          <li>
            <h5>Experiência</h5>
            <p>
              Ganhe lucros e experiência sendo um bom funcionário suas ações
              contam aqui
            </p>
          </li>
        </ul>
        <img src={grafico} alt="grafico" />
      </div>
    </section>
  );
};
