import React from "react";
import { PropTypes } from "prop-types";
import { IconButton } from "@mui/material";
import { Delete as DeleteIcon } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { deleteTodoItem } from "@/app/redux/slices/todolistSlice";

export default function DeleteTodoItem({ item = {} }) {
	const dispatch = useDispatch();

	return (
		<IconButton
			edge="end"
			aria-label="delete"
			onClick={() => {
				dispatch(deleteTodoItem(item));
			}}
		>
			<DeleteIcon color="error" fontSize="large" />
		</IconButton>
	);
}

DeleteTodoItem.propType = {
	/**
	 * Todo Item Object
	 */
	item: PropTypes.object,
};
