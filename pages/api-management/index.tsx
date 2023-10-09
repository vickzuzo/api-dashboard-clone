import Link from "next/link";
import React from "react";
import { AvatarGroup } from "../../components/avatar";
import { SectionHeader } from "../../components/sectionHeader";
import {
  EditIcon,
  HomeIcon,
  VEditIcon,
  VHorizontalMenuIcon,
  VShieldSecurityIcon,
} from "../../components/icons";
import { Breadcrumbs } from "../../components/breadcrumbs";
import Layout from "../../components/layouts/Layout";

const ApiManagementPage = () => {
  return (
    <div>
      <div className="my-7">
        <Breadcrumbs
          items={[
            { title: "Home", icon: <HomeIcon />, to: "/dashboard" },
            { title: "API Key Manager", to: "/api-management" },
          ]}
        />
      </div>
      <SectionHeader
        title="Api Key Manager"
        btnText="Add New API"
        onButtonPress={() => console.log("add new api")}
      />
      <div className="my-5 bg-white rounded-lg p-6">
        <div className="mb-5">
          <h2 className="text-2xl font-bold">API IDs and Keys</h2>
          <p className="text-sm text-gray-400">
            View all API IDs and Keys that you have created to generate Invoices
          </p>
        </div>
        <div className="w-full flex gap-4 flex-wrap">
          {["1881931131","18819311341", "18819311428", "18819314489"].map((item) => (
            <Link
              href={`/api-management/${item}`}
              key={item}
              className="w-[32%] rounded-md border border-gray-300 border-dashed p-4 flex items-center cursor-pointer"
            >
              <div className="w-full">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-bold">Reconnection</h3>
                  <input
                    type="checkbox"
                    className="ring-0 outline-none w-6 h-6 rounded-lg cursor-pointer text-blue-500"
                  />
                </div>
                <div className="text-sm my-3 w-full">
                  <div className="w-full flex items-center gap-1">
                    <p className="w-[55%] text-sm">API ID:</p>
                    <span className="font-semibold">923301295780</span>
                  </div>
                  <div className="w-full flex items-center gap-1">
                    <p className="w-[55%] text-sm">REQUESTS MADE:</p>
                    <span className="font-semibold">419</span>
                  </div>
                  <div className="w-full flex items-center gap-1">
                    <p className="w-[55%] text-sm">REQUESTS COMPLETED:</p>
                    <span className="font-semibold">273</span>
                  </div>
                  <p className="mt-3">22/2/2022 3:45:01 PM</p>
                </div>
                <div className="border-t border-b border-dashed border-gray-300 flex items-center justify-between py-2">
                  <p>App Status</p>
                  <div className="bg-green-200 rounded-md py-2 px-3">
                    <p className="text-green-500 uppercase text-sm font-semibold">
                      ACTIVE
                    </p>
                  </div>
                </div>
                <div className="flex items-center mt-4 w-full justify-between">
                  <div className="flex items-center gap-2">
                    <VShieldSecurityIcon className="w-5 h-5 text-gray-400" />
                    <p>Administrator</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <VEditIcon className="cursor-pointer" />
                    <div className="w-10 h-10 bg-gray-300 flex items-center justify-center rounded-full">
                      <p className="text-xl font-bold">3</p>
                    </div>
                  </div>
                  <div className="cursor-pointer">
                    <VHorizontalMenuIcon />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApiManagementPage;

ApiManagementPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
