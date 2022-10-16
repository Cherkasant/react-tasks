import React, { FC, useState } from 'react';

import classnames from 'classnames';
//@ts-ignore
import styles from './Tabs.module.css';

type TabsProps = {
  className?: string;
  disabled?: boolean;
};

const Tabs: FC<TabsProps> = (props) => {
  const [activeClass, setActiveClass] = useState(1);
  const activeTab = (index: number) => {
    setActiveClass(index);
  };
  return (
    <div className={styles.container}>
      <div
        className={
          activeClass === 1
            ? classnames(styles.tabs, styles.active)
            : classnames(styles.tabs)
        }
        onClick={() => activeTab(1)}
      >
        All
      </div>
      <div
        className={
          activeClass === 2
            ? classnames(styles.tabs, styles.active)
            : classnames(styles.tabs)
        }
        onClick={() => activeTab(2)}
      >
        My favorites
      </div>
      <div
        className={
          activeClass === 3
            ? classnames(styles.tabs, styles.active)
            : classnames(styles.tabs)
        }
        onClick={() => activeTab(3)}
      >
        Popular
      </div>
    </div>
  );
};

export default Tabs;
