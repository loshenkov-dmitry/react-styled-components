import React from "react";

const MySelect = ({ options, defaultValue, value, onChange }) => {
	return (
		<div>
			<hr style={{ margin: "15px 0" }} />
			<select value={value} onChange={(e) => onChange(e.target.value)}>
				<option disabled value={defaultValue}>
					{defaultValue}
				</option>
				{options.map((option) => (
					<option value={option.value} key={option.value}>
						{option.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default MySelect;
