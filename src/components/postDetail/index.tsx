import React, {useState, useEffect} from 'react';
import { RouteComponentProps } from "react-router";
import Button from "components/common/Button";
import Post from "components/common/Post";
import PostWrapper from "components/common/PostWrapper";
import { getDetail } from "apis/getPost";
import * as model from "models";

interface MatchParams {
    id: string;
}

const initialState:model.Post = {
    title: "",
    content: ""
}

const PostDetailContainer = ({match}:RouteComponentProps<MatchParams>) => {
    const [post, setPost] = useState<model.Post>(initialState);
    const {id} = match.params;
    const {title, content} = post;

    useEffect(() => {
        getDetail({path: `/a-posts/${id}`})
        .then(res => {
            console.log(res.data);
            const {title, content} = res.data; 
            setPost({...post, title, content})});
        // eslint-disable-next-line
    }, [id])

    return (
    <PostWrapper mode={false}>
        <>
        <Post mode={false} title={title} content={content}/>
        <Button content="back"/>
        </>
    </PostWrapper>
    )
}

export default PostDetailContainer;