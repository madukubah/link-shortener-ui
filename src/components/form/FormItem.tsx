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
import Button, {ButtonProps} from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import ReactDOM from "react-dom";

export interface IFormItem {
  id: string;
  name: string;
  type: string;
  readonly?: string;
  className?: string;
  value?: string;

}

export interface FormProps {
  formItem: IFormItem;
  onChangeValue?: (value: any) => void;
}

const FormItem = ({formItem, onChangeValue}:FormProps) => {
  const [value, setValue] = useState('');
  const handleFormItem = (e: any) => {
    setValue(e.target.value);
    onChangeValue(e.target.value);
  };

  useEffect(() => {
    setValue(formItem.value);
  }, [value, formItem]);

  return (
    <>
    <div className="form-group">
      <label >{formItem.name}</label>
      <input onChange={(e)=>handleFormItem(e)} type={formItem.type} className={`form-control ${formItem.className}`} id={formItem.id} value={value}/>
    </div>
    </>
  )
};

export default FormItem;
