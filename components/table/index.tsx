import React from "react";
import { twMerge } from "tailwind-merge";
import StatusPill from "../Pills/StatusPill";

interface ITableChildProps {
  children: React.ReactNode;
  className?: string;
}

export const TableHead = ({ children, className }: ITableChildProps) => {
  return (
    <th className={twMerge("p-2 text-xs font-bold text-left", className)}>
      {children}
    </th>
  );
};

export const TableData = ({ children, className }: ITableChildProps) => {
  return <td className={twMerge("p-2 text-xs", className)}>{children}</td>;
};

export const TableRow = ({
  children,
  className,
}: ITableChildProps & { children: React.ReactNode[] }) => {
  return (
    <tr
      className={twMerge("border-b border-dashed border-gray-300", className)}
    >
      {children}
    </tr>
  );
};

const Table = ({ tableHeader, tableBody }) => (
  <table className="border-collapse w-full">
    <thead>{tableHeader}</thead>
    <tbody>{tableBody}</tbody>
  </table>
);

export default Table;
