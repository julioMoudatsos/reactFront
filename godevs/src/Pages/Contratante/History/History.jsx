import DashboardContratante from '../../../Components/Dashboard/DashboardContratante';
import Grid from '@mui/material/Grid';
import React, { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import WorkService from '../../../Services/WorkService';
import WorkBlockDev from '../../../Components/WorkBlockDev/WorkBlockDev';
import FilterService from '../../../Services/FilterService';

export default function AddWork() {
    const [works, setWorks] = useState([]);
    const [idCont] = React.useState(localStorage.getItem("idCont"));

    useEffect(() => {
        async function load() {
                const serviceWork = new WorkService();
                await serviceWork.getHistoricoByCont(idCont);
                if (serviceWork.state.res.status === 200) {
                    setWorks(serviceWork.state.res.data);
                }
            }
        load();
    }, []);

    return (
        <>
            <DashboardContratante>
                <Grid
                    style={{ display: 'flex' }}
                    columnGap="30px"
                    rowGap="30px"
                    container
                >
                    {works.map((item) => (
                        <WorkBlockDev
                            key={item.id_work}
                            item={item}
                        >
                        </WorkBlockDev>
                    ))}
                </Grid>
            </DashboardContratante>
        </>
    );
}