import React from 'react'
type PropsData = {
    text: string
}
  
export const SubHeaderText = (props: PropsData) => {
  return (
    <h4 className="text-3xl text-blue-600 font-bold">{props.text}</h4>
  )
}

export default SubHeaderText