import React, { FC } from "react";

import styles from "./Card.module.css";
import classnames from "classnames";
import { BookmarkIcon, DownIcon, MoreIcon, UpIcon } from "../../Assets/icons";
import { CardType, LikeStatus, Theme } from "../../Constants/@types";
import { useThemeContext } from "../../Context/Theme";
import { useDispatch, useSelector } from "react-redux";
import {
  setLikedStatus,
  setSavedPosts,
  setSelectedImage,
  setSelectedPosts,
} from "../../Redux/Reducers/postsReducer";
import PostsSelectors from "../../Redux/Selectors/postsSelectors";
import { useNavigate } from "react-router-dom";

export enum CardSize {
  Large = "large",
  Medium = "medium",
  Small = "small",
}

type CardProps = {
  card: CardType;
  size: CardSize;
  isFromModal?: boolean;
};

const Card: FC<CardProps> = ({ card, size, isFromModal }) => {
  const { theme } = useThemeContext();
  const dispatch = useDispatch();

  const onMoreIconClick = () => {
    dispatch(setSelectedPosts(card));
  };

  const onImageClick = () => {
    dispatch(setSelectedImage(image));
  };

  const onLikeStatusClick = (likeStatus: LikeStatus) => () => {
    dispatch(setLikedStatus({ card, likeStatus }));
  };

  const likedPosts = useSelector(PostsSelectors.getLikedPosts);
  const dislikedPosts = useSelector(PostsSelectors.getDislikedPosts);
  const isLiked = likedPosts.findIndex((post) => post.id === card.id) > -1;
  const isDisliked =
    dislikedPosts.findIndex((post) => post.id === card.id) > -1;

  const onSaveIconClick = () => {
    dispatch(setSavedPosts(card));
  };
  const savedPosts = useSelector(PostsSelectors.getSavedPosts);
  const isFavourite = savedPosts.findIndex((post) => post.id === card.id) > -1;

  const { title, text, image, date, id } = card;
  const navigate = useNavigate();

  const onTitleClick = () => {
    navigate(`/content/${id}`);
  };

  const isLarge = size === CardSize.Large;
  const isMedium = size === CardSize.Medium;
  const isSmall = size === CardSize.Small;

  return (
    <div
      className={classnames(styles.container, {
        [styles.mediumContainer]: isMedium,
        [styles.smallContainer]: isSmall,
        [styles.darkContainer]: theme === Theme.Dark,
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
                [styles.whiteTitle]: theme === Theme.Dark,
              })}
              onClick={onTitleClick}
            >
              {title}
            </div>
          </div>
          {isLarge && <div className={styles.description}>{text}</div>}
        </div>
        <img
          onClick={!isFromModal ? onImageClick : undefined}
          src={image}
          alt={""}
          className={classnames(styles.image, {
            [styles.mediumImage]: isMedium,
            [styles.smallImage]: isSmall,
          })}
        />
      </div>
      <div className={styles.cardFooter}>
        <div className={styles.iconsContainer}>
          <div
            className={styles.iconButton}
            onClick={onLikeStatusClick(LikeStatus.Like)}
          >
            <UpIcon />
            {isLiked && (
              <div
                className={classnames(styles.likeNumber, {
                  [styles.whiteNumber]: theme === Theme.Dark,
                })}
              >
                1
              </div>
            )}
          </div>
          <div
            className={styles.iconButton}
            onClick={onLikeStatusClick(LikeStatus.Dislike)}
          >
            <DownIcon />
            {isDisliked && (
              <div
                className={classnames(styles.likeNumber, {
                  [styles.whiteNumber]: theme === Theme.Dark,
                })}
              >
                1
              </div>
            )}
          </div>
        </div>
        <div
          className={classnames(styles.iconsContainer, {
            [styles.whiteIcon]: theme === Theme.Dark,
          })}
        >
          <div
            className={classnames(styles.saveButton, {
              [styles.favouritePost]: isFavourite,
              [styles.darkStyleSaveIcon]: theme === Theme.Dark,
              [styles.whiteFill]: isFavourite && theme !== Theme.Light,
            })}
            onClick={onSaveIconClick}
          >
            <BookmarkIcon />
          </div>
          <div className={styles.iconButton} onClick={onMoreIconClick}>
            <MoreIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
