/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Modal } from "./Modal";
import { VActivatedIcon } from "../icons";
import { HeaderText } from "../texts";
import { Button, DangerPaleButton, PaleButton } from "../forms";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onProceed: () => void;
  content: React.ReactNode;
  proceedButtonText?: string;
}

const ActionSuccessfulModal = ({
  isOpen,
  onClose,
  onProceed,
  content,
  proceedButtonText,
}: IProps) => {
  return (
    <Modal
      size="sm"
      isOpen={isOpen}
      onClose={onClose}
      showHeaderComponent={false}
      footer={
        <div className="flex flex-row w-full">
          <DangerPaleButton
            onClick={onClose}
            className="uppercase font-bold text-xs py-6"
          >
            CANCEL
          </DangerPaleButton>
          <Button
            onClick={onProceed}
            className="uppercase font-bold text-xs py-6"
          >
            {proceedButtonText ?? "Proceed"}
          </Button>
        </div>
      }
    >
      <div className="flex flex-col items-center gap-3">
        <VActivatedIcon />

        {content}
      </div>
    </Modal>
  );
};

export default ActionSuccessfulModal;
