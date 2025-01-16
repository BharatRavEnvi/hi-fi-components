import React from "react";
import CustomTabs from "../CustomTabs/CustomTabs";
import CustomTab from "../CustomTab/CustomTab";

const TabContainer = ({
  tabsConfig = [],
  value,
  onChange = () => {
    alert("Please handle tab change event");
  },
}) => {
  if (!tabsConfig?.length) {
    return "No tabs configuration";
  }
  return (
    <CustomTabs value={value} onChange={onChange}>
      {tabsConfig?.map((currentTab, idx) => {
        return (
          <CustomTab
            key={idx}
            label={currentTab.label}
            id={`tab-${idx}`}
            selectedTabId={value}
            currentTabId={currentTab?.id}
          />
        );
      })}
    </CustomTabs>
  );
};

export default TabContainer;
