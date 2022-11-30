import React from "react";

export default function Todo(props) {
	function showButtons() {
		if (props.reopenTodo == null) {
			return (
				<div className="row">
					<div className="col-4">
						<input
							type="button"
							className="btn btn-success"
							onClick={() =>
								props.completeTodo(props.todoContent.id)
							}
							value="&#10004;"
						/>
					</div>
					<div className="col-8">
						<input
							type="button"
							className="btn btn-danger"
							onClick={() =>
								props.deleteTodo(props.todoContent.id)
							}
							value="&#10006;"
						/>
					</div>
				</div>
			);
		}

		return (
			<div className="row">
				<div className="col-4">
					<input
						type="button"
						className="btn btn-primary"
						onClick={() => props.reopenTodo(props.todoContent.id)}
						value="reopen"
					/>
				</div>
			</div>
		);
	}

	return (
		<div className="todoComponent">
			<div className="row">
				<div className="col todoText">
					<h3>{props.todoContent.content}</h3>
				</div>
				<div className="col">{showButtons()}</div>
			</div>
		</div>
	);
}
