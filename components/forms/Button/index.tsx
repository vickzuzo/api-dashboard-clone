import { forwardRef } from "react";

interface ButtonOptions {
  isLoading?: boolean;
}
export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  ButtonOptions;

export const Button = (props: ButtonProps) => {
  const { type = "button", children, ...rest } = props;
  return (
    <button
      className={`bg-blue-500 hover:bg-blue-700 w-full py-3 flex items-center justify-center rounded ${
        props.disabled
          ? "bg-blue_fade hover:bg-blue_fade cursor-not-allowed"
          : ""
      } ${props.className}`}
      {...rest}
    >
      <p
        className={`text-sm text-white ${
          props.disabled ? "!text-gray-300" : ""
        }`}
      >
        {children}
      </p>
    </button>
  );
};

export const PaleButton = (props: ButtonProps) => {
  const { type = "button", children, ...rest } = props;
  return (
    <button
      className={`bg-white shadow hover:bg-blue-400 group w-full py-3 flex items-center justify-center rounded ${
        props.disabled
          ? "bg-blue_fade hover:bg-blue_fade cursor-not-allowed"
          : ""
      } ${props.className}`}
      {...rest}
    >
      <p
        className={`text-sm text-blue-500 group-hover:text-white ${
          props.disabled ? "!text-gray-300" : ""
        }`}
      >
        {children}
      </p>
    </button>
  );
};

export const DangerButton = (props: ButtonProps) => {
  const { type = "button", children, ...rest } = props;
  return (
    <button
      className={`bg-red-500 shadow hover:bg-blue-700 w-full py-3 flex items-center justify-center rounded ${
        props.disabled
          ? "bg-blue_fade hover:bg-blue_fade cursor-not-allowed"
          : ""
      } ${props.className}`}
      {...rest}
    >
      <p
        className={`text-sm text-white ${
          props.disabled ? "!text-gray-300" : ""
        }`}
      >
        {children}
      </p>
    </button>
  );
};

export const DangerPaleButton = (props: ButtonProps) => {
  const { type = "button", children, ...rest } = props;
  return (
    <button
      className={`bg-white shadow hover:bg-red-700 group w-full py-3 flex items-center justify-center rounded ${
        props.disabled ? "bg-red-200 hover:bg-red-200 cursor-not-allowed" : ""
      } ${props.className}`}
      {...rest}
    >
      <p
        className={`text-sm text-red-500 group-hover:text-white ${
          props.disabled ? "!text-gray-500" : ""
        }`}
      >
        {children}
      </p>
    </button>
  );
};
