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

export const PasswordCreatedModal = ({ isOpen, onClose }: IProps) => {
  const router = useRouter();
  return (
    <Modal
      size="sm"
      isOpen={isOpen}
      onClose={onClose}
      showHeaderComponent={false}
      footer={
        <Button onClick={() => router.push("/dashboard")}>PROCEED</Button>
      }
    >
      <div className="flex flex-col items-center gap-3">
        <HeaderText text="NEW PASSWORD CREATED" className="text-center" />
        <p className="text-center text-sm">
          A new password has now been setup for your account. You can use it
          next time you want to log in. Click{" "}
          <span className="font-bold">“Proceed”</span> to go to the Admin Area
        </p>
      </div>
    </Modal>
  );
};
