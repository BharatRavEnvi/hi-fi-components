import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomBadge from "../CustomBadge/CustomBadge";
import InternalStepper from "../InternalStepper/internalStepper";

const OrganizationDetails = () => {
  const [orgSteps, setOrgSteps] = useState([
    { label: "Basic Details", status: "completed" },
    { label: "Billing Info", status: "active" },
    { label: "Contact Info", status: "inactive" },
    { label: "Entity Info", status: "inactive" },
  ]);
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "0.625rem",
          marginY: "2rem",
        }}
      >
        <Typography
          variant='h4'
          component={"h4"}
          fontSize={"1.5rem"}
          color={"#202020"}
          lineHeight={"28px"}
        >
          You have incomplete organization data
        </Typography>
        <Typography
          variant='p'
          component={"p"}
          fontSize={"1.25rem"}
          color={"#838383"}
          lineHeight={"24px"}
        >
          Complete the profile data to get the best out of the app
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#F5FBF5",
          borderRadius: "1rem",
          maxWidth: "96%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            justifyContent: "flex-start",
            alignItems: "start",
          }}
        >
          {orgSteps?.map((orgStep, idx) => {
            return (
              <InternalStepper
                status={orgStep?.status || "inactive"}
                text={orgStep?.label}
                step={idx + 1}
                key={idx}
              />
            );
          })}
        </Box>
        <Box sx={{ backgroundColor: "white" }}>TODO:"start work from here"</Box>
      </Box>
    </Box>
  );
};

export default OrganizationDetails;
