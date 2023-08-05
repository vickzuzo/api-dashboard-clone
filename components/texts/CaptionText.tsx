import React from 'react'
type PropsData = {
    text: string
}
  
export const CaptionText = (props: PropsData) => {
  return (
    <p className="text-sm text-gray-600 font-extralight">{props.text}</p>
  )
}
