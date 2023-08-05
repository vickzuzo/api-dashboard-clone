import { useField } from "formik";
import React from "react";
import useBreakpointValue from "../../../utils/useBreakpointValue";

interface IProps {
  containerProps?: React.HTMLProps<HTMLDivElement>;
  name: string;
  type?: string;
  label?: string;
  placeholder?: string;
  id?: string;
  RightIcon?: React.ReactElement;
  LeftIcon?: React.ReactElement;
  required?: boolean;
  className?: string;
  disabled?: boolean;
}

export const FormInput = ({
  containerProps,
  label,
  required,
  placeholder,
  disabled,
  className,
  RightIcon,
  LeftIcon,
  ...rest
}: IProps) => {
  const [field, meta] = useField(rest);
  const fontSize = useBreakpointValue({
    base: "16px",
    md: "14px",
  });

  return (
    <div className={`my-4 ${className}`} {...containerProps}>
      {label && (
        <label className="mb-1 text-sm text-[#707070]">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="w-full bg-blue_fade p-2 rounded-md flex items-center gap-3 py-4">
        {LeftIcon ? (
          <div className="border-r border-r-gray-300 px-2">{LeftIcon}</div>
        ) : null}
        <input
          className="outline-none bg-blue_fade border-none focus:ring-0 w-full"
          style={{
            fontSize,
          }}
          placeholder={placeholder}
          disabled={disabled}
          {...field}
          {...rest}
        />
        {RightIcon ? <div className="px-2">{RightIcon}</div> : null}
      </div>
      {meta.touched && meta.error ? (
        <div className="text-xs text-red-500 mt-1">{meta.error}</div>
      ) : null}
    </div>
  );
};
