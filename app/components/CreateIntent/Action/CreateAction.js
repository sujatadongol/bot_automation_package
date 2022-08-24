import React, { useEffect } from 'react';
import { Col, Modal, Row, Select, Input } from 'antd';
import CustomButton from '../../ReusableComponents/Button/Button';
import './Style.css';
import ApiParameterDetail from './ApiParameterDetail';

const CreateActionModal = ({
  addAction,
  objToAddAction,
  actionType,
  singleActionId,
  actionList,
  apiList,
  visibility,
  closeModal,
  saveAction,
  intentParameter,
  handleChangeInActionData,
  handleChangeInApiParameterValue,
}) => {
  useEffect(() => {}, []);
  const singleAction =
    actionList && actionList.filter(single => single.id === singleActionId)[0];

  const value =
    (singleAction && singleAction.value.actionName === '') ||
    (singleAction && singleAction.value.actionType === '');
  // (singleAction && singleAction.value.selectedApi.apiName === '');
  return (
    <Modal
      icon
      centered
      visible={visibility}
      footer={null}
      onCancel={closeModal}
      closable={false}
      width={560}
      bodyStyle={{ maxHeight: '700px', overflow: 'auto' }}
    >
      <div>
        <div className={'add-header'}>
          Save Action
          <div onClick={closeModal} className="modal-close-cross-icon ">
            <svg
              width="12"
              height="12"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 3.01429L18.9857 1L11 8.98571L3.01429 1L1 3.01429L8.98571 11L1 18.9857L3.01429 21L11 13.0143L18.9857 21L21 18.9857L13.0143 11L21 3.01429Z"
                fill="black"
                stroke="black"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <Row>
          <Col span={24}>
            <div style={{ color: '#333' }}>Name</div>
            <Input
              className={'input-data'}
              value={objToAddAction && objToAddAction.actionName}
              onChange={e =>
                handleChangeInActionData('actionName', e.target.value)
              }
            />
          </Col>
          <Col span={24}>
            <div style={{ color: '#333' }}>Action</div>
            <Select
              placeholder={'Action Type'}
              showSearch
              optionFilterProp="key"
              filterOption={(input, option) =>
                option.props.key.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
              showArrow={true}
              value={objToAddAction.actionType}
              onChange={(e, value) => {
                handleChangeInActionData('actionType', e);
              }}
              style={{
                border: 'none !important',
                fontSize: '15px',
                color: '#333',
                width: '100%',
                marginBottom: '10px',
              }}
            >
              <Select.Option key="Api Call" value="1">
                Api Call
              </Select.Option>
              <Select.Option key="Ticket Create" value="2">
                Ticket Create
              </Select.Option>
            </Select>
          </Col>{' '}
          <Col
            span={24}
            hidden={objToAddAction && objToAddAction.actionType !== '1'}
          >
            <div style={{ color: '#333' }}>Select Api</div>
            <Select
              placeholder={'Api'}
              showSearch
              showArrow={true}
              value={
                objToAddAction &&
                objToAddAction.selectedApi &&
                objToAddAction.selectedApi.apiName
              }
              onChange={(e, value) => {
                handleChangeInActionData('selectedApi', value);
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
                  <Select.Option key={singleApi.apiId} value={singleApi.title}>
                    {singleApi.title}
                  </Select.Option>
                ))}
            </Select>
          </Col>
          {objToAddAction &&
          objToAddAction.actionType === '1' &&
          objToAddAction.paramMapping &&
          objToAddAction.paramMapping.length > 0 ? (
            <Col span={24}>
              <ApiParameterDetail
                intentParameter={intentParameter}
                paramMapping={objToAddAction.paramMapping}
                handleChangeInApiParameterValue={
                  handleChangeInApiParameterValue
                }
              />
            </Col>
          ) : null}
        </Row>

        <div className="row">
          <div className="col-9" />
          <div className="col-3">
            <CustomButton
              disabled={value}
              primary
              size="large"
              className="mt-4 mb-2"
              clicked={() => {
                if (actionType === 'Add') {
                  addAction();
                } else {
                  saveAction(singleActionId);
                }
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
              Save
            </CustomButton>
          </div>
        </div>
      </div>
    </Modal>
  );
};
export default CreateActionModal;
