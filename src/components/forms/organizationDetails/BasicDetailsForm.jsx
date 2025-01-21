import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomBox from "../../shared/wrappers/CustomBox/CustomBox";
import { Heading, Paragraph } from "../../shared/Typos/Typos";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import InputComponent from "../../ui/InputComponent/InputComponent";
import CustomButton from "../../shared/Buttons/CustomButton/CustomButton";

import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { basicDetailsFormConfig } from "../../../configs/config";
const BasicDetailsForm = ({
  heading,
  para,
  setShowModal = () => {},
  handleStepChange = () => {},
  formData,
  setFormData,
}) => {
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    let updatedFormData = { ...formData };
    console.log(name, value, checked, type);
    if (name === "countryCode") {
      updatedFormData = { ...updatedFormData, countryCode: value };
    } else if (name === "phoneNumber") {
      updatedFormData = { ...updatedFormData, phoneNumber: value };
    } else {
      updatedFormData = {
        ...updatedFormData,
        [name]: value,
      };
    }

    console.log(updatedFormData);
    setFormData(updatedFormData);
  };

  const handleSubmit = () => {
    setShowModal(false);
    handleStepChange();
  };
  useEffect(() => {
    if (!formData) {
      setFormData({
        organizationLegalName: "",
        abbreviatedName: "",
        corporateIdentityNumber: "",
        yearOfIncorporation: "",
        industryType: [], //multiselect // data format -> {name:"",value:""}
        natureOfOwnerShip: "", // single select
        employmentTypes: [], //multiselect
        numberOfEmployees: "",
        financialYear: "", //date in range // data format  2023-2028
        stockAndShares: "",
        paidUpCapital: "", //price
        pucCurrency: "rupee", //Note:-default currency, can be change based on origin, as of now im assuming it.
        companyWebsite: "", //company website url
        linkedIn: "", //linkedin url (optional: https:// or wwww.example.com)
      });
    }
  }, [formData, setFormData]);
  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",

        //used css from chatgpt below css
        overflowY: "auto", // Initially allow scrolling
        "&:hover": {
          overflowY: "scroll", // Show scrollbar when user hovers
          scrollbarWidth: "none", //todo: make thin while on prod thin
        },
        "::-webkit-scrollbar": {
          display: "none", // Hide scrollbar initially
        },
        "&:hover::-webkit-scrollbar": {
          display: "block", // Show scrollbar when hovering
        },
        scrollbarWidth: "none", // Firefox
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

      {/* content */}

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          marginY: "16px",
          padding: "0px",
          justifyContent: "flex-start",
        }}
      >
        <Grid container spacing={2}>
          {basicDetailsFormConfig.map(
            (
              { key, label, type, required, placeholder, spanTwoColumns },
              idx
            ) => {
              return (
                <Grid item xs={12} md={spanTwoColumns ? 12 : 6} key={key}>
                  <InputComponent
                    key={idx}
                    label={label}
                    placeholder={placeholder}
                    name={key}
                    type={type}
                    value={formData[key] || ""}
                    required={required}
                    onChange={handleChange}
                    error={!!errors[key]}
                    helperText={errors[key]}
                    formData={formData}
                    setFormData={setFormData}
                    //   fullWidth
                  />
                </Grid>
              );
            }
          )}
        </Grid>
      </Box>

      {/* content end */}

      <CustomButton
        onClick={handleSubmit}
        colorScheme='black'
        startIcon={<CheckRoundedIcon />}
        sx={{ marginX: "auto", marginTop: "36px" }}
      >
        Save and Continue
      </CustomButton>
    </Box>
  );
};

export default BasicDetailsForm;
