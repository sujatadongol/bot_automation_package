import React from 'react';
import { Col, Row } from 'antd';
import remove from '../../assets/remove.svg';
import add from '../../assets/addIntentIcon.svg';

const Headers = ({ header, addHeader, removeHeader, handleChangeInHeader }) => {
  const openHeaderData = () => {
    const div = [];
    // Outer loop to create parent

    header &&
      header.map((single, index) => {
        return div.push(
          <div>
            <Row>
              <Col
                span={5}
                className={'api-title'}
                style={{ paddingRight: '20px' }}
              >
                <input
                  value={single.value.key}
                  className={'api-input'}
                  placeholder={'Key'}
                  onChange={e => {
                    handleChangeInHeader(single.id, 'key', e.target.value);
                  }}
                />
              </Col>
              <Col span={5} className={'api-title'}>
                <input
                  value={single.value.value}
                  className={'api-input'}
                  placeholder={'Value'}
                  onChange={e => {
                    handleChangeInHeader(single.id, 'value', e.target.value);
                  }}
                />
              </Col>
              <img
                hidden={header.length === 1}
                id={single.id}
                src={remove}
                style={{
                  height: '18px',
                  cursor: 'pointer',
                  marginLeft: '10px',
                  marginTop: '10px',
                  width: '18px',
                }}
                onClick={e => {
                  e.preventDefault();
                  removeHeader(single.id);
                }}
              />
            </Row>
          </div>,
        );
      });
    return div;
  };
  return (
    <>
      <div className={'main-title'}>Headers</div>
      <Row>
        <Col span={5} className={'api-title'} style={{ paddingRight: '20px' }}>
          Key
        </Col>
        <Col span={5} className={'api-title'}>
          Value
        </Col>
      </Row>
      {openHeaderData()}
      <div>
        <button
          className={'add-button'}
          onClick={addHeader}
          style={{ paddingTop: 0 }}
        >
          <img src={add} style={{ marginRight: '5px' }} /> Add Header
        </button>
      </div>
    </>
  );
};
export default Headers;
