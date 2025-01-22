import React, { useState } from "react";
import InputComponent from "../../ui/InputComponent/InputComponent";
import { Box, Typography } from "@mui/material";

import CustomButton from "../../../components/shared/Buttons/CustomButton/CustomButton";
import { Margin } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const LoginFormUI = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (event, type) => {
    const { name, value, checked } = event.target;
    if (name === "rememberMe") {
      setFormData({ ...formData, rememberMe: checked });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };
  const handleLogin = () => {
    alert("Login Successfully! statically logged in, currently user details");
    localStorage.setItem("user", JSON.stringify(formData));
    navigate("/onboarding", { state: { from: "/login" } });
  };
  const handleKeyDown = (event) => {
    if (event.key === "Enter" && formData?.email && formData?.password) {
      handleLogin();
    }
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "48px",
        textAlign: "center",
        maxWidth: "445px",
        marginX: "auto",
      }}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* ---header start--- */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            color: "#5F616E",
            fontSize: "24px",
            fontWeight: "600",
            textAlign: "center",
            lineHeight: "28px",
          }}
        >
          Login
        </Typography>
        <Typography
          sx={{
            color: "#7D8293",
            fontSize: "16px",
            fontWeight: "400",
            textAlign: "center",
            lineHeight: "24px",
          }}
        >
          Login to access your ESG insights
        </Typography>
      </Box>
      {/* ---header end--- */}
      <Box
        sx={{
          width: "100%",
          textAlign: "start",
        }}
      >
        <InputComponent
          value={formData?.email}
          type={"email"}
          label={"Email"}
          name={"email"}
          id={"email"}
          placeholder={"johndoe@example.com"}
          onChange={(e) => handleChange(e, "email")}
          fullWidth
          sx={{ marginBottom: "24px" }}
        />
        <InputComponent
          value={formData?.password}
          type={"password"}
          label={"Password"}
          name={"password"}
          id={"password"}
          placeholder={"******"}
          onChange={(e) => handleChange(e, "password")}
          sx={{ marginBottom: "8px" }}
        />
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <InputComponent
            type={"checkbox"}
            name='rememberMe'
            placeholder={"Remember me"}
            value={formData?.rememberMe}
            onChange={handleChange}
          />
          <Typography
            sx={{ color: "#2D4F41", fontSize: "14px", fontWeight: "600" }}
          >
            Forgot Password
          </Typography>
        </Box>
      </Box>
      <CustomButton
        sx={{ width: "100%" }}
        disabled={!formData?.email || !formData?.password}
        onClick={handleLogin}
      >
        Login
      </CustomButton>
    </Box>
  );
};

export default LoginFormUI;
