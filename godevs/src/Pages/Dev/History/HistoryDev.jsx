import Dashboard from '../../../Components/Dashboard/Dashboard';
import Grid from '@mui/material/Grid';
import React, { useState, useEffect } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import WorkService from '../../../Services/WorkService';
import WorkBlockHistoryDev from '../../../Components/WorkBlockHistoryDev/WorkBlockHistoryDev';

export default function HistoryDev() {
    const [works, setWorks] = useState([]);
    const [idCont] = React.useState(localStorage.getItem("id"));

    useEffect(() => {
        async function load() {
                const serviceWork = new WorkService();
                await serviceWork.getWorksByDev(idCont);
                if (serviceWork.state.res.status === 200) {
                    setWorks(serviceWork.state.res.data);
                }
            }
        load();
    }, []);

    return (
        <>
            <Dashboard>
                <Grid
                    style={{ display: 'flex' }}
                    columnGap="30px"
                    rowGap="30px"
                    container
                >
                    {works.map((item) => (
                        <WorkBlockHistoryDev
                            key={item.id_work}
                            item={item}
                        >
                        </WorkBlockHistoryDev>
                    ))}
                </Grid>
            </Dashboard>
        </>
    );
}