import React from 'react'
type PropsData = {
    text: string
}
  
export const SubHeaderText = (props: PropsData) => {
  return (
    <h4 className="text-lg text-blue-600 font-bold">{props.text}</h4>
  )
}

export default SubHeaderText