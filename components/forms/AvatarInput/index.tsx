import { useField } from "formik";
import React, { useState } from "react";
import useBreakpointValue from "../../../utils/useBreakpointValue";
import Image, { StaticImageData } from "next/image";
import { Modal } from "../../modals";
import Avatar from "react-avatar-edit";
import { Button, DangerPaleButton } from "../Button";
import image from "../../../public/assets/profile.png" 

interface IProps {
  className?: string;
  onChange?: (event: any) => void;
}

const convertToString = (image) => {
  return image as string;
}
export const AvatarInput = ({
  className,
  onChange
}: IProps) => {
  
  const [temp, setTemp] = useState({
    preview: null,
    src: image 
  })
  const onClose = () => {
    setTemp(prevState => ({
      ...prevState,
      preview: null,
    }))
    console.log(temp);
  }
  
  const onCrop = (preview) =>  {
    setTemp(prevState => ({
      ...prevState,
      preview: preview,
    }))
    console.log(temp);
    
  }

  const onBeforeFileLoad = (elem) =>  {
    if(elem.target.files[0].size > 71680){
      alert("File is too big!");
      elem.target.value = "";
    };
  }

  return (
    <div className={`my-4 ${className}`}>
      <div className="w-full bg-blue_fade p-2 rounded-md flex items-center gap-3 py-4">
        <Avatar
            width={390}
            height={295}
            onCrop={onCrop}
            onClose={onClose}
            onBeforeFileLoad={onBeforeFileLoad}
            src={convertToString(temp.src)}
          />
        <Image 
          style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            objectFit: 'cover',
            border: '1px solid gray',
          }}
          width={'100'}
          height={'100'}
          src={convertToString(temp.preview)}
          alt="Avatar"
        />
      </div>
    </div>
  );
};
