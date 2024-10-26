'use client';
import {cn} from '@/utils/CN';
import {memo, useCallback, useEffect, useRef, useState} from 'react';
import Link from 'next/link';
import ArrowIcon from '@/icons/ArrowIcon';

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
  const [canScroll, setCanScroll] = useState({left: false, right: false});
  const tabsRef = useRef(null);

  useEffect(() => {
    const {scrollLeft, scrollWidth, clientWidth} = tabsRef.current;
    setCanScroll({left: scrollLeft > 0, right: scrollLeft + clientWidth < scrollWidth});
  }, [tabsRef.current]);

  useEffect(() => {
    setActiveTab(activeTabParam);
  }, [activeTabParam]);

  const handleScroll = (direction) => {
    if (tabsRef.current) {
      const newPosition = direction === 1 ? tabsRef.current.scrollLeft - 200 : tabsRef.current.scrollLeft + 200;
      tabsRef.current.scrollTo({left: newPosition, behavior: 'smooth'});
      const {scrollWidth, clientWidth} = tabsRef.current;
      setCanScroll({left: newPosition > 0, right: newPosition + clientWidth < scrollWidth});
    }
  };

  const handleChangeTab = useCallback(
    (tab) => {
      setActiveTab(tab);
      onChangeTab(tab);
    },
    [activeTab, setActiveTab]
  );

  return (
    <div className="flex gap-2">
      <button
        className={cn('left-0 top-0 bottom-0 z-20 bg-white hidden', {block: canScroll.left})}
        onClick={() => handleScroll(1)}
      >
        <ArrowIcon />
      </button>
      <div
        className={cn('border-b border-purple-500 flex gap-2 hide-scrollbar max-w-full overflow-auto z-10', className)}
        ref={tabsRef}
      >
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
      <button
        className={cn('right-0 top-0 bottom-0 z-20 bg-white hidden', {block: canScroll.right})}
        onClick={() => handleScroll(2)}
      >
        <ArrowIcon rotate={180} />
      </button>
    </div>
  );
};

export default memo(Tabs);
