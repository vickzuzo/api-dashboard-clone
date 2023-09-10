import { useRouter } from "next/router";
import { Button, DangerPaleButton } from "../forms";
import { VActivatedIcon } from "../icons";
import { CaptionText, HeaderText } from "../texts";
import { Modal } from "./Modal";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onSetupKYC: () => void;
  onSkip: () => void;
}

export const KYCModal = ({
  isOpen,
  onClose,
  onSetupKYC,
  onSkip,
}: IProps) => {
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
          Your account has been successfully activated. You can proceed to
          complete your KYC to have full functionality to your account.
        </p>
        <div className="my-2 w-full flex flex-col gap-3">
          <Button rounded onClick={onSetupKYC}>
            SETUP KYC
          </Button>
          <DangerPaleButton rounded onClick={onSkip}>
            Skip for now
          </DangerPaleButton>
        </div>

        <div className="w-full bg-blue_fade rounded py-8 my-8">
          <div className="flex flex-col justify-items-center items-center">
            <CaptionText text="Having problems logging in?" />
            <p className="text-sm text-blue-500 cursor-pointer mt-3 font-bold">
              Chat with us
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};
