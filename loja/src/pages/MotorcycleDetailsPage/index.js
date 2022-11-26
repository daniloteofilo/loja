import { Typography } from '@mui/material';
import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
import PageWrapper from '../../components/PageWrapper';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import useMotocyclesDetail from '../../hooks/useMotorcycleDetail';

function MotorcycleDetailsPage() {
  const motorcycle = useMotocyclesDetail()
  const { id } = useParams()
  
  console.log(motorcycle && motorcycle.id?motorcycle[id]:null);
  return (
    <PageWrapper>
      <NavLink to={"/motorcycles"} style={{cursor:"pointer"}}>
          <ArrowBackIcon />
      </NavLink>
        <Typography paragraph>
          Detalhes da moto {id}
          {/* <img src={motorcycle.image} alt={motorcycle.model}></img> */}
        </Typography>
    </PageWrapper>
  );
}

export default MotorcycleDetailsPage; 