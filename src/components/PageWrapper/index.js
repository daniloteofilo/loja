import React, { useState } from 'react';
import { Box } from '@mui/material';

import AsideMenu from '../../components/AsideMenu';

const drawerWidth = 260;

function PageWrapper ({ children }) {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };

    return (
      <Box sx={{ display: 'flex' }}>
        <AsideMenu
          mobileOpen={mobileOpen}
          handleDrawerToggle={handleDrawerToggle}
          drawerWidth={drawerWidth}
        />
        <Box
          component="main"
          sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
        >
          {children}
        </Box>
      </Box>
    )
};

export default PageWrapper;
