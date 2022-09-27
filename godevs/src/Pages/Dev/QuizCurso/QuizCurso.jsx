import Dashboard from '../../../Components/Dashboard/Dashboard';
import React from 'react';
import { useParams } from 'react-router-dom';
import { ContainerDs2 } from '../../../Components/Ds2/ContainerDs2';
import { HeaderDs2 } from '../../../Components/Ds2/Header/HeaderDs2';
import { Quest } from '../../../Components/Quiz/Quest/Quest';

export const QuizCurso = () => {
  const { id } = useParams();
  return (
    <>
      <Dashboard>
        <Quest id={id} />
      </Dashboard>
    </>
  );
};
