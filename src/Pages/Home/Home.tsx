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
import { getMyPosts, getPosts } from "../../Redux/Reducers/postsReducer";
import authSelectors from "../../Redux/Selectors/authSelectors";
import Loader from "../../components/Loader";

const Home = () => {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(Tabs.All);
  const onTabCLick = (tab: Tabs) => {
    setActiveTab(tab);
  };
  const isActiveTab = activeTab === Tabs.MyPosts; /// вот тут был затуп сильнейший
  useEffect(() => {
    if (isActiveTab) {
      //<=== вот сюда  я закидывал в if  (activeTab === Tabs.MyPosts) но оно не работало пока не создал отдельную переменную
      dispatch(getMyPosts()); // и прилетала ошибка 400 , а не 404 пока не поставил callCheckingAuth в workere
    } else dispatch(getPosts());
  }, [isActiveTab]);

  const likedPosts = useSelector(PostsSelectors.getLikedPosts);
  const savedPosts = useSelector(PostsSelectors.getSavedPosts);
  const isLoggedIn = useSelector(authSelectors.getLoggedIn);
  const isLoading = useSelector(PostsSelectors.getPostLoading);
  const myPosts = useSelector(PostsSelectors.getMyPosts);
  const allPosts = useSelector(PostsSelectors.getAllPosts);

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
          <CardList cardsList={cardsArray()} />
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
