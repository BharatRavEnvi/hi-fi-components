import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CustomBox from "../../shared/wrappers/CustomBox/CustomBox";
import { Heading, Paragraph } from "../../shared/Typos/Typos";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import InputComponent from "../../ui/InputComponent/InputComponent";
import CustomButton from "../../shared/Buttons/CustomButton/CustomButton";

import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import { entityFormConfig, entityInfo } from "../../../configs/config";
const EntityInfoForm = ({
  heading,
  para,
  setShowModal = () => {},
  handleStepChange = () => {},
  formData,
  setFormData,
}) => {
  const [errors, setErrors] = useState({});
  const handleChange = (event, index) => {
    const { name, value, type, checked } = event.target;
    const updatedFormData = [...formData];
    console.log(name, value, checked);
    if (type === "checkbox") {
      updatedFormData[index] = {
        ...updatedFormData[index],
        [name]: checked,
      };
    } else {
      updatedFormData[index] = {
        ...updatedFormData[index],
        [name]: value,
      };
    }
    console.log(updatedFormData);
    setFormData(updatedFormData);
  };
  let newEntity = {
    entityName: "",
    typeOfEntity: "",
    dateOfIncorporation: "",
    sharePercentage: "",
    businessOperation: "",
    mailAddress: "",
    enableEmission: false, //true or false boolean value, default  false
  };
  const handleAddEntity = () => {
    setFormData([...formData, newEntity]); // Add a new entity to the formData array
  };

  const handleSubmit = () => {
    setShowModal(false);
    handleStepChange();
  };
  useEffect(() => {
    if (!formData) {
      setFormData([
        {
          entityName: "",
          typeOfEntity: "",
          dateOfIncorporation: "",
          sharePercentage: "",
          businessOperation: "",
          mailAddress: "",
          enableEmission: false,
        },
      ]);
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
        overflowY: "scroll",
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
      {formData.map((entity, index) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "16px",
            marginY: "16px",
            padding: "0px",
            justifyContent: "flex-start",
          }}
          key={index}
        >
          {formData?.length > 1 && (
            <Typography
              sx={{ fontSize: "16px", fontWeight: "400", color: "#000000" }}
            >{`Entity ${index + 1}`}</Typography>
          )}
          <Grid
            container
            key={index}
            // sx={{
            //   gap: "16px 32px",
            //   padding: "0px",
            //   flexWrap: "wrap",
            // }}
            spacing={2}
          >
            {entityFormConfig.map(
              ({ key, label, type, required, placeholder }, idx) => {
                return (
                  <Grid item xs={12} md={6} key={key}>
                    <InputComponent
                      key={idx}
                      label={label}
                      placeholder={placeholder}
                      name={key}
                      type={type}
                      value={entity[key] || ""}
                      required={required}
                      onChange={(e) => handleChange(e, index)}
                      error={!!errors[key]}
                      helperText={errors[key]}
                      //   fullWidth
                    />
                  </Grid>
                );
              }
            )}
          </Grid>
        </Box>
      ))}
      {/* content end */}
      <Box>
        <CustomButton
          colorScheme='transparent'
          startIcon={<AddRoundedIcon fontSize='small' />}
          onClick={handleAddEntity}
        >
          Add another entity
        </CustomButton>
        <CustomButton
          onClick={handleSubmit}
          colorScheme='black'
          startIcon={<CheckRoundedIcon />}
          sx={{ marginX: "auto" }}
        >
          Save and Continue
        </CustomButton>
      </Box>
    </Box>
  );
};

export default EntityInfoForm;
