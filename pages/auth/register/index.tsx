import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { RegisterForm } from "../../../components/forms";
import AuthLayout from "../../../components/layouts/AuthLayout";
import { OTPModal, OTPVerifiedModal } from "../../../components/modals";
import {
  onCloseAppLoader,
  onOpenAppLoader,
  onOpenLoginForm,
  onOpenLoginWithPasswordForm,
  onUpdateForm,
  onUpdateRegisterForm,
} from "../../../store";
import { useAppDispatch, useAppSelector } from "../../../utils/redux";
import useDisclosure from "../../../utils/useDisclosure";

const Register = () => {
  const { showLoginForm, showLoginWithPasswordForm, data } = useAppSelector(
    (state) => state.login
  );
  const dispatch = useAppDispatch();
  const otpHandler = useDisclosure();
  const otpSuccessHandler = useDisclosure();
  const [imageCrop, setImageCrop] = useState(false);

  const router = useRouter();
  const [image, setImage] = useState(
    require("../../../public/assets/profile.png")
  );
  const [preview, setPreview] = useState(null);

  const handleOnClose = () => {
    setPreview(null);
  };
  const handleOnCrop = (view) => {
    setPreview(view);
  };

  const handleOnBeforeFileLoad = (elem) => {
    if (elem.target.files[0].size > 71680) {
      alert("File is too big!");
      elem.target.value = "";
    }
  };

  const onSetImageCrop = (value) => {
    setImageCrop(false);
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.substring(0, 5) === "image") {
      console.log(file);
      setImage(file);
      // save preview
      dispatch(onUpdateRegisterForm({ avatar: file }));
    }
  };

  const handleCropImageSave = (event) => {};

  return (
    <section className="w-full flex items-center justify-center min-h-full">
      <div className="w-[40%] h-[95%]">
        <div className="flex justify-between rounded-md items-center h-full">
          <div className="flex-auto w-[40%] m-4 h-full flex flex-col justify-center items-center">
            <RegisterForm
              onSubmit={(values) => {
                dispatch(onUpdateForm(values));
                dispatch(onOpenAppLoader());
                setTimeout(() => {
                  dispatch(onCloseAppLoader());
                  otpHandler.onOpen();
                }, 3000);
              }}
            />
          </div>
        </div>
      </div>
      <OTPModal
        isOpen={otpHandler.isOpen}
        email={data.email}
        onClose={() => {
          dispatch(onOpenLoginForm());
          otpHandler.onClose();
        }}
        successCallback={() => router.push("/auth/account-activated")}
      />
    </section>
  );
};

Register.getLayout = function getLayout(page) {
  return <AuthLayout>{page}</AuthLayout>;
};
export default Register;
