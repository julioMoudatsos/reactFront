import DashboardContratante from '../../../Components/Dashboard/DashboardContratante';
import Grid from '@mui/material/Grid';
import { TextField, Typography, Link, Button } from "@mui/material";

export default function HomeCont() {
    return (
        <>
            <DashboardContratante>
                <Grid container rowSpacing={1} columnSpacing={1}>
                    <Grid item xs={6} sm={4}>
                        <Button
                            size='large'
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={() => {window.location.href ="home/projeto"}}
                        >
                            Novo Projeto
                        </Button>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Button
                            size='large'
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Minha Equipe
                        </Button>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                        <Button
                            size='large'
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Contato
                        </Button>
                    </Grid>
                </Grid>
            </DashboardContratante>
        </>
    );
}