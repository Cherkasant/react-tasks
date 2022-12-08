import React, { FC } from "react";
import styles from "./Tab.module.css";
import classnames from "classnames";
import { useThemeContext } from "../../Context/Theme";
import { Tabs, Theme } from "../../Constants/@types";

type TabProps = {
  activeTab: Tabs;
  onSelectTab: (tab: Tabs) => void;
  disabled?: boolean;
  tabsList: Array<{ name: string; key: Tabs }>;
};

const Tab: FC<TabProps> = ({ activeTab, onSelectTab, tabsList }) => {
  const { theme } = useThemeContext();

  return (
    <div
      className={classnames(styles.tabs, {
        [styles.darkContainer]: theme === Theme.Dark,
      })}
    >
      {tabsList.map((tab) => {
        return (
          <div
            key={tab.key}
            onClick={() => onSelectTab(tab.key)}
            className={classnames(styles.tab, {
              [styles.active]: tab.key === activeTab,
              [styles.disabled]: tab.key !== activeTab,
              [styles.darkTab]: theme === Theme.Dark,
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
