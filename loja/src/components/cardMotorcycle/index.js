import * as React from 'react';
import './styles.css'

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
                
                <img className='imageCards' href='/login' src={i?.image} alt={i?.model}></img>
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
    </>
  );
}

export default CardMotorcycle;
