import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import './styles.css'

function CheckoutModal({ open, handleClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box className="modalContainer" >
          <p>
            Parabéns, deu tudo certo! O registro da
            venda foi adicionado a página de vendas efetuadas.
          </p>
          <div className='buttonConfirmModal' onClick={handleClose}>Confirmar</div>
        </Box>
      </Modal>
    </div>
  );
}
export default CheckoutModal;
