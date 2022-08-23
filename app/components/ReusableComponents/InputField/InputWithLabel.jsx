import React from "react";
import {  InputStyle } from "./Style";

export const InputWithLabel=({title,inputValue,onInputChange,marginBottom,autoFocus,isRequired,placeholder,inputType,inputStyle}) =>{ 
    return <InputStyle marginBottom={marginBottom}>
      <div className="title">{title} 
      {isRequired && <div className="required-field">
       * 
        </div>}
      </div>
      <input value={inputValue} onChange={onInputChange} autoFocus={autoFocus} placeholder={placeholder} type={inputType || 'text'} style={inputStyle}/>
    </InputStyle>;
  }