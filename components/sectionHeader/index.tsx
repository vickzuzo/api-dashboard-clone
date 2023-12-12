"use client";
import React from "react";
import { PlusIcon } from "../icons";

interface IProps {
  title: string;
  btnText?: string;
  onButtonPress?: () => void;
  rightContent?: React.ReactElement;
}

export const SectionHeader: React.FC<IProps> = ({
  title,
  btnText,
  onButtonPress,
  rightContent,
}) => {
  return (
    <div className="w-full flex items-center">
      <div className="w-1/2 flex items-center gap-4 flex-wrap">
        <h1 className="text-4xl font-bold">{title}</h1>
        {btnText && (
          <button
            onClick={onButtonPress}
            className="flex items-center gap-2 border-blue-500 border-2 rounded-md py-1 px-2 text-blue-500"
          >
            <PlusIcon />
            <p>{btnText}</p>
          </button>
        )}
      </div>
      {rightContent && (
        <div className="w-1/2 flex justify-end">{rightContent}</div>
      )}
    </div>
  );
};
