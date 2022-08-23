import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import textLogo from '../../../assets/anydone_text_logo.svg';
import logo from '../../../assets/anydone_logo.svg';
import LocalDb from '../../../localStorage';
import { InboxIcon } from '../../ReusableComponents/InboxIcon/InboxIcon';
import { TopHeader } from './Style';

export default function TopNavbar() {
  const [showTextLogo, setShowTextLogo] = useState(window.innerWidth >= 992);
  const userAccount = LocalDb.getUserProfileAccount();
  return (
    <TopHeader>
      <div>
        <Link to="/member">
          <img src={showTextLogo ? textLogo : logo} alt="Logo" />
        </Link>
      </div>
      <div className="profile_picture">
        {InboxIcon(
          'DIRECT_MESSAGE',
          userAccount && userAccount.fullname,
          '28px',
          userAccount && userAccount.profilepic,
        )}
      </div>
    </TopHeader>
  );
}
