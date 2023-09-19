import React from "react";
import { VHorizontalMenuIcon, VMasterCardIcon } from "../icons";
import useDisclosure from "../../utils/useDisclosure";
import ActionDropDown from "../actionDropdown";

interface IProps {
  handleDeleteCard?: () => void;
}

const AtmCard = ({ handleDeleteCard }: IProps) => {
  const actionDropdownHandler = useDisclosure();

  const actions = [
    { action: "Modify" },
    { action: "Delete", onClick: handleDeleteCard },
  ];

  return (
    <div className="bg-[#2E2E3A] rounded-3xl p-6 w-full">
      <div className="flex items-center justify-between">
        <VMasterCardIcon />
        <div className="relative">
          <VHorizontalMenuIcon
            className="text-white cursor-pointer"
            onClick={actionDropdownHandler.onOpen}
          />
          <ActionDropDown
            onClose={actionDropdownHandler.onClose}
            actions={actions}
            isOpen={actionDropdownHandler.isOpen}
          />
        </div>
      </div>
      <h1 className="text-2xl font-bold text-white text-center my-4 tracking-wider">
        **** **** **** 8331
      </h1>
      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start">
          <p className="text-xs uppercase text-white/70">Card Holder</p>
          <h1 className="text-[#EDEFF1] text-xl font-bold">Orion</h1>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-xs uppercase text-white/70">Expiry Date</p>
          <h1 className="text-[#EDEFF1] text-xl font-bold">09/24</h1>
        </div>
      </div>
    </div>
  );
};

export default AtmCard;
