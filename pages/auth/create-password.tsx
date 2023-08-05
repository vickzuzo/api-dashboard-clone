import { Form, Formik } from "formik";
import * as Yup from "yup";
import { Button, FormInput } from "../../components/forms";
import { VDirect, VEyeCloseIcon, VLockIcon } from "../../components/icons";
import { AppLogo } from "../../components/logo";
import {
  CaptionText,
  HeaderText,
  SubHeaderText,
  Text,
} from "../../components/texts";
import useDisclosure from "../../utils/useDisclosure";
import { PasswordCreatedModal } from "../../components/modals";
import { useAppDispatch } from "../../utils/redux";
import { onCloseAppLoader, onOpenAppLoader } from "../../store";

const CreatePassword = () => {
  const newPasswordhandler = useDisclosure();
  const dispatch = useAppDispatch();
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
                <SubHeaderText text="Create Password" />
                <Formik
                  initialValues={{
                    temporal_password: "",
                    new_password: "",
                    confirm_new_password: "",
                  }}
                  validationSchema={Yup.object().shape({
                    temporal_password: Yup.string().required(
                      "This field is required!."
                    ),
                    new_password: Yup.string().required(
                      "This field is required!."
                    ),
                    confirm_new_password: Yup.string()
                      .oneOf(
                        [Yup.ref("new_password"), null],
                        "Passwords must match"
                      )
                      .required("This field is required!."),
                  })}
                  onSubmit={(values) => {
                    dispatch(onOpenAppLoader());
                    setTimeout(() => {
                      dispatch(onCloseAppLoader());
                      newPasswordhandler.onOpen();
                    }, 3000);
                  }}
                >
                  {(props) => (
                    <Form>
                      <FormInput
                        LeftIcon={<VLockIcon />}
                        RightIcon={<VEyeCloseIcon />}
                        type="password"
                        name="temporal_password"
                        placeholder="Enter Temporal Password"
                      />
                      <FormInput
                        LeftIcon={<VLockIcon />}
                        RightIcon={<VEyeCloseIcon />}
                        type="password"
                        name="new_password"
                        placeholder="Enter New Password"
                      />
                      <FormInput
                        LeftIcon={<VLockIcon />}
                        RightIcon={<VEyeCloseIcon />}
                        type="password"
                        name="confirm_new_password"
                        placeholder="Confirm New Password"
                      />
                      <Button
                        disabled={!props.dirty || !props.isValid}
                        type="submit"
                      >
                        CREATE NEW PASSWORD
                      </Button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PasswordCreatedModal
        onClose={newPasswordhandler.onClose}
        isOpen={newPasswordhandler.isOpen}
      />
    </section>
  );
};

export default CreatePassword;
