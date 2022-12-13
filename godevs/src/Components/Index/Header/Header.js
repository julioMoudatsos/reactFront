import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
  const [ativarmob, setAtivarmob] = React.useState(false);

  function ativarMobile() {
    setAtivarmob(!ativarmob);
  }
  function listasInternas() {
    const link = document.querySelector('.teste');

    const container = document.querySelector('#' + link.href.split('#')[1]);

    link.addEventListener('click', (e) => {
      e.preventDefault();
      container.scrollIntoView({ block: 'center', behavior: 'smooth' });
    });
  }
  React.useEffect(() => {
    listasInternas();
  });
  return (
    <header className="headerHome">
      <div onClick={ativarMobile}></div>
      <h1>GoDevs</h1>
      <nav className={`navebarHome + ${ativarmob ? 'ativo' : ''}`}>
        <ul>
          <Link to={'/cont/home'}>Contratante</Link>

          <Link to={'/dev/works'}>Devs</Link>
          <Link className="teste" to={'#sobre'}>
            Sobre
          </Link>
          <Link to={'/dev/sign-up'}>Criar Conta</Link>
        </ul>
      </nav>
    </header>
  );
};
