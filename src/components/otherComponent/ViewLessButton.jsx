import React from 'react'

function ViewLessButton({onClick}) {
  return (
    <span
    className= "text-sm text-blue-500 hover:underline cursor-pointer" 
    onClick={onClick}
  >
    ...View less
  </span>
  )
}

export default ViewLessButton