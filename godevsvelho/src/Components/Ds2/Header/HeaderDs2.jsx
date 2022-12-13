import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
export const HeaderDs2 = () => {
  const [ativarMenu, setAtivarMenu] = React.useState(false);
  React.useEffect(() => {
    window.addEventListener('click', (event) => {
      const menu = document.querySelector('.menu');
      const menuMobile = document.querySelector('.linkmobile');
      if (menu !== null) {
        if (menu.contains(event.target) || menuMobile.contains(event.target)) {
        } else {
          setAtivarMenu(false);
        }
      }
    });
  }, [ativarMenu]);

  function AtivarMenu() {
    setAtivarMenu(!ativarMenu);
  }

  return (
    <header>
      <div className="pesquisa">
        <span className="linkmobile" onClick={AtivarMenu}>
          <div className="menuMobile"></div>
        </span>
        <form>
          <input type="text" placeholder="Pesquisar...." />
        </form>
        <p>Caio Hideki</p>
      </div>
      <nav className={`menu ${ativarMenu ? 'ativar' : ''}`}>
        <h1>Godevs</h1>
        <ul>
          <li>
            <NavLink to={'/dev/works'}>Trabalhos</NavLink>
          </li>
          <li>
            <NavLink to={'/dev/dev-quiz'}>Dev Quiz</NavLink>
          </li>
          <li>
            <NavLink to={'/dev/profile'}>Meu Perfil</NavLink>
          </li>
          <li>
            <NavLink to={'/dev/ata'}>Atas</NavLink>
          </li>
          <li>
            <NavLink to={'/dev/messages'}>Mensagens</NavLink>
          </li>

          <NavLink to={'/dev/sign-up'}>Sair</NavLink>
        </ul>
      </nav>
    </header>
  );
};
