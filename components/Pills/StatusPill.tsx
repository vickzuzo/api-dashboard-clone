import React from "react";
import { twMerge } from "tailwind-merge";

interface IProps {
  status: string;
}

const StatusPill = ({ status }: IProps) => {
  const statusColors = {
    active: {
      bg: "bg-green-100",
      text: "text-green-500",
    },
    pending: {
      bg: "bg-yellow-100",
      text: "text-yellow-500",
    },
    expired: {
      bg: "bg-red-100",
      text: "text-red-500",
    },
    inactive: {
      bg: "bg-yellow-100",
      text: "text-yellow-500",
    },
  };
  const { bg, text } = statusColors[status.toLowerCase()];

  return (
    <div
      className={twMerge(
        "rounded-md px-3 py-2 text-xs font-bold uppercase text-center flex items-center justify-center w-fit",
        bg,
        text
      )}
    >
      {status}
    </div>
  );
};

export default StatusPill;
