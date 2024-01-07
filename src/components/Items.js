import React from "react";

export default function Item({ item, onDeleteItem }) {
	return (
		<li>
			<span>{item.description}</span>
			<button
				onClick={() => onDeleteItem(item.id)}
				className="item__button">
				x
			</button>
		</li>
	);
}
