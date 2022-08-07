/* eslint-disable no-unused-vars */
/* eslint-disable  react/button-has-type */
/* eslint-disable  prettier/prettier */
/* eslint-disable  import/newline-after-import */
/* eslint-disable  react/no-unused-prop-types */
/* eslint-disable  react/no-unused-state */
/* eslint-disable  react/state-in-constructor */
/* eslint-disable  react/jsx-boolean-value */

import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import ReactDOM from "react-dom";
import {Button} from '@components';


interface ModalContentProps {
  onSetToggle?: any;
  name?: string;
  onSubmit?: () => void;
  content?: any;
  isLoading?: boolean;
}

const ModalContent = ({isLoading, onSetToggle, name, content, onSubmit}: ModalContentProps ) => {
  const [_isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(isLoading);
  }, [_isLoading, isLoading]);

  return ReactDOM.createPortal(
    <>
      <div className="modal fade show" id="modal-default" style={{display: 'block'}} >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{name}</h4>
              <button type="button" className="close" aria-label="Close" onClick={()=>onSetToggle(false)} >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              {content}
            </div>
            <div className="modal-footer justify-content-between">
              <button type="button" className="btn btn-default" onClick={()=>onSetToggle(false)}>Close</button>
              <Button
                  className="btn btn-danger"
                  type="submit"
                  isLoading={_isLoading}
                  onClick={()=> onSubmit()}
                >
                  {/* @ts-ignore */}
                  Ok
                </Button>
              {/* <button type="button" className="btn btn-primary" onClick={()=> onSubmit()}>Save</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
    ,
    document.getElementById("modal-root")
  );
};

export default ModalContent;
