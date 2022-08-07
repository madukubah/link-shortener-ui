/* eslint-disable no-unused-vars */
/* eslint-disable  react/button-has-type */
/* eslint-disable  prettier/prettier */
/* eslint-disable  import/newline-after-import */
/* eslint-disable  react/no-unused-prop-types */
/* eslint-disable  react/no-unused-state */
/* eslint-disable  react/state-in-constructor */
/* eslint-disable  jsx-a11y/label-has-associated-control */
/* eslint-disable  react/no-array-index-key */
/* eslint-disable  no-console */
/* eslint-disable  prefer-const */
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {ModalContent, Form} from '@components';
import {useMutation, useQuery} from "react-query";
import {createLink} from '@app/services/link';
import queryClient from '@app/utils/clientProvider';
import {toast} from 'react-toastify';
export interface GenerateLinkProps {
  GenerateLinkItems?: any[];
  onChangeValue?: (i:number, value: any) => void;
}
let formItems = [
  {
    id: 'redirect',
    name: 'Link',
    type: 'text',
    value: '',
  }, 
]
const GenerateLink = () => {
  const user = useSelector((state: any) => state.auth.currentUser);
  const [isLoading, setIsLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  
  const addLink = useMutation(createLink, {
    onError: (error: any) => {
      toast.error(error.message || 'Failed');
      setIsLoading(false);
    },
    onSuccess: (data) => {
      toast.success('Link Created!');
      setIsLoading(false);
      setToggle(false);
      queryClient.invalidateQueries();
    },
  });
  const handleOnSubmit = (formItems: any) => {
    let payload = {
      username:user.email
    };
    formItems.map((val: any)=>{
      payload[val.id] = val.value;
      return val;
    });
    addLink.mutate(payload);
  };
  return (
    <>
      {toggle?
        <ModalContent 
          name="Generate Link" 
          content={
            <Form 
              onChangeValue={(index, value)=>{
                formItems[index].value = value;
              }}
              formItems={formItems}
            />} 
          onSetToggle={()=>{
            setToggle(!toggle)
          }} 
          onSubmit={()=> handleOnSubmit(formItems)} 
          isLoading={isLoading}/>
        :null}
      <button className='btn btn-block btn-primary' onClick={()=>setToggle(!toggle)} >Generate Link</button>
      {/* <Modal name="Generate Link" 
        isLoading={isLoading}
        onSubmit={()=>{
          handleOnSubmit(formItems)
          setIsLoading(true);
        }}
        content={
          <Form 
            onChangeValue={(index, value)=>{
              formItems[index].value = value;
            }}
            formItems={formItems}
          />
        } 
      /> */}
    </>
  )
};

export default GenerateLink;
