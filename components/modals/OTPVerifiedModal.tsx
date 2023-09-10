import React, { useState } from "react";
import { Modal } from "./Modal";
import {
  Button,
  DangerPaleButton
} from "../forms";
import { HeaderText } from "../texts";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  successCallback?: () => void;
}

export const OTPVerifiedModal = ({ isOpen, onClose, successCallback }: IProps) => {
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
            className="rounded-[0px]"
            onClick={successCallback}
          >
            PROCEED
          </Button>
        </div>
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