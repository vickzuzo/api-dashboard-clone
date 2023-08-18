import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Button, FormInput } from "../../components/forms";
import { VDirect, VEyeCloseIcon } from "../../components/icons";
import { AppLogo } from "../../components/logo";
import {
  CaptionText,
  HeaderText,
  SubHeaderText,
  Text,
} from "../../components/texts";
import useDisclosure from "../../utils/useDisclosure";
import { OTPModal, OTPVerifiedModal } from "../../components/modals";
import { useRouter } from "next/router";
import { useAppDispatch } from "../../utils/redux";
import { onCloseAppLoader, onOpenAppLoader } from "../../store";
import { RegisterForm } from "../../components/forms";

const Register = () => {
  const dispatch = useAppDispatch();
  const otpHandler = useDisclosure();
  const otpSuccessHandler = useDisclosure();

  const router = useRouter();
  const { query } = router;

  // Access the URL parameters from the query object
  const email = query.email;
  return (
    <section className="w-full flex items-center justify-center h-screen">
      <div className="w-[80%] h-screen">
        <div className="flex justify-between rounded-md items-center h-full">
          <div className="flex-auto w-[60%] m-4">
            <div className="w-[40%]">
              <AppLogo />
            </div>

            <div className="pt-8">
              <HeaderText text="Create An Account" />
            </div>
            <div className="py-4">
              <Text text="Welcome to our service. We’re thrilled that you’re interested in using our service. By signing up for an account, you’ll be able to access a wealth of business-related resources that can help you achieve your daily business goals with minimal effort. So why wait? Setup your account using the form on this page" />
            </div>
            <div className="w-full h-[30vh] bg-auth_banner bg-no-repeat bg-cover rounded-2xl overflow-hidden" />
            <div className="w-full text-center p-4">
              <CaptionText text="(C) 2023. All Rights Reserved." />
            </div>
          </div>
          <div className="flex-auto w-[40%] m-4 bg-auth_background bg-no-repeat bg-[bottom_right_5rem] bg-contain h-full flex flex-col justify-center items-center">
            <RegisterForm 
              email={email} 
              onSubmit={(values) => {
                    if (email) {
                      router.push("/dashboard");
                    } else {
                      dispatch(onOpenAppLoader());
                      setTimeout(() => {
                        dispatch(onCloseAppLoader());
                        otpHandler.onOpen();
                      }, 3000);
                    }
              }} />
          </div>
        </div>
      </div>
      <OTPModal
        isOpen={otpHandler.isOpen}
        onClose={otpHandler.onClose}
        successCallback={otpSuccessHandler.onOpen}
      />
      <OTPVerifiedModal
        isOpen={otpSuccessHandler.isOpen}
        onClose={otpSuccessHandler.onClose}
        // successCallback={otpSuccessHandler.onOpen}
      />
    </section>
  );
};
export default Register;
