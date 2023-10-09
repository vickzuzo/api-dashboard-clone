import React, { FC } from "react";
import {
  VCardChequeIcon,
  VCardMasterCard,
  VCardVisaBlue,
  VCardVisaRed,
  VCardWireCard,
} from "./icons";

interface IProps {
  channel?: "cheque" | "visa" | "wire" | "mastercard";
}

export const PaymentChannel: FC<IProps> = ({ channel }) => {
  const isVisa = channel === "visa";

  const images = [<VCardVisaBlue key="1" />, <VCardVisaRed key="2" />];

  const randomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    console.log(randomIndex);
    return randomIndex;
  };

  return (
    <div>
      <div className="flex items-center gap-3">
        {channel === "cheque" ? (
          <VCardChequeIcon />
        ) : isVisa ? (
          images[randomImage()]
        ) : channel === "mastercard" ? (
          <VCardMasterCard />
        ) : channel === "wire" ? (
          <VCardWireCard />
        ) : null}
        <p>
          {channel === "cheque"
            ? "cheque"
            : channel === "mastercard"
            ? "Credit Card"
            : channel === "visa"
            ? "Credit Card"
            : channel === "wire"
            ? "Wire Transfer"
            : null}
        </p>
      </div>
    </div>
  );
};
