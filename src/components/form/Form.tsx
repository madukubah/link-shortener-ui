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
import React, { useEffect, useState } from 'react';
import FormItem from "./FormItem";

export interface IFormItem {
  id: string;
  name: string;
  type: string;
  readonly?: string;
  className?: string;
  value?: string;

}

export interface FormProps {
  formItems?: any[];
  onChangeValue?: (i:number, value: any) => void;
}

const Form = ({formItems, onChangeValue}:FormProps) => {
  return (
    <>
    {formItems.map((item: IFormItem, key: number)=>{

      return (
        <div key={key}>
          <FormItem formItem={item} onChangeValue={(value)=> onChangeValue(key, value) }/>
        </div>
      );
    })}
    </>
  )
};

export default Form;
