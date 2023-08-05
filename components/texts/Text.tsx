import React from 'react'
type PropsData = {
    text: string
}
  
export const Text = (props: PropsData) => {
  return (
    <p className="text-md text-gray-600">{props.text}</p>
  )
}