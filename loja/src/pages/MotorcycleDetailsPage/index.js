import { Typography } from "@mui/material";
import React from "react";
import { NavLink, useParams } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useMotocyclesDetail from "../../hooks/useMotorcycleDetail";
import "./styles.css";

function MotorcycleDetailsPage() {
  const { id } = useParams();
  const motorcycle = useMotocyclesDetail(id);

  console.log(motorcycle && motorcycle.id ? motorcycle[id] : null);
  return (
    <PageWrapper>
      {motorcycle ? (
        <>
          <NavLink to={"/motorcycles"} style={{ cursor: "pointer" }}>
            <ArrowBackIcon />
          </NavLink>
          <div className='mainContainerDetailsPage'>
            <Typography className='detailsLeftContainer'>
              <h3 className='textModelDetails'>{motorcycle.model}</h3>
              <img src={motorcycle.image} alt='motorcycle' />
            </Typography>
            <div className='detailsRightContainer'>
              <div className='detailsRightContent'>
                <div className='priceContent'>R$: {motorcycle.price}</div>
                <h2 className='modelMotorcycleRightContent'>
                  {motorcycle.brand}
                </h2>
                <div className='purchaseButton'>COMPRAR</div>
              </div>
            </div>
          </div>
          <div className='bottomDetailsPage'>
            <h1> Informações da moto</h1>
            <p>Cilindradas: {motorcycle.cc}</p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit
              necessitatibus enim impedit quasi dicta. Adipisci, blanditiis
              fugiat modi corrupti sit vero molestias commodi neque tempora
              distinctio dicta odit, odio facere?
            </p>
          </div>
        </>
      ) : (
        "Loading..."
      )}
    </PageWrapper>
  );
}

export default MotorcycleDetailsPage;
