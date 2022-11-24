import * as React from 'react';


function CardMotorcycle() {
  const urlApi = 'https://637b7ee56f4024eac20f4a06.mockapi.io/motorcycle'
  const [dataApi, setDataApi] = React.useState(null);


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
                <img style={{width:"100px", height: "100px"}} src={i?.image}></img>
                <h3>R$: {i?.price}</h3>
              </div>
            ))}
      </div>
    </>
  );
}

export default CardMotorcycle;