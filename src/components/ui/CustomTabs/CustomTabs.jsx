import { Tabs } from "@mui/material";
import React from "react";

const CustomTabs = ({
  children,
  textColor = "#fff",
  variant = "fullWidth", // Optional for full-width tabs
  ...rest
}) => {
  return (
    <Tabs
      {...rest}
      textColor={textColor}
      variant={variant}
      TabIndicatorProps={{
        style: {
          display: "none", // Disable the tab indicator (underline)
        },
      }}
      sx={{
        width: "100%",
        marginBottom: 0,
        "& .MuiTabs-flexContainer": {
          borderRadius: "8px 8px 0 0", // Rounded top corners for the entire tab container
        },
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        "@media (max-width: 600px)": {
          flexDirection: "column", // Stack tabs vertically on small screens
        },
      }}
    >
      {children}
    </Tabs>
  );
};

export default CustomTabs;
