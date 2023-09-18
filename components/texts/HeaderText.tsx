import React from "react";
import { twMerge } from "tailwind-merge";

type PropsData = {
  text: string;
  className?: string;
};

export const HeaderText = (props: PropsData) => {
  const { className } = props;
  return (
    <h4 className={twMerge("text-3xl text-gray-600 font-extrabold", className)}>
      {props.text}
    </h4>
  );
};
