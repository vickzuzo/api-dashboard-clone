import Link from "next/link";
import React, { useEffect } from "react";
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
import { useGetRequest } from "api/useGetRequest";
import { useAppDispatch } from "utils/redux";
import { onCloseAppLoader, onOpenAppLoader } from "store";
import moment from "moment";
import { Spinner } from "components/loaders";

const ApiManagementPage = () => {
  const dispatch = useAppDispatch();

  const { data, isLoading } = useGetRequest<undefined, { data: any }>({
    service: "/api/ApiKey/1",
    tag: "ApiKeyService",
  });

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
          {isLoading ? (
            <div>
              <Spinner />
            </div>
          ) : (
            data?.data?.map((item) => (
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
                      <span className="font-semibold">{item?.api_id}</span>
                    </div>
                    <div className="w-full flex items-center gap-1">
                      <p className="w-[55%] text-sm">REQUESTS MADE:</p>
                      <span className="font-semibold">
                        {item?.totalRequests}
                      </span>
                    </div>
                    <div className="w-full flex items-center gap-1">
                      <p className="w-[55%] text-sm">REQUESTS COMPLETED:</p>
                      <span className="font-semibold">
                        {item?.requestsCompleted}
                      </span>
                    </div>
                    <p className="mt-3">
                      {moment().format("DD/MM/YYYY hh:mm A")}
                    </p>
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
                        <p className="text-xl font-bold">
                          {item?.totalAdministrators}
                        </p>
                      </div>
                    </div>
                    <div className="cursor-pointer">
                      <VHorizontalMenuIcon />
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ApiManagementPage;

ApiManagementPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
