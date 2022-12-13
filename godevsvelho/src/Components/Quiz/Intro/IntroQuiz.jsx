import React from 'react';
import '../quiz.scss';
import Champion from '../img/champion.svg';
import { CardQuiz } from '../CardQuiz/CardQuiz';
export const IntroQuiz = () => {
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

  return (
    <section className="containerQuiz">
      <div className="introquiz">
        <div style={{ marginLeft: '10px' }}>
          <h1 style={{ fontWeight: '800', fontSize: '20px' }}>
            Mostra que sabe !
          </h1>
          <p>
            Complete o Quiz para desbloquear suas medalhas e ganhar mais pontos
            de experiência
          </p>
        </div>
        <div>
          <img src={Champion} alt="#" />
        </div>
      </div>
      <div className="cardContainer">
        {cursos.map((curso) => {
          return (
            <CardQuiz
              key={curso.nome}
              nome={curso.nome}
              topicos={curso.topicos}
              cor={curso.cor}
              id={curso.id}
            />
          );
        })}
      </div>
    </section>
  );
};
