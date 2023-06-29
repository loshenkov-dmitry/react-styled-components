import React, { useState } from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";

const PostForm = ({ create }) => {
	const [post, setPost] = useState({ title: "", body: "" });

	const addNewPost = (e) => {
		e.preventDefault();

		const newPost = {
			id: Date.now(),
			...post,
		};
		create(newPost);
		setPost({ title: "", body: "" });
	};

	return (
		<form onSubmit={addNewPost}>
			<MyInput
				type="text"
				value={post.title}
				onChange={(e) => setPost({ ...post, title: e.target.value })}
				placeholder="Название поста"
			/>
			{/* <MyInput ref={inputRef} type="text" placeholder="Заголовок поста" />  */}

			<MyInput
				type="text"
				placeholder="Заголовок поста"
				value={post.body}
				onChange={(e) => setPost({ ...post, body: e.target.value })}
			/>

			<MyButton onClick={addNewPost}>Опубликовать пост</MyButton>
		</form>
	);
};

export default PostForm;
