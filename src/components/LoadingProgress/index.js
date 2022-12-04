import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "./styles.css";

function LoadingProgress() {
  return (
    <Box className='loadingStyle'>
      <CircularProgress sx={{ color: "black" }} />
    </Box>
  );
}

export default LoadingProgress;
