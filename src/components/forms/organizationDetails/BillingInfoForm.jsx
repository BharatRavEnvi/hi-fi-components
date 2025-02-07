import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomBox from "../../shared/wrappers/CustomBox/CustomBox";
import { Heading, Paragraph } from "../../shared/Typos/Typos";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import InputComponent from "../../ui/InputComponent/InputComponent";
import CustomButton from "../../shared/Buttons/CustomButton/CustomButton";

import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import {
  billingFormConfig,
  entityFormConfig,
  entityInfo,
} from "../../../configs/config";
const BillingInfoForm = ({
  heading,
  para,
  setShowModal = () => {},
  handleStepChange = () => {},
  formData,
  setFormData,
}) => {
  const [errors, setErrors] = useState({});
  const [sameAsPostalAddress, setSameAsPostalAddress] = useState(
    formData.sameAsPostalAddress || false
  );
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    let updatedFormData = { ...formData };
    console.log(name, value, type, checked);
    if (name.startsWith("postalAddress") || name.startsWith("billingAddress")) {
      const [addressType, field] = name.split(".");
      updatedFormData = {
        ...updatedFormData,
        [addressType]: {
          ...updatedFormData[addressType],
          [field]: value,
        },
      };
    } else if (name === "sameAsPostalAddress") {
      setSameAsPostalAddress(checked);
      if (checked) {
        updatedFormData = {
          ...updatedFormData,
          [name]: checked,
          billingAddress: { ...formData.postalAddress },
        };
      } else {
        updatedFormData = {
          ...updatedFormData,
          [name]: checked,
        };
      }
    } else {
      updatedFormData = {
        ...updatedFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    }
    console.log(formData);
    setFormData(updatedFormData);
  };

  const handleSubmit = () => {
    setShowModal(false);
    handleStepChange();
  };
  useEffect(() => {
    if (sameAsPostalAddress) {
      // If the checkbox is checked, copy postal address to billing address
      setFormData((prevData) => ({
        ...prevData,
        billingAddress: { ...prevData.postalAddress },
      }));
    }
  }, [sameAsPostalAddress, formData, setFormData]);

  useEffect(() => {
    if (!formData) {
      setFormData({
        postalAddress: {
          postalAddressLine1: "",
          postalAddressLine2: "",
          postalCountry: "",
          postalState: "",
          postalCity: "",
          postalZipCode: "",
        },
        sameAsPostalAddress: false,
        billingAddress: {
          addressLine1: "",
          addressLine2: "",
          country: "",
          state: "",
          city: "",
          zipCode: "",
        },
        mobileNumber: "",
        billingContactNumber: "",
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
          {billingFormConfig.map(
            (
              { key, label, type, required, placeholder, spanTwoColumns },
              idx
            ) => {
              const getNestedValue = (formData, name) => {
                return name
                  .split(".")
                  .reduce((acc, part) => (acc ? acc[part] : ""), formData);
              };

              const value = getNestedValue(formData, key) || "";
              if (sameAsPostalAddress && key.startsWith("billingAddress")) {
                return null;
              }
              return (
                <Grid item xs={12} md={spanTwoColumns ? 12 : 6} key={key}>
                  <InputComponent
                    key={idx}
                    label={label}
                    placeholder={placeholder}
                    name={key}
                    type={type}
                    value={value || ""}
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

export default BillingInfoForm;
