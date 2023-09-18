import { useRouter } from "next/router";
import React from "react";
import { useAppDispatch } from "../../utils/redux";
import { onCloseAppLoader, onOpenAppLoader } from "../../store";
import { Modal } from "./Modal";
import { Button } from "../forms";
import { HeaderText } from "../texts";
import { VShieldCheckIcon } from "../icons";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const BusinessOnboardedModal = ({ isOpen, onClose }: IProps) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const onProceedClick = () => {
    onClose();
    dispatch(onOpenAppLoader());
    setTimeout(() => {
      dispatch(onCloseAppLoader());
      router.push("/dashboard");
    }, 2000);
  };
  return (
    <Modal
      size="sm"
      isOpen={isOpen}
      onClose={onClose}
      showHeaderComponent={false}
      footer={
        <div className="w-full">
          <Button onClick={onProceedClick}>PROCEED</Button>
        </div>
      }
    >
      <div className="flex flex-col items-center gap-3 p-5">
        <VShieldCheckIcon />
        <HeaderText className="text-blue-300" text="BUSINESS ONBOARDED" />
        <p className="text-center text-sm">
          Your business has been successfully added. Our team will commence the
          verification process and reach out to you within 3 Business Days
        </p>
      </div>
    </Modal>
  );
};

export default BusinessOnboardedModal;
