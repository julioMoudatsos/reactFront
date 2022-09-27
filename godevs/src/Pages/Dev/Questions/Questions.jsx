import Dashboard from '../../../Components/Dashboard/Dashboard';
import React from 'react';
import { useParams } from 'react-router-dom';
import { FormQuiz } from '../../../Components/Quiz/Questions/FormQuiz';
import { ContainerDs2 } from '../../../Components/Ds2/ContainerDs2';
import { HeaderDs2 } from '../../../Components/Ds2/Header/HeaderDs2';
export const Questions = () => {
  const { id } = useParams();
  return (
    <>
      <Dashboard>
        <FormQuiz />
      </Dashboard>

    </>
  );
};
