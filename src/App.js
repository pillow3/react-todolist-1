import { useState } from "react";
import Header from "./components/Header.js";
import Form from "./components/Form.jsx";
import PackList from "./components/PackList.js";
import Item from "./components/Items.js";

// const testItems = [
// 	{ id: 1, description: "Passports", quantity: 2, finish: false },
// 	{ id: 2, description: "Socks", quantity: 12, finish: false },
// ];

function App() {
	const [items, setItems] = useState([]);

	function handleAddItems(newItem) {
		setItems((prevItems) => [...prevItems, newItem]);
	}

	function handleDeleteItem(id) {
		setItems((items) => items.filter((item) => item.id !== id));
	}

	return (
		<div className="app">
			<div className="container">
				<Header />
				<Form onAddItems={handleAddItems} />
				<PackList items={items} onDeleteItem={handleDeleteItem} />
				{/* <Item item={items} /> */}
			</div>
		</div>
	);
}

export default App;
