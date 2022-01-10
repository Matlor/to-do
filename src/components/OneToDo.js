import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link, useNavigate } from "react-router-dom";
import * as deepcopy from "deepcopy";

const OneToDo = ({ toDoList, setToDoList }) => {
	let { id } = useParams();
	let navigate = useNavigate();

	const [editing, setEditing] = useState(false);
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	useEffect(() => {
		if (toDoList.length > 0 && toDoList.length > id) {
			setTitle(toDoList[id].title);
			setContent(toDoList[id].content);
		}
	}, []);

	const deleteToDo = (idx) => {
		let newToDoList = deepcopy(toDoList);
		newToDoList.splice(idx, 1);
		setToDoList(newToDoList);
		navigate("/list");
	};

	const replaceToDo = (e, idx, newTitle, newContent) => {
		e.preventDefault();
		let newToDoList = deepcopy(toDoList);
		newToDoList[idx].title = newTitle;
		newToDoList[idx].content = newContent;
		setToDoList(newToDoList);
	};

	if (toDoList.length > 0 && toDoList.length > id) {
		const editContent = () => {
			let data;
			if (editing === true) {
				data = (
					<div>
						<form onSubmit={(e) => replaceToDo(e, id, title, content)}>
							Title:
							<input
								type="text"
								value={title}
								onChange={(event) => setTitle(event.target.value)}
							></input>
							Content:
							<input
								type="text"
								value={content}
								onChange={(event) => setContent(event.target.value)}
							></input>
							<button type="submit">Save</button>
						</form>
						<button onClick={() => setEditing(false)}>Close</button>
						<button onClick={() => deleteToDo(id)}>Delete</button>
					</div>
				);
			} else {
				data = (
					<div>
						<button onClick={() => setEditing(true)}>Edit</button>
						<button onClick={() => deleteToDo(id)}>Delete</button>
					</div>
				);
			}
			return data;
		};

		return (
			<div>
				<div style={{ margin: "20px 0px 20px 0px" }}>
					<Link to={"/list"}>back to list</Link>
					<div>index: {id}</div>
					<div>
						<span style={{ fontWeight: "bold" }}> {toDoList[id].title}</span>
					</div>
					<div>
						<span> {toDoList[id].content}</span>
					</div>
					<div>{editContent()}</div>
				</div>
			</div>
		);
	} else {
		return (
			<div>
				No to-do here
				<div>
					<Link to={"/list"}>back to list</Link>
				</div>
			</div>
		);
	}
};

export default OneToDo;
