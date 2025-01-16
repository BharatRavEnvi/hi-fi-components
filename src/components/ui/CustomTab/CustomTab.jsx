import { Tab } from "@mui/material";
import React from "react";

const CustomTab = ({ label, selectedTabId, currentTabId, ...rest }) => {
  return (
    <Tab
      label={label}
      sx={{
        fontSize: "1.25rem",
        marginX: "0.25rem",
        // width: "fit-content",
        backgroundColor: selectedTabId === currentTabId ? "white" : "#d9d9d9",
        color: selectedTabId === currentTabId ? "black" : "#8b8b8c",
        borderRadius: "1rem 1rem 0 0", // Rounded top corners for selected tab
        "&:hover": {
          backgroundColor:
            selectedTabId !== currentTabId ? "#B3B3B3" : "#f3f3f3", // Hover effect
        },

        textDecoration: "none",
        flexGrow: "1",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "2.5rem",
        padding: "1rem 2rem",
        // textWrap: "nowrap",
        "@media (max-width: 600px)": {
          padding: "1rem", // Reduce padding on small screens
          fontSize: "0.8rem", // Adjust font size for small screens
        },
        "@media (max-width: 400px)": {
          padding: "0.5rem", // Further reduce padding for very small screens
          fontSize: "0.6rem", // Further adjust font size for very small screens
        },
      }}
      {...rest}
    />
  );
};

export default CustomTab;
