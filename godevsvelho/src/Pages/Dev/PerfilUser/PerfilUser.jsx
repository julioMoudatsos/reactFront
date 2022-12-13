import React from 'react';
import Dashboard from '../../../Components/Dashboard/Dashboard';
import { HeaderUser } from '../../../Components/PerfilUser/HeaderUser/HeaderUser';
import { InfoUser } from '../../../Components/PerfilUser/InfoUser/InfoUser';
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
