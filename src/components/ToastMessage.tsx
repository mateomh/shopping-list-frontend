import React, { useEffect, useState } from 'react';
import { ToastContainer } from './ToastMessage/StyledComponents';

interface ToastProps {
  message: string;
  isVisible: boolean;
}

const ToastMessage:React.FC<ToastProps> = ({
  message,
  isVisible,
}) => {
  const [visible, setVisible] = useState(false);

  useEffect(()=>{
    if(isVisible){
      setVisible(true);
      setTimeout(() => setVisible(false), 5000);
    }
  },[isVisible]);

  return (
    <>
    { 
      visible && (
        <ToastContainer>
          {message}
        </ToastContainer>
      )
    }
    </>
  )
}

export default ToastMessage