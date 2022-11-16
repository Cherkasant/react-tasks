import React, { FC, useState } from 'react';

import styles from './CardList.module.css';
import { CardListType, Theme } from '../../Constants/@types';
import Card from '../Card';
import { CardSize } from '../Card/Card';
import classnames from 'classnames';
import { useThemeContext } from '../../Context/Theme';

type CardListProps = {
  cardsList: CardListType | null;
};

const CardList: FC<CardListProps> = ({ cardsList }) => {
  const { theme } = useThemeContext();
  return cardsList && cardsList.length > 0 ? (
    <div
      className={classnames(styles.container, {
        [styles.darkTheme]: theme === Theme.Dark,
      })}
    >
      <div className={styles.leftSide}>
        <Card card={cardsList[0]} size={CardSize.Large} />
        <div className={styles.mediumContainer}>
          {cardsList.map((card, index) => {
            if (index > 0 && index < 5) {
              return <Card key={index} card={card} size={CardSize.Medium} />;
            }
          })}
        </div>
      </div>
      <div className={styles.rightSide}>
        {cardsList.map((card, index) => {
          if (index > 5) {
            return <Card key={index} card={card} size={CardSize.Small} />;
          }
        })}
      </div>
    </div>
  ) : null;
};

export default CardList;
