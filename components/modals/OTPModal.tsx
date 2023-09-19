import React, { useState } from "react";
import OtpInput from "react-otp-input";
import { Button, DangerPaleButton, PaleButton } from "../forms";
import { HeaderText } from "../texts";
import { onCloseAppLoader, onOpenAppLoader } from "../../store";
import { useAppDispatch } from "../../utils/redux";
import { Modal } from "./Modal";
import { VShieldSecurityIcon } from "../icons";

interface IProps {
  email?: string;
  isOpen: boolean;
  onClose: () => void;
  successCallback?: () => void;
}

export const OTPModal = ({
  email,
  isOpen,
  onClose,
  successCallback,
}: IProps) => {
  const [otp, setOtp] = useState("");

  const dispatch = useAppDispatch();

  const onProceedClick = () => {
    onClose();
    dispatch(onOpenAppLoader());
    setTimeout(() => {
      dispatch(onCloseAppLoader());
      successCallback?.();
    }, 2000);
  };

  return (
    <Modal
      size="sm"
      isOpen={isOpen}
      onClose={onClose}
      showHeaderComponent={false}
      footer={
        <div className="flex flex-row w-full">
          <DangerPaleButton onClick={onClose}>CLOSE</DangerPaleButton>
          <Button
            disabled={otp.length !== 6}
            className="rounded-[0px]"
            onClick={onProceedClick}
          >
            CONFIRM & PROCEED
          </Button>
        </div>
      }
    >
      <div className="flex flex-col items-center gap-3 p-5">
        <VShieldSecurityIcon />
        <HeaderText className="text-blue-300" text="ENTER OTP" />
        <p className="text-center text-sm">
          To verify your identity, we’ve sent an OTP to your Email Address
        </p>
        {email && (
          <p className="font-bold text-center text-blue-600 text-sm">{email}</p>
        )}
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>&nbsp;&nbsp;</span>}
          renderInput={(props) => <input {...props} className="bg-blue_fade" />}
          inputStyle={{
            border: "1px solid transparent",
            borderRadius: "8px",
            width: "3.2rem",
            height: "4rem",
            fontSize: "12px",
            color: "#000",
            fontWeight: "400",
            caretColor: "blue",
          }}
          shouldAutoFocus
          inputType="password"
          placeholder="-"
        />
        <PaleButton className="mt-5">RESEND OTP</PaleButton>
      </div>
    </Modal>
  );
};
