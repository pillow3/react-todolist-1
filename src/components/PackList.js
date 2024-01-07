import React from "react";
import Item from "./Items.js";

// function Item({ item }) {
// 	return <li>{item}</li>;
// }

export default function PackList({ items, onDeleteItem }) {
	const testItems = [
		{ id: 1, description: "Passports", quantity: 2, finish: false },
		{ id: 2, description: "Socks", quantity: 12, finish: false },
	];

	return (
		<div className="container__packlist">
			<ul className="packlist__list">
				{/* {items.map((item) => (
					<Item item={item} key={item.id} />
				))} */}

				{items && items.length > 0 ? (
					items.map((item) => (
						<Item
							item={item}
							key={item.id}
							onDeleteItem={onDeleteItem}
						/>
					))
				) : (
					<li>No items to display</li>
				)}

				{/* <Item item={testItems[0].description} /> */}
			</ul>
		</div>
	);
}
