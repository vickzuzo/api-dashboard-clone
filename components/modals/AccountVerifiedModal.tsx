/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Modal } from "./Modal";
import { VActivatedIcon } from "../icons";
import { HeaderText } from "../texts";
import { Button } from "../forms";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onProceed: () => void;
}

const AccountVerifiedModal = ({ isOpen, onClose, onProceed }: IProps) => {
  return (
    <Modal
      size="sm"
      isOpen={isOpen}
      onClose={onClose}
      showHeaderComponent={false}
      footer={
        <Button onClick={onProceed} className="uppercase font-bold text-xs py-6">
          Add Payment Method
        </Button>
      }
    >
      <div className="flex flex-col items-center gap-3">
        <VActivatedIcon />
        <HeaderText text="Account Verified" className="text-blue-500" />
        <p className="text-center text-sm">
          Your new account has been successfully verified after our team of
          experts conducted a thorough research to correlate the information you
          provided against the existing one in the Government's database.
        </p>
        <p className="text-sm text-center font-bold">
          You can now setup a payment method to activate your account's
          subscription.
        </p>
      </div>
    </Modal>
  );
};

export default AccountVerifiedModal;
