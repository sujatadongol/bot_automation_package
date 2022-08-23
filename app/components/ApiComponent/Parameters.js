import React from 'react';
import { Col, Row, Select } from 'antd';
import add from '../../assets/addIntentIcon.svg';
import remove from '../../assets/remove.svg';

const Parameters = ({
  parameterData,
  addParameter,
  removeParameter,
  handleChangeInParameter,
}) => {
  const openParameterData = () => {
    const div = [];
    // Outer loop to create parent
    parameterData &&
      parameterData.map((single, index) => {
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
                    handleChangeInParameter(single.id, 'key', e.target.value);
                  }}
                />
              </Col>
              <Col
                span={3}
                className={'api-title'}
                style={{ paddingRight: '20px' }}
              >
                {' '}
                <Select
                  value={single.value.type}
                  placeholder={'Type'}
                  className={'api-input'}
                  style={{ border: 'none', paddingLeft: 0 }}
                  onChange={e => {
                    handleChangeInParameter(single.id, 'type', e);
                  }}
                >
                  <Select.Option value="FIX">Static</Select.Option>
                  <Select.Option value="RESOLVE">Dynamic</Select.Option>
                </Select>
              </Col>
              <Col span={5} className={'api-title'}>
                <input
                  disabled={single.value.type === 'RESOLVE'}
                  value={
                    single.value.type === 'RESOLVE'
                      ? '$resolve.value'
                      : single.value.value
                  }
                  className={'api-input'}
                  placeholder={'Value'}
                  onChange={e => {
                    handleChangeInParameter(single.id, 'value', e.target.value);
                  }}
                  style={
                    single.value.type === 'RESOLVE'
                      ? { color: '#979797', cursor: 'initial' }
                      : null
                  }
                />
              </Col>

              <img
                hidden={parameterData.length === 1}
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
                  removeParameter(single.id);
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
      <div className={'main-title'}>Parameters</div>
      <Row>
        <Col span={5} className={'api-title'} style={{ paddingRight: '20px' }}>
          Key
        </Col>
        <Col span={3} className={'api-title'} style={{ paddingRight: '20px' }}>
          Type
        </Col>
        <Col span={5} className={'api-title'}>
          Value
        </Col>
      </Row>
      {openParameterData()}
      <div>
        <button
          className={'add-button'}
          onClick={addParameter}
          style={{ paddingTop: 0 }}
        >
          <img src={add} style={{ marginRight: '5px' }} /> Add Parameter
        </button>
      </div>
    </>
  );
};
export default Parameters;
