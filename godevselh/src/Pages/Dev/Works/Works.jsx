import Dashboard from '../../../Components/Dashboard/Dashboard';
import WorkBlock from '../../../Components/WorkBlock/WorkBlock';
import Grid from '@mui/material/Grid';
import WorkService from '../../../Services/WorkService';
import FilterService from '../../../Services/FilterService';
import React, { useState, useEffect } from 'react';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
function Works() {
  const [works, setWorks] = useState([]);
  const [selected, setSelected] = useState('Selecione');
  const [filters] = useState([
    {
      id: 1,
      description: 'React',
    },
    {
      id: 2,
      description: 'Java',
    },
    {
      id: 3,
      description: 'Java Script',
    },
    {
      id: 4,
      description: 'HTML',
    },
    {
      id: 5,
      description: 'Angular',
    },
    {
      id: 6,
      description: 'C#',
    },
    {
      id: 7,
      description: 'PHP',
    },
  ]);

  useEffect(() => {
    async function carregaWorks() {
      const serviceWork = new WorkService();
      await serviceWork.getWorks();
      if (serviceWork.state.res.status === 200) {
        setWorks(serviceWork.state.res.data);
      }
      console.log(serviceWork.state.res.data);
    }
    carregaWorks();
  }, []);

  const service = new FilterService();

  const handleChange = (e) => {
    setSelected(e.target.value);
  };

  useEffect(() => {
    async function load() {
      if (selected !== 'Selecione') {
        await service.getByFilter(selected);
        setWorks(service.state.res.data);
        console.log();
      } else {
        const serviceWork = new WorkService();
        await serviceWork.getWorks();
        if (serviceWork.state.res.status === 200) {
          setWorks(serviceWork.state.res.data);
        }
      }
    }
    load();
  }, [selected]);
  return (
    <>
      <Dashboard>
      <>
      <div
        style={{
          display: 'flex',
          alignSelf: 'flex-end',
          justifySelf: 'flex-end',
        }}
      >
        <Select
          value={selected}
          style={{ width: '200px' }}
          onChange={handleChange}
        >
          <MenuItem value="Selecione" style={{ marginTop: '40px' }}>
            <em>Selecione</em>
          </MenuItem>
          {filters.map((item) => (
            <MenuItem key={item.id} value={item.description}>
              {item.description}
            </MenuItem>
          ))}
        </Select>
      </div>
      <Grid container rowSpacing={2}>
        {works.map((item) => (
          <Grid paddingTop={3} item xs={12} sm={4}>
            <WorkBlock
              key={item.id_work}
              id={item.id_work}
              titulo={item.titulo}
              categoria={item.categoria}
              contratante={item.contratante.nome}
              data={item.data_limite}
              valor={item.valor}
              descricao={item.descricao}
            ></WorkBlock>
          </Grid>
        ))}
      </Grid>
    </>
        </Dashboard>
    </>
  );
}

export default Works;
