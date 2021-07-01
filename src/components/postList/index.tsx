import React, {useEffect, useState} from 'react';
import Post from "components/common/Post";
import PostWrapper from "components/common/PostWrapper";
import * as model from "models";
import { getList } from "apis/getPost";

const PostListContainer = () => {
  const [posts, setPosts] = useState<model.Post[]>([]);

  useEffect(() => {
    getList({path: "/a-posts", page:"0"}).then(res => {console.log(res.data); setPosts(res.data)})
  }, []);

  return (
    <PostWrapper mode={true}>
      <>
      {posts.map((post,idx) => <Post key={idx} id={post.id} title={post.title} content={post.content}/>)}
      </>
    </PostWrapper>
  );
};

export default PostListContainer;