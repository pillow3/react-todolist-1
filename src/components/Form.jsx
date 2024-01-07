import { useState } from "react";
import React from "react";

export default function Form({ onAddItems }) {
	const [description, setDescription] = useState("");

	function handleSubmit(e) {
		e.preventDefault();

		if (!description) return;

		const newItem = { description, id: Date.now() };
		onAddItems(newItem);
		console.log(newItem);
		setDescription("");
	}

	return (
		<div className="container__form">
			<form className="form__form" onSubmit={handleSubmit}>
				<div className="form__top">
					<input
						type="text"
						placeholder="Item..."
						value={description}
						onChange={(e) => {
							setDescription(e.target.value);
							console.log(e.target.value);
						}}></input>
				</div>

				<div className="form__bottom">
					<select>
						{Array.from({ length: 20 }, (_, i) => i + 1).map(
							(num) => (
								<option value={num} key={num}>
									{num}
								</option>
							)
						)}
					</select>
					<button className="form__button">Add</button>
				</div>
			</form>
		</div>
	);
}
