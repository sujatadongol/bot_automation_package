import React from 'react';
import CreateEntityModal from '../../components/Bot/BotConfigurationComponent/EntityComponent/CreateEntity/CreateEntityModal';
import SnackBar from '../../components/ReusableComponents/Snackbar';

function CreateEntityScreen({
  error,
  snackbar,
  variant,
  closeSnackbar,

  botId,
  createEntityModal,
  closeCreateEntityModal,

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
  createEntity,
  handleChangeEntityData,
  clearEntityData,
}) {
  return (
    <>
      <CreateEntityModal
        botId={botId}
        visibility={createEntityModal}
        clearEntityData={clearEntityData}
        closeModal={closeCreateEntityModal}
        regex={regex}
        synonym={synonym}
        removeSynonym={removeSynonym}
        handleChangeSynonym={handleChangeSynonym}
        entityData={entityData}
        handleChangeRegex={handleChangeRegex}
        removeRegex={removeRegex}
        createEntity={createEntity}
        handleChangeEntityData={handleChangeEntityData}
        handleChangeInTagInput={handleChangeInTagInput}
        handleChangeSynonymTag={handleChangeSynonymTag}
        removeSynonymTag={removeSynonymTag}
      />

      <SnackBar
        openSnackbar={snackbar}
        onClose={closeSnackbar}
        message={error}
        variant={variant}
      />
    </>
  );
}

CreateEntityScreen.propTypes = {};

export default CreateEntityScreen;
