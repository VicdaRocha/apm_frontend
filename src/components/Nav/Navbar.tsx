import { Link, useLocation } from 'react-router-dom';
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import AutoStoriesRoundedIcon from '@mui/icons-material/AutoStoriesRounded';
import MyListItem from './List/MyListItem.tsx';
import MyListItemIcon from './List/MyListItemIcon.tsx';
import { ReactNode } from 'react';

export default function Navbar(props: { drawerWidth: number, content: ReactNode }) {

    const { drawerWidth, content } = props;
    const path = useLocation().pathname;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Ateliê Ponto Mágico
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: {drawerWidth},
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <MyListItem>
                <ListItemButton component={Link} to="/home" selected={"/home" === path}>
                    <MyListItemIcon>
                        <HomeRoundedIcon />
                    </MyListItemIcon>
                    <ListItemText primary={"Home"}/>
                </ListItemButton>
            </MyListItem>
            <MyListItem>
                <ListItemButton component={Link} to="/about" selected={"/about" === path}>
                    <MyListItemIcon>
                        <AutoStoriesRoundedIcon />
                    </MyListItemIcon>
                    <ListItemText primary={"About"}/>
                </ListItemButton>
            </MyListItem>
            <MyListItem>
                <ListItemButton component={Link} to="/create" selected={"/create" === path}>
                    <MyListItemIcon>
                        <AddBoxRoundedIcon />
                    </MyListItemIcon>
                    <ListItemText primary={"Create"}/>
                </ListItemButton>
            </MyListItem>
          </List>
          <Divider/>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, marginLeft: `${drawerWidth}px` }}>
        <Toolbar />
        { content }
      </Box>
    </Box>
  );
}
