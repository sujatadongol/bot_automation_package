import React from 'react';
import SVGIcon from '../../../assets/SVGIcon';
import { Header, SVGWrapper, SubMenuWrapper } from './Style';
import LocalDb from '../../../localStorage';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const isOwner = LocalDb.isOwner();
const isAdmin = LocalDb.isAdmin();

export const items = [
  getItem(<Header>Automation</Header>, 'bot'),
  getItem(
    'Bot',
    '/bot',
    <SVGWrapper>
      <SVGIcon name="bot" color="#9C9C9C" />
    </SVGWrapper>,
  ),
  //   getItem(
  //     'Automated Replies',
  //     '/automated/replies',
  //     <SVGWrapper>
  //       <SVGIcon name="automatedReplies" color="#9C9C9C" />
  //     </SVGWrapper>,
  //   ),
  getItem(
    'Auto Ticket Create',
    '/auto/ticket/create',
    <SVGWrapper>
      <SVGIcon name="autoTicketCreate" color="#9C9C9C" />
    </SVGWrapper>,
  ),
  getItem(
    'Api',
    '/auto/api',
    <SVGWrapper>
      <SVGIcon name="api" color="#9C9C9C" />
    </SVGWrapper>,
  ),
];
