import React from "react";

export const Pagination = ({ pages, currentPage, setPage }) => {
	return (
		<div className="page__wrapper">
			{pages.map((pageItem) => {
				return (
					<span
						onClick={() => setPage(pageItem)}
						key={pageItem}
						className={pageItem !== currentPage ? "page" : "page page__current"}
					>
						{pageItem}
					</span>
				);
			})}
		</div>
	);
};
