import React from 'react';
import { Col, Row, Select } from 'antd';
import CreateIntentComponentStyle from '../CreateIntent/Style';

const ApiParameterDetail = ({
  intentParameter,
  paramMapping,
  handleChangeInApiParameterValue,
  fulfilmentId,
}) => {
  const dataParamForDropdown = [];
  intentParameter &&
    intentParameter.map(singleParam =>
      singleParam.value.paramName !== '' && singleParam.value.botEntity !== null
        ? dataParamForDropdown.push(singleParam)
        : null,
    );

  return (
    <CreateIntentComponentStyle>
      <div className="api-param-detail">
        <Row>
          <Col className="intent-list-title" span={1} />
          <Col className="intent-list-title" span={11}>
            Parameter Name
          </Col>
          <Col className="intent-list-title" span={11}>
            Value
          </Col>
          <Col className="intent-list-title" span={1} />
        </Row>
        {console.log('paramMapping ++++++++++++++++++++++++++', paramMapping)}
        {/* data */}
        {paramMapping &&
          paramMapping.map(singleParam => (
            <Row>
              <Col className="api-data" span={1} />
              <Col className="api-data" span={11}>
                {singleParam.value.name}
              </Col>
              <Col className="api-data" span={11}>
                <Select
                  placeholder="Intent Parameter"
                  showSearch
                  showArrow
                  value={
                    singleParam.value.value !== '' ? (
                      singleParam.value.value
                    ) : (
                      <span style={{ color: '#dfdfdf' }}>Intent Parameter</span>
                    )
                  }
                  onChange={e => {
                    handleChangeInApiParameterValue(
                      fulfilmentId,
                      singleParam.id,
                      singleParam.value.name,
                      e,
                    );
                  }}
                  style={{
                    border: 'none !important',
                    fontSize: '15px',
                    color: '#333',
                    width: '100%',
                    height: 23,
                  }}
                >
                  {dataParamForDropdown.length > 0 &&
                    dataParamForDropdown.map(singleIntent => (
                      <Select.Option value={singleIntent.value.paramName}>
                        {singleIntent.value.paramName}
                      </Select.Option>
                    ))}
                </Select>
              </Col>
              <Col className="api-data" span={1} />
            </Row>
          ))}
      </div>
    </CreateIntentComponentStyle>
  );
};

export default ApiParameterDetail;
