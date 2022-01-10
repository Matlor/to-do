import { useState } from "react";
import * as deepcopy from "deepcopy";
import { Link } from "react-router-dom";

const ToDoList = ({ toDoList, setToDoList }) => {
	const [newToDoTitle, setNewToDoTitle] = useState("");
	const [newToDoContent, setNewToDoContent] = useState("");

	const showToDoList = () => {
		let list = "";
		if (toDoList.length > 0) {
			list = toDoList.map((toDo, idx) => {
				return (
					<div key={idx}>
						<div>
							<Link to={`/list/${idx}`}>{toDo.title}</Link>
						</div>
						<div> {toDo.content}</div>
					</div>
				);
			});
		}
		return list;
	};

	const createToDo = (e) => {
		e.preventDefault();
		let newToDoList = deepcopy(toDoList);
		let newToDo = { title: newToDoTitle, content: newToDoContent };
		newToDoList.push(newToDo);
		setToDoList(newToDoList);
		setNewToDoTitle("");
		setNewToDoContent("");
	};

	return (
		<div>
			<div>TO DO LIST: {showToDoList()}</div>
			<form onSubmit={createToDo}>
				Title:
				<input
					type="text"
					value={newToDoTitle}
					onChange={(e) => setNewToDoTitle(e.target.value)}
				></input>
				Content:
				<input
					type="text"
					value={newToDoContent}
					onChange={(e) => setNewToDoContent(e.target.value)}
				></input>
				<button type="submit">Create To-Do</button>
			</form>
		</div>
	);
};

export default ToDoList;
