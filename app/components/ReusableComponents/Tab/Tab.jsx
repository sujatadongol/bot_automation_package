import React, { useState } from 'react';
import { TabStyle, TabDiv } from './Style';

export function TabComponent({ tabList,marginBottom,onTabClick }) {
  const [activeTab, setActiveTab] = useState(1);
  return (
    <TabStyle marginBottom={marginBottom}>
      {tabList &&
        tabList.map(single => (
          <TabDiv active={activeTab === single.id} tabColor="#333" onClick={() =>{
            onTabClick(single.id)
            setActiveTab(single.id)}}>
            {single.value}
          </TabDiv>
        ))}
    </TabStyle>
  );
}
