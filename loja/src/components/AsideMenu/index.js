import React from 'react';
import { AppBar, Box, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import SettingsIcon from '@mui/icons-material/Settings';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';


function AsideMenu({ mobileOpen, handleDrawerToggle, drawerWidth }) {

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Listagem de motos', 'Vendas efetuadas'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <NavLink to={index === 0 ? "/motorcycles" : "/sales"}>
              <ListItemButton >
                <ListItemIcon>
                  {index === 0 ? <TwoWheelerIcon /> : ''}
                  {index === 1 ? <MonetizationOnIcon /> : ''}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Configurações do usuário', 'Sair'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <NavLink to={index === 0 ? "/userConfig" : "/login"}>
              <ListItemButton>
                <ListItemIcon>
                  {index === 0 ? <SettingsIcon /> : <ExitToAppIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </NavLink>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          background:"black",
          width: { sm: `0` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Menu Responsivo
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
}
export default AsideMenu;
