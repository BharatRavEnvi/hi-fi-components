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
import DataInfo from "../DataInfo/DataInfo";
import {
  billingInfo,
  contactInfo,
  entityInfo,
  basicDetailsInfo,
} from "../../../configs/config";
import EntityInfoForm from "../../forms/organizationDetails/EntityInfoForm";
import ContactInfoForm from "../../forms/organizationDetails/ContactInfoForm";
import BasicDetailsForm from "../../forms/organizationDetails/BasicDetailsForm";
const OrganizationDetails = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [selectedInfoTab, setSelectedInfoTab] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [basicDFD, setBasicDFD] = useState({
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
  }); //Note:-DFD refers to Details Form Data,
  const [billingDFD, setBillingDFD] = useState({
    postalAddress: {
      addressLine1: "",
      addressLine2: "",
      country: "",
      state: "",
      city: "",
      zipCode: "",
    },
    sameAsPostalAddress: "",
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
  const [contactDFD, setContactDFD] = useState({
    fullName: "",
    email: "",
    companyName: "",
    mailingAddress: "",
    contactNumber: "",
    countryCode: "",
    jobTitle: "",
    officeFax: "",
    linkedIn: "",
    twitter: "",
    sustainabilityBlog: "",
    esgCertification: "",
    csrInitiatives: "",
  });
  const [entityDFD, setEntityDFD] = useState([
    {
      entityName: "",
      typeOfEntity: "",
      dateOfIncorporation: "",
      sharePercentage: "",
      businessOperation: "",
      mailAddress: "",
      enableEmission: false, //true or false boolean value, default  false
    },
  ]); // im taking default 1 entity user can add many entity so that im using array of entity, to make it easy we(fellow developer) can make separate state

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
      setSelectedInfoTab(idx);
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
      setSelectedInfoTab(selectedTab + 1); //Note: Remove this condition based on real data, for static form data handling im using this condition
    } else {
      alert("Can not do an action");
    }
  };
  const renderFormForModal = () => {
    switch (selectedInfoTab) {
      case 0:
        return (
          <BasicDetailsForm
            heading={orgSteps[selectedTab]?.heading}
            para={orgSteps[selectedTab]?.para}
            handleStepChange={handleStepChange}
            setShowModal={setShowModal}
            formData={basicDFD}
            setFormData={setBasicDFD}
          />
        );
      case 1:
        return (
          <BillingInfoForm
            heading={orgSteps[selectedTab]?.heading}
            para={orgSteps[selectedTab]?.para}
            handleStepChange={handleStepChange}
            setShowModal={setShowModal}
            formData={billingDFD}
            setFormData={setBillingDFD}
          />
        );
      case 2:
        return (
          <ContactInfoForm
            heading={orgSteps[selectedTab]?.heading}
            para={orgSteps[selectedTab]?.para}
            handleStepChange={handleStepChange}
            setShowModal={setShowModal}
            formData={contactDFD}
            setFormData={setContactDFD}
          />
        );
      case 3:
        return (
          <EntityInfoForm
            heading={orgSteps[selectedTab]?.heading}
            para={orgSteps[selectedTab]?.para}
            handleStepChange={handleStepChange}
            setShowModal={setShowModal}
            formData={entityDFD}
            setFormData={setEntityDFD}
          />
        );
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflowY: "scroll",

        "-ms-overflow-style": "none",

        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
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
            maxWidth: "100%",
            width: "100%",
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
                  onClick={() => {
                    handleStepClick(idx);
                  }}
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
              <CustomButton onClick={handleButtonClick} colorScheme='black'>
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
          <CustomBox
            sx={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}
          >
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
                colorScheme='transparent'
              >
                Edit
              </CustomButton>
            </Box>
          </CustomBox>
          <CustomBox
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              backgroundColor: "white",
            }}
          >
            {selectedInfoTab === 0
              ? basicDetailsInfo?.map((item, idx) => {
                  return (
                    <DataInfo
                      label={item?.label}
                      key={idx}
                      data={item?.value}
                      type={item?.type}
                    />
                  );
                })
              : selectedInfoTab === 1
                ? billingInfo?.map((item, idx) => {
                    return (
                      <DataInfo
                        label={item?.label}
                        key={idx}
                        data={item?.value}
                        type={item?.type}
                      />
                    );
                  })
                : selectedInfoTab === 2
                  ? contactInfo?.map((item, idx) => (
                      <DataInfo
                        label={item?.label}
                        key={idx}
                        data={item?.value}
                        type={item?.type}
                      />
                    ))
                  : selectedInfoTab === 3
                    ? entityInfo?.map((item, idx) => {
                        let dataValue =
                          item?.type === "heading"
                            ? item?.value + " " + (idx + 1)
                            : item?.value;
                        return (
                          <DataInfo
                            label={item?.label}
                            key={idx}
                            data={dataValue}
                            type={item?.type}
                          />
                        );
                      })
                    : ""}
          </CustomBox>
        </TabContext>
      </CustomBox>
      <CustomModal open={showModal} handleClose={() => setShowModal(false)}>
        {/* <BillingInfoForm
          heading={orgSteps[selectedTab]?.heading}
          para={orgSteps[selectedTab]?.para}
          handleStepChange={handleStepChange}
          setShowModal={setShowModal}
        /> */}
        {renderFormForModal()}
      </CustomModal>
    </Box>
  );
};

export default OrganizationDetails;
