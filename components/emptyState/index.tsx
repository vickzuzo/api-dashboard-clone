import React from "react";
import { VExclamationIcon } from "../icons";

interface IProps {
  icon?: React.ReactElement;
  title?: string;
  info?: string;
}

export const EmptyState: React.FC<IProps> = ({ icon, title, info }) => {
  return (
    <div className="w-full text-center flex flex-col items-center justify-center">
      {icon ? icon : <VExclamationIcon />}
      <h1 className="text-center text-blue-500 font-bold text-2xl">{title}</h1>
      <p>{info}</p>
    </div>
  );
};
