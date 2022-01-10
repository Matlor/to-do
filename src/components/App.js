import * as React from "react";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import ToDoList from "./ToDoList";
import OneToDo from "./OneToDo";

function App() {
	const [toDoList, setToDoList] = useState([]);
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route
					path="list"
					element={<ToDoList toDoList={toDoList} setToDoList={setToDoList} />}
				/>
				<Route
					path="list/:id"
					element={<OneToDo toDoList={toDoList} setToDoList={setToDoList} />}
				/>
			</Routes>
		</div>
	);
}

export default App;
