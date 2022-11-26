import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import './styles.css'

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 5,
  borderRadius: "10px",
  outline:"none",
  height:"500px"
};

function CheckoutModal({ open, handleClose }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <form>
            <input type="text" placeholder='Nome do Comprador'/>
            <input type="text" placeholder='Nome do Vendedor'/>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
export default CheckoutModal;
