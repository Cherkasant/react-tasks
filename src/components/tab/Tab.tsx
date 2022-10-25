import React, { FC, useState } from 'react';
//@ts-ignore
import styles from './Tab.module.css';
import classnames from 'classnames';

enum Tabs {
  All = 'all',
  Favourites = 'myFavourites',
  Popular = 'popular',
}
const TABS_NAMES = [
  { name: 'All', key: Tabs.All },
  { name: 'My Favourites', key: Tabs.Favourites },
  { name: 'Popular', key: Tabs.Popular },
];

type TabProps = {
  disabled?: boolean;
};

const Tab: FC<TabProps> = ({ disabled }) => {
  const [activeTab, setActiveTab] = useState(Tabs.All);
  const clickTab = (tab: Tabs) => {
    setActiveTab(tab);
  };

  return (
    <div className={styles.tabs}>
      {TABS_NAMES.map((tab) => {
        return (
          <div
            key={tab.key}
            onClick={() => clickTab(tab.key)}
            className={classnames(styles.tab, {
              [styles.active]: tab.key === activeTab,
              [styles.disabled]: tab.key != activeTab,
            })}
          >
            {tab.name}
          </div>
        );
      })}
    </div>
  );
};

export default Tab;
