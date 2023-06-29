import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PostService from "../API/PostService";
import MyLoader from "../components/UI/loader/MyLoader";
import { useFetching } from "../hooks/useFetching";

function PostIdPage() {
	const params = useParams();
	const postId = params.id;

	const [post, setPost] = useState({});
	const [comments, setComments] = useState([]);
	const [fetchPostById, isLoading, error] = useFetching(async (id) => {
		const resp = await PostService.getById(id);
		setPost(resp.data);
	});
	const [fetchComments, isCommentsLoading, commentsError] = useFetching(
		async (id) => {
			const resp = await PostService.getCommentsByPostId(id);
			setComments(resp.data);
		}
	);

	useEffect(() => {
		fetchPostById(postId);
		fetchComments(postId);
	}, []);

	return (
		<div>
			<h1 className="">postIDPage - {params.id}</h1>

			{isLoading ? (
				<MyLoader />
			) : (
				<div>
					<h2>{post.title}</h2>
					<p>{post.body}</p>

					<h3 style={{ marginTop: "25px" }}>Комментарии</h3>
					{isCommentsLoading ? (
						<MyLoader />
					) : (
						comments.map((comment) => {
							return (
								<div key={comment.id} style={{ marginTop: "15px" }}>
									<h5>{comment.email}</h5>
									<div>{comment.body}</div>
								</div>
							);
						})
					)}
				</div>
			)}
		</div>
	);
}

export default PostIdPage;
