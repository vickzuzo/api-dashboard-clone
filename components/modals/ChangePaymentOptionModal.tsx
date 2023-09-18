import AtmCard from "../cards/AtmCard";
import { Button, PaleButton } from "../forms";
import { VAtmCardIcon, VPlusIcon } from "../icons";
import { Modal } from "./Modal";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  onRevertToDefault?: () => void;
  onAddNewPaymentMethod?: () => void;
}

const ChangePaymentOptionModal = ({
  isOpen,
  onClose,
  onRevertToDefault,
  onAddNewPaymentMethod,
}: IProps) => {
  return (
    <Modal
      size="sm"
      isOpen={isOpen}
      onClose={onClose}
      showHeaderComponent={false}
      footer={
        <div className="w-full flex flex-row">
          <PaleButton onClick={onClose} className="uppercase text-xs">
            CANCEL
          </PaleButton>
          <Button onClick={onClose} className="uppercase text-xs">
            Continue with selection
          </Button>
        </div>
      }
    >
      <div className="flex flex-col items-center gap-3 p-2">
        <div className="flex items-center gap-4 w-full">
          <div className="bg-gray-100 p-3 rounded-lg">
            <VAtmCardIcon />
          </div>
          <div>
            <h1 className="font-bold text-lg">Change Payment Option</h1>
            <p className="text-xs">
              Switch to another option to receive payment easily
            </p>
          </div>
        </div>
        <AtmCard />
        <div className="w-full border-b border-dashed border-gray-300" />
        <div
          className="w-full border border-dashed border-gray-300 flex items-center flex-col justify-center rounded-lg px-2 py-4 cursor-pointer"
          onClick={() => onAddNewPaymentMethod?.()}
        >
          <div className="p-4 rounded-full border border-dashed border-gray-300 flex items-center justify-center mb-5">
            <VPlusIcon />
          </div>
          <p className="font-bold text-sm">Add New Payment Method</p>
        </div>
        <div className="w-full border-b border-dashed border-gray-300" />
        <p
          className="text-blue-500 text-sm font-bold underline underline-offset-2 cursor-pointer"
          onClick={() => onRevertToDefault?.()}
        >
          Revert to Default
        </p>
      </div>
    </Modal>
  );
};

export default ChangePaymentOptionModal;
