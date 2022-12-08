import React, { useEffect, useMemo, useState } from "react";
import CardList from "../../components/CardList";
import Tab from "../../components/tab";
import Title from "../../components/title";
import { Tabs } from "../../Constants/@types";
import styles from "./Home.module.css";
import SelectedPostModal from "./SelectedPostModal";
import SelectedImageModal from "./SelectedImageModal";
import { useDispatch, useSelector } from "react-redux";
import PostsSelectors from "../../Redux/Selectors/postsSelectors";
import { getPosts } from "../../Redux/Reducers/postsReducer";
import authSelectors from "../../Redux/Selectors/authSelectors";

const Home = () => {
  const dispatch = useDispatch();
  const allPosts = useSelector(PostsSelectors.getAllPosts);
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  const [activeTab, setActiveTab] = useState(Tabs.All);
  const onTabCLick = (tab: Tabs) => {
    setActiveTab(tab);
  };

  const likedPosts = useSelector(PostsSelectors.getLikedPosts);
  const savedPosts = useSelector(PostsSelectors.getSavedPosts);
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);

  const cardsArray = () => {
    if (activeTab === Tabs.Popular) {
      return likedPosts;
    } else if (activeTab === Tabs.Favourites) {
      return savedPosts;
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

  return (
    <div className={styles.container}>
      <Title name={"Blog"} className={styles.titleMargin} />
      <Tab
        activeTab={activeTab}
        onSelectTab={onTabCLick}
        tabsList={TABS_NAMES}
      />
      <CardList cardsList={cardsArray()} />
      <SelectedPostModal />
      <SelectedImageModal />
    </div>
  );
};

export default Home;
