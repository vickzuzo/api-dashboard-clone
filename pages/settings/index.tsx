import React, { useState } from "react";
import Layout from "../../components/layouts/Layout";
import { Breadcrumbs } from "../../components/breadcrumbs";
import { HomeIcon, VCalendarIcon } from "../../components/icons";
import { SectionHeader } from "../../components/sectionHeader";
import { Tabs, Tab } from "../../components/tab";

enum TABSEnum {
  PROFILE_SETTINGS = "PROFILE SETTINGS",
  PASSWORD = "PASSWORD",
  BUSINESS_INFO = "BUSINESS INFORMATION",
  REFERENCES = "REFERENCES",
}

const SettingsPage = () => {
  const [currentPage, setCurrentPage] = useState(TABSEnum.PROFILE_SETTINGS);
  return (
    <div>
      <div className="my-7">
        <Breadcrumbs
          items={[
            { title: "Home", icon: <HomeIcon />, to: "/dashboard" },
            { title: "Setting", to: "/settings" },
          ]}
        />
      </div>
      <SectionHeader title="Setting" />
      <div className="my-5 bg-white rounded-lg p-6 ">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Billing History</h2>
          <p className="text-sm text-gray-400 my-2">
            View all transaction history made through your Account
          </p>
        </div>
        <Tabs>
          <Tab label="All Invoices (10)"></Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default SettingsPage;

SettingsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
