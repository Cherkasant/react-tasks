import React, { FC, useState } from "react";
import styles from "./Tab.module.css";
import classnames from "classnames";
import { useThemeContext } from "../../Context/Theme";
import { Tabs, Theme } from "../../Constants/@types";

const TABS_NAMES = [
  { name: "All", key: Tabs.All },
  { name: "My Favourites", key: Tabs.Favourites },
  { name: "Popular", key: Tabs.Popular },
];

type TabProps = {
  activeTab: Tabs;
  onSelectTab: (tab: Tabs) => void;
  disabled?: boolean;
};

const Tab: FC<TabProps> = ({ disabled, activeTab, onSelectTab }) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={classnames(styles.tabs, {
        [styles.darkContainer]: theme === Theme.Dark,
      })}
    >
      {TABS_NAMES.map((tab) => {
        return (
          <div
            key={tab.key}
            onClick={() => onSelectTab(tab.key)}
            className={classnames(styles.tab, {
              [styles.active]: tab.key === activeTab,
              [styles.disabled]: tab.key !== activeTab,
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
