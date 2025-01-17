import { Typography } from "@mui/material";
import React from "react";

const Heading = ({ variant, children, sx, ...rest }) => {
  //Note:"For Fellow Developers"
  //if need space then use gutterBottom instead of giving space
  return (
    <Typography
      variant={variant || "h5"}
      {...rest}
      sx={{ maxWidth: "750px", ...sx }}
    >
      {children}
    </Typography>
  );
};

const Paragraph = ({ variant, children, sx, ...rest }) => {
  return (
    <Typography
      variant={variant || "body1"}
      sx={{ color: "#838383", maxWidth: "750px", ...sx }}
      {...rest}
    >
      {children}
    </Typography>
  );
};
export { Heading, Paragraph };
