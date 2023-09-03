import React from 'react'
type PropsData = {
    text: string
}
  
export const SubHeaderText = (props: PropsData) => {
  return (
    <h4 className="text-xl text-gray-800 font-bold">{props.text}</h4>
  )
}

export default SubHeaderText