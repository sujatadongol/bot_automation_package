/**
 *
 * IntentImportPage
 *
 */

import React, { memo } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import useInjectReducer from 'utils/injectReducer';
import useInjectSaga from 'utils/injectSaga';
import makeSelectIntentImportPage, {
  makeSelectError,
  makeSelectIntentsList,
  makeSelectLoading,
  makeSelectOpenSnackbar,
  makeSelectVariant,
  makeSelectIntentsName
} from './selectors';
import IntentImportPage from './IntentImportPage';
import {
  makeSelectGlobalBotIntentsList,
  makeSelectReloadContainer,
} from '../../App/selectors';
import {
  closeSnackbar,
  discardIntent,
  getIntentsBySource,
  handleChangeInSpecificData,
  removeSpecificData,
  saveIntent,
  handleintentnamechange,
} from './actions';
import reducer from './reducer';
import saga from './saga';
import { reloadContainer } from '../../App/actions';

const mapStateToProps = createStructuredSelector({
  intentImportPage: makeSelectIntentImportPage(),
  // botIntentsList: makeSelectGlobalBotIntentsList(),
  intentsList: makeSelectIntentsList(),
  error: makeSelectError(),
  loading: makeSelectLoading(),
  variant: makeSelectVariant(),
  openSnackBar: makeSelectOpenSnackbar(),
  reloadContainer: makeSelectReloadContainer(),
  intentName: makeSelectIntentsName(),
});

function mapDispatchToProps(dispatch) {
  return {
    reloadContainerFunc: bool => dispatch(reloadContainer(bool)),

    fetchIntent: (botId, source, importType) =>
      dispatch(getIntentsBySource(botId, source, importType)),
    handleChangeToRemoveItem: (intentId, itemId, itemType) =>
      dispatch(removeSpecificData(intentId, itemId, itemType)),
    handleChangeInSpecificData: (intentId, itemId, itemType, value) =>
      dispatch(handleChangeInSpecificData(intentId, itemId, itemType, value)),
    saveIntent: (botIntents, botId, language) =>
      dispatch(saveIntent(botIntents, botId, language)),
    discardIntent: (source, botId, language) =>
      dispatch(discardIntent(source, botId, language)),
    closeSnackbar: () => dispatch(closeSnackbar()),
    handleIntentNameChange: value => dispatch(handleintentnamechange(value)),
  };
}

const withReducer = useInjectReducer({ key: 'intentImportPage', reducer });
const withSaga = useInjectSaga({ key: 'intentImportPage', saga });

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  withSaga,
  withReducer,
  memo,
)(IntentImportPage);
