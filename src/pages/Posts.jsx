import React, { useEffect, useState } from "react";

import PostService from "../API/PostService.js";
import PostFilter from "../components/PostFilter";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import MyButton from "../components/UI/button/MyButton";
import MyLoader from "../components/UI/loader/MyLoader";
import MyModal from "../components/UI/modal/MyModal";
import { Pagination } from "../components/UI/pagination/Pagination";
import { useFetching } from "../hooks/useFetching";
import { usePagesArray } from "../hooks/usePagesArray";
import { usePosts } from "../hooks/usePost";
import { getPageCount } from "../utils/pages";

function Posts() {
	const [posts, setPosts] = useState([]);
	const [filter, setFilter] = useState({
		sort: "",
		query: "",
	});
	const [modal, setModal] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const [limit, setLimit] = useState(10);
	const [page, setPage] = useState(1);

	const [fetchPosts, isPostsLoading, error] = useFetching(async () => {
		const resp = await PostService.getAll(limit, page);
		setPosts(resp.data);
		const total = resp.headers["x-total-count"];
		setTotalPages(getPageCount(total, limit));
	});

	const createPost = (newPost) => {
		setPosts([...posts, newPost]);
		setModal(false);
	};
	const removePost = (post) => {
		setPosts(posts.filter((item) => post.id !== item.id));
	};

	const pagesArray = usePagesArray(totalPages);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

	useEffect(() => {
		fetchPosts();
	}, [page]);

	return (
		<div className="posts-list">
			{error && <h2>Ошибка получения данных</h2>}
			{isPostsLoading ? (
				<MyLoader />
			) : (
				<PostList
					posts={sortedAndSearchedPosts}
					title={"Список постов"}
					remove={removePost}
				/>
			)}

			<MyModal visible={modal} setVisible={setModal}>
				<PostForm create={createPost} />
			</MyModal>

			<PostFilter filter={filter} setFilter={setFilter} />
			<MyButton onClick={() => setModal(!modal)}>Создать пост</MyButton>

			<Pagination pages={pagesArray} currentPage={page} setPage={setPage} />
		</div>
	);
}

export default Posts;
