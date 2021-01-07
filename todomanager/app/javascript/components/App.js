import React from "react";
import { Router } from "@reach/router";
import TaskList from "./TaskList";
import CreateTask from "./CreateTask";

function App() {
	return (
		<Router>
			<TaskList path="/" />
			<CreateTask path="/create" />
		</Router>
	);
}

export default App;