import { Box, FormControlLabel, Grow, Paper, Switch } from '@mui/material';
import * as React from 'react';
import './styles.css'


const icon = (
  <Paper sx={{ m: 2 }} elevation={3}>
    <Box component="svg" sx={{ width: 300, height: 400 }}>
      <Box
        component="polygon"
      />
    </Box>
  </Paper>
);


function CardMotorcycle() {
  const urlApi = 'https://637b7ee56f4024eac20f4a06.mockapi.io/motorcycle'
  const [dataApi, setDataApi] = React.useState(null);

  const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };


  React.useEffect(() => {
    fetch(urlApi)
      .then((response) => response.json())
      .then((json) => setDataApi(json));
  }, []);

  console.log(dataApi);

  return (
    <>
      <div className='containerMotorcycleCards'>
        {dataApi?.map((i) => (
              <div className='cardsContainer'>
                <div className='topCardsContainer'>
                  <div>
                    <p className='modelText'>{i?.model}</p>
                    <p className='brandSmallText'>{i?.brand}</p>
                  </div>
                  <p className='priceText'>R$: {i?.price}</p>
                </div>
                
                <img className='imageCards' src={i?.image} alt={i?.model}></img>
                <div className='bottomCardsContainer'>
                  <div>
                    <p>Marca:</p>
                    <p>{i?.brand}</p>
                  </div>
                  <span></span>
                  <div>
                    <p>Cilindradas:</p>
                    <p>{i?.cc}</p>
                  </div>
                  
                </div>
              </div>
            ))}
      </div>
      <Box sx={{ height: 180 }}>
      <FormControlLabel
        control={<Switch checked={checked} onChange={handleChange} />}
        label="Show"
      />
      <Box sx={{ display: 'flex' }}>
        <Grow in={checked}>{icon}</Grow>
        {/* Conditionally applies the timeout prop to change the entry speed. */}
        <Grow
          in={checked}
          style={{ transformOrigin: '0 0 0' }}
          {...(checked ? { timeout: 1000 } : {})}
        >
          {icon}
        </Grow>
      </Box>
    </Box>
    </>
  );
}

export default CardMotorcycle;
