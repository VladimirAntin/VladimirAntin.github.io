'use client';
import {cn} from '@/app/utils/CN';
import {memo, useCallback, useEffect, useState} from 'react';
import Link from 'next/link';

const TabItemContainer = ({children, url, ...props}) => {
  return !url ? (
    <button {...props}>{children}</button>
  ) : (
    <Link
      href={url}
      {...props}
    >
      {children}
    </Link>
  );
};

const Tabs = ({tabs = [], activeTab: activeTabParam, onChangeTab = (tab) => console.log('Tabs.onChangeTab', tab), className = '', url}) => {
  const [activeTab, setActiveTab] = useState(activeTabParam);

  useEffect(() => {
    setActiveTab(activeTabParam);
  }, [activeTabParam]);

  const handleChangeTab = useCallback(
    (tab) => {
      setActiveTab(tab);
      onChangeTab(tab);
    },
    [activeTab, setActiveTab]
  );

  return (
    <div className={cn('border-b border-purple-500 flex gap-2 hide-scrollbar', className)}>
      {tabs.map(({title, tabId}, vIdx) => {
        const tabIdentifier = tabId ?? vIdx;
        return (
          <TabItemContainer
            url={url ? url(tabId) : undefined}
            key={'tab-ver-' + vIdx}
            className={cn('border-b-4 border-b-white p-2 outline-none', {'border-purple-600': activeTab === tabIdentifier})}
            onClick={() => handleChangeTab(tabIdentifier)}
          >
            <p className={'text-purple-500 text-nowrap'}>{title}</p>
          </TabItemContainer>
        );
      })}
    </div>
  );
};

export default memo(Tabs);
