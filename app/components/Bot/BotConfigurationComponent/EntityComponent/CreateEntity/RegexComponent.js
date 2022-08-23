import React from 'react';
import remove from '../../../../../assets/intentRemove.svg';
import { Input } from 'antd';

const RegexComponent = ({ regex, handleChangeRegex, removeRegex }) => {
  const openRegex = () => {
    const div = [];
    // Outer loop to create parent
    regex &&
      regex.map((single, index) => {
        return div.push(
          <>
            <Input
              value={single.value}
              style={index === 0 ? { height: 37 } : { height: 37,borderTop:'none'}}
              onChange={e => {
                handleChangeRegex(single.id, e.target.value);
              }}
              suffix={
                <img
                  hidden={regex.length === 1}
                  id={single.id}
                  src={remove}
                  style={{
                    height: 'fit-content',
                    marginTop: '5px',
                    cursor: 'pointer',
                    marginLeft: '5px',
                  }}
                  onClick={e => {
                    e.preventDefault();
                    removeRegex(single.id);
                  }}
                />
              }
            />
          </>,
        );
      });
    return div;
  };

  return <>{openRegex()}</>;
};
export default RegexComponent;
