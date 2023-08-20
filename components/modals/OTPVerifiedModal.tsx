import React, { useState } from "react";
import { Modal } from "./Modal";
import {
  Button,
  DangerPaleButton,
  PaleButton,
} from "../forms";
import OtpInput from "react-otp-input";
import { CaptionText, HeaderText } from "../texts";
import { useRouter } from "next/router";
import { VActivatedIcon } from "../icons";
import Link from "next/link";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onSetupKYC: () => void;
  onSkip: () => void;
}

export const OTPVerifiedModal = ({ isOpen, onClose, onSetupKYC, onSkip }: IProps) => {
  const router = useRouter();
  return (
    <Modal
      size="sm"
      isOpen={isOpen}
      onClose={onClose}
      showHeaderComponent={false}
    >
      <div className="flex flex-col items-center gap-3">
        <VActivatedIcon />
        <HeaderText text="Account Activated" />
        <p className="text-center text-sm">
          Your account has been successfully activated. You can proceed to complete your KYC to have full functionality to your account. 
        </p>
        <Button onClick={onSetupKYC}>SETUP KYC</Button>
        <PaleButton onClick={onSkip}>Skip for now</PaleButton>

        <div className='w-full bg-gray-200 rounded'>
          <div className='flex flex-col justify-items-center items-center m-10'>
            <div className='m-2'>
              <CaptionText text="Having problems logging in?"/>
            </div>
            <Link href={'/login'} className='text-sm text-blue-500 hover:underline m-2'>
              Chat with us
            </Link>
          </div>
        </div>
      </div>
    </Modal>
  );
};