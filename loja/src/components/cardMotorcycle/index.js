import { Box, FormControlLabel, Grow, Paper, Switch } from '@mui/material';
import * as React from 'react';


const icon = (
  <Paper sx={{ m: 2 }} elevation={3}>
    <Box component="svg" sx={{ width: 300, height: 400 }}>
      <Box
        component="polygon"
        typography={"teste"}
        
        
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
      <div style={{display: "flex", flexWrap: "wrap", width: "620px"}}>
        {dataApi?.map((i) => (
              <div style={{border: "1px solid red", width: "200px", display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "center", backgroundImage:`${i?.image}`, backgroundRepeat: "no-repeat", backgroundSize: "100px 100px"}}>
                <h3>{i?.model}</h3>
                <h3>{i?.brand}</h3>
                <h3>{i?.cc}</h3>
                <img style={{width:"100px", height: "100px"}} src={i?.image} alt="Motorcycle"></img>
                <h3>R$: {i?.price}</h3>
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
