import React from 'react';
import { Link } from 'react-router-dom';
const cursos = [
  {
    id: 0,
    nome: 'React',
    topicos: 'Basics, Components, ESNext Syntax, Hooks, Tools',
    cor: '#fb1',
  },
  {
    id: 1,
    nome: 'Node js',
    topicos: ' Console, Events, HTTP, Modules, Packages',
    cor: '#ADDF6E',
  },
  {
    id: 2,
    nome: 'PHP',
    topicos: '  Arrays, Classes, Language Basics, Syntax, Utility Functions',
    cor: '#808BB6',
  },
  {
    id: 3,
    nome: 'Java',
    topicos: 'Basics, Components, ESNext Syntax, Hooks, Tools',
    cor: '#fb1',
  },
];
export const Quest = ({ id }) => {
  console.log(cursos[0], id);
  return (
    <div style={{ padding: '100px' }}>
      <h1> Avaliação de {cursos[id].nome}</h1>
      <p style={{ marginBottom: '10px' }}>Tópicos: {cursos[id].topicos}</p>
      <p style={{ marginBottom: '10px' }}>
        10 perguntas de múltipla escolha 2,5 minutos por pergunta Para
        conquistar um selo, fique entre os top 40%
      </p>
      <div>
        <b>Antes de começar</b>
        <ul style={{ marginBottom: '15px' }}>
          <li>
            Você pode refazer esta avaliação uma vez caso não ganhe um selo.
          </li>
          <li>
            Não exibiremos seus resultados a ninguém sem a sua autorização.
          </li>
        </ul>
      </div>
      <Link
        style={{
          textDecoration: 'none',
          backgroundColor: '#333',
          padding: '5px',
          color: '#fb1',
          borderRadius: '5px',
        }}
        to={`/dev/dev-quizcursoquestion/${id}`}
      >
        Começar
      </Link>
    </div>
  );
};
