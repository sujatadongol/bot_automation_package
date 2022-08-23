import React, { useEffect, useState } from 'react';
import { Col, Row, Select, Tooltip } from 'antd';
import { CircularProgress } from '@material-ui/core';
import DivWrapper from '../../components/DivWrapper/DivWrapper';
import CreateApiStyle from './Style';
import Headers from '../../components/ApiComponent/Headers';
import Parameters from '../../components/ApiComponent/Parameters';
import CustomButton from '../../components/Button/Button';
import SnackBar from '../../components/Snackbar';
import history from '../../utils/history';
import Breadcrumbs from '../../components/Breadcrumbs';
import { BreadCrumbPathFunc, BreadCrumbValueFunc } from '../Navbar/helper';
import { ValidURL } from '../../utils/helper';
import invalidIcon from '../../assets/not_verified.svg';
import { BreadCrumbsDiv } from '../../components/Layouts/NavLayout/Style';

const CreateApiScreen = ({
  match,
  loading,
  error,
  snackbar,
  variant,
  closeSnackbar,

  apiData,
  handleChangeInApiData,

  headerData,
  addHeader,
  removeHeader,
  handleChangeInHeader,

  parameterData,
  addParameter,
  removeParameter,
  handleChangeInParameter,

  createApi,
  openIntegrationTab,
  clearApiData,

  reloadContainer,
  botPermissionModel,
}) => {
  useEffect(() => {
    openIntegrationTab();
  }, []);
  useEffect(
    () => () => {
      clearApiData();
    },
    [],
  );
  {
    if (reloadContainer && localStorage.getItem('serviceId')) {
      history.push('/auto/api');
    }
  }
  const [isUrlInvalid, setIsUrlInvalid] = useState(false);
  const disableValue =
    apiData.title === '' || apiData.url === '' || apiData.method === '';
  const checkIfUrlIsValid = () => {
    ValidURL(apiData.url) === true ? createApi() : setIsUrlInvalid(true);
  };

  return (
    <>
      <BreadCrumbsDiv>
        <Breadcrumbs
          breadcrumbs={BreadCrumbValueFunc(match.url)}
          breadcrumbsPath={BreadCrumbPathFunc(match.url)}
        />
      </BreadCrumbsDiv>
      <DivWrapper style={{ padding: '10px 20px', marginTop: '15px' }}>
        {loading ? (
          <div className={loading ? 'loader' : 'loader hidden'} id="loader">
            <CircularProgress style={{ color: '#376AF5' }} />
          </div>
        ) : null}
        <CreateApiStyle>
          <Row>
            <Col span={13}>
              <div className="api-title"> Title</div>
              <input
                value={apiData.title}
                className="api-input"
                placeholder="Title"
                onChange={e => {
                  handleChangeInApiData(
                    'title',
                    e.target.value.replace(/\s/g, ''),
                  );
                }}
              />
            </Col>
            <Col span={13}>
              <div className="api-title"> URL</div>
              <input
                className="api-input"
                placeholder="Url"
                onChange={e => {
                  handleChangeInApiData('url', e.target.value);
                  setIsUrlInvalid(false);
                }}
                style={
                  isUrlInvalid === true
                    ? {
                      borderColor: '#FF4A4A',
                    }
                    : null
                }
              />
            </Col>
            <Tooltip title="Invalid Url">
              <img
                src={invalidIcon}
                hidden={!isUrlInvalid}
                className="invalid-url-msg"
                style={{
                  width: 16,
                  height: 16,
                  marginLeft: '6px',
                  marginTop: '30px',
                }}
              />
            </Tooltip>
            <Col span={13}>
              <div className="api-title"> Method</div>
              <Select
                placeholder="Method"
                className="api-input"
                style={{ border: 'none', paddingLeft: 0 }}
                onChange={e => {
                  handleChangeInApiData('method', e);
                }}
              >
                <Select.Option value="GET">GET</Select.Option>
                <Select.Option value="POST">POST</Select.Option>
                <Select.Option value="PATCH">PATCH</Select.Option>
                <Select.Option value="DELETE">DELETE</Select.Option>
              </Select>
            </Col>
            <Col span={24}>
              <Headers
                header={headerData}
                addHeader={addHeader}
                removeHeader={removeHeader}
                handleChangeInHeader={handleChangeInHeader}
              />
            </Col>
            <Col span={24}>
              <Parameters
                parameterData={parameterData}
                addParameter={addParameter}
                removeParameter={removeParameter}
                handleChangeInParameter={handleChangeInParameter}
              />
            </Col>
          </Row>
          {botPermissionModel && botPermissionModel.createBot && (
            <Row>
              <Col
                span={13}
                style={{ display: 'flex', justifyContent: 'flex-end' }}
              >
                <CustomButton
                  primary
                  type="submit"
                  size="large"
                  clicked={() => {
                    openIntegrationTab();
                    history.push('/auto/api');
                  }}
                  style={{
                    width: '96px',
                    borderRadius: '5px',
                    marginRight: '10px',
                    background: '#fff',
                    color: '#666',
                    border: '1px solid #c7c7c7',
                  }}
                >
                  Cancel
                </CustomButton>
                <CustomButton
                  primary
                  disabled={disableValue}
                  type="submit"
                  size="large"
                  clicked={() => {
                    checkIfUrlIsValid();
                    //   createApi(serviceId);
                  }}
                  style={
                    disableValue
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
              </Col>
            </Row>
          )}
        </CreateApiStyle>
        <SnackBar
          openSnackbar={snackbar}
          onClose={closeSnackbar}
          message={error}
          variant={variant}
        />
      </DivWrapper>
    </>
  );
};
export default CreateApiScreen;
