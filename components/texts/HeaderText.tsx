import React from "react";

type PropsData = {
  text: string;
  color?: string;
  className?: string;
};

export const HeaderText = (props: PropsData) => {
  const color = props.color || "gray";
  return (
    <h4 className={`text-3xl text-${color}-600 font-extrabold ${props.className}`}>
      {props.text}
    </h4>
  );
};
