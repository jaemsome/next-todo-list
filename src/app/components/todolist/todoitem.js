import React from "react";
import PropTypes from "prop-types";
import { ListItem, ListItemText, Divider } from "@mui/material";
import CompleteTodoItem from "./completetodoitem";
import DeleteTodoItem from "./deletetodoitem";

export default function TodoItem({ item = { status: { done: false } } }) {
	const textDecoration = item.status.done ? "line-through" : "none";

	return (
		<>
			<ListItem
				color="primary"
				secondaryAction={<DeleteTodoItem item={item} />}
				sx={{
					border: "1px solid",
					borderRadius: "10px",
					width: "90%",
					margin: "0 auto 10px",
					"&:hover": { bgcolor: "#CCC" },
					textDecoration,
				}}
			>
				<CompleteTodoItem item={item} />
				<ListItemText
					primary={item.name}
					primaryTypographyProps={{
						fontSize: "25px",
					}}
				/>
			</ListItem>
		</>
	);
}

TodoItem.propType = {
	/**
	 * Todo Item Object
	 */
	item: PropTypes.object,
};
