import { twMerge } from "tailwind-merge";
import Layout from "../../components/layouts/Layout";
import { HeaderText } from "../../components/texts";
import Head from "next/head";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../utils/redux";
import { onCloseAppLoader, onOpenAppLoader, updateAppUser } from "../../store";
import AccountVerifiedModal from "../../components/modals/AccountVerifiedModal";
import useDisclosure from "../../utils/useDisclosure";
import { useRouter } from "next/router";

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
      dispatch(updateAppUser({ accountEnabled: true, subscriptionStatus: "UNSUBSCRIBED" }));
      accountVerifiedModalHandler.onOpen();
    }, 3000);
  };

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold">
            {user?.accountEnabled ? "Dashboard" : "Overview"}
          </h1>
          {user?.accountEnabled && (
            <div className="flex items-center rounded-md overflow-hidden gap-2 bg-white">
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
        {user?.accountEnabled ? (
          <div className="w-full p-5 rounded-md bg-blue-600 text-white mt-5">
            <p className="font-bold mb-4">App Usage</p>
            <p className="text-sm w-1/2">
              View your daily, weekly, and monthly usage of the service via this
              oversimplified overview interface to help you understand how you
              are using the service.
            </p>
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
