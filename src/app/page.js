import React from "react";
import { Grid } from "@mui/material";
import { TodoList } from "./components/todolist";

export default function Home() {
	return (
		<Grid
			container
			spacing={0}
			direction="column"
			alignItems="center"
			justifyContent="center"
			sx={{ minHeight: "100vh" }}
		>
			<TodoList />
		</Grid>
	);
}
