import { Typography } from '@mui/material';
import PageWrapper from '../../components/PageWrapper';

function SalesPage() {
    return(
        <PageWrapper>
            <div className='mainContainerDetailsPage'>
            <Typography className='detailsLeftContainer'>
              <h3 className='textModelDetails'>teste</h3>
            </Typography>
            <div className='detailsRightContainer'>
                <h2>teste</h2>
            </div>
          </div>
        </PageWrapper>
    );
}

export default SalesPage;
