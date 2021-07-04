import { useEffect, useState } from "react";
import axios, { Canceler } from "axios";
import { Post } from "models";
import { client } from "./apis/client";

const usePost = (query: string, page: number) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    setPosts([]);
  }, [query]);

  let cancel: Canceler;
  useEffect(() => {
    setLoading(true);
    setError(false);
    client
      .get("/a-posts", {
        params: { search: query, page: page.toString() },
        // eslint-disable-next-line
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        console.log(res);
        setPosts((prev) => [...new Set([...(prev || []), ...res.data])]);
        setHasMore(res.data.length > 0);
        setLoading(false);
      })
      .catch((e) => {
        setError(true);
        if (axios.isCancel(e)) return;
      });
    return () => cancel();
  }, [query, page]);
  return { loading, error, posts, hasMore };
};

export default usePost;
