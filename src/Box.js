import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Mvs } from './Mvs';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import SvgIcon from '@mui/material/SvgIcon';
import { ProfileInput } from './ProfileInput';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Home } from './Home';
import { ProfileEdit } from './ProfileEdit'
import { Drawer } from './Drawer';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { createContext, useContext } from 'react'
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const context = createContext({ modec: "black" });

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export const drawerWidth = 240;

export const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

export const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
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

export function MiniDrawer({ profiles, setProfiles }) {

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const [modec, setCmode] = useState("light")

  const theme = createTheme({
    palette: {
      mode: modec,
    },
  });




  return (
    <ThemeProvider theme={theme}>
      <Paper elevation={3} style={{ width: "100vw", minHeight: "100vh" }}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <AppBar position="fixed" open={open}>
            <Toolbar>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start"
                sx={{
                  marginRight: '36px',
                  ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" noWrap component="div">
                Navigation Bar
              </Typography>
              <context.Provider value={{ modec, setCmode }}>
                <Typography variant="h6" noWrap component="div" style={{ marginLeft: "auto" }}>
                  <ToggleColorMode />
                </Typography>
              </context.Provider>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent" open={open} className="drawer">
            <DrawerHeader>
              <IconButton onClick={handleDrawerClose}>
                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
              </IconButton>
            </DrawerHeader>
            <Divider />
            <List>
              <ListItem button key="Home">
                <ListItemIcon>
                  <HomeIcon color="primary" />
                </ListItemIcon>
                <Link to="/Home">Home</Link>
              </ListItem>
              <ListItem button key="Profile List">
                <ListItemIcon>
                <AccountCircleIcon color="primary" />
                </ListItemIcon>
                <Link to="/Mvs">Profile List</Link>
              </ListItem>
              <ListItem button key="Adding profile">
                <ListItemIcon>
                <AddCircleOutlineIcon color="primary" />
                </ListItemIcon>
                <Link to="/profileInput">Adding Profile</Link>
              </ListItem>
            </List>

            <Divider />

          </Drawer>
          <Switch>
            <Route exact path="/Mvs">
              <Mvs profiles={profiles} setProfiles={setProfiles} />
            </Route>
            <Route path="/Edit/:id">
              {/* console.log(id); */}
              <ProfileEdit profiles={profiles} setProfiles={setProfiles} />
            </Route>
            <Route path="/profileInput">
              <ProfileInput profiles={profiles} setProfiles={setProfiles} />
            </Route>
            <Route path="/Home">
              <Home />
            </Route>
            <Route path="**">
              Error Not Found
            </Route>
          </Switch>
        </Box>
      </Paper>
    </ThemeProvider>
  );
}






function ToggleColorMode() {
  const { modec, setCmode } = useContext(context);
  const moded = modec === "dark" ? "light" : "dark";
  return (
    <div className="ToggleColor" style={
      {
        backgroundColor: modec === "dark" ? "brown" : "skyblue"
      }
    } >
      <Button onClick={() => {
        setCmode(modec === "dark" ? "light" : "dark")
      }}>
        {moded} mode : {modec === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
      </Button></div>
  );
}
