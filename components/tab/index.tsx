import React, { ReactNode, useState } from "react";
import { twMerge } from "tailwind-merge";

interface TabItemProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  className?: string;
  children?: any;
}

export const Tab = ({
  label,
  active,
  onClick,
  className,
  children,
}: TabItemProps) => {
  return (
    <button
      className={twMerge(
        "border-b-2 border-transparent pb-2 text-sm",
        active ? "border-blue-500 text-blue-500 font-bold" : "border-none text-gray-300",
        "hover:border-blue-500 focus:outline-none",
        className
      )}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

interface TabPanelProps {
  children: ReactNode;
  active: boolean;
}

export const TabPanel = ({ children, active }: TabPanelProps) =>
  active ? <div className="py-4">{children}</div> : null;

interface TabProps {
  children: any;
  tabItemClassName?: string;
}

export const Tabs = ({ children, tabItemClassName }: TabProps) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className="flex space-x-4 border-b border-b-gray-300">
        {React.Children.map(children, (child, index) => (
          <Tab
            label={child.props.label}
            active={index === activeTab}
            onClick={() => setActiveTab(index)}
          />
        ))}
      </div>
      {React.Children.map(children, (child, index) => (
        <TabPanel active={index === activeTab}>{child?.props.children}</TabPanel>
      ))}
    </div>
  );
};
