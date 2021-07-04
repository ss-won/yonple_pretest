import React, { useState, useRef, useCallback, ChangeEvent } from "react";
import Post from "components/common/Post";
import PostWrapper from "components/common/PostWrapper";
import SearchBar from "components/SearchBar";
import usePost from "utils/usePost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";

const PostListContainer = () => {
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(0);

  const { posts, hasMore, loading, error } = usePost(query, page);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
    setPage(0);
  };

  const observer = useRef<IntersectionObserver | null>(null);
  const lastPostElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore],
  );

  return (
    <PostWrapper mode={1}>
      <>
        <SearchBar handleSearch={handleSearch} value={query} />
        {posts.length === 0 && !loading ? (
          <div>
            <FontAwesomeIcon icon={faExclamationCircle} /> 결과가 없습니다
          </div>
        ) : undefined}
        {posts.map((post, idx) => {
          if (idx + 1 === posts.length)
            return (
              <Post
                ref={lastPostElementRef}
                key={idx}
                id={post.id}
                title={post.title}
                content={post.content}
              />
            );
          else return <Post key={idx} id={post.id} title={post.title} content={post.content} />;
        })}
        <div>{loading && <FontAwesomeIcon icon={faSpinner} spin size="2x" />}</div>
        <div>{error && undefined}</div>
      </>
    </PostWrapper>
  );
};

export default PostListContainer;
