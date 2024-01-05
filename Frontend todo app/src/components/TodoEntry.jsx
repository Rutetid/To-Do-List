import React, { useEffect } from "react";
import { useState } from "react";
import { Typography } from "@mui/material";
import TodoItem from "./TodoItems";
import TodoDesc from "./TodoDesc";

function TodoEntry() {
	const [todo, setTodo] = useState([]);

	useEffect(() => {
		const fetchTodos = () => {
			fetch("http://localhost:3000/todos", {
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			})
				.then((response) => response.json())
				.then((data) => {
					setTodo(data);
				});
		};

		fetchTodos();
	}, []);
	return (
		<div>
			<Typography variant="h4" style={{ paddingTop: 2 }}>
				{todo.map((todo, index) => (
					<div>
						<React.Fragment key={todo.id}>
							<TodoItem title={todo.title} />
							<TodoDesc description={todo.description} />
							{index !== todo.length - 1}
						</React.Fragment>
					</div>
				))}
			</Typography>
		</div>
	);
}
export default TodoEntry;
