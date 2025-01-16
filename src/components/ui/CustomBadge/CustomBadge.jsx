import { Box, Typography } from "@mui/material";
import React from "react";
import CheckIcon from "@mui/icons-material/Check";
const CustomBadge = ({ status, step = 0 }) => {
  //status-> completed, active,inactive
  let badgeStyles = {};
  let textStyles = {};
  let content = step;

  if (status === "completed") {
    badgeStyles = {
      backgroundColor: "#cecece", //gray
      color: "#646464", //dark gray
    };
    content = <CheckIcon sx={{ fontSize: "1.2rem" }} />;
  } else if (status === "active") {
    badgeStyles = {
      backgroundColor: "#c9e8ca", // Green background for active
      color: "#34581c", // Dark green text color for active
    };
    textStyles = { color: "#759768" }; // Dark green text color for active
  } else {
    badgeStyles = {
      backgroundColor: "#cecece", //gray
      color: "#646464", // dark
    };
  }
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "2rem",
        height: "2rem",
        borderRadius: "50%",
        padding: "0.5rem",
        ...badgeStyles,
      }}
    >
      {status === "completed" ? (
        content
      ) : (
        <Typography sx={{ fontSize: "1rem", ...textStyles }}>
          {content}
        </Typography>
      )}
    </Box>
  );
};

export default CustomBadge;
