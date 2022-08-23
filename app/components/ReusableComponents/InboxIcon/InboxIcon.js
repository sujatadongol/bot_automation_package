import React from 'react';
import { MessageIcon } from '../../../assets/images/MessageIcon';
import { getInitialLettersOfEachWord } from '../../../utils/helper';
import ImageComponent from '../ImageComponent';
import { InboxIconWrapper } from './Style';

export const getInboxColor = str => {
  const initials =
    getInitialLettersOfEachWord(str) && getInitialLettersOfEachWord(str)[0];
  if (
    initials === 'A' ||
    initials === 'B' ||
    initials === 'C' ||
    initials === 'D' ||
    initials === 'E'
  ) {
    return {
      primaryColor: '#DB585F',
      secondaryColor: '#FFF7F8',
    };
  }

  if (
    initials === 'F' ||
    initials === 'G' ||
    initials === 'H' ||
    initials === 'I' ||
    initials === 'J'
  ) {
    return {
      primaryColor: '#70B426',
      secondaryColor: '#F6FAF3',
    };
  }

  if (
    initials === 'K' ||
    initials === 'L' ||
    initials === 'M' ||
    initials === 'N' ||
    initials === 'O'
  ) {
    return {
      primaryColor: '#3D86FF',
      secondaryColor: '#F6F9FF',
    };
  }

  if (
    initials === 'P' ||
    initials === 'Q' ||
    initials === 'R' ||
    initials === 'S' ||
    initials === 'T'
  ) {
    return {
      primaryColor: '#857CE2',
      secondaryColor: '#F6F5FC',
    };
  }

  return {
    primaryColor: '#F3B22F',
    secondaryColor: '#FFFBF4',
  };
};

const returnIcon = (type, subject, width, profileUrl) => {
  switch (type) {
    case 'DIRECT_MESSAGE':
      return profileUrl ? (
        <ImageComponent src={profileUrl} width={width} height={width} />
      ) : (
        <InboxIconWrapper
          color={getInboxColor(subject) && getInboxColor(subject).primaryColor}
          background={
            getInboxColor(subject) && getInboxColor(subject).secondaryColor
          }
          width={width}
          height={width}
        >
          {getInitialLettersOfEachWord(subject)}
        </InboxIconWrapper>
      );
    case 'PRIVATE_GROUP':
      return (
        <InboxIconWrapper
          color={getInboxColor(subject) && getInboxColor(subject).primaryColor}
          background={
            getInboxColor(subject) && getInboxColor(subject).secondaryColor
          }
          width={width}
          height={width}
        >
          <MessageIcon.PrivateIcon
            width="16"
            height="16"
            color={
              getInboxColor(subject) && getInboxColor(subject).primaryColor
            }
            background={
              getInboxColor(subject) && getInboxColor(subject).secondaryColor
            }
          />
        </InboxIconWrapper>
      );
    case 'PUBLIC_GROUP':
      return (
        <InboxIconWrapper
          color={getInboxColor(subject) && getInboxColor(subject).primaryColor}
          background={
            getInboxColor(subject) && getInboxColor(subject).secondaryColor
          }
          width={width}
          height={width}
        >
          <MessageIcon.PrivateIcon
            width="16"
            height="16"
            color={
              getInboxColor(subject) && getInboxColor(subject).primaryColor
            }
            background={
              getInboxColor(subject) && getInboxColor(subject).secondaryColor
            }
          />
        </InboxIconWrapper>
      );
    default:
      break;
  }
};
export const InboxIcon = (type, subject, width, profileUrl) => {
  return returnIcon(type, subject, width, profileUrl);
};
