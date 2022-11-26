import React from 'react';
import { Typography } from '@mui/material';

import CardMotorcycle from '../../components/CardMotorcycle';
import PageWrapper from '../../components/PageWrapper';

function HomePage() {
  return (
    <PageWrapper>
      <>
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
          enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
          imperdiet.
        </Typography>
        <Typography>
          <CardMotorcycle />
        </Typography>
      </>
    </PageWrapper>
  );
}

export default HomePage;

