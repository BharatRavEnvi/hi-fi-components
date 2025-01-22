import { Box, Typography } from "@mui/material";
import React from "react";
import enviLogo from "../../assets/images/logo_transparent_dark_bg.png";
import leftSideImage from "../../assets/images/showcase_login.png";
import Img from "../../components/ui/CustomImage/Img";
import LoginFormUI from "../../components/forms/authentication/LoginFormUI";
const LoginPage = () => (
  <Box
    sx={{
      backgroundColor: "#EBECEE",
      width: "100%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Box
      sx={{
        borderRadius: "16px",
        width: "90vw",
        height: "90vh",
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "0px",
        overflow: "hidden",
      }}
    >
      {/* ---left box start--- */}
      <Box
        sx={{
          backgroundColor: "#20342D",
          width: "50%",
          height: "100%",
          color: "white",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "32px",
          "@media (max-width: 600px)": {
            display: "none",
            paddingX: "16px",
          },
          "@media (max-width: 1024px)": {
            display: "none",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            gap: "6px",
            maxWidth: "492px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "flex-start",

              gap: "6px",
            }}
          >
            <Img src={enviLogo} alt={"Envi logo"} width={188} height={46} />
            <Typography
              sx={{
                fontSize: "16px",
                fontWeight: "600",
                textTransform: "capitalize",
              }}
            >
              Empowering Sustainable Choices
            </Typography>
          </Box>
          <Img
            src={leftSideImage}
            alt={"Showcase website service"}
            width={"auto"}
            height={320}
            sx={{
              maxWidth: "492px",
            }}
          />
        </Box>
      </Box>
      {/* ---left ui end--- */}
      {/* ---right ui start--- */}
      <Box
        sx={{
          width: "50%",
          "@media (max-width: 600px)": {
            width: "100%",
            paddingX: "16px",
          },
          "@media (max-width: 1024px)": {
            width: "100%",
            paddingX: "16px",
          },
        }}
      >
        <LoginFormUI />
      </Box>
      {/* ---right ui end--- */}
    </Box>
  </Box>
);

export default LoginPage;
