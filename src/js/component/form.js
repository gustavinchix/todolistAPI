import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export function Form() {
	const [list, setList] = useState([]);

	async function addToDo() {
		if (event.key == "Enter" && event.target.value != "") {
			try {
				var response = await fetch(
					"https://assets.breatheco.de/apis/fake/todos/user/gustavin",
					{
						method: "PUT",
						body: JSON.stringify([
							...list,
							{ label: event.target.value, done: false }
						]),
						headers: {
							"Content-Type": "application/json"
						}
					}
				);
				if (response.ok) {
					let todolist = await response.json();
					setList(todolist);
				} else {
					console.log("fallo la actualizacion(agregar)");
				}
			} catch (error) {
				console.log(error);
			}
		}
	}

	async function deleteToDo(indexItem) {
		try {
			var response = await fetch(
				"https://assets.breatheco.de/apis/fake/todos/user/gustavin",
				{
					method: "PUT",
					body: JSON.stringify([
						() => list.filter((todo, index) => index !== indexItem)
					]),
					headers: {
						"Content-Type": "application/json"
					}
				}
			);
			if (response.ok) {
				let todolist = await response.json();
				setList(todolist);
			} else {
				console.log("fallo la actualizacion(eliminar)");
			}
		} catch (error) {
			console.log("hubo un error!", error);
		}
	}

	/*useEffect(() => {
		fetch("https://assets.breatheco.de/apis/fake/todos/user/gustavin")
			.then(response => {
				if (!response.ok) {
					throw Error(response.statusText);
				}
				return response.json();
			})
			.then(todolist => setList(todolist))
			.catch(error => console.log(error));
	}, []);*/

	return (
		<div>
			<input
				type="text"
				onKeyPress={addToDo}
				className="shadow"
				placeholder="What needs to be done?"
			/>
			<br />

			<ul>
				{list.map((item, index) => (
					<li key={index}>
						{item.label}
						<button
							className="btn"
							onClick={() => deleteToDo(index)}>
							<i>
								<FontAwesomeIcon icon={faTimes} />
							</i>
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}
