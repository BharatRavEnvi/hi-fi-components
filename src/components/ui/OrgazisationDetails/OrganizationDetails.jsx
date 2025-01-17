import { Box, Button, Modal, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import CustomBadge from "../CustomBadge/CustomBadge";
import InternalStepper from "../InternalStepper/internalStepper";
import CustomBox from "../../shared/wrappers/CustomBox/CustomBox";
import { Heading, Paragraph } from "../../shared/Typos/Typos";
import CustomButton from "../../shared/Buttons/CustomButton/CustomButton";
import { Padding } from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import CustomModal from "../../shared/Modals/CustomModal/CustomModal";
import { DoneIcon } from "../../../assets/svgs/svg";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import BillingInfoForm from "../../forms/organizationDetails/BillingInfoForm";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
const OrganizationDetails = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [selectedInfoTab, setSelectedInfoTab] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [orgSteps, setOrgSteps] = useState([
    {
      label: "Basic Details",
      status: "completed",
      heading: "Basic Info",
      para: "Add the basic info of your organization. This will help us understand about your company particulars and tailor the requirements accordingly",
    },
    {
      label: "Billing Info",
      status: "inactive",
      heading: "Billing Info",
      para: "Add the billing info of your organization. This will help us understand about your company particulars and tailor the requirements accordingly",
    },
    {
      label: "Contact Info",
      status: "inactive",
      heading: "Contact Information",
      para: "Add the basic details of your organization. This will help us understand about your company particulars and tailor the requirements accordingly",
    },
    {
      label: "Entity Info",
      status: "inactive",
      heading: "Entity Information",
      para: "Add the basic details of the entities of your organization. This will help us understand about your company particulars and tailor the requirements accordingly.",
    },
  ]);

  const handleStepClick = (idx) => {
    // Only allow steps that are less than or equal to the active step
    const activeStepIndex = orgSteps.findIndex(
      (step) => step?.status === "active"
    );

    if (idx <= activeStepIndex || (activeStepIndex === -1 && idx === 0)) {
      setSelectedTab(idx);
      const orgCopy = [...orgSteps];

      // let changedElem = orgCopy[idx];
      // changedElem = { ...changedElem, status: "active" };
      // console.log(changedElem);

      // orgCopy?.splice(idx, 1, changedElem);
      let selectedStep = { ...orgCopy[selectedTab], status: "inactive" };
      orgCopy?.splice(selectedTab, 1, selectedStep);
      setOrgSteps([...orgCopy]);
    }
  };

  const handleButtonClick = () => {
    console.log(selectedTab, orgSteps?.length);

    setShowModal(true);
  };

  const handleStepChange = () => {
    if (selectedTab === orgSteps?.length - 1) {
      alert("You have completed the organization data");
      setSelectedTab(selectedTab + 1);
    } else if (selectedTab < orgSteps?.length) {
      setSelectedTab(selectedTab + 1);
    } else {
      alert("Can not do an action");
    }
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      {selectedTab !== orgSteps?.length && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "0.625rem",
            marginY: "2rem",
          }}
        >
          <Typography
            variant='h4'
            component={"h4"}
            fontSize={"1.5rem"}
            color={"#202020"}
            lineHeight={"28px"}
          >
            You have incomplete organization data
          </Typography>
          <Typography
            variant='p'
            component={"p"}
            fontSize={"1.25rem"}
            color={"#838383"}
            lineHeight={"24px"}
          >
            Complete the profile data to get the best out of the app
          </Typography>
        </Box>
      )}
      {selectedTab !== orgSteps?.length && (
        <CustomBox
          sx={{
            maxWidth: "96%",
            flexDirection: "row",
            gap: "2rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              justifyContent: "flex-start",
              alignItems: "start",
            }}
          >
            {orgSteps?.map((orgStep, idx) => {
              return (
                <InternalStepper
                  status={
                    selectedTab === idx
                      ? "active"
                      : idx < selectedTab
                        ? "completed"
                        : orgStep?.status || "inactive"
                  }
                  text={orgStep?.label}
                  step={idx + 1}
                  key={idx}
                  onClick={() => handleStepClick(idx)}
                />
              );
            })}
          </Box>
          <CustomBox
            sx={{
              backgroundColor: "white",
              flex: "1",
              flexDirection: "column",
              gap: "2rem",
            }}
          >
            <CustomBadge status={"active"} step={selectedTab + 1} />
            <CustomBox
              sx={{
                backgroundColor: "transparent",
                gap: "1rem",
                padding: "0rem",
              }}
            >
              <Heading sx={{ fontWeight: 600, lineHeight: "28px" }}>
                {orgSteps[selectedTab]?.label}
              </Heading>
              <Paragraph>
                {`Add the ${orgSteps[selectedTab]?.label} of your organization. This will help us
              keep a track of your address.`}
              </Paragraph>
              <CustomButton
                onClick={handleButtonClick}
                disableElevation
                sx={{
                  backgroundColor: "#203c25",
                  width: "fit-content",
                  blockSize: "fit-content",
                  "&:hover": { backgroundColor: "#203c12" },
                  textTransform: "capitalize",
                }}
              >
                {`Add ${orgSteps[selectedTab]?.label}`}
              </CustomButton>
            </CustomBox>
          </CustomBox>
        </CustomBox>
      )}
      <CustomBox sx={{ backgroundColor: "white", padding: "0rem" }}>
        <TabContext value={selectedInfoTab}>
          <Box>
            <TabList
              TabIndicatorProps={{
                style: {
                  backgroundColor: "green",
                },
              }}
              onChange={(e, newValue) => setSelectedInfoTab(newValue)}
            >
              {orgSteps?.map((step, idx) => (
                <Tab
                  key={idx}
                  sx={{
                    textTransform: "capitalize",
                    color: "#8D8D8D",
                    "&.Mui-selected": {
                      color: "green",
                    },
                  }}
                  label={step?.label}
                  value={idx}
                />
              ))}
            </TabList>
          </Box>
          <CustomBox>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Heading>{orgSteps[selectedInfoTab]?.heading}</Heading>
              <CustomButton
                startIcon={<EditOutlinedIcon />}
                variant={"text"}
                onClick={() => {
                  handleButtonClick();
                  setSelectedTab(selectedInfoTab);
                }}
                disableElevation
                sx={{
                  width: "fit-content",
                  color: "#2A7E3B",
                  blockSize: "fit-content",

                  textTransform: "capitalize",
                }}
              >
                Edit
              </CustomButton>
            </Box>
          </CustomBox>
        </TabContext>
      </CustomBox>
      <CustomModal open={showModal} handleClose={() => setShowModal(false)}>
        <BillingInfoForm
          heading={orgSteps[selectedTab]?.heading}
          para={orgSteps[selectedTab]?.para}
          handleStepChange={handleStepChange}
          setShowModal={setShowModal}
        />
      </CustomModal>
    </Box>
  );
};

export default OrganizationDetails;
