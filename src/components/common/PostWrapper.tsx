import React from 'react';
import styled from 'styled-components';

interface PostWrapperProps {
  mode?: boolean;
  children?: React.ReactElement;
};

const PostWrapperBox = styled.div<PostWrapperProps>`
background-color: #3C3C3C;
display: flex;
flex-direction: column;
justify-content: ${props => (props.mode) ? "baseline" : "center"};
align-items: center;
padding: 20px;
flex: 1 1 auto;
overflow-y: auto;
min-height: 0px;
`
const PostWrapper = ({mode, children}: PostWrapperProps) => {
  return (
    <PostWrapperBox mode={mode}>
        {children}
    </PostWrapperBox>
  );
};

PostWrapper.defaultProps = {
  mode: true
};

export default PostWrapper;