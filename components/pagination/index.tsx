import React from "react";
import {
  ChevronLeftIcon2,
  ChevronRightIcon,
  ChevronRightIcon2,
} from "../icons";
import { twMerge } from "tailwind-merge";

interface IProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<IProps> = ({
  currentPage,
  totalPages,
  itemsPerPage,
  totalItems,
  onPageChange,
}) => {
  return (
    <div className="flex items-center justify-between my-4">
      <div className="text-xs text-gray-400">
        Showing {currentPage * itemsPerPage - itemsPerPage + 1}-
        {Math.min(currentPage * itemsPerPage, totalItems)} of {totalItems}
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={twMerge(
            "bg-gray-500 hover:bg-gray-700 text-white w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer",
            currentPage === 1 ? "cursor-not-allowed opacity-20 text-black" : ""
          )}
        >
          <ChevronLeftIcon2 />
        </button>
        <span className='bg-gray-500 px-3 h-10 rounded-lg flex items-center justify-center text-xs text-white'>
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={twMerge(
            "bg-gray-500 hover:bg-gray-700 text-white w-10 h-10 flex items-center justify-center rounded-lg cursor-pointer",
            currentPage === totalPages ? "cursor-not-allowed opacity-20 text-black" : ""
          )}
        >
          <ChevronRightIcon2 />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
