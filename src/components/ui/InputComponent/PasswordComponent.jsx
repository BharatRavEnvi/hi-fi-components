import React, { useState } from "react";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
const PasswordComponent = ({
  label,
  type,
  placeholder,
  formData,
  setFormData,
  onChange,
  required,
  value,
  name,
  sx = { sx },
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "8px", ...sx }}>
      <label
        htmlFor={name}
        style={{ fontSize: "16px", color: "#202020", fontWeight: "400" }}
      >
        {label}
      </label>

      <TextField
        id={name}
        name={name}
        value={value || ""}
        onChange={onChange}
        variant='outlined'
        placeholder={placeholder}
        type={showPassword ? "text" : "password"} // Toggle input type based on state
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
        }}
        InputProps={{
          endAdornment: (
            <Box
              sx={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              {showPassword ? (
                <RemoveRedEyeIcon
                  onClick={togglePasswordVisibility}
                  style={{ cursor: "pointer", color: "#8D8D8D" }}
                />
              ) : (
                <VisibilityOffOutlinedIcon
                  onClick={togglePasswordVisibility}
                  style={{ cursor: "pointer", color: "#8D8D8D" }}
                />
              )}
            </Box>
          ),
        }}
      />
    </Box>
  );
};

export default PasswordComponent;
