import React from "react";
import { PropTypes } from "prop-types";
import { ListItemAvatar, IconButton } from "@mui/material";
import { CheckCircle as CheckCircleIcon } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { completeTodoItem } from "@/app/redux/slices/todolistSlice";

export default function CompleteTodoItem({ item = {} }) {
	const dispatch = useDispatch();

	return (
		<ListItemAvatar>
			<IconButton
				onClick={() => {
					dispatch(completeTodoItem(item));
				}}
			>
				<CheckCircleIcon
					color={item.status.done ? "disabled" : "success"}
					fontSize="large"
				/>
			</IconButton>
		</ListItemAvatar>
	);
}

CompleteTodoItem.propType = {
	/**
	 * Todo Item Object
	 */
	item: PropTypes.object,
};
