import React, { lazy } from "react";

const TodoList = lazy(() => import("./TodoList.js"));

export default function FrontPage() {
	return (
		<div className="container">
			<h1>TodoList</h1>
			<br />
			<TodoList />
		</div>
	);
}
