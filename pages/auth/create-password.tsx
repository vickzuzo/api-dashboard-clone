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
import { CreatePasswordForm } from "../../components/forms";

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
          <CreatePasswordForm onSubmit={(values) => {
                  dispatch(onOpenAppLoader());
                  setTimeout(() => {
                    dispatch(onCloseAppLoader());
                    newPasswordhandler.onOpen();
                  }, 3000);
                }} />
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
