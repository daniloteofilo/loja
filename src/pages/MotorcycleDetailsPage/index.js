import React, { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import PageWrapper from "../../components/PageWrapper";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import useMotocyclesDetail from "../../hooks/useMotorcycleDetail";
import CheckoutModal from "../../components/CheckoutModal";
import useCreateSale from "../../hooks/useCreateSale";
import "./styles.css";
import LoadingProgress from '../../components/LoadingProgress';

function MotorcycleDetailsPage() {
  const { id } = useParams();
  const motorcycle = useMotocyclesDetail(id);
  const createSale = useCreateSale();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
    navigate("/motorcycles");
  } 

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
      setOpen(true)
    });
  };
  return (
    <PageWrapper className="bodyMotorcycleDetails">
      {motorcycle ? (
        <>
          <NavLink to={"/motorcycles"} style={{ cursor: "pointer" }}>
            <ArrowBackIcon />
          </NavLink>
          <div className='mainContainerDetailsPage'>
            <div className='detailsLeftContainer'>
              <h3 className='textModelDetails'>{motorcycle.model}</h3>
              <img className="imageMotorcyleDetails" src={motorcycle.image} alt='motorcycle' />
            </div>
            <div className='detailsRightContainer'>
              <div className='detailsRightContent'>
                <div className='priceContent'>R$: {motorcycle.price}</div>
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
          <div className='bottomDetailsPage'>
            <h1> Informações da moto</h1>
            <p>
              Inspirada nas motos esportivas de alta performance, a nova {motorcycle.model} chegou 
              com ousadia e sofisticação. Com um design marcante e inovador, esse modelo tem
              estilo de sobra para você surpreender por onde passar.
              A {motorcycle.model} garante segurança para você encarar o trânsito da cidade com mais
              tranquilidade e conforto que somente a {motorcycle.brand} pode oferecer. Ela conta com 
              um motor de {motorcycle.cc} e um sistema de freios CBS (Combined Brake System) que
              distribui a frenagem entre as rodas de maneira inteligente. 
            </p>
          </div>
        </>
      ) : 
        <LoadingProgress />
      }
      <CheckoutModal open={open} handleClose={handleClose} />
    </PageWrapper>
  );
}

export default MotorcycleDetailsPage;
