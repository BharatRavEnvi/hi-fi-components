import { Box } from "@mui/material";
import React from "react";

const CustomBox = ({ children, sx, ...rest }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#F5FBF5",
        borderRadius: "1rem",
        padding: "1rem",
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Box>
  );
};

export default CustomBox;
