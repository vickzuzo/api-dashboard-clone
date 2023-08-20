import React from "react";

interface PropsData {
  text: string;
}

export const CaptionText = (props: PropsData) => {
  return (
    <div>
      <p className={"text-sm text-gray-600 font-extralight"}>{props.text}</p>
    </div>
  );
};
