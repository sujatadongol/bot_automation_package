import React from 'react';
import { Wrapper } from './style';
import { GetInboxProfilePic } from './helper';

const GroupIcon = ({ subject }) => {
  return (
    <Wrapper>
      {GetInboxProfilePic('22px', '22px', subject)}
      {subject}
    </Wrapper>
  );
};

export default GroupIcon;
