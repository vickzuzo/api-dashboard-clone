import Image from "next/image";
import React from "react";
import { imageLoader } from "../loaders";

interface PropsData {
  iconOnly?: boolean;
}

export const AppLogo = (props: PropsData) => {
  return (
    <Image
      src={require("../../public/assets/logo_gray.png")}
      alt="API MANAGEMENT LOGO"
      className="w-[15rem]"
    />
  );
};
