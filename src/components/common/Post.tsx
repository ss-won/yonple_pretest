import React from "react";
import styled from "styled-components";
import * as model from "models";
import { useHistory } from "react-router-dom";

const PostBox = styled.div<model.Post>`
  border: 1px solid gray;
  background-color: #3c3c3c;
  color: #fff;
  width: 50%;
  border-radius: 4px;
  transition: all 0.5s;
  position: relative;

  .title {
    margin: 0px 0px 10px 0px;
  }

  .desc {
    display: -webkit-box;
    word-wrap: break-word;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    height: 54px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background-color: rgba(255, 255, 255, 0.1);
    transition: all 0.3s;
  }

  ${(props) =>
    props.mode
      ? `
cursor: pointer;
padding: 20px 15px;

&:hover::before {
  opacity: 0;
  transform: scale(0.5,0.5);
}

&::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s;
  border-radius: 4px;
  border: 1px solid rgba(254,146,196,0.5);
  transform: scale(1.2,1.2);
}

&:hover::after {
  opacity: 1;
  transform: scale(1,1);
}

.number {
  color: #fe92c4;
  border-bottom: 1px solid rgba(254,146,196,0.5);
  margin-right: 3px;
}`
      : `
overflow:hidden;
height: auto;
padding: 40px;
text-align: center;
`}
`;

const Post = React.forwardRef<HTMLDivElement, model.Post>((props, ref) => {
  const history = useHistory();
  const { mode, id, title, content } = props;
  return (
    <PostBox
      className="post"
      mode={mode}
      id={id}
      title={title}
      content={content}
      onClick={() => history.push(`/post/${id}`)}
      ref={ref}
    >
      <div>
        {mode ? (
          <>
            <h4 className="title">
              <span className="number">{id}</span> {title}
            </h4>
            <div className="desc">{content}</div>
          </>
        ) : (
          <>
            <h2 className="title">{title}</h2>
            <div>{content}</div>
          </>
        )}
      </div>
    </PostBox>
  );
});

Post.defaultProps = {
  mode: 1,
  id: "1",
  title: "A Word Can Be Used in a Sentence Many Ways",
  content:
    "Sometimes to understand a word's meaning you need more than a definition; you need to see the word used in a sentence. At YourDictionary, we give you the tools to learn what a word means and how to use it correctly. With this sentence maker, simply type a word in the search bar and see a variety of sentences with that word used in its different ways. Our sentence generator can provide more context and relevance, ensuring you use a word the right way.",
};

export default Post;
