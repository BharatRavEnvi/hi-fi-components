import { Box, Typography } from "@mui/material";
import React from "react";
import CustomBadge from "../CustomBadge/CustomBadge";
import { number } from "zod";

const InternalStepper = ({ status, text, step = 0, onClick, ...rest }) => {
  // 3 status-> active, complete or

  const isActive = status === "active";
  const isCompleted = status === "completed";
  const handleClick = (e) => {
    if (onClick) onClick(e);
  };
  return (
    <Box
      onClick={handleClick}
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "0.625rem",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: "0.5rem 2rem",
        border: isActive ? `2px solid #65BA74` : "2px solid transparent",
        borderRadius: "1rem",
        "&:hover": {
          border: `2px solid ${isActive ? "#65BA74" : "#cecece"}`,
          cursor: "pointer",
        },
        transition: "border-color 0.3s",
        width: "200px",
      }}
    >
      <CustomBadge status={status} step={step} />
      <Typography
        variant='p'
        component={"p"}
        sx={{
          fontSize: "1rem",
          lineHeight: "22px",
          color: isActive ? "#203C25" : "#646464",
          textWrap: "nowrap",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default InternalStepper;
