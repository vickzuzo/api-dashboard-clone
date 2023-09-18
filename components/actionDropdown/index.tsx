import React, { useRef } from "react";
import { useOnClickOutside } from "../../utils/useClickOutside";

interface IProps {
  actions: {
    icon?: string;
    action?: string;
    onClick?: () => void;
  }[];
  isOpen: boolean;
  onClose?: () => void;
}

const ActionDropDown = ({ actions, isOpen, onClose }: IProps) => {
  const ref = useRef<any>(null);

  const handleClickOutside = () => {
    onClose?.();
  };

  useOnClickOutside(ref, handleClickOutside);
  return (
    <>
      {isOpen ? (
        <div
          className="origin-top-right absolute right-0 mt-2 w-36 rounded-md shadow-md shadow-blue-300/40 bg-white ring-1 ring-black ring-opacity-5"
          ref={ref}
        >
          <div className="py-1">
            {actions.map((action) => (
              <button
                key={action.action}
                onClick={action?.onClick}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
              >
                {action?.icon}
                {action?.action}
              </button>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default ActionDropDown;
