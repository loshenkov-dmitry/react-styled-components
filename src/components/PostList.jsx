import React from "react";
import PostItem from "./PostItem";

const PostList = ({ posts, title, remove }) => {
	if (!posts.length) {
		return (
			<h2 style={{ textAlign: "center", margin: "25px 0" }}>Постов нет</h2>
		);
	}
	return (
		<div>
			{title && (
				<h1 style={{ textAlign: "center", paddingTop: "25px" }}>{title}</h1>
			)}

			{!title && <h1>oOOpps</h1>}
			{posts.map((post, index) => {
				return (
					<PostItem key={post.id} post={post} index={index} remove={remove} />
				);
			})}
		</div>
	);
};

export default PostList;
