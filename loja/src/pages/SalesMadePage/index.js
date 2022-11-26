import PageWrapper from "../../components/PageWrapper";
import useSalesMade from "../../hooks/useSalesMade";
import './styles.css'

import * as React from 'react';
import { Typography } from '@mui/material';


function SalesMadePage() {
  const salesMade = useSalesMade();

  return (
    <PageWrapper>
      <Typography sx={{display:"flex", justifyContent:"center", fontSize:"26px", marginTop:"40px"}}>
        Registro de vendas 
      </Typography>
      <table className='tableSalesMade'>
          <tr>
            <th scope='col'>Nome do Cliente</th>
            <th scope='col'>Email</th>
            <th scope='col'>Telefone</th>
            <th scope='col'>Data da compra</th>
            <th scope='col'>ID da moto</th>
          </tr>
          {salesMade?.map((item) => (
            <tr>
              <td>{item?.buyerName}</td>
              <td>{item?.buyerEmail}</td>
              <td>{item?.buyerPhone}</td>
              <td>{item?.createdAt.substring(0,10)}</td>
              <td>{item?.motorcycleId}</td>
            </tr>
          ))}
      </table>
    </PageWrapper>
  );
}

export default SalesMadePage;
