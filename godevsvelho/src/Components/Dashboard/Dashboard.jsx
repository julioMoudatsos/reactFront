import * as React from 'react';
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Profile from '../Profile/Profile';
import MenuIcon from '@mui/icons-material/Menu';
import MenuPopUp from '../MenuPopUp/MenuPopUp';
import ManIcon from '@mui/icons-material/Man';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import QuizIcon from '@mui/icons-material/Quiz';
import WorkIcon from '@mui/icons-material/Work';
import '../../Assets/global.scss';
import HistoryIcon from '@mui/icons-material/History';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Dashboard extends React.Component {
  render() {
    return (
      <DashboardContent {...this.props}>{this.props.children}</DashboardContent>
    );
  }
}

function DashboardContent(props) {
  const matches = useMediaQuery('(min-width: 900px)');

  const [open, setOpen] = React.useState(!matches);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const menuDefault = [
    {
      title: 'Trabalhos',
      link: '/dev/works',
      icon: <WorkIcon />,
    },
    {
      title: 'Dev Quiz',
      link: '/dev/dev-quiz',
      icon: <QuizIcon />,
    },
    {
      title: 'Meu Perfil',
      link: '/dev/profile',
      icon: <ManIcon />,
    },
    {
      title: 'Histórico',
      link: '/dev/historico',
      icon: <HistoryIcon />,
    },
    {
      title: 'Ata',
      link: '/dev/ata',
      icon: <WorkIcon />,
    },
  ];

  const drawerWidth = 240;

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    backgroundColor: 'wjite',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      backgroundColor: 'white',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }));

  React.useEffect(() => {
    if (matches) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  }, [matches]);

  return (
    <Box sx={{ display: 'flex' }}>
      <ToastContainer />
      <CssBaseline />
      <AppBar position="fixed" color="secondary" open={open}>
        <Toolbar
          sx={{
            pr: '24px',
          }}
        >
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: '36px',
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1 }}
          ></Typography>

          <Profile></Profile>
        </Toolbar>
      </AppBar>

      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            px: [1],
          }}
        >
          <img src={'/logo.png'} className="logo_style" alt="" />
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>

        <Divider />

        <List key="menu_pt_1">
          {menuDefault.map((text, index) => {
            if (text.children !== undefined) {
              return (
                <MenuPopUp
                  route={text}
                  activeClassName="active"
                  key={index}
                ></MenuPopUp>
              );
            }
            return (
              <Link
                key={text.title}
                to={text.link}
                style={{ textDecoration: 'none', color: '#000000' }}
              >
                <ListItem button>
                  <ListItemIcon>{text.icon}</ListItemIcon>
                  <ListItemText primary={text.title} />
                </ListItem>
                <Divider sx={{ my: 0.5 }} />
              </Link>
            );
          })}
        </List>
      </Drawer>

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          height: '100vh',
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Container maxWidth="false" sx={{ mt: 2, mb: 2 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12} lg={12}>
              <Paper
                elevation={0}
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  autoHeight: true,
                }}
              >
                {props.children}
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}

export default Dashboard;
