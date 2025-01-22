import { Box, Typography } from "@mui/material";
import React from "react";
import CustomBadge from "../CustomBadge/CustomBadge";

const GrayStepper = ({
  status,
  text,
  variant = "gray",
  step = 0,
  onClick,
  ...rest
}) => {
  const isActive = status === "active";
  const isCompleted = status === "completed";
  const isInactive = status === "inactive";

  const handleClick = (e) => {
    if (onClick) onClick(e);
  };

  const lightVariant = {
    active: {
      border: "2px solid #65BA74",
      textColor: "#203C25",
      badgeColor: "#65BA74",
    },
    completed: {
      border: "2px solid #A5ABB5",
      textColor: "#A5ABB5",
      badgeColor: "#A5ABB5",
    },
    inactive: {
      border: "2px solid #A5ABB5",
      textColor: "#A5ABB5",
      badgeColor: "#A5ABB5",
    },
  };

  const darkVariant = {
    active: {
      border: "2px solid #F6F7F8",
      textColor: "#F6F7F8",
      badgeColor: "#F6F7F8",
    },
    completed: {
      border: "2px solid #A5ABB5",
      textColor: "#A5ABB5",
      badgeColor: "#A5ABB5",
    },
    inactive: {
      border: "2px solid #A5ABB5",
      textColor: "#A5ABB5",
      badgeColor: "#A5ABB5",
    },
  };

  const styles = variant === "light" ? lightVariant : darkVariant;

  const currentStyles = isActive
    ? styles.active
    : isCompleted
      ? styles.completed
      : styles.inactive;

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
        border: currentStyles.border,
        borderRadius: "1rem",
        "&:hover": {
          border: `2px solid ${currentStyles.border}`,
          cursor: "pointer",
        },
        transition: "border-color 0.3s",
        minWidth: "200px",
      }}
    >
      <CustomBadge
        status={status}
        step={step}
        badgeColor={currentStyles.badgeColor}
      />
      <Typography
        variant='p'
        component={"p"}
        sx={{
          fontSize: "1rem",
          lineHeight: "22px",
          color: currentStyles.textColor,
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default GrayStepper;
