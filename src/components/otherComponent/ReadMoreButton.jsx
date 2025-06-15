import React from 'react'

function ReadMoreButton({onClick}) {
 
  return (
    <span
    className= "text-sm text-blue-500 hover:underline cursor-pointer" 
    onClick={onClick}
  >
    Read more...
  </span>
  );
};

export default ReadMoreButton