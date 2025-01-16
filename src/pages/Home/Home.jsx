import { Box, Paper, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import { tabsConfig } from "../../configs/config";
import CustomTabs from "../../components/ui/CustomTabs/CustomTabs";
import CustomTab from "../../components/ui/CustomTab/CustomTab";
import TabContainer from "../../components/ui/TabContainer/TabContainer";
import ComingSoon from "../../components/shared/ComingSoon/ComingSoon";
import OrganizationDetails from "../../components/ui/OrgazisationDetails/OrganizationDetails";

const Home = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const handleTabChange = (_, newValue) => {
    // event, new value
    console.log(newValue);
    setSelectedTab(newValue);
  };
  console.log(tabsConfig);
  return (
    <Box
      sx={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "start",
        alignItems: "center",
        backgroundColor: "pink",
      }}
    >
      <TabContainer
        tabsConfig={tabsConfig}
        value={selectedTab}
        onChange={handleTabChange}
      />
      {/* body */}
      <Box
        sx={{
          backgroundColor: "white",
          width: "100%",
          height: "100%",
          padding: "1rem",
        }}
      >
        {selectedTab === 0 ? <OrganizationDetails /> : <ComingSoon />}
      </Box>
    </Box>
  );
};

export default Home;
