import React, { useState } from "react";
import ListInput from "./ListInput.jsx";
import ListItem from "./ListItem.jsx";

//create your first component
const Home = () => {
	const [todos, setTodos] = useState([]);
	const [task, setTask] = useState("");

	const handleChange = (event) => {
		setTask(event.target.value);
		console.log(event);
	};

	const handleKeyPress = (event) => {
		if (event.key === "Enter") {
			setTodos([...todos, task]);
			setTask("");
		}
	};
	const removeTodo = (id) => {
		const newTodos = todos.filter((item, index) => id != index);
		setTodos(newTodos);
	};

	return (
		<div className="d-flex flex-column justify-content-center align-items-center">
			<p className="text-centered mt-5 mb-2 headertittle">Todos</p>
			<div className="card">
				<ul className="list-group list-group-flush">
					<ListInput
						task={task}
						handleChange={handleChange}
						handleKeyPress={handleKeyPress}
						todos={todos}
					/>

					{todos.map((todo, index) => (
						<ListItem
							key={index}
							todo={todo}
							removeTodo={removeTodo}
							id={index}
						/>
					))}
					<li className="list-group-item text-muted small">
						{todos.length} Items Left
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Home;
