import React, { useEffect } from 'react';
import { Col, Modal, Row, Select } from 'antd';
import CustomButton from '../../Button/Button';
import FulfilmentStyle from './style';
import closeIcon from '../../../assets/close.svg';
import ApiParameterDetail from '../ApiParameterDetail';
import add from '../../../assets/addIntentIcon.svg';
import remove from '../../../assets/remove.svg';

const CreateFullfilmentModal = ({
  singleFulfilmentId,
  fulfilmentList,
  apiList,
  visibility,
  closeModal,
  saveFulfilment,
  intentParameter,
  handleChangeInFulfilmentData,
  handleChangeInApiParameterValue,
  addResponseInFulfilment,
  removeResponseInFulfilment,
  handleChangeInResponseInFulfilment,
}) => {
  const singleFulfilment =
    fulfilmentList &&
    fulfilmentList.filter(single => single.id === singleFulfilmentId)[0];
  useEffect(() => {
    if (singleFulfilment) {
      // handleChangeInFulfilmentData(singleFulfilment.id, 'selectedApi', {
      //   key: singleFulfilment.value.selectedApi.apiId,
      //   value: singleFulfilment.value.selectedApi.apiName,
      //   children: singleFulfilment.value.selectedApi.apiName,
      // });
    }
  }, [singleFulfilment]);

  const isResponseEmpty =
    singleFulfilment &&
    singleFulfilment.value.response.length === 1 &&
    (singleFulfilment.value.response[0].value.name === '' ||
      singleFulfilment.value.response[0].value.key === '');
  const value =
    (singleFulfilment && singleFulfilment.value.fulfilmentName === '') ||
    (singleFulfilment && singleFulfilment.value.selectedApi.apiName === '') ||
    isResponseEmpty;

  return (
    <Modal
      icon
      centered
      visible={visibility}
      footer={null}
      onCancel={closeModal}
      //   closable={false}
      title={'Add Fullfilment'}
      width={560}
      bodyStyle={{ maxHeight: '700px', overflow: 'auto' }}
      maskClosable={false}
    >
      <FulfilmentStyle>
        <div>
          {/* <div className="add-header">
            Add Fulfilment
            <img
              src={closeIcon}
              alt="closeIcon"
              onClick={closeModal}
              style={{
                marginTop: '-20px',
                float: 'right',
                marginRight: '-6px',
                cursor: 'pointer',
              }}
            />
          </div> */}
          <Row>
            <Col span={24}>
              <div style={{ color: '#333' }}>Name</div>
              <input
                className="input-data"
                value={
                  singleFulfilment && singleFulfilment.value.fulfilmentName
                }
                onChange={e => {
                  handleChangeInFulfilmentData(
                    singleFulfilment.id,
                    'fulfilmentName',
                    e.target.value,
                  );
                }}
              />
            </Col>
            <Col span={24}>
              <div style={{ color: '#333' }}>Select Api</div>
              <Select
                placeholder="Entity"
                showSearch
                showArrow
                value={
                  singleFulfilment && singleFulfilment.value.selectedApi.apiName
                }
                onChange={(e, value) => {
                  handleChangeInFulfilmentData(
                    singleFulfilment.id,
                    'selectedApi',
                    value,
                  );
                }}
                style={{
                  border: 'none !important',
                  fontSize: '15px',
                  color: '#333',
                  width: '100%',
                }}
              >
                {apiList &&
                  apiList.map(singleApi => (
                    <Select.Option
                      key={singleApi.apiId}
                      value={singleApi.title}
                    >
                      {singleApi.title}
                    </Select.Option>
                  ))}
              </Select>
            </Col>

            {singleFulfilment &&
              singleFulfilment.value.paramMapping.length > 0 && (
                <Col span={24}>
                  <ApiParameterDetail
                    intentParameter={intentParameter}
                    paramMapping={singleFulfilment.value.paramMapping}
                    fulfilmentId={singleFulfilment.id}
                    handleChangeInApiParameterValue={
                      handleChangeInApiParameterValue
                    }
                  />
                </Col>
              )}

            <Col span={24}>
              <div style={{ width: '100%', marginTop: '12px', color: '#333' }}>
                Response
              </div>
              <div style={{ display: 'flex' }}>
                <div
                  className="col-6"
                  style={{ marginRight: '5px', padding: 0 }}
                >
                  <div>Name</div>
                </div>
                <div
                  className="col-6"
                  style={{ marginLeft: '5px', padding: '0 10px 0 0' }}
                >
                  <div>Key</div>
                </div>
              </div>
              <div>
                {singleFulfilment &&
                  singleFulfilment.value.response.map(singleResponseValue => (
                    <div style={{ display: 'flex', marginRight: '12px' }}>
                      <div
                        className="col-6"
                        style={{ marginRight: '5px', padding: 0 }}
                      >
                        <input
                          className="input-data"
                          value={singleResponseValue.value.name}
                          onChange={e => {
                            handleChangeInResponseInFulfilment(
                              singleFulfilment.id,
                              singleResponseValue.id,
                              'name',
                              e.target.value,
                            );
                          }}
                        />
                      </div>
                      <div
                        className="col-6"
                        style={{
                          marginLeft: '5px',
                          padding: '0',
                          display: 'flex',
                        }}
                      >
                        <input
                          className="input-data"
                          value={singleResponseValue.value.key}
                          onChange={e => {
                            handleChangeInResponseInFulfilment(
                              singleFulfilment.id,
                              singleResponseValue.id,
                              'key',
                              e.target.value,
                            );
                          }}
                        />
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            height: '38px',
                            cursor: 'pointer',
                            marginLeft: '6px',
                          }}
                          hidden={singleFulfilment.value.response.length === 1}
                          onClick={() =>
                            removeResponseInFulfilment(
                              singleFulfilment.id,
                              singleResponseValue.id,
                            )
                          }
                        >
                          <img width={14} height={14} src={remove} />
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
              <div>
                <button
                  className="add-button"
                  onClick={() => {
                    addResponseInFulfilment(singleFulfilment.id);
                  }}
                >
                  <img
                    src={add}
                    style={{
                      marginRight: '5px',
                      width: '12px',
                      height: '12px',
                    }}
                  />
                  Add Response
                </button>
              </div>
            </Col>
          </Row>

          <div className="save-button">
            <div className="col-3">
              <CustomButton
                disabled={value}
                primary
                size="large"
                className="mt-4 mb-2"
                clicked={() => {
                  saveFulfilment(singleFulfilmentId);
                  closeModal();
                }}
                style={
                  value
                    ? {
                        width: '96px',
                        borderRadius: '5px',
                        cursor: 'auto',
                        background: 'rgb(132, 148, 247)',
                        color: '#fff',
                        border: '1px solid rgb(132, 148, 247)',
                      }
                    : { width: '96px', borderRadius: '5px' }
                }
              >
                Add
              </CustomButton>
            </div>
          </div>
        </div>
      </FulfilmentStyle>
    </Modal>
  );
};
export default CreateFullfilmentModal;
