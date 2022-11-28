import React from 'react';
import { Typography } from '@mui/material';

import CardMotorcycle from '../../components/CardMotorcycle';
import PageWrapper from '../../components/PageWrapper';

function HomePage() {
  return (
    <PageWrapper>
      <>
        <Typography sx={{display:"flex", justifyContent:"center", fontSize:"26px", marginTop:"40px"}}>
          Lista de motos  
        </Typography>
        {/* <Typography> */}
          <CardMotorcycle />
        {/* </Typography> */}
      </>
    </PageWrapper>
  );
}

export default HomePage;

