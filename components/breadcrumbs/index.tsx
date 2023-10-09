import React from "react";
import { ChevronRightIcon } from "../icons";
import { twMerge } from "tailwind-merge";
import { useRouter } from "next/router";
import Link from "next/link";

interface IProps {
  items: {
    title: string;
    to?: string;
    icon?: React.ReactElement;
  }[];
}

export const Breadcrumbs: React.FC<IProps> = ({ items }) => {
  const { pathname } = useRouter();

  return (
    <nav className="flex items-center space-x-2 text-gray-500">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && <ChevronRightIcon />}
          <Link
            href={item?.to}
            className={twMerge(
              "flex items-center gap-2 text-sm cursor-pointer text-black",
              pathname === item.to
                ? "text-gray cursor-not-allowed font-medium"
                : ""
            )}
          >
            <div>{item.icon}</div>
            {item.title}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
};
