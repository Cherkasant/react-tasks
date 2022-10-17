import React, { FC } from 'react';
//@ts-ignore
import styles from './Tab.module.css';
import classnames from 'classnames';

type TabProps = {
  title: string;
  onClick: () => void;
  className: string;
};

const Tab: FC<TabProps> = (props) => {
  const { title, className, onClick } = props;
  return (
    <div className={classnames(styles.tab, className)} onClick={onClick}>
      {title}
    </div>
  );
};

export default Tab;
