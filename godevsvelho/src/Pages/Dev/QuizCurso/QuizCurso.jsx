import Dashboard from '../../../Components/Dashboard/Dashboard';
import React from 'react';
import { useParams } from 'react-router-dom';
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
