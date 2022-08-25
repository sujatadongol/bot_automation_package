import React from 'react';
import { Imagewrapper, Text } from './style';
import { InboxIcon } from '../InboxIcon/InboxIcon';

const ImageComponent = ({ account }) => {
  return (
    <Imagewrapper>
      {InboxIcon(
        'DIRECT_MESSAGE',
        account && account.fullName,
        '32px',
        account && account.profilePic,
      )}
      <Text>{account && account.fullName}</Text>
    </Imagewrapper>
  );
};

export default ImageComponent;
