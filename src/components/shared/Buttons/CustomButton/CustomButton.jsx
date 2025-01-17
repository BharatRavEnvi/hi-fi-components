import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({
  children,
  sx,
  variant,
  onClick,

  ...rest
}) => {
  //Note:for fellow developers
  //use disableElevation props instead of giving css
  const handleOnClick = (e) => {
    if (onClick) onClick(e);
  };

  return (
    <Button
      variant={variant || "contained"}
      sx={{ ...sx }}
      {...rest}
      onClick={handleOnClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
