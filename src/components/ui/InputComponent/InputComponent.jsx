import React from "react";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  TextareaAutosize,
  Box,
  InputAdornment,
  Checkbox,
  Typography,
} from "@mui/material";
import InfoLabel from "../DataInfo/InfoLabel";

const InputComponent = ({
  label,
  type,
  placeholder,
  formData,
  setFormData,
  onChange,
  required,
  value,
  name,
  minDate, //for date
  maxDate, //for date
  restrictPreviousDate = false, //for date
  options = [{ label: "Subsidiary", value: "subsidiary" }], //for select and multiselect only
  showCountryCode = true, // for the optional country code field,
}) => {
  // "& input[type='number']::-webkit-outer-spin-button, & input[type='number']::-webkit-inner-spin-button": {
  //     WebkitAppearance: "none", // For Webkit browsers like Chrome, Safari
  //     margin: 0,
  //   },
  //   "& input[type='number']": {
  //     MozAppearance: "textfield", // For Firefox
  //   },

  //   for number
  const handlePercentageChange = (e) => {
    let inputValue = e.target.value;

    inputValue = inputValue.replace(/[^0-9.]/g, "");

    if (inputValue !== "" && (inputValue < 0 || inputValue > 100)) {
      return; //not update
    }

    onChange(e, inputValue);
  };

  const handleDateChange = (e) => {
    let inputValue = e.target.value;

    if (restrictPreviousDate && new Date(inputValue) < new Date()) {
      return;
    }

    onChange(e, inputValue);
  };
  const handlePhoneChange = (e, field) => {
    let updatedValue = e.target.value;
    if (field === "countryCode") {
      setFormData({ ...formData, countryCode: updatedValue });
    } else if (field === "phoneNumber") {
      setFormData({ ...formData, phoneNumber: updatedValue });
    }
  };

  const renderInput = () => {
    switch (type) {
      case "bharat":
        return "hello";
        break;
      case "number":
        return (
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label
              htmlFor='number'
              style={{ fontSize: "16px", color: "#202020", fontWeight: "400" }}
            >
              {label}
            </label>

            {/* Country Code and Phone Number Inputs */}
            <Box sx={{ display: "flex", gap: "8px" }}>
              <TextField
                id={name}
                name={name}
                value={value || ""}
                onChange={onChange}
                type='number'
                variant='outlined'
                placeholder={placeholder}
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#CECECE",
                      borderWidth: 2,
                    },
                    "&:hover fieldset": {
                      borderColor: "#65BA74",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#65BA74",
                    },
                    borderRadius: "8px",
                  },
                  "& input[type='number']::-webkit-outer-spin-button, & input[type='number']::-webkit-inner-spin-button":
                    {
                      WebkitAppearance: "none", // For Chrome, Safari, Edge
                      margin: 0,
                    },
                  "& input[type='number']": {
                    MozAppearance: "textfield", // For Firefox
                  },
                }}
              />
            </Box>
          </Box>
        );
      case "phone":
        return (
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label
              htmlFor={name}
              style={{ fontSize: "16px", color: "#202020", fontWeight: "400" }}
            >
              {label}
            </label>

            {/* Country Code and Phone Number Inputs */}
            <Box sx={{ display: "flex", gap: "32px" }}>
              {showCountryCode && (
                <TextField
                  id={`${name}_countryCode`}
                  name={`${name}_countryCode`}
                  value={formData?.countryCode || ""}
                  onChange={(e) => handlePhoneChange(e, "countryCode")}
                  variant='outlined'
                  placeholder='+91'
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#CECECE",
                        borderWidth: 2,
                      },
                      "&:hover fieldset": {
                        borderColor: "#65BA74",
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#65BA74",
                      },
                      borderRadius: "8px",
                      width: "60px", // Fixed width for country code
                    },
                  }}
                />
              )}

              <TextField
                id={`${name}`}
                name={`${name}`}
                value={value || ""}
                onChange={(e) => handlePhoneChange(e, "phoneNumber")}
                variant='outlined'
                placeholder={placeholder}
                type='number'
                fullWidth
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      borderColor: "#CECECE",
                      borderWidth: 2,
                    },
                    "&:hover fieldset": {
                      borderColor: "#65BA74",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#65BA74",
                    },
                    borderRadius: "8px",
                  },
                  "& input[type='number']::-webkit-outer-spin-button, & input[type='number']::-webkit-inner-spin-button":
                    {
                      WebkitAppearance: "none", // For Chrome, Safari, Edge
                      margin: 0,
                    },
                  "& input[type='number']": {
                    MozAppearance: "textfield", // For Firefox
                  },
                }}
              />
            </Box>
          </Box>
        );
      case "text":
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <label
              htmlFor='text'
              style={{ fontSize: "16px", color: "#202020", fontWeight: "400" }}
            >
              {label}
            </label>
            <TextField
              id={name}
              name={name}
              variant='outlined'
              placeholder={placeholder}
              value={value || ""}
              onChange={onChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#CECECE",
                    borderWidth: 2,
                  },
                  "&:hover fieldset": {
                    borderColor: "#65BA74",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#65BA74",
                  },
                  borderRadius: "8px",
                },
              }}
            />
          </Box>
        );
      case "email":
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            <label
              htmlFor='text'
              style={{ fontSize: "16px", color: "#202020", fontWeight: "400" }}
            >
              {label}
            </label>
            <TextField
              id={name}
              name={name}
              variant='outlined'
              placeholder={placeholder}
              value={value || ""}
              type='email'
              onChange={onChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#CECECE",
                    borderWidth: 2,
                  },
                  "&:hover fieldset": {
                    borderColor: "#65BA74",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#65BA74",
                  },
                  borderRadius: "8px",
                },
              }}
            />
          </Box>
        );
      case "percentage":
        return (
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label
              htmlFor={name}
              style={{ fontSize: "16px", color: "#202020", fontWeight: "400" }}
            >
              {label}
            </label>
            <TextField
              id={name}
              name={name}
              variant='outlined'
              value={value || ""}
              type='number'
              placeholder={placeholder}
              required={required}
              onChange={handlePercentageChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#CECECE",
                    borderWidth: 2,
                  },
                  "&:hover fieldset": {
                    borderColor: "#65BA74",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#65BA74",
                  },
                  borderRadius: "8px",
                },
                "& input[type='number']::-webkit-outer-spin-button, & input[type='number']::-webkit-inner-spin-button":
                  {
                    WebkitAppearance: "none", // For Webkit browsers like Chrome, Safari
                    margin: 0,
                  },
                "& input[type='number']": {
                  MozAppearance: "textfield", // For Firefox
                },
              }}
            />
          </Box>
        );
      case "date":
        return (
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label
              htmlFor={name}
              style={{ fontSize: "16px", color: "#202020", fontWeight: "400" }}
            >
              {label}
            </label>
            <TextField
              id={name}
              name={name}
              type='date'
              variant='outlined'
              value={value || ""}
              onChange={handleDateChange}
              placeholder={placeholder}
              required={required}
              InputProps={{
                disableUnderline: true,
                inputProps: {
                  min: minDate || "",
                  max: maxDate || "",
                  style: {
                    padding: "8px",
                    fontSize: "16px",
                    border: "2px solid #CECECE",
                    borderRadius: "8px",
                    outline: "none",
                    height: "40px",
                  },
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#CECECE",
                    borderWidth: 2,
                  },
                  "&:hover fieldset": {
                    borderColor: value ? "#65BA74" : "#C1C1C1",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#65BA74",
                  },
                  borderRadius: "8px",
                },
                "& input": {
                  color: value ? "#00000" : "#C1C1C1",
                },
              }}
            />
          </Box>
        );
      case "select":
        return (
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label
              htmlFor={name}
              style={{ fontSize: "16px", color: "#202020", fontWeight: "400" }}
            >
              {label}
            </label>
            <FormControl color='success' variant='outlined' fullWidth>
              <Select
                labelId={name + "-label"}
                id={name}
                name={name}
                value={value || ""}
                onChange={onChange}
                required={required}
              >
                {options.length === 0 && (
                  <MenuItem disabled value=''>
                    No options available
                  </MenuItem>
                )}
                {options.map((option, idx) => (
                  <MenuItem key={idx} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        );
      case "checkbox":
        return (
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {label && (
              <label
                htmlFor={name}
                style={{
                  fontSize: "16px",
                  color: "#202020",
                  fontWeight: "400",
                }}
              >
                {label}
              </label>
            )}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "12px",
                justifyContent: "flex-start",
                alignItems: "flex-start",
                padding: "0px",
                margin: "0px",
              }}
            >
              <Checkbox
                checked={value == true}
                onChange={onChange}
                id={name}
                name={name}
                value={value || ""}
                required={required}
                sx={{
                  padding: "0px",
                  "&.Mui-checked": {
                    color: "black",
                  },
                }}
              />
              <InfoLabel data={placeholder} textWrap='nowrap' />
            </Box>
          </Box>
        );
      case "textLabel": // If it's a label or text, just display the content
        return (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "8px",
              marginY: "16px",
            }}
          >
            {label && (
              <Typography
                variant='body1'
                sx={{ fontWeight: "600", fontSize: "16px", color: "#202020" }}
              >
                {label}
              </Typography>
            )}
            {value && (
              <Typography
                variant='body2'
                sx={{ fontSize: "14px", color: "#808080" }}
              >
                {value}
              </Typography>
            )}
          </Box>
        );

      case "textArea":
        return (
          <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <label
              htmlFor={"textArea"}
              style={{ fontSize: "16px", color: "#202020", fontWeight: "400" }}
            >
              {label}
            </label>
            <TextField
              id={name}
              name={name}
              variant='outlined'
              multiline
              rows={4}
              placeholder={placeholder}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "#CECECE",
                    borderWidth: 2,
                  },
                  "&:hover fieldset": {
                    borderColor: "#65BA74",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#65BA74",
                  },
                  borderRadius: "8px",
                },
              }}
            />
          </Box>
        );

      case "address":
        return (
          <TextareaAutosize
            minRows={4}
            placeholder='Address'
            style={{
              border: "2px solid purple", // Custom border color
              padding: "10px",
              borderRadius: "4px",
              fontSize: "16px",
            }}
          />
        );

      default:
        return "No type Selected";
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {renderInput()}
    </Box>
  );
};

export default InputComponent;
