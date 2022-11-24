import * as React from 'react';
import CardMotorcycle from '../../components/cardMotorcycle';


function HomePage() {
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
      <CardMotorcycle />
    </>
  );
}

export default HomePage;

