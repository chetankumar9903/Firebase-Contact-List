import React, { useState } from 'react'


const useDisclouse = () => {
   
    const [isOpen , setopen] = useState(false);
  
    const onOpen=()=>{
      setopen(true);
    }
  
    const onClose=()=>{
      setopen(false)
    }
  return {onClose, onOpen, isOpen};
}

export default useDisclouse
