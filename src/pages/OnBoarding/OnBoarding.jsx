import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import enviLogo from "../../assets/images/logo_transparent_dark_bg.png";
import Img from "../../components/ui/CustomImage/Img";
import InternalStepper from "../../components/ui/InternalStepper/internalStepper";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import CustomButton from "../../components/shared/Buttons/CustomButton/CustomButton";
import CustomBadge from "../../components/ui/CustomBadge/CustomBadge";
import InputComponent from "../../components/ui/InputComponent/InputComponent";
import { useNavigate } from "react-router-dom";
import { Opacity } from "@mui/icons-material";
import GrayStepper from "../../components/ui/InternalStepper/GrayStepper";
const OnBoarding = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState(0);
  const [basicDFD, setBasicDFD] = useState({
    organizationLegalName: "",
    abbreviatedName: "",
    corporateIdentityNumber: "",
    yearOfIncorporation: "",
    industryType: [], //multiselect // data format -> {name:"",value:""}
    natureOfOwnerShip: "", // single select
    employmentTypes: [], //multiselect
    numberOfEmployees: "",
    financialYear: "",
    stockAndShares: "",
    paidUpCapital: "",
    pucCurrency: "rupee",
    companyWebsite: "",
    linkedIn: "",
  });
  const [onBoardingSteps, setOnBoardingSteps] = useState([
    { label: "Basic Info" },
    { label: " Organization Type" },
    { label: "Equity & Social Info" },
  ]);
  const handleStepClick = () => {
    setSelectedTab(idx);
  };
  const handlePrev = () => {
    if (selectedTab > 0) setSelectedTab((prev) => prev - 1);
  };
  const handleSubmit = () => {
    if (selectedTab < 2) setSelectedTab((prev) => prev + 1);
    if (selectedTab === 2) {
      alert("Form submission successfully completed");
      navigate("/"); //TODO:"later change this navigation"
    }
  };
  return (
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
            width: "30%",
            height: "100%",
            color: "white",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            padding: "48px",
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
              gap: "32px",
              maxWidth: "450px",
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
              <Img src={enviLogo} alt={"Envi logo"} width={149} height={36} />
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "600",
                  textTransform: "capitalize",
                }}
              >
                Access the ESG Insights in a few steps
              </Typography>
            </Box>
            {/* <Img
              src={leftSideImage}
              alt={"Showcase website service"}
              width={"auto"}
              height={320}
              sx={{
                maxWidth: "492px",
              }}
            /> */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "32px" }}>
              {onBoardingSteps.map((curr, idx) => (
                <GrayStepper
                  status={
                    selectedTab === idx
                      ? "active"
                      : idx < selectedTab
                        ? "completed"
                        : "inactive"
                  }
                  variant={"gray"}
                  text={curr?.label}
                  step={idx + 1}
                  key={idx}
                  onClick={() => {
                    handleStepClick(idx);
                  }}
                />
              ))}
            </Box>
          </Box>
        </Box>
        {/* ---left ui end--- */}
        {/* ---right ui start--- */}
        <Box
          sx={{
            paddingY: "48px",

            width: "70%",
            display: "flex",
            flexDirection: "column",
            "@media (max-width: 600px)": {
              width: "100%",
              paddingX: "16px",
            },
            "@media (max-width: 1024px)": {
              width: "100%",
              paddingX: "16px",
              paddingY: "24px",
            },

            "@media (max-width: 766px)": {
              width: "100%",
              paddingX: "16px",
              paddingY: "0px",
            },
          }}
        >
          <Box
            sx={{
              maxWidth: "532px",
              marginX: "auto",
              height: "100%",

              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              gap: "24px",
              flex: 1,

              overflowY: "hidden",
              minHeight: "70vh",
            }}
          >
            {" "}
            {/* {selectedTab > 0 && (
              <CustomBadge
                status={"active"}
                sx={{
                  width: "32px",
                  height: "32px",
                  cursor: "pointer",
                  marginTop: "32px",
                }}
                colorScheme={"green"}
                onClick={handlePrev}
              >
                <KeyboardArrowLeftRoundedIcon
                  fontSize='small'
                  padding={"0px"}
                />
              </CustomBadge>
            )} */}
            <OnBoardingForm step={selectedTab} setStep={setSelectedTab} />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "24px",
                height: "fit-content",
              }}
            >
              <CustomButton sx={{ marginX: "auto" }} onClick={handleSubmit}>
                {selectedTab < 2 ? "Proceed" : "Submit"}
              </CustomButton>
            </Box>
          </Box>
        </Box>
        {/* ---right ui end--- */}
      </Box>
    </Box>
  );
};

