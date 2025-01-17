import { Box, Typography } from "@mui/material";
import React from "react";
import CustomBox from "../../shared/wrappers/CustomBox/CustomBox";
import { Heading, Paragraph } from "../../shared/Typos/Typos";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import CustomButton from "../../shared/Buttons/CustomButton/CustomButton";

const BillingInfoForm = ({
  heading,
  para,
  setShowModal = () => {},
  handleStepChange = () => {},
}) => {
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CustomBox
        sx={{
          padding: "0rem",
          backgroundColor: "transparent",
          gap: "12px",
        }}
      >
        {heading && <Heading sx={{ fontWeight: "600" }}>{heading}</Heading>}
        {para && <Paragraph>{para}</Paragraph>}
      </CustomBox>
      <CustomButton
        onClick={() => {
          setShowModal(false);
          handleStepChange();
        }}
        disableElevation
        sx={{
          backgroundColor: "#203c25",
          width: "fit-content",
          blockSize: "fit-content",
          "&:hover": { backgroundColor: "#203c12" },
          textTransform: "capitalize",
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",

          marginX: "auto",
        }}
        startIcon={<CheckRoundedIcon />}
      >
        <Typography sx={{ color: "white" }}>Save And Continue</Typography>
      </CustomButton>
    </Box>
  );
};

export default BillingInfoForm;
