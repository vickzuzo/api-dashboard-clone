import Head from "next/head";
import React from "react";
import AuthLayout from "../components/layouts/AuthLayout";
import LandingPageLayout from "../components/layouts/LandingPageLayout";
import Image from "next/image";
import { Button } from "../components/forms";
import { useRouter } from "next/router";

const Home = () => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>API Management</title>
        <meta name="description" content="API Managment App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="w-full h-screen">
        <div className="flex flex-col lg:flex-row items-center gap-5 justify-between h-[80%] w-full">
          <div className="flex items-center h-full w-full lg:w-1/2 ">
            <div>
              <h1 className="font-extrabold text-7xl text-gray-800">
                We&apos;re here to increase your{" "}
                <span className="text-blue-500">Productivity</span>
              </h1>
              <p className="my-4 text-gray-500">
                Remit to the government easily and keep tabs on all your
                invoices all in one place
              </p>
              <div className="w-full lg:w-1/4 my-4">
                <Button
                  onClick={() => router.push("/auth/login")}
                  className="uppercase font-bold rounded-lg"
                >
                  Get Started
                </Button>
              </div>
              <div className="w-full gap-10 flex items-center mt-10">
                <div className="">
                  <p className="font-bold text-lg">5,000+</p>
                  <p className="text-sm text-gray-400">Customer</p>
                </div>
                <div className="">
                  <p className="font-bold text-lg">8,000+</p>
                  <p className="text-sm text-gray-400">Delivery</p>
                </div>
                <div className="">
                  <p className="font-bold text-lg">1,000+</p>
                  <p className="text-sm text-gray-400">Ratings</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center h-full w-full lg:w-1/2">
            <Image
              src={require("../public/assets/hero_1.png")}
              alt="Hero1"
              className="w-full"
            />
          </div>
        </div>
        <div className="flex items-center justify-center w-full gap-2">
          <div className="w-4 h-4 rounded-full bg-blue-500 cursor-pointer" />
          <div className="w-4 h-4 rounded-full bg-gray-400 cursor-pointer" />
        </div>
      </section>
    </>
  );
};

Home.getLayout = function getLayout(page) {
  return <LandingPageLayout>{page}</LandingPageLayout>;
};
export default Home;