const OnBoardingForm = ({ step, setStep }) => {
  const [formData, setFormData] = useState({
    organizationLegalName: "",
    abbreviatedName: "",
    corporateIdentityNumber: "",
    yearOfIncorporation: "",
    industryType: [],
    natureOfOwnerShip: "",
    employmentTypes: [],
    numberOfEmployees: "",
    financialYear: "",
    stockAndShares: "",
    paidUpCapital: "",
    pucCurrency: "rupee",
    companyWebsite: "",
    linkedIn: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    console.log("bharat", formData);
  };

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <>
            <InputComponent
              label='Organization Legal Name'
              name='organizationLegalName'
              value={formData.organizationLegalName}
              onChange={handleChange}
              type={"text"}
              placeholder={"Acme Corporation Pvt. Ltd."}
            />
            <InputComponent
              label='Abbreviated Name'
              name='abbreviatedName'
              value={formData.abbreviatedName}
              onChange={handleChange}
              placeholder={"ACPL"}
              type={"text"}
            />
            <InputComponent
              label='Corporate Identity Number'
              name='corporateIdentityNumber'
              value={formData.corporateIdentityNumber}
              onChange={handleChange}
              placeholder={"123456789"}
              type={"number"}
            />
            <InputComponent
              label='Year of Incorporation'
              name='yearOfIncorporation'
              value={formData.yearOfIncorporation}
              onChange={handleChange}
              type='number'
              placeholder={"2015"}
            />
          </>
        );
      case 1:
        return (
          <>
            <InputComponent
              label='Industry Type'
              name='industryType'
              value={formData.industryType}
              onChange={handleChange}
              type='text'
              multiple
              placeholder={"Technology"}
            />
            <InputComponent
              label='Nature of Ownership'
              name='natureOfOwnerShip'
              value={formData.natureOfOwnerShip}
              onChange={handleChange}
              type='select'
              placeholder={"Private Limited"}
            />
            <InputComponent
              label='Number of Employees'
              name='numberOfEmployees'
              value={formData.numberOfEmployees}
              onChange={handleChange}
              type='number'
              placeholder={"250"}
            />
            <InputComponent
              label='Employment Types'
              name='employmentTypes'
              value={formData.employmentTypes}
              onChange={handleChange}
              multiple
              placeholder={"Full Time, Part Time"}
              type={"text"}
            />
          </>
        );
      case 2:
        return (
          <>
            <InputComponent
              label='Financial Year'
              name='financialYear'
              value={formData.financialYear}
              onChange={handleChange}
              placeholder={"2022-2023"}
              type={"date"}
            />
            <InputComponent
              label='Stock and Shares'
              name='stockAndShares'
              value={formData.stockAndShares}
              onChange={handleChange}
              placeholder={"Listed on NSE, 500,000 Shares"}
              type={"text"}
            />
            <InputComponent
              label='Paid Up Capital'
              name='paidUpCapital'
              value={formData.paidUpCapital}
              onChange={handleChange}
              type='number'
              placeholder={"₹ 200,000,000"}
            />

            {/* <InputComponent
              label='Company Website'
              name='companyWebsite'
              value={formData.companyWebsite}
              onChange={handleChange}
              placeholder={"https://www.acmecorp.com"}
              type={"text"}
            /> */}
            {/* TODO:zzz */}
            <InputComponent
              label='LinkedIn'
              name='linkedIn'
              value={formData.linkedIn}
              onChange={handleChange}
              type={"text"}
              placeholder={"https://www.acmecorp.com"}
            />
          </>
        );
      default:
        return null;
    }
  };
  // form component
  return (
    <Box
      sx={{
        maxWidth: "532px",
        marginX: "auto",
        position: "relative",
        overflowX: "hidden",
        flex: 1,
      }}
    >
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "24px",
          color: "#5F616E",
          textAlign: "center",
        }}
      >
        {step === 0
          ? step === 1
            ? "Tell us about your organization"
            : "Tell us about the nature of your organization "
          : "Tell us about the social details of your organization "}
      </Typography>
      <Box
        sx={{
          display: "flex",

          transition: "transform 0.3s ease-in-out",
          transform: `translateX(-${step * 100}%)`,
        }}
      >
        {[0, 1, 2].map((s) => (
          <Box
            key={s}
            sx={{
              minWidth: "100%",

              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {renderStep()}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default OnBoarding;
