import React, { useEffect, useState } from 'react';
import { Col, Row } from 'antd';
import ApiList from '../../components/ApiComponent/ApiList';
import SnackBar from '../../components/ReusableComponents/Snackbar';
import DivWrapper from '../../components/ReusableComponents/DivWrapper/DivWrapper';
import Breadcrumbs from '../../components/Breadcrumbs';
import { BreadCrumbPathFunc, BreadCrumbValueFunc } from '../Navbar/helper';
import ListApiStyle from './styles';
import { PageSize } from '../../globalConstants';
import { BreadCrumbsDiv } from '../../components/Layouts/NavLayout/Style';
import LocalDb from '../../localStorage';
import OutlinedSpinner from '../../components/ReusableComponents/Spinner';

const ListApi = ({
  match,
  loading,
  apiList,
  fetchApiList,
  deleteApi,
  integrationAdmin,
  openSnackBar,
  variant,
  snackbarMsg,
  closeSnackbarInListApi,
  reloadContainerFunc,
  reloadContainer,
  getAllApi,
  botPermissionModel,
}) => {
  const [openNoServiceSnackbar, setOpenNoServiceSnackbar] = useState(false);
  useEffect(() => {
    if (!localStorage.getItem('serviceId')) {
      LocalDb.isEmployee() && setOpenNoServiceSnackbar(true);
    } else {
      fetchApiList(PageSize);
    }
  }, []);
  // useEffect(() => {
  //   fetchApiList();
  // }, []);

  if (reloadContainer && localStorage.getItem('serviceId')) {
    fetchApiList(PageSize);
    reloadContainerFunc();
  }

  return (
    <ListApiStyle>
      <BreadCrumbsDiv>
        <Breadcrumbs
          breadcrumbs={BreadCrumbValueFunc(match.url)}
          breadcrumbsPath={BreadCrumbPathFunc(match.url)}
        />
      </BreadCrumbsDiv>
      {loading ? (
        <div className={loading ? 'loader' : 'loader hidden'} id="loader">
          <OutlinedSpinner />
        </div>
      ) : null}
      <div className="container-fluid">
        <Row gutter={50} style={{ marginTop: '10px' }}>
          <Col span={24} className="gutter-row">
            <DivWrapper
              style={{
                margin: '0 1px',
                padding: '0',
                borderRadius: 0,
              }}
            >
              <ApiList
                integrationAdmin={integrationAdmin}
                fetchApiList={fetchApiList}
                apiList={apiList}
                deleteApi={deleteApi}
                botPermissionModel={botPermissionModel}
              />
            </DivWrapper>
          </Col>
        </Row>
      </div>

      <SnackBar
        openSnackbar={openSnackBar}
        onClose={closeSnackbarInListApi}
        message={snackbarMsg}
        variant={variant}
      />
      {/* <SnackBar
        openSnackbar={openNoServiceSnackbar}
        onClose={() => setOpenNoServiceSnackbar(false)}
        message={'Service has not been assigned'}
        variant={'error'}
      /> */}
    </ListApiStyle>
  );
};

export default ListApi;
