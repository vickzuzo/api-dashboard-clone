import React, { useState } from "react";
import { Modal } from "../../../components/modal";
import {
  Button,
  DangerPaleButton,
  PaleButton,
} from "../../../components/forms";
import OtpInput from "react-otp-input";
import { HeaderText } from "../../../components/texts";
import { useRouter } from "next/router";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OTPVerifiedModal = ({ isOpen, onClose }: IProps) => {
  const router = useRouter();
  return (
    <Modal
      size="sm"
      isOpen={isOpen}
      onClose={onClose}
      showHeaderComponent={false}
      footer={
        <Button onClick={() => router.push("/auth/create-password")}>PROCEED</Button>
      }
    >
      <div className="flex flex-col items-center gap-3">
        <HeaderText text="OTP VERIFIED" />
        <p className="text-center text-sm">
          The OTP entered is correct. We noticed you do not have a permanent
          password yet, click “Proceed” below to create one
        </p>
      </div>
    </Modal>
  );
};
