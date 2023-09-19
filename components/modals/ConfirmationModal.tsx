import React from "react";
import { Modal } from "./Modal";
import { Button, DangerPaleButton, PaleButton } from "../forms";
import { VExclamationIcon } from "../icons";
import { HeaderText, SubHeaderText } from "../texts";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onProceed: () => void;
  proceedButtonText?: string;
  title?: string;
  description: string;
  info?: string;
  titleColor?: string;
}

const ConfirmationModal = ({
  isOpen,
  onClose,
  onProceed,
  proceedButtonText,
  title,
  description,
  info,
  titleColor = "text-blue-500",
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
        <VExclamationIcon />
        <HeaderText text={title} className={titleColor} />
        <SubHeaderText text={info} />
        <p className="text-center">{description}</p>
      </div>
    </Modal>
  );
};

export default ConfirmationModal;
