import React from 'react';
import { Link } from 'react-router-dom';
import duvida from '../imgs/infla.png';

export const Sobre = () => {
  return (
    <section id="sobre" className="sobre">
      <h1 className="titulo">Sobre</h1>
      <div className="containerSobre">
        <div className="foto">
          <img src={duvida} alt="duvida" />
        </div>
        <div className="Containercard">
          <h2>Como Funciona:</h2>
          <div className="card">
            <h2>Dev</h2>
            <p>
              O desenvolvedor deve criar uma conta e assim ter acesso as vagas
              de acordo com seu perfil. Lembre-se. As vagas que aparecerem no
              seu feed estão interligadas com seu nivel de perfil profissional
            </p>
            <Link to={'/'}>Experimentar</Link>
          </div>
          <div className="card">
            <h2>Contrante</h2>
            <p>
              O Contra deve criar uma conta e assim ter acesso as vagas de
              acordo com seu perfil. Lembre-se. As vagas que aparecerem no seu
              feed estão interligadas com seu nivel de perfil profissional
            </p>
            <Link to={'/'}>Experimentar</Link>
          </div>
        </div>
      </div>
    </section>
  );
};
