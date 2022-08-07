/* eslint-disable no-unused-vars */
/* eslint-disable  react/button-has-type */
/* eslint-disable  prettier/prettier */
/* eslint-disable  import/newline-after-import */
/* eslint-disable  react/no-unused-prop-types */
/* eslint-disable  react/no-unused-state */
/* eslint-disable  react/state-in-constructor */
/* eslint-disable  no-console */
/* eslint-disable  no-underscore-dangle */
/* eslint-disable  prefer-const */
import React, { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import {useMutation} from "react-query";
import {Button, Form} from '@components';
import {deleteLink} from '@app/services/link';
import {toast} from 'react-toastify';
import queryClient from '@app/utils/clientProvider';
import ModalContent from "./ModalContent";

export interface ModalProps {
  name?: string;
  content?: any;
  item?: any;
  onSubmit?: () => void;
  isLoading?: boolean;
}

const Modal = ({name,  item, isLoading}: ModalProps) => {
  const user = useSelector((state: any) => state.auth.currentUser);
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

  const removeLink = useMutation(deleteLink, {
    onError: (error: any) => {
      toast.error(error.message || 'Failed');
      setToggle(false);
    },
    onSuccess: (data) => {
      toast.success('Link Deleted!');
      setToggle(false);
      queryClient.invalidateQueries();
    },
  });

  const handleOnSubmit = () => {
    let payload = {
      username:user.email,
      id:item._id
    };
    removeLink.mutate(payload);
  };

  return (
    <>
      {toggle?
        <ModalContent 
          name={name} onSetToggle={handleToggle} 
          onSubmit={()=> {
            handleOnSubmit()
          }} 
          isLoading={isLoading}
          content={
            <>
              <div className="alert alert-danger">
                    <b >
                        Are You Sure?
                    </b>
                </div>
            </>
          } 
          />:null}
      <Button
          className="btn btn-sm btn-danger"
          type="submit"
          isLoading={false}
          onClick={handleToggle}
        >
          {/* @ts-ignore */}
          <i className="nav-icon fas fa-trash"/>
        </Button>
    </>
  )
};

export default Modal;
