import { Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useMotocyclesDetail from "../../hooks/useMotorcycleDetail";
import "./styles.css";
import CheckoutModal from "../../components/CheckoutModal";
import useCreateSale from "../../hooks/useCreateSale";

function MotorcycleDetailsPage() {
  const { id } = useParams();
  const motorcycle = useMotocyclesDetail(id);
  const createSale = useCreateSale();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  const handleCreateSale = (event) => {
    event.preventDefault();
    let formData = new FormData(event.target);
    let saleData = {
      motorcycleId: id,
      buyerName: formData.get("buyerName"),
      buyerEmail: formData.get("buyerEmail"),
      buyerPhone: formData.get("buyerPhone"),
      createdAt: (new Date()).toISOString()
    };

    createSale(saleData).then(() => {
      navigate("/motorcycles");
    });
  };
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
                <div className='modelMotorcycleRightContent'>
                  <form
                    onSubmit={handleCreateSale}
                    className='clientInformations'
                  >
                    <input
                      name='buyerName'
                      type='text'
                      placeholder='Nome do Comprador'
                    />
                    <input 
                      name='buyerEmail'
                      type="email"
                      placeholder='Email' />
                    <input 
                      name='buyerPhone' 
                      type="number"
                      placeholder='Número do telefone' />
                    <div>
                      <button className='purchaseButton'>COMPRAR</button>
                    </div>
                  </form>
                </div>
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
      <CheckoutModal open={open} handleClose={handleClose} />
    </PageWrapper>
  );
}

export default MotorcycleDetailsPage;
