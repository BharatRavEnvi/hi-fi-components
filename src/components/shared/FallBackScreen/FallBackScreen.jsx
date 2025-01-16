import { Box, Typography } from "@mui/material";
import React from "react";
import Loading from "../../loaders/Loading/Loading";

const FallBackScreen = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
        "&:active": {
          transform: "scale(1)",
        },
      }}
    >
      <Loading />
      <Typography noWrap fontSize={"2rem"}>
        Loading...
      </Typography>
    </Box>
  );
};

export default FallBackScreen;
