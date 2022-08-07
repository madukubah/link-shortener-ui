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
import React, { useEffect, useState } from 'react';
import {Modal, Form} from '@components';

export interface GenerateLinkProps {
  GenerateLinkItems?: any[];
  onChangeValue?: (i:number, value: any) => void;
}
let formItems = [
  {
    id: 'link',
    name: 'Link',
    type: 'text',
    value: '',
  }, 
]
const GenerateLink = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <Modal name="Generate Link" 
        isLoading={isLoading}
        onSubmit={()=>{
          console.log(formItems);
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
      />
    </>
  )
};

export default GenerateLink;
