import React, { useEffect, useState } from "react";
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

  const cardsArray = () => {
    if (activeTab === Tabs.Popular) {
      return likedPosts;
    } else if (activeTab === Tabs.Favourites) {
      return savedPosts;
    } else {
      return allPosts;
    }
  };

  return (
    <div className={styles.container}>
      <Title name={"Blog"} className={styles.titleMargin} />
      <Tab activeTab={activeTab} onSelectTab={onTabCLick} />
      <CardList cardsList={cardsArray()} />
      <SelectedPostModal />
      <SelectedImageModal />
    </div>
  );
};

export default Home;
