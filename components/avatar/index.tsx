import Image from "next/image";
import React from "react";
import { getInitials } from "../../utils";

interface IProps {
  images: string[];
  number: number;
}

export const AvatarGroup: React.FC<IProps> = ({ number = 3, images }) => {
  // Slice the imageSources array to get the specified number of images
  const visibleImages = images.slice(0, number);

  // Calculate the count of remaining images
  const remainingCount = Math.max(0, images.length - number);
  return (
    <div className="flex -space-x-1 overflow-hidden">
      {visibleImages.map((src, index) => (
        <Image
          key={index}
          width={20}
          height={20}
          className="inline-block h-6 w-6 rounded-full ring-2 ring-white"
          src={src}
          alt=""
        />
      ))}
      {remainingCount > 0 && (
        <div className="h-6 w-6 rounded-full ring-2 ring-white flex items-center justify-center bg-blue-500 text-white text-xs">
          +{remainingCount}
        </div>
      )}
    </div>
  );
};

interface AvatarProps {
  src: string;
  alt?: string;
  name?: string;
  size?: "sm" | "md" | "lg" | number;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, size, name }) => (
  <div className={``}>
    {src ? (
      <Image
        src={src}
        alt={alt || "Avatar"}
        className="rounded-full"
        width={
          size === "sm" ? 20 : size === "md" ? 40 : size === "lg" ? 80 : size
        }
        height={
          size === "sm" ? 20 : size === "md" ? 40 : size === "lg" ? 80 : size
        }
      />
    ) : (
      <span className="text-xl font-semibold">{getInitials(name)}</span>
    )}
  </div>
);
