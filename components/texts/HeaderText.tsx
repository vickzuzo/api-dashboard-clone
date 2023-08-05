import React from "react";

type PropsData = {
  text: string;
  className?: string;
};

export const HeaderText = (props: PropsData) => {
  return (
    <h4 className={`text-5xl text-blue-600 font-extrabold ${props.className}`}>
      {props.text}
    </h4>
  );
};
