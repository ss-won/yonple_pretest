import React, { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";
import Button from "components/Button";
import Post from "components/common/Post";
import PostWrapper from "components/common/PostWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { getDetail } from "utils/apis/getPost";
import * as model from "models";

interface MatchParams {
  id: string;
}

const initialState: model.Post = {
  title: "",
  content: "",
};

const PostDetailContainer = ({ history, match }: RouteComponentProps<MatchParams>) => {
  const [post, setPost] = useState<model.Post>(initialState);
  const { id } = match.params;
  const { title, content } = post;

  useEffect(() => {
    getDetail({ path: `/a-posts/${id}` }).then((res) => {
      const { title, content } = res.data;
      setPost({ ...post, title, content });
    });
    // eslint-disable-next-line
  }, [id]);

  return (
    <PostWrapper mode={0}>
      <>
        {title && content ? (
          <Post mode={0} title={title} content={content} />
        ) : (
          <FontAwesomeIcon icon={faSpinner} spin size="3x" />
        )}
        <Button content="back" onClick={() => history.goBack()} />
      </>
    </PostWrapper>
  );
};

export default PostDetailContainer;
