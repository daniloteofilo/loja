import * as React from 'react';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar } from '@mui/material';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';


function AsideMenu({ mobileOpen, handleDrawerToggle, drawerWidth }) {

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {['Listagem de motos', 'Configurações do usuário'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href={index === 0 ? "/motorcycles" : "/userconfig"}>
              <ListItemIcon>
                {index === 0 ? <TwoWheelerIcon /> : ''}
                {index === 1 ? <SettingsIcon /> : ''}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Sair'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton href={index === 0 ? "/login" : ''} className="logoutButton">
              <ListItemIcon>
                {index === 0 ? <ExitToAppIcon /> : ''}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );


  return (
    <>
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