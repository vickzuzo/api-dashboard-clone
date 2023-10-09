import React, { useState } from "react";

const Switch = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <label className="flex items-center cursor-pointer">
      <div className="relative">
        <input
          type="checkbox"
          className="sr-only"
          checked={isChecked}
          onChange={handleToggle}
        />
        <div className="w-12 h-7 bg-blue-200 rounded-full shadow-inner"></div>
        <div
          className={`absolute w-5 h-5 bg-blue-500 rounded-full shadow inset-y-1 left-1 ${
            isChecked ? "translate-x-5" : "translate-x-0"
          }`}
        ></div>
      </div>
    </label>
  );
};

export default Switch;
