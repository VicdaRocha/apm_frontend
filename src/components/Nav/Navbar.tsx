import { IconButton } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import AddBoxRoundedIcon from "@mui/icons-material/AddBoxRounded";
import AppBar from "@mui/material/AppBar";
import AutoStoriesRoundedIcon from "@mui/icons-material/AutoStoriesRounded";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import MyListItem from "./List/MyListItem.tsx";
import MyListItemIcon from "./List/MyListItemIcon.tsx";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Navbar(props: {
  drawerWidth: number;
  content: React.ReactNode;
}) {

  const { drawerWidth, content } = props;
  const path = useLocation().pathname;

  const [openDrawer, setOpenDrawer] = useState(false);

  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
  }

  const myDrawer = (
    <div>
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          <MyListItem>
            <ListItemButton component={Link} to="/" selected={"/" === path}>
              <MyListItemIcon>
                <HomeRoundedIcon />
              </MyListItemIcon>
              <ListItemText primary={"Home"} />
            </ListItemButton>
          </MyListItem>
          <MyListItem>
            <ListItemButton
              component={Link}
              to="/about"
              selected={"/about" === path}
            >
              <MyListItemIcon>
                <AutoStoriesRoundedIcon />
              </MyListItemIcon>
              <ListItemText primary={"About"} />
            </ListItemButton>
          </MyListItem>
          <MyListItem>
            <ListItemButton
              component={Link}
              to="/create"
              selected={"/create" === path}
            >
              <MyListItemIcon>
                <AddBoxRoundedIcon />
              </MyListItemIcon>
              <ListItemText primary={"Create"} />
            </ListItemButton>
          </MyListItem>
        </List>
        <Divider />
      </Box>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          zIndex: (theme) => theme.zIndex.drawer + 1,
          borderRadius: {xs: '0', sm:"0px 0px 0px 30px"},
        }}
      >
        <Toolbar>
          <IconButton 
            sx = {{
              padding: '0',
              color: 'inherit',
              display: {
                xs: 'block',
                sm: 'none',
              }
            }}
            onClick = {handleOpenDrawer}
          >
          <MenuRoundedIcon/>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ marginLeft: "3%" }}
          >
            Ateliê Ponto Mágico
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant="permanent"
        sx={{
          display: {
            xs: 'none', 
            sm: 'block'
          },
          width: { drawerWidth },
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        {myDrawer}
      </Drawer>

      <Drawer
        variant="temporary"
        open = {openDrawer}
        onClose = {handleOpenDrawer}
        sx={{
          display: {
            xs: 'block', 
            sm: 'none'
          },
          width: { drawerWidth },
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        {myDrawer}
      </Drawer>

      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, marginLeft: `${drawerWidth}px` }}
      >
        <Toolbar />
        {content}
      </Box>
    </Box>
  );
}
