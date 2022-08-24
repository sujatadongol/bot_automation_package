import React from 'react';
import { Col, Input, Modal, Radio, Row, Select } from 'antd';
import close from '../../../../../assets/close.svg';
import CustomButton from '../../../../ReusableComponents/Button/Button';
import SynonymComponent from './SynonymComponent';
import RegexComponent from './RegexComponent';

function CreateEntityModal({
  botId,
  synonym,
  regex,
  handleChangeRegex,
  removeRegex,
  handleChangeSynonym,
  handleChangeInTagInput,
  handleChangeSynonymTag,
  removeSynonym,
  removeSynonymTag,

  entityData,
  visibility,
  closeModal,
  createEntity,
  handleChangeEntityData,
}) {
  let synonymValue = [];
  synonym.map(singleSynonym => {
    if (singleSynonym.value !== '') {
      synonymValue.push(singleSynonym);
    }
  });
  let regexValue = [];
  regex.map(singleRegex => {
    if (singleRegex.value !== '') {
      regexValue.push(singleRegex);
    }
  });
  const value =
    (entityData && entityData.entityName === '') ||
    (entityData && entityData.entityDataType === '');

  return (
    <Modal
      icon
      centered
      visible={visibility}
      footer={null}
      onCancel={closeModal}
      closable={false}
      width={750}
      maskClosable={false}
    >
      <span>
        <div
          style={{
            textAlign: 'center',
            fontSize: '25px',
            margin: '4px 0',
          }}
        >
          Create Entity
          <img
            src={close}
            alt="closeIcon"
            onClick={() => closeModal()}
            style={{
              marginTop: '2px',
              float: 'right',
              marginRight: '-14px',
              cursor: 'pointer',
            }}
          />
        </div>
        <Row>
          <Col span={8}>
            <div className={'label-style'}>Name</div>
            <Input
              value={entityData !== undefined ? entityData.entityName : ''}
              onChange={e => {
                e.preventDefault();
                handleChangeEntityData('entityName', e.target.value);
              }}
              style={{ height: '37px', marginBottom: '5px' }}
            />
            <div className={'label-style'}>Type</div>
            <Select
              value={entityData !== undefined ? entityData.entityDataType : ''}
              showSearch
              onChange={e => {
                handleChangeEntityData('entityDataType', e);
              }}
              style={{ width: '100%', height: 37, marginTop: '2px' }}
            >
              <Select.Option value={'PHONE_ATTRIBUTE'}>Phone</Select.Option>
              <Select.Option value={'EMAIL_ATTRIBUTE'}>Email</Select.Option>
              <Select.Option value={'PERSON_ATTRIBUTE'}>Person</Select.Option>
              <Select.Option value={'LOCATION_ATTRIBUTE'}>
                Location
              </Select.Option>
              <Select.Option value={'DATE_ATTRIBUTE'}>Date</Select.Option>
              <Select.Option value={'TIME_ATTRIBUTE'}>Time</Select.Option>
              <Select.Option value={'AMOUNT_ATTRIBUTE'}>Amount</Select.Option>
              <Select.Option value={'NUMBER_ATTRIBUTE'}>Number</Select.Option>
              <Select.Option value={'CURRENCY_ATTRIBUTE'}>
                Currency
              </Select.Option>
              <Select.Option value={'DATE_TIME_ATTRIBUTE'}>
                Date Time
              </Select.Option>
              <Select.Option value={'ORGANIZATION_ATTRIBUTE'}>
                Organization
              </Select.Option>
              <Select.Option value={'TEXT'}>Text</Select.Option>
            </Select>
          </Col>
        </Row>
        <div className={'mt-3 mb-3'} style={{ margin: '10px 0' }}>
          <Radio.Group
            onChange={e => {
              handleChangeEntityData('synonymValueType', e.target.value);
            }}
            defaultValue={'PLAIN_VALUE_TYPE'}
          >
            <Radio value={'PLAIN_VALUE_TYPE'}>Synonyms</Radio>
            <Radio value={'REGEX_VALUE_TYPE'}>Regexp entity</Radio>
          </Radio.Group>
        </div>
        {entityData.synonymValueType === 'REGEX_VALUE_TYPE' ? (
          <RegexComponent
            regex={regex}
            removeRegex={removeRegex}
            handleChangeRegex={handleChangeRegex}
          />
        ) : (
          <SynonymComponent
            synonym={synonym}
            removeSynonymTag={removeSynonymTag}
            handleChangeInTagInput={handleChangeInTagInput}
            handleChangeSynonymTag={handleChangeSynonymTag}
            handleChangeSynonym={handleChangeSynonym}
            removeSynonym={removeSynonym}
          />
        )}
      </span>
      <Row
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          margin: '10px 0',
        }}
      >
        <CustomButton
          type="submit"
          disabled={value}
          primary
          size="large"
          className="mt-3"
          clicked={() => {
            if (!value) {
              createEntity(botId);
              closeModal();
            }
          }}
          style={
            value
              ? {
                  width: '105px',
                  borderRadius: '5px',
                  cursor: 'auto',
                  background: 'rgb(132, 148, 247)',
                  border: '1px solid rgb(132, 148, 247)',
                  color: '#fff',
                }
              : { borderRadius: '5px', width: '105px' }
          }
        >
          Create
        </CustomButton>
      </Row>
    </Modal>
  );
}

CreateEntityModal.propTypes = {};

export default CreateEntityModal;
