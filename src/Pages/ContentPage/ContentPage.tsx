import React, { FC, useEffect } from "react";
import { BookmarkIcon, DownIcon, UpIcon } from "../../Assets/icons";
import Button, { ButtonTypes } from "../../components/button";
import Title from "../../components/title";
import styles from "./ContentPage.module.css";
import { getSinglePost } from "../../Redux/Reducers/postsReducer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import postsSelectors from "../../Redux/Selectors/postsSelectors";
import { PathNames } from "../Router/Router";
import { useThemeContext } from "../../Context/Theme";
import classNames from "classnames";
import { Theme } from "../../Constants/@types";

const ContentPage = () => {
  const { theme } = useThemeContext();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();
  const { id } = params;
  useEffect(() => {
    if (id) {
      dispatch(getSinglePost(id));
    }
  }, []);

  const card = useSelector(postsSelectors.getSinglePost);

  return card ? (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.postContainer}>
          <div
            className={classNames(styles.pageName, {
              [styles.darkPageName]: theme === Theme.Dark,
            })}
            onClick={() => navigate(PathNames.Home)}
          >
            {"Home"}
          </div>
          <div className={styles.separator}>{"|"}</div>
          <div className={styles.postName}>{"Post 14278"}</div>
        </div>
        <Title name={card?.title} />
      </div>
      <div className={styles.contentContainer}>
        <img className={styles.image} src={card?.image} alt={""} />
        <div className={styles.mainContainer}>
          <div className={styles.text}>{card?.text}</div>

          <div className={styles.footerContainer}>
            <div className={styles.iconsContainer}>
              <Button
                title={<UpIcon />}
                type={ButtonTypes.Secondary}
                className={styles.likeButtonHover}
              />
              <Button
                title={<DownIcon />}
                type={ButtonTypes.Secondary}
                className={styles.dislikeButtonHover}
              />
            </div>
            <div className={styles.iconsContainer}>
              <Button
                title={<BookmarkIcon />}
                type={ButtonTypes.Secondary}
                text={"Add to favorites"}
                className={styles.favouriteButton}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
};

export default ContentPage;
