import React from 'react';
import { NavLink } from 'react-router-dom';
import useMotocycles from '../../hooks/useMotorcycle';
import './styles.css'

function CardMotorcycle() {
  const motorcycles = useMotocycles()

  return (
    <>
      <div className='containerMotorcycleCards'>
        {motorcycles?.map((motorcycle) => (
          <NavLink to={`/motorcycles/${motorcycle.id}`} key={motorcycle.id}>
            <div className='cardsContainer'>
              <div className='topCardsContainer'>
                <div>
                  <p className='modelText'>{motorcycle?.model}</p>
                  <p className='brandSmallText'>{motorcycle?.brand}</p>
                </div>
                <p className='priceText'>R$: {motorcycle?.price}</p>
              </div>

              <img className='imageCards' href='/login' src={motorcycle?.image} alt={motorcycle?.model}></img>
              <div className='bottomCardsContainer'>
                <div>
                  <p>Marca:</p>
                  <p>{motorcycle?.brand}</p>
                </div>
                <span></span>
                <div>
                  <p>Cilindradas:</p>
                  <p>{motorcycle?.cc}</p>
                </div>

              </div>
            </div>
          </NavLink>

        ))}
      </div>
    </>
  );
}

export default CardMotorcycle;
