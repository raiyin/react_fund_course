import React from 'react';
import MyButton from './UI/button/MyButton';
import { useNavigate, redirect } from "react-router-dom";

const PostItem = (props) => {
    const navigate = useNavigate();
    return (
        <div className="post">
            <div className="post__content">
                <strong>
                    {props.post.id}. {props.post.title}
                </strong>
                <div>{props.post.description}</div>
            </div>
            <div className="post_btns">
                <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>
                    Открыть
                </MyButton>
                <MyButton onClick={() => props.remove(props.post)}>
                    Удалить
                </MyButton>
            </div>
        </div>
    );
};

export default PostItem;
