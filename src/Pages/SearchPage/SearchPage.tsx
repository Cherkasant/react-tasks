import React, { useEffect, useState } from "react";
import CardList from "../../components/CardList";
import Title from "../../components/title";
import styles from "./SearchPage.module.css";
import { useDispatch, useSelector } from "react-redux";
import PostsSelectors from "../../Redux/Selectors/postsSelectors";
import { getPosts } from "../../Redux/Reducers/postsReducer";
import authSelectors from "../../Redux/Selectors/authSelectors";
import Loader from "../../components/Loader";
import { PER_PAGE } from "../../Constants/consts";
import classNames from "classnames";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { searchString } = useParams();
  console.log(searchString);

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page: number) => () => setCurrentPage(page);

  const isLoggedIn = useSelector(authSelectors.getLoggedIn);
  const isLoading = useSelector(PostsSelectors.getPostLoading);
  const allPosts = useSelector(PostsSelectors.getAllPosts);
  const totalCount = useSelector(PostsSelectors.getTotalCount);

  const totalPagesCount = Math.ceil(totalCount / PER_PAGE);
  const pagesArray = Array.from(Array(totalPagesCount).keys());

  useEffect(() => {
    const offset = PER_PAGE * (currentPage - 1);
    dispatch(getPosts({ offset, search: searchString }));
  }, [currentPage, searchString]);

  return (
    <div className={styles.container}>
      <Title name={"Search results:"} className={styles.titleMargin} />
      {!isLoading ? (
        <>
          <CardList cardsList={allPosts} />
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
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default SearchPage;
