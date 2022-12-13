import DashboardContratante from "../../../Components/Dashboard/DashboardContratante";
import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";
import WorkService from "../../../Services/WorkService";
import WorkBlockCont from "../../../Components/WorkBlockCont/WorkBlockCont";

export default function History() {
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
  }, [idCont]);

  return (
    <>
      <DashboardContratante>
        <Grid
          style={{ display: "flex" }}
          columnGap="30px"
          rowGap="30px"
          container
        >
          {works.map((item) => (
            <WorkBlockCont item={item}/>
          ))}
        </Grid>
      </DashboardContratante>
    </>
  );
}
