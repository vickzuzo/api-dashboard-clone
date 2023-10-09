import React, { useEffect, useState } from "react";
import Layout from "../../components/layouts/Layout";
import { Breadcrumbs } from "../../components/breadcrumbs";
import {
  HomeIcon,
  VCheckIcon,
  VCopyIcon,
  VDocumentFilter,
  VEyeOpenIcon,
  VHorizontalMenuIcon,
} from "../../components/icons";
import { useRouter } from "next/router";
import Switch from "../../components/toggle";
import { Button } from "../../components/forms";

const ApiDetailsPage = () => {
  const router = useRouter();
  const query = router.query;

  const [hasCopied, setHasCopied] = useState(false);
  const [isHidden, setIsHidden] = useState(true);

  const copyApiKey = () => {
    setHasCopied(true);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (hasCopied) {
        setHasCopied(false);
        setIsHidden(true);
      }
    }, 4000);

    return () => clearTimeout(timeout);
  }, [hasCopied]);

  return (
    <div>
      <div className="my-7">
        <Breadcrumbs
          items={[
            { title: "Home", icon: <HomeIcon />, to: "/dashboard" },
            { title: "API Key Manager", to: "/api-management" },
            {
              title: query?.id as string,
              to: `/user-management/${query?.id}`,
            },
          ]}
        />
      </div>
      <div className="bg-white/40 w-full rounded-lg p-5 flex gap-5">
        <div className="bg-white p-4 w-[70%] rounded-md">
          <div className="flex items-center gap-4 w-full border-b border-b-gray-300 border-dashed pb-5 pt-3">
            <VDocumentFilter />
            <p className="text-xl font-bold">Reonnection</p>
          </div>
          <div className="w-full rounded-md bg-gray-200 p-5 mt-5 gap-5 flex flex-col">
            <div className="flex items-center justify-between border-b border-b-gray-400 border-dashed pb-3">
              <div className="w-[90%] flex items-center">
                <p className="w-[30%]">Application ID</p>
                <p className="w-full">{query?.id}</p>
              </div>
              <div className="flex justify-end">
                <VCopyIcon className="cursor-pointer" />
              </div>
            </div>
            <div className="flex items-center justify-between relative">
              <div className="w-[90%] flex items-center">
                <p className="text-lg font-bold uppercase w-[30%]">API KEY</p>
                <div className="w-full rounded-md border border-gray-400 border-dashed py-3 px-2">
                  {isHidden ? (
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                        <div
                          className="w-3 h-3 rounded-full bg-black"
                          key={item}
                        />
                      ))}
                    </div>
                  ) : (
                    <p>{query?.id}</p>
                  )}
                </div>
              </div>
              <div className="flex justify-end">
                {isHidden ? (
                  <VEyeOpenIcon
                    className="cursor-pointer"
                    onClick={() => setIsHidden(false)}
                  />
                ) : (
                  <VCopyIcon
                    className="cursor-pointer"
                    onClick={() => copyApiKey()}
                  />
                )}
              </div>
              {hasCopied && (
                <div className="bg-gray-700 absolute top-0 left-0 w-full h-full rounded-md flex items-center text-center justify-center gap-3 text-white">
                  <p>Details copied successfully!</p>
                  <VCheckIcon />
                </div>
              )}
            </div>
            <div>
              <p className="text-sm">
                An API (Application Programming Interface) is a tool that allows
                different software applications to communicate with each other
                and exchange data. It enables developers to access the
                functionality of another application or service without having
                to write all the code from scratch. APIs are used for a wide
                range of purposes, such as creating integrations between
                different systems, accessing data from external sources, and
                building mobile and web applications that rely on data from
                third-party services.
              </p>
            </div>
          </div>
        </div>
        <div className='w-[30%]'>
          <div className="border border-gray-300 border-dashed p-4 w-full h-fit rounded-md">
            <div className="flex items-center justify-between">
              <p className="text-lg font-bold uppercase">Activities</p>
              <VHorizontalMenuIcon className="cursor-pointer" />
            </div>
            <div className="flex flex-col gap-2 mt-4">
              <div className="w-full flex items-center gap-1 text-sm">
                <p className="w-[55%] text-xs capitalize">Number of Edits</p>
                <span className="font-semibold">923301295780</span>
              </div>
              <div className="w-full flex items-center gap-1 text-sm">
                <p className="w-[55%] text-xs capitalize">Requests Completed</p>
                <span className="font-semibold">923301295780</span>
              </div>
              <div className="w-full flex items-center gap-1 text-sm">
                <p className="w-[55%] text-xs capitalize">Requests made</p>
                <span className="font-semibold">420</span>
              </div>
              <p className="my-2 text-sm">22/2/2022 3:45:01 PM</p>
            </div>
            <div className="border-t border-b border-dashed border-gray-300 flex items-center justify-between py-2">
              <p>App Status</p>
              <div className="bg-green-200 rounded-md py-2 px-3">
                <p className="text-green-500 uppercase text-sm font-semibold">
                  ACTIVE
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between mt-4">
              <p>Toggle to Deactivate this App</p>
              <Switch />
            </div>
          </div>
          <Button className="rounded-md mt-3">Modify App</Button>
        </div>
      </div>
    </div>
  );
};

export default ApiDetailsPage;

ApiDetailsPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
