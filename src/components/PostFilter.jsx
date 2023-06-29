import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({ filter, setFilter }) => {
	return (
		<div>
			<MyInput
				placeholder="Поиск"
				value={filter.query}
				onChange={(e) => setFilter({ ...filter, query: e.target.value })}
			/>

			<MySelect
				defaultValue="Сортировка по"
				options={[
					{ name: "По заголовку", value: "title" },
					{ name: "По описанию", value: "body" },
				]}
				onChange={(e) => setFilter({ ...filter, sort: e })}
				value={filter.sort}
			/>
		</div>
	);
};

export default PostFilter;
