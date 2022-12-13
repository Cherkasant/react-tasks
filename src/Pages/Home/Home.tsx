import React, { useEffect, useMemo, useState } from "react";
import CardList from "../../components/CardList";
import Tab from "../../components/tab";
import Title from "../../components/title";
import { Order, Tabs } from "../../Constants/@types";
import styles from "./Home.module.css";
import SelectedPostModal from "./SelectedPostModal";
import SelectedImageModal from "./SelectedImageModal";
import { useDispatch, useSelector } from "react-redux";
import PostsSelectors from "../../Redux/Selectors/postsSelectors";
import { getMyPosts, getPosts } from "../../Redux/Reducers/postsReducer";
import authSelectors from "../../Redux/Selectors/authSelectors";
import Loader from "../../components/Loader";
import { PER_PAGE } from "../../Constants/consts";
import classNames from "classnames";
import Button, { ButtonTypes } from "../../components/button";

const Home = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(Tabs.All);
  const [currentPage, setCurrentPage] = useState(1);
  const [ordering, setOrdering] = useState("");

  const onTabCLick = (tab: Tabs) => {
    setActiveTab(tab);
  };
  const onClickButtonOrdering = (order: Order) => () => {
    if (ordering === order) {
      setOrdering("");
    } else setOrdering(order);
    setCurrentPage(1);
  };

  const onPageChange = (page: number) => () => setCurrentPage(page);

  const isActiveTab = activeTab === Tabs.MyPosts;

  const likedPosts = useSelector(PostsSelectors.getLikedPosts);
  const savedPosts = useSelector(PostsSelectors.getSavedPosts);
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);
  const isLoading = useSelector(PostsSelectors.getPostLoading);
  const myPosts = useSelector(PostsSelectors.getMyPosts);
  const allPosts = useSelector(PostsSelectors.getAllPosts);
  const totalCount = useSelector(PostsSelectors.getTotalCount);

  const totalPagesCount = Math.ceil(totalCount / PER_PAGE);
  const pagesArray = Array.from(Array(totalPagesCount).keys());

  const cardsArray = () => {
    if (activeTab === Tabs.Popular) {
      return likedPosts;
    } else if (activeTab === Tabs.Favourites) {
      return savedPosts;
    } else if (activeTab === Tabs.MyPosts) {
      return myPosts;
    } else {
      return allPosts;
    }
  };

  const TABS_NAMES = useMemo(
    () => [
      { name: "All", key: Tabs.All },
      ...(isLoggedIn
        ? [
            { name: "My Favourites", key: Tabs.Favourites },
            { name: "My Posts", key: Tabs.MyPosts },
          ]
        : []),
      { name: "Popular", key: Tabs.Popular },
    ],
    [isLoggedIn]
  );

  useEffect(() => {
    const offset = PER_PAGE * (currentPage - 1);
    if (isActiveTab) {
      dispatch(getMyPosts());
    } else dispatch(getPosts({ offset, ordering }));
  }, [isActiveTab, currentPage, ordering]);

  return (
    <div className={styles.container}>
      <Title name={"Blog"} className={styles.titleMargin} />
      {!isLoading ? (
        <>
          <Tab
            activeTab={activeTab}
            onSelectTab={onTabCLick}
            tabsList={TABS_NAMES}
          />
          <div className={styles.orderingBlock}>
            <Button
              className={classNames({
                [styles.clicked]: ordering === Order.Date,
              })}
              title={"Date"}
              type={ButtonTypes.Primary}
              onClick={onClickButtonOrdering(Order.Date)}
            />
            <Button
              className={classNames({
                [styles.clicked]: ordering === Order.Title,
              })}
              title={"Title"}
              type={ButtonTypes.Primary}
              onClick={onClickButtonOrdering(Order.Title)}
            />
          </div>
          <CardList cardsList={cardsArray()} />
          <div className={styles.paginationBlock}>
            <div
              className={styles.previousBlock}
              onClick={
                currentPage !== 1 ? onPageChange(currentPage - 1) : undefined
              }
            >
              Prev
            </div>
            {pagesArray.map((i) => (
              <div
                onClick={onPageChange(i + 1)}
                key={i}
                className={classNames(styles.page, {
                  [styles.activePage]: i + 1 === currentPage,
                })}
              >
                {i + 1}
              </div>
            ))}
            <div
              className={styles.nextBlock}
              onClick={
                currentPage !== totalPagesCount
                  ? onPageChange(currentPage + 1)
                  : undefined
              }
            >
              Next
            </div>
          </div>

          <SelectedPostModal />
          <SelectedImageModal />
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Home;
