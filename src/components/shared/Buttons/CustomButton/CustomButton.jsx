import { Button } from "@mui/material";
import React from "react";

const CustomButton = ({
  children,
  sx,
  variant,
  onClick,
  disableElevation = true,
  width = "fit-content",
  colorScheme = "black", // Default colorScheme is black
  ...rest
}) => {
  //Note:for fellow developers
  //use disableElevation props instead of giving css
  let innerSx = {
    blockSize: "fit-content",
    textTransform: "capitalize",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "600",
  };

  switch (colorScheme) {
    case "black":
      innerSx = {
        ...innerSx,
        backgroundColor: "#203c25", // default green for black
        color: "white", // text and icon white
        "&:hover": { backgroundColor: "#adaaaa" },
      };
      break;
    case "green":
      innerSx = {
        ...innerSx,
        backgroundColor: "#C9E8CA",
        color: "#2A7E3B", // green text
        "&:hover": { backgroundColor: "#799179" },
      };
      break;
    case "transparent":
      innerSx = {
        ...innerSx,
        backgroundColor: "transparent",
        color: "#2A7E3B", // default green text
        "&:hover": { backgroundColor: "#e1f2e2" },
      };
      break;
    case "lightGray":
      innerSx = {
        ...innerSx,
        backgroundColor: "#DBDDE2", // light gray background
        color: "#7D8293", // gray text
        "&:hover": { backgroundColor: "#c3c5c9" },
      };
      break;
    case "darkerGray":
      innerSx = {
        ...innerSx,
        backgroundColor: "#CACED4", // darker gray background
        color: "#7D8293", // gray text
        "&:hover": { backgroundColor: "#f5f7fa" },
      };
      break;
    case "transparentGray":
      innerSx = {
        ...innerSx,
        backgroundColor: "transparent", // darker gray background
        color: "#7D8293", // gray text
        "&:hover": { backgroundColor: "#d2d2d4" },
      };
      break;
    default:
      innerSx = {
        ...innerSx,
        backgroundColor: "#203c25", // Default background color (green)
        color: "white", // Default text/icon color
        "&:hover": { backgroundColor: "#203c12" },
      };
  }

  const handleOnClick = (e) => {
    if (onClick) onClick(e);
  };

  return (
    <Button
      variant={variant || "contained"}
      sx={{ width, ...innerSx, ...sx }}
      disableElevation={disableElevation}
      {...rest}
      onClick={handleOnClick}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
