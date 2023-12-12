import { Button } from "components/forms";
import { TrashIcon } from "components/icons";
import Table, { TableData, TableHead, TableRow } from "components/table";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import Layout from "../../components/layouts/Layout";
import AccountVerifiedModal from "../../components/modals/AccountVerifiedModal";
import { onCloseAppLoader, onOpenAppLoader, updateAppUser } from "../../store";
import { useAppDispatch, useAppSelector } from "../../utils/redux";
import useDisclosure from "../../utils/useDisclosure";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const accountVerifiedModalHandler = useDisclosure();
  const user = useAppSelector((state) => state.user);

  const [activeTab, setActiveTab] = useState("today");

  const onRefreshAccountReview = () => {
    dispatch(onOpenAppLoader());
    setTimeout(() => {
      dispatch(onCloseAppLoader());
      dispatch(
        updateAppUser({
          accountEnabled: true,
          subscriptionStatus: "UNSUBSCRIBED",
        })
      );
      accountVerifiedModalHandler.onOpen();
    }, 3000);
  };

  return (
    <>
      <Head>
        <title>API Management</title>
        <meta name="description" content="API Management" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="flex items-center justify-between flex-wrap">
          <h1 className="text-3xl font-bold">
            {!user?.accountEnabled ? "Dashboard" : "Overview"}
          </h1>
          {!user?.accountEnabled && (
            <div className="flex items-center rounded-md overflow-hidden gap-2 bg-white lg:mt-5">
              <p
                className={twMerge(
                  "px-3 py-2 text-black rounded-md flex items-center justify-center text-xs cursor-pointer",
                  activeTab === "today" && "bg-blue-500 text-white"
                )}
              >
                Today
              </p>
              <p
                className={twMerge(
                  "px-3 py-2 text-black rounded-md flex items-center justify-center text-xs cursor-pointer",
                  activeTab === "week" && "bg-blue-500 text-white"
                )}
              >
                This Week
              </p>
              <p
                className={twMerge(
                  "px-3 py-2 text-black rounded-md flex items-center justify-center text-xs cursor-pointer",
                  activeTab === "month" && "bg-blue-500 text-white"
                )}
              >
                This Month
              </p>
            </div>
          )}
        </div>
        {!user?.accountEnabled ? (
          <div className="w-full mt-5">
            <div className="p-5 bg-blue-600 text-white rounded-xl">
              <p className="font-bold text-lg mb-4">App Usage</p>
              <p className="text-sm w-3/4">
                View your daily, weekly, and monthly usage of the service via
                this oversimplified overview interface to help you understand
                how you are using the service.
              </p>
              <div className="flex flex-row items-center gap-3 mt-4 flex-wrap">
                <div className="w-full lg:w-[33.3%] border border-dashed border-gray-400 h-[120px] flex flex-row p-4 rounded-lg">
                  <div className="w-[70%]">
                    <p className="font-bold text-sm">INVOICES PROCESSED</p>
                    <div className="flex gap-3 items-end">
                      <h1 className="font-bold text-3xl">129324</h1>
                      <p>8.5%</p>
                    </div>
                    <p className="text-xs">Compared to 399201 last month</p>
                  </div>
                  <div className="w-[30%] flex items-center justify-center">
                    <Image
                      src="/assets/graph-1.png"
                      alt="Graph 1"
                      width={150}
                      height={50}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-[33.3%] border border-dashed border-gray-400 h-[120px] flex flex-row p-4 rounded-lg">
                  <div className="w-[70%]">
                    <p className="font-bold text-sm">TOTAL EXPENSES</p>
                    <div className="flex items-end">
                      <h1 className="font-bold text-3xl">₦‎27,050</h1>
                      <p>.34</p>
                    </div>
                    <p className="text-xs">All Expenses on Subscriptions</p>
                  </div>
                  <div className="w-[30%] flex items-center justify-center">
                    <Image
                      src="/assets/money-up.png"
                      alt="Graph 1"
                      width={50}
                      height={50}
                    />
                  </div>
                </div>
                <div className="w-full lg:w-[33.3%] border border-dashed border-gray-400 h-[120px] flex flex-row p-4 rounded-lg">
                  <div className="w-[70%]">
                    <p className="font-bold text-sm">API REQUESTS</p>
                    <div className="flex gap-3 items-end">
                      <h1 className="font-bold text-3xl">137001321</h1>
                      <p>8.5%</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-green-500 rounded-full w-10 h-5 flex items-center justify-center text-xs">
                        8.5%
                      </div>
                      <p className="text-xs">from last 10 days</p>
                    </div>
                  </div>
                  <div className="w-[30%] flex items-center justify-center">
                    <Image
                      src="/assets/graph-2.png"
                      alt="Graph 1"
                      width={150}
                      height={50}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start justify-between text-black mt-5 flex-wrap">
              <div className="w-full lg:w-[68%]">
                <div className="bg-white rounded-lg p-4">
                  <p className="text-sm font-bold uppercase">Accumulations</p>
                  <h1 className="font-bold text-xl">Earning Report</h1>
                  <div className="flex items-center gap-4 w-full mb-8">
                    <div className="w-[40%] mt-5">
                      <h1 className="font-bold text-2xl">₦‎629,394</h1>
                      <div className="flex items-center gap-2">
                        <div className="bg-green-500 rounded-full w-10 h-5 flex items-center justify-center text-xs">
                          8.5%
                        </div>
                        <p className="text-xs">from last 10 days</p>
                      </div>
                    </div>
                    <div className="w-[60%]">
                      {/* <p>Chart</p> */}
                    </div>
                  </div>
                  <div className="border border-dashed border-gary-400 rounded-lg p-4 flex justify-between items-center w-full flex-wrap">
                    <div className="w-full lg:w-[50%] flex items-center text-black">
                      <div className="w-[20%]">
                        <Image
                          src="/assets/money-up-2.png"
                          alt="Graph 1"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div>
                        <p className="uppercase text-sm font-bold">
                          Current Subscription
                        </p>
                        <div className="flex items-end">
                          <p className="text-xl font-bold mr-1">₦‎2,000</p>
                          <p className="text-sm text-gray-400 font-bold">
                            20 Users
                          </p>
                        </div>
                        <p className="font-bold text-xs">26th of every Month</p>
                      </div>
                    </div>
                    <div className="w-full lg:w-[50%] mt-10 lg:mt-0 flex items-center text-black">
                      <div className="w-[20%]">
                        <Image
                          src="/assets/money-up-2.png"
                          alt="Graph 1"
                          width={50}
                          height={50}
                        />
                      </div>
                      <div>
                        <p className="uppercase text-sm font-bold">
                          Current Subscription
                        </p>
                        <div className="flex items-end">
                          <p className="text-xl font-bold mr-1">₦‎2,000</p>
                          <p className="text-sm text-gray-400 font-bold">
                            20 Users
                          </p>
                        </div>
                        <p className="font-bold text-xs">26th of every Month</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-3 mt-5">
                  <div>
                    <h1 className="font-bold text-xl mb-4">
                      Invoice Processing
                    </h1>
                  </div>
                  <Table
                    tableHeader={
                      <TableRow>
                        <TableHead>INVOICE ID</TableHead>
                        <TableHead>ITEMS</TableHead>
                        <TableHead>AMOUNT</TableHead>
                        <TableHead>DATE</TableHead>
                        <TableHead>ACTIONS</TableHead>
                      </TableRow>
                    }
                    tableBody={[1, 2, 3, 4, 5]?.map((item, index) => (
                      <TableRow key={index}>
                        <TableData>99188199313</TableData>
                        <TableData>43</TableData>
                        <TableData>1350</TableData>
                        <TableData>22/2/2022 3:45:01 PM</TableData>
                        <TableData>
                          <div className="flex items-center gap-3">
                            <Button className="rounded-lg py-2 text-xs">
                              DOWNLOAD
                            </Button>
                          </div>
                        </TableData>
                      </TableRow>
                    ))}
                  />
                </div>
              </div>
              <div className="w-full lg:w-[30%] bg-white rounded-lg p-3">
                <div className="p-3 border border-dashed border-gray-400 rounded-lg">
                  <div>
                    <h1 className="font-bold text-xl mb-4">My Activites</h1>
                  </div>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div
                      className="border-b border-dashed border-b-gray-400 py-3 flex items-center justify-between"
                      key={item}
                    >
                      <div>
                        <h1 className="font-bold text-sm">
                          Invoice Processing
                        </h1>
                        <p className="text-xs">22/2/2022 9:35:51 PM</p>
                      </div>
                      <div className="px-4 py-1 rounded-md bg-yellow-100 text-yellow-500 text-xs">
                        Pending
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 border border-dashed border-gray-400 mt-5 rounded-lg">
                  <div>
                    <h1 className="font-bold text-xl mb-4">Account Users</h1>
                  </div>
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div
                      className="border-b border-dashed border-b-gray-400 py-3 flex items-center justify-between"
                      key={item}
                    >
                      <Image
                        src="/assets/profile.png"
                        width={50}
                        height={50}
                        alt="profile"
                      />
                      <div>
                        <h1 className="font-bold text-sm">Ret SILO</h1>
                        <p className="text-xs">retsilo@gmail.com</p>
                      </div>
                      <TrashIcon />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-lg p-3 flex items-center justify-between bg-red-700 text-white mt-5">
            <p className="text-sm w-3/4">
              We are currently reviewing your new account information. Once
              verified, you will be notified and be able to setup a payment
              option from here.
            </p>
            <button
              onClick={() => {
                if (!user?.accountEnabled) {
                  onRefreshAccountReview();
                } else if (user?.subscriptionStatus === "UNSUBSCRIBED") {
                  router.push("/subscription");
                } else {
                }
              }}
              className="text-uppercase flex items-center justify-center text-sm bg-white rounded-md text-red-700 px-6 py-2 font-bold cursor-pointer"
            >
              {user?.subscriptionStatus === "UNSUBSCRIBED"
                ? "Setup payment method"
                : "REFRESH"}
            </button>
          </div>
        )}
      </div>
      <AccountVerifiedModal
        isOpen={accountVerifiedModalHandler.isOpen}
        onClose={accountVerifiedModalHandler.onClose}
        onProceed={() => router.push("/subscription")}
      />
    </>
  );
};

Dashboard.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
export default Dashboard;
