import { Typography } from "@mui/material";
import React from "react";

const InfoLabel = ({ data, sx, textWrap = "wrap", ...rest }) => {
  return (
    <Typography sx={{ color: "#838383", ...sx, textWrap: textWrap }}>
      {data}
    </Typography>
  );
};

export default InfoLabel;
