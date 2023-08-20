import react, { useEffect, useState } from 'react';
import { RegisterForm } from "../../components/forms";
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
import { useAppDispatch, useAppSelector } from "../../utils/redux";
import { onCloseAppLoader, onOpenAppLoader, onOpenLoginForm, onOpenLoginWithPasswordForm, onUpdateForm, onUpdateRegisterForm } from "../../store";
import { LoginForm } from "../../components/forms";
import AuthLayout from "../../components/layouts/AuthLayout";
import { LoginWithPasswordForm } from '../../components/forms/LoginWithPasswordForm';
import img from "../../public/assets/profile.png";
import Avatar from 'react-avatar-edit';
import { AvatarInput } from '../../components/forms/AvatarInput';

const Register = () => {
  const { showLoginForm, showLoginWithPasswordForm, data } = useAppSelector((state) => state.login);
  const dispatch = useAppDispatch();
  const otpHandler = useDisclosure();
  const otpSuccessHandler = useDisclosure();
  const [imageCrop, setImageCrop] = useState(false)

  const router = useRouter();
  const [image, setImage] = useState(img);
  const [preview, setPreview] = useState(null);

  const handleOnClose = () => {
    setPreview(null)
  }
  const handleOnCrop = (view) => {
    setPreview(view)
  }

  const handleOnBeforeFileLoad = (elem) => {
    if(elem.target.files[0].size > 71680){
      alert("File is too big!");
      elem.target.value = "";
    };
  }
  
  const onSetImageCrop = (value) => {
    setImageCrop(false)
  }
  
  useEffect(() => {
    console.log(data);
  }, [data])

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.substring(0, 5) === "image") {
      console.log(file);
      setImage(file);
      dispatch(onUpdateRegisterForm({ avatar: file }))
    }
  };

  const handleCropImageSave = (event) => {

  }
    
  
  return (
    <section className="w-full flex items-center justify-center h-screen">
      <div className="w-[40%] h-[95%]">
        <div className="flex justify-between rounded-md items-center h-full">
          <div className="flex-auto w-[40%] m-4 bg-auth_background bg-no-repeat bg-[bottom_right_5rem] bg-contain h-full flex flex-col justify-center items-center">
            <RegisterForm 
              onSubmit={(values) => {
                console.log(values);
                
              }} />
          </div>
        </div>
      </div>
      {/* <OTPModal
        isOpen={otpHandler.isOpen}
        onClose={() => {
          dispatch(onOpenLoginForm());
          otpHandler.onClose();
        }}
        successCallback={otpSuccessHandler.onOpen}
      />
      <OTPVerifiedModal
        isOpen={otpSuccessHandler.isOpen}
        onClose={otpSuccessHandler.onClose}
        onProceed={() => {
          dispatch(onOpenLoginWithPasswordForm());
          otpSuccessHandler.onClose();
        }}
        // successCallback={otpSuccessHandler.onOpen}
      /> */}
    </section>
  );
};

Register.getLayout = function getLayout(page) {
  return (
    <AuthLayout>
      {page}
    </AuthLayout>
  )
}
export default Register;
