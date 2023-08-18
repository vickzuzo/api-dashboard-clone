import React, { useState } from "react";
import { Modal } from "./Modal";
import {
  Button,
  DangerPaleButton,
  PaleButton,
} from "../forms";
import OtpInput from "react-otp-input";
import { HeaderText } from "../texts";
import { useRouter } from "next/router";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onProceed: () => void;
}

export const OTPVerifiedModal = ({ isOpen, onClose, onProceed }: IProps) => {
  const router = useRouter();
  return (
    <Modal
      size="sm"
      isOpen={isOpen}
      onClose={onClose}
      showHeaderComponent={false}
      footer={
        <Button onClick={onProceed}>PROCEED</Button>
      }
    >
      <div className="flex flex-col items-center gap-3">
        <HeaderText text="OTP VERIFIED" />
        <p className="text-center text-sm">
          The OTP entered is correct, click “Proceed” below to continue
        </p>
      </div>
    </Modal>
  );
};