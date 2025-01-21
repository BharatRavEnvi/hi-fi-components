import React from "react";
import InfoLabel from "./InfoLabel";
import { Box, Checkbox, Typography } from "@mui/material";

const DataInfo = ({ label, labelSx, data, orientation = "row", type }) => {
  if (type === "heading") {
    return (
      <Typography
        sx={{
          fontWeight: "400",
          fontSize: "16px",
          marginBottom: "16px",
          marginTop: "16px",
        }}
        variant='h4'
      >
        {data}
      </Typography>
    );
  } else if (type === "checkbox") {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "12px",
          justifyContent: "flex-start",
          alignItems: "center",
          padding: "0px",
          margin: "0px",
        }}
      >
        <Checkbox
          checked={data === "true"} // data will be a boolean, so true = checked, false = unchecked
          disabled={data === "false"}
          sx={{
            padding: "0px",
            "&.Mui-checked": {
              color: "black", // color for checked state
            },
          }}
        />
        <InfoLabel data={label} />
      </Box>
    );
  }
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: orientation === "row" ? "1fr 2fr" : "1fr", // Define two columns for row and one for column
        gap: "1rem", // Add spacing between the two elements
      }}
    >
      <InfoLabel
        data={label}
        sx={{ ...labelSx, gridColumn: orientation === "row" ? "1" : "span 1" }} // InfoLabel takes the first column in row, full width in column
      />
      <Typography
        sx={{
          color: "#202020",
          fontSize: "16px",
          fontWeight: "600",
          gridColumn: orientation === "row" ? "2" : "span 1", // Typography takes the second column in row, full width in column
        }}
      >
        {data ? data : "-"}
      </Typography>
    </Box>
  );
};

export default DataInfo;
