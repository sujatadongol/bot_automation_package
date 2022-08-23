/**
 *
 * CreateEntityModalContainer
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import useInjectSaga from 'utils/injectSaga';
import useInjectReducer from 'utils/injectReducer';
import makeSelectCreateEntityModalContainer, {
  makeSelectEntityData,
  makeSelectError,
  makeSelectLoading,
  makeSelectRegex,
  makeSelectSnackbar,
  makeSelectSynonym,
  makeSelectVariant,
} from './selectors';
import reducer from './reducer';
import saga from './saga';
import CreateEntityScreen from './CreateEntityScreen';
import { makeSelectOpenCreateEntityModal } from '../App/selectors';
import { closeCreateEntityModal } from '../App/actions';
import {
  clearEntityDataInIntent,
  closeSnackbarInCreateEntityIntent,
  createEntityInIntent,
  handleChangeEntityDataInIntent,
  handleChangeInTagInput,
  handleChangeRegex,
  handleChangeSynonym,
  handleChangeSynonymTag,
  removeRegex,
  removeSynonym,
  removeSynonymTag,
} from './actions';

const mapStateToProps = createStructuredSelector({
  createEntityModalContainer: makeSelectCreateEntityModalContainer(),

  createEntityModal: makeSelectOpenCreateEntityModal(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
  snackbar: makeSelectSnackbar(),
  variant: makeSelectVariant(),

  synonym: makeSelectSynonym(),
  regex: makeSelectRegex(),
  entityData: makeSelectEntityData(),
});

function mapDispatchToProps(dispatch) {
  return {
    closeCreateEntityModal: () => dispatch(closeCreateEntityModal()),

    handleChangeRegex: (id, value) => dispatch(handleChangeRegex(id, value)),
    removeRegex: id => dispatch(removeRegex(id)),
    handleChangeSynonym: (id, value) =>
      dispatch(handleChangeSynonym(id, value)),
    handleChangeSynonymTag: (id, value) =>
      dispatch(handleChangeSynonymTag(id, value)),
    handleChangeInTagInput: (id, value) =>
      dispatch(handleChangeInTagInput(id, value)),
    removeSynonym: id => dispatch(removeSynonym(id)),
    removeSynonymTag: (synonymId, tagId) =>
      dispatch(removeSynonymTag(synonymId, tagId)),

    handleChangeEntityData: (id, value) =>
      dispatch(handleChangeEntityDataInIntent(id, value)),
    createEntity: (botId) => dispatch(createEntityInIntent(botId)),
    clearEntityData: data => dispatch(clearEntityDataInIntent(data)),

    closeSnackbar: bool => dispatch(closeSnackbarInCreateEntityIntent(true)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = useInjectReducer({
  key: 'createEntityModalContainer',
  reducer,
});
const withSaga = useInjectSaga({ key: 'createEntityModalContainer', saga });

export default compose(
  withConnect,
  withSaga,
  withReducer,
)(CreateEntityScreen);
