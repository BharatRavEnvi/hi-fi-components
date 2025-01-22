import { Suspense, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "@fontsource/nunito"; // Defaults to weight 400
import "@fontsource/nunito/400.css"; // Specify weight
import "@fontsource/nunito/400-italic.css"; // Specify weight and style
import { Box, Typography } from "@mui/material";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Loading from "./components/loaders/Loading/Loading";
import FallBackScreen from "./components/shared/FallBackScreen/FallBackScreen";
import Home from "./pages/Home/Home";
import ComingSoon from "./components/shared/ComingSoon/ComingSoon";
import Layout from "./components/Layouts/Layout/Layout";
import LoginPage from "./pages/LoginPage/LoginPage";
import OnBoarding from "./pages/OnBoarding/OnBoarding";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      navigate("/login");
      console.log("bharat");
    }
  }, []);
  return (
    <Suspense fallback={<FallBackScreen />}>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/onboarding' element={<OnBoarding />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;

{
  /* <Box sx={{display:"flex",flexDirection:"column", gap:"1rem",padding:"5rem",alignItems:"center",justifyContent:"center"}}>
<Typography sx={{backgroundColor:"red",color:"white",padding:"1rem","&:hover":{color:"blue"}}}>Hello Lets begin</Typography>
<Typography sx={{backgroundColor:"gray",color:"white","&:hover":{color:"blue"}}}>Hello Lets begin</Typography>
</Box> */
}
