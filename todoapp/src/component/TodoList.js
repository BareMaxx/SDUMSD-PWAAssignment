import React, { lazy, useState, useRef } from "react";
import { v4 as uuid } from "uuid";

const Todo = lazy(() => import("./Todo.js"));

export default function TodoList() {
	const [todos, setTodos] = useState([]);
	const [completedTodos, setCompletedTodos] = useState([]);

	const test = useRef();
	const showCompletedButton = useRef();

	function deleteTodo(id) {
		const todosAfterRemoval = todos.filter((todo) => {
			todo = JSON.parse(todo);
			return todo.id !== id;
		});
		setTodos(todosAfterRemoval);
	}

	function addTodo(event) {
		event.preventDefault();
		const content = event.target.todoContent.value;
		if (content === "") {
			return;
		}
		const todo = JSON.stringify({
			id: uuid(),
			content: content,
		});
		setTodos([...todos, todo]);
		event.target.todoContent.value = "";
	}

	function completeTodo(id) {
		let completedTodo = todos.find((todo) => {
			todo = JSON.parse(todo);
			return todo.id === id;
		});
		const todosAfterCompletion = todos.filter((todo) => {
			todo = JSON.parse(todo);
			return todo.id !== id;
		});
		setTodos(todosAfterCompletion);
		setCompletedTodos([...completedTodos, completedTodo]);
	}

	function reopenTodo(id) {
		const completedTodo = completedTodos.find((todo) => {
			todo = JSON.parse(todo);
			return todo.id === id;
		});
		const completedTodosAfterCompletion = completedTodos.filter((todo) => {
			todo = JSON.parse(todo);
			return todo.id !== id;
		});
		setCompletedTodos(completedTodosAfterCompletion);
		setTodos([...todos, completedTodo]);
	}

	function showCompletedTodosList() {
		if (test.current.style.display === "none") {
			test.current.style.display = "block";
			showCompletedButton.current.innerHTML = "Hide completed todos";
		} else {
			test.current.style.display = "none";
			showCompletedButton.current.innerHTML = "Show completed todos";
		}
	}
	function showCompletedTodos() {
		return (
			<div>
				<br />
				{completedTodos.map((todo) => {
					todo = JSON.parse(todo);
					return (
						<Todo
							key={todo.id}
							todoContent={todo}
							reopenTodo={reopenTodo}
						/>
					);
				})}
			</div>
		);
	}

	function showTodos() {
		return (
			<div>
				<br />
				{todos.map((todo) => {
					todo = JSON.parse(todo);
					return (
						<Todo
							key={todo.id}
							todoContent={todo}
							deleteTodo={deleteTodo}
							completeTodo={completeTodo}
						/>
					);
				})}
			</div>
		);
	}

	return (
		<div className="container">
			<form onSubmit={addTodo}>
				<div className="row align-items-center">
					<div className="col">
						<h3 htmlFor="todoContent">Add a Todo</h3>
					</div>
					<div className="col">
						<div className="row">
							<h5>Todos completed: {completedTodos.length}</h5>
						</div>
						<div className="row">
							<h5>Todos left: {todos.length}</h5>
						</div>
					</div>
				</div>
				<div className="row align-items-center">
					<div className="col-8">
						<input
							type="text"
							placeholder="Todo content"
							className="form-control"
							name="todoContent"
							id="todoContent"
						/>
					</div>
					<div className="col">
						<input
							type="submit"
							className="btn btn-success"
							value="Add todo"
						/>
					</div>
					<div className="col">
						<button
							id="completedTodosButton"
							type="button"
							className="btn btn-primary"
							onClick={() => showCompletedTodosList()}
							value="Show Completed"
							ref={showCompletedButton}
						>
							Show completed todos
						</button>
					</div>
				</div>
			</form>

			{showTodos()}
			<br />

			<div id="completedTodos" ref={test}>
				<h3>Completed todos:</h3>
				{showCompletedTodos()}
			</div>
		</div>
	);
}
