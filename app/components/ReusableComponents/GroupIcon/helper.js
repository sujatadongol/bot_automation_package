import React from 'react';
import SVGIcon from '../../assets/SVGIcon';
import { IconWrapper } from './style';
export const getInitialLettersOfEachWord = str => {
  const matches = str && typeof str === 'string' && str.split(/\s/);
  const acronym =
    matches &&
    matches.reduce((response, word) => (response += word.slice(0, 1)), '');
  const letters = acronym && acronym.toUpperCase();
  if (letters) {
    if (letters.length === 1) {
      return letters.charAt(0);
    }
    return letters.charAt(0) + letters.charAt(letters.length - 1);
  }
};

export const GetInboxColor = str => {
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
export const GetInboxProfilePic = (width, height, subject) => {
  return (
    <IconWrapper
      color={GetInboxColor(subject) && GetInboxColor(subject).primaryColor}
      background={
        GetInboxColor(subject) && GetInboxColor(subject).secondaryColor
      }
      width={width}
      height={height}
    >
      <SVGIcon
        name="PublicGroup"
        width={width}
        height={height}
        color={GetInboxColor(subject) && GetInboxColor(subject).primaryColor}
        background={
          GetInboxColor(subject) && GetInboxColor(subject).secondaryColor
        }
      />
    </IconWrapper>
  );
};
