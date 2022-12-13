import React from 'react';
import { AtaDev } from '../../../Components/Ata/AtaDev';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import { ContainerDs2 } from '../../../Components/Ds2/ContainerDs2';
import { HeaderDs2 } from '../../../Components/Ds2/Header/HeaderDs2';

export const Ata = () => {
  return (
    <>
      <Dashboard>
        <AtaDev />
      </Dashboard>
    </>
  );
};
