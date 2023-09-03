import React from "react";
import AuthHeader from "../AuthHeader";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/router";

const AccountKycLayout = ({ children }) => {
  const { query } = useRouter();

  return (
    <>
      <AuthHeader currentUser={null} />
      <main className="w-full flex gap-10 justify-between max-w-7xl mx-auto">
        <div className="w-1/4">
          <div className="relative flex flex-col gap-8">
            <Link
              aria-disabled={query?.step_1 === "completed"}
              href="?step=business_information"
              className={twMerge(
                "relative z-1 cursor-pointer flex items-center gap-5",
                query?.step_1 === "completed" && "pointer-events-none"
              )}
            >
              <div
                className={twMerge(
                  "border-2 border-gray-400 bg-white w-10 h-10 flex items-center justify-center rounded-full",
                  query?.step === "business_information" && "border-blue-600",
                  query?.step_1 === "completed" && "border-blue-400"
                )}
              >
                <p
                  className={twMerge(
                    "text-gray-400",
                    query?.step === "business_information" &&
                      "text-blue-600 font-bold",
                    query?.step_1 === "completed" && "text-blue-400 font-bold"
                  )}
                >
                  1
                </p>
              </div>
              <p
                className={twMerge(
                  "text-gray-400",
                  query?.step === "business_information" &&
                    "text-blue-600 font-bold",
                  query?.step_1 === "completed" && "text-blue-400 font-bold"
                )}
              >
                Business Information
              </p>
            </Link>
            <Link
              href="?step=business_identity"
              aria-disabled={query?.step_1 !== "completed"}
              className={twMerge(
                "relative z-1 cursor-pointer flex items-center gap-5",
                query?.step_1 !== "completed" && "pointer-events-none"
              )}
            >
              <div
                className={twMerge(
                  "border-2 border-gray-400 bg-white w-10 h-10 flex items-center justify-center rounded-full",
                  query?.step === "business_identity" && "border-blue-600"
                )}
              >
                <p
                  className={twMerge(
                    "text-gray-400",
                    query?.step === "business_identity" &&
                      "text-blue-600 font-bold"
                  )}
                >
                  2
                </p>
              </div>
              <p
                className={twMerge(
                  "text-gray-400",
                  query?.step === "business_identity" &&
                    "text-blue-600 font-bold"
                )}
              >
                Business Identity
              </p>
            </Link>
            <div
              className={twMerge(
                "h-full w-[2px] z-[-1] bg-gray-400 absolute top-0 left-[6.2%] translate-x-[-6.2%]"
              )}
            />
          </div>
          {/* tips section */}
          <div></div>
        </div>
        <main className="w-3/4 flex items-center justify-center h-full">
          <div className="h-full min-w-[60%] max-w-[65%] border rounded-md border-gray-100 p-6">
            {children}
          </div>
        </main>
      </main>
    </>
  );
};

export default AccountKycLayout;
