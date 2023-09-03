import React from "react";
import { VActivatedIcon } from "../../../components/icons";
import { CaptionText, HeaderText } from "../../../components/texts";
import { Button, DangerPaleButton } from "../../../components/forms";
import { useRouter } from "next/router";
import AuthLayout from "../../../components/layouts/AuthLayout";

const AccountActivated = () => {
  const router = useRouter();
  return (
    <section className="w-full flex items-center justify-center min-h-full">
      <div className="w-[40%] h-[95%]">
        <div className="flex justify-between rounded-md items-center h-full">
          <div className="flex-auto w-[40%] m-4 h-full flex flex-col justify-center items-center">
            <div className="w-full rounded-lg p-5 bg-[rgba(255,255,255,0.25)]">
              <div className="w-full rounded-lg p-5 bg-white">
                <div className="flex flex-col items-center gap-3">
                  <VActivatedIcon />
                  <HeaderText text="Account Activated" />
                  <p className="text-center text-sm">
                    Your account has been successfully activated. You can
                    proceed to complete your KYC to have full functionality to
                    your account.
                  </p>
                  <div className="my-2 w-full flex flex-col gap-3">
                    <Button rounded onClick={() => router.push("/account/kyc?step=business_information")}>
                      SETUP KYC
                    </Button>
                    <DangerPaleButton
                      rounded
                      onClick={() => router.push("/dashboard")}
                    >
                      Skip for now
                    </DangerPaleButton>
                  </div>

                  <div className="w-full bg-blue_fade rounded py-8 my-8">
                    <div className="flex flex-col justify-items-center items-center">
                      <CaptionText text="Having problems logging in?" />
                      <p className="text-sm text-blue-500 cursor-pointer mt-3 font-bold">
                        Chat with us
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AccountActivated.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};

export default AccountActivated;
