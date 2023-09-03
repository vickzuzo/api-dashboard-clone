import { useField } from "formik";
import React from "react";
import useBreakpointValue from "../../../utils/useBreakpointValue";
import { twMerge } from "tailwind-merge";

interface IProps {
  containerProps?: React.HTMLProps<HTMLDivElement>;
  name: string;
  type?: string;
  label?: string;
  subtitle?: string;
  labelClassName?: string;
  placeholder?: string;
  id?: string;
  RightIcon?: React.ReactElement;
  LeftIcon?: React.ReactElement;
  required?: boolean;
  className?: string;
  disabled?: boolean;
  options?: {
    value: string;
    label: string;
  }[];
}

export const FormSelect = ({
  containerProps,
  label,
  required,
  placeholder,
  disabled,
  className,
  RightIcon,
  LeftIcon,
  labelClassName,
  options,
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
        <label
          className={twMerge("mb-2 text-sm text-[#707070]", labelClassName)}
        >
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      {rest?.subtitle && (
        <label className={twMerge("mb-4 text-sm text-gray-400 block")}>
          {rest?.subtitle}
        </label>
      )}
      <div className="w-full bg-blue_fade p-2 rounded-md flex items-center gap-3 py-4">
        {LeftIcon ? (
          <div className="border-r border-r-gray-300 px-2">{LeftIcon}</div>
        ) : null}
        <select
          className={twMerge(
            "outline-none bg-blue_fade border-none focus:ring-0 w-full",
            field.value ? "text-black" : "text-gray-400"
          )}
          style={{
            fontSize,
          }}
          placeholder={placeholder}
          disabled={disabled}
          {...field}
          {...rest}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {RightIcon ? <div className="px-2">{RightIcon}</div> : null}
      </div>
      {meta.touched && meta.error ? (
        <div className="text-xs text-red-500 mt-1">{meta.error}</div>
      ) : null}
    </div>
  );
};
