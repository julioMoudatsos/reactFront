import React from 'react';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import { HeaderUser } from '../../../Components/PerfilUser/HeaderUser/HeaderUser';
import { InfoUser } from '../../../Components/PerfilUser/InfoUser/InfoUser';
import { ContainerDs2 } from '../../../Components/Ds2/ContainerDs2';
import { HeaderDs2 } from '../../../Components/Ds2/Header/HeaderDs2';
export const PerfilUser = () => {
  return (
    <>
      <Dashboard>
        <HeaderUser />
        <InfoUser />
      </Dashboard>
    </>
  );
};
