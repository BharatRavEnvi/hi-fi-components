import { CircularProgress } from "@mui/material";
import React from "react";

const Loading = () => {
  return (
    <CircularProgress
      sx={{ marginX: "auto", width: "100%" }}
      variant='indeterminate'
    />
  );
};

export default Loading;
