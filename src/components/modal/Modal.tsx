/* eslint-disable no-unused-vars */
/* eslint-disable  react/button-has-type */
/* eslint-disable  prettier/prettier */
/* eslint-disable  import/newline-after-import */
/* eslint-disable  react/no-unused-prop-types */
/* eslint-disable  react/no-unused-state */
/* eslint-disable  react/state-in-constructor */
/* eslint-disable  no-console */
import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import ReactDOM from "react-dom";
import ModalContent from "./ModalContent";

export interface ModalProps {
  name?: string;
  content?: any;
  onSubmit?: () => void;
  isLoading?: boolean;
}

const Modal = ({name, content, onSubmit, isLoading}: ModalProps) => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      {toggle?<ModalContent name={name} content={content} onSetToggle={handleToggle} onSubmit={()=> onSubmit()} isLoading={isLoading}/>:null}
      <button className='btn btn-block btn-primary' onClick={handleToggle} >{name}</button>
    </>
  )
};

export default Modal;
