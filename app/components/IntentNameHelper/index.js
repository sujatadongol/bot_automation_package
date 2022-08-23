/**
 *
 * IntentNameHelper
 *
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';

const IntentNameHelper = ({ intentName, handleIntentNameChange, intentId, index }) => {
  const handleChange = e =>
    handleIntentNameChange(intentId, '', 'INTENT_NAME', e.target.value);
  return (
    <div>
      <div className="imported-intent-wrapper">
        <div className="imported-intent-header">Intent Name</div>
        <input
          key={index}
          placeholder="Intent Name"
          className="imported-intent-input"
          value={intentName}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

IntentNameHelper.propTypes = {
  intentName: PropTypes.string,
  handleIntentNameChange: PropTypes.func,
  intentId: PropTypes.string,
};
export default memo(IntentNameHelper);
