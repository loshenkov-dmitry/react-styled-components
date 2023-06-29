import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import MyButton from "./UI/button/MyButton";
const PostStyled = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 15px;
	border: 2px solid teal;
	margin-top: 15px;

	.post-btns {
		display: flex;
		gap: 25px;
		margin-left: 15px;
	}
`;

const PostItem = ({ post, index, remove }) => {
	const navigate = useNavigate();

	return (
		<PostStyled>
			<div className="post-content">
				<strong>
					{post.id}. {post.title}
				</strong>
				<div>{post.body}</div>
			</div>

			<div className="post-btns">
				<MyButton onClick={() => navigate(`/posts/${post.id}`)}>
					Открыть
				</MyButton>
				<MyButton onClick={() => remove(post)}>Удалить</MyButton>
			</div>
		</PostStyled>
	);
};

export default PostItem;
