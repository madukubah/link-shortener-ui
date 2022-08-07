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
import {VisitorChart} from '@modules/link';


interface ModalContentProps {
  onSetToggle?: any;
  name?: string;
  onSubmit?: () => void;
  content?: any;
  isLoading?: boolean;
}

const ModalContent = ({isLoading, onSetToggle, name, content, short}: any ) => {
  const [_isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(isLoading);
  }, [_isLoading, isLoading]);

  return ReactDOM.createPortal(
    <>
      <div className="modal fade show" id="modal-xl" style={{display: 'block'}} >
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{name}</h4>
              <button type="button" className="close" aria-label="Close" onClick={()=>onSetToggle(false)} >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body overflow-auto">
              <div className="row">
                <div className="col-6">
                  {content}
                </div>
                <div className="col-6">
                  <VisitorChart short={short} />
                </div>
              </div>
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
