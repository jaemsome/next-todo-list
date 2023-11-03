"use client";
import React from "react";
import { useSelector } from "react-redux";
import { List, Box } from "@mui/material";
import TodoItem from "./todoitem";
import AddTodoItem from "./addtodoitem";
import TodoListHeader from "./todolistheader";

export default function TodoList({}) {
	const todoList = useSelector((state) => state.todoList.value);

	return (
		<>
			<h1 style={{ textAlign: "center" }}>Next Todo List</h1>
			<Box
				sx={{
					width: "100%",
					maxWidth: 500,
					bgcolor: "whitesmoke",
					color: "#000",
				}}
			>
				<TodoListHeader />
				<List sx={{ width: "100%" }}>
					{todoList.map((todoItem) => {
						return <TodoItem key={todoItem.id} item={todoItem} />;
					})}
				</List>
				<AddTodoItem />
			</Box>
		</>
	);
}
