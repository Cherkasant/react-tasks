import React, { FC } from 'react';

//@ts-ignore
import styles from './Card.module.css';
import classnames from 'classnames';
import { BookmarkIcon, MoreIcon, UpIcon, DownIcon } from '../../Assets/icons';
import { CardType } from '../../Constants/@types';

export enum CardSize {
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

type CardProps = {
  card: CardType;
  size: CardSize;
};

const Card: FC<CardProps> = ({ card, size }) => {
  const { title, text, image, date } = card;

  const isLarge = size === CardSize.Large;
  const isMedium = size === CardSize.Medium;
  const isSmall = size === CardSize.Small;

  return (
    <div
      className={classnames(styles.container, {
        [styles.mediumContainer]: isMedium,
        [styles.smallContainer]: isSmall,
      })}
    >
      <div
        className={classnames(styles.bodyContainer, {
          [styles.mediumBodyContainer]: isMedium,
          [styles.smallBodyContainer]: isSmall,
        })}
      >
        <div className={styles.infoContainer}>
          <div className={styles.headerContainer}>
            <div className={styles.date}>{date}</div>
            <div
              className={classnames(styles.title, {
                [styles.smallTitle]: !isLarge,
              })}
            >
              {title}
            </div>
          </div>
          {isLarge && <div className={styles.description}>{text}</div>}
        </div>
        <img
          src={image}
          alt={''}
          className={classnames(styles.image, {
            [styles.mediumImage]: isMedium,
            [styles.smallImage]: isSmall,
          })}
        />
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.iconsContainer}>
          <div className={styles.iconButton}>
            <UpIcon />
          </div>
          <div className={styles.iconButton}>
            <DownIcon />
          </div>
        </div>
        <div className={styles.iconsContainer}>
          <div className={styles.iconButton}>
            <BookmarkIcon />
          </div>
          <div className={styles.iconButton}>
            <MoreIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
