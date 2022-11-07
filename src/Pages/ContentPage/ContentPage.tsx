import React, { FC, useEffect, useState } from 'react';
import { BookmarkIcon, DownIcon, UpIcon } from '../../Assets/icons';
import Button, { ButtonTypes } from '../../components/button';
import Title from '../../components/title';
import styles from './ContentPage.module.css';
import { CardType, Theme } from '../../Constants/@types';

type ContentPageProps = {
  card: CardType;
};

const ContentPage: FC<ContentPageProps> = ({ card }) => {
  const { title, text, image } = card;
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.postContainer}>
          <div className={styles.pageName}>{'Home'}</div>
          <div className={styles.separator}>{'|'}</div>
          <div className={styles.postName}>{'Post 14278'}</div>
        </div>
        <Title name={title} />
      </div>
      <div className={styles.contentContainer}>
        <img className={styles.image} src={image} alt={''} />
        <div className={styles.mainContainer}>
          <div className={styles.text}>{text}</div>

          <div className={styles.footerContainer}>
            <div className={styles.iconsContainer}>
              <Button title={<UpIcon />} type={ButtonTypes.Secondary} />
              <Button title={<DownIcon />} type={ButtonTypes.Secondary} />
            </div>
            <div className={styles.iconsContainer}>
              <Button
                title={<BookmarkIcon />}
                type={ButtonTypes.Secondary}
                text={'Add to favorites'}
                className={styles.favouriteButton}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentPage;
