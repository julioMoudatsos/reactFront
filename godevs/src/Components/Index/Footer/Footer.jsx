import React from 'react';
import { Link } from 'react-router-dom';
import you from '../imgs/you.png';
export const Footer = () => {
  return (
    <footer className="ft">
      <h1>Agora é com você</h1>
      <img src={you} alt="" />
      <div>
        <Link to={'/dev/login'}>Dev</Link>
        <Link to={'/cont/login'}>Contrante</Link>
      </div>
    </footer>
  );
};
