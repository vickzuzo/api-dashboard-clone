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
import { OTPModal } from "./components/OTPModal";
import { OTPVerifiedModal } from "./components/OTPVerifiedModal";
import { useRouter } from "next/router";
import { useAppDispatch } from "../../utils/redux";
import { onCloseAppLoader, onOpenAppLoader } from "../../store";

const Login = () => {
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
            <div className="w-full rounded-lg p-5 bg-[rgba(255,255,255,0.25)]">
              <div className="w-full rounded-lg p-5 bg-white">
                <SubHeaderText text="Login to your account" />
                <Formik
                  initialValues={
                    email
                      ? { email: email ? email : "", password: "" }
                      : { email: "" }
                  }
                  validationSchema={Yup.object().shape(
                    email
                      ? {
                          email: Yup.string()
                            .email("Email is invalid")
                            .required("This field is required!."),
                          password: Yup.string().required(
                            "This field is required!."
                          ),
                        }
                      : {
                          email: Yup.string()
                            .email("Email is invalid")
                            .required("This field is required!."),
                        }
                  )}
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
                  }}
                >
                  {(props) => (
                    <Form>
                      <FormInput
                        LeftIcon={<VDirect />}
                        type="email"
                        name="email"
                        placeholder="Enter Email Address"
                      />
                      {email ? (
                        <FormInput
                          LeftIcon={<VDirect />}
                          RightIcon={<VEyeCloseIcon />}
                          type="password"
                          name="password"
                          placeholder="Enter Password"
                        />
                      ) : null}
                      <Button
                        disabled={!props.dirty || !props.isValid}
                        type="submit"
                      >
                        {email ? "LOGIN" : "VERIFY EMAIL ADDRESS"}
                      </Button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
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
export default Login;
