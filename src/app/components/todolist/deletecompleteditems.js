import React from "react";
import { PropTypes } from "prop-types";
import { Button } from "@mui/material";
import { DeleteSweep as DeleteSweepIcon } from "@mui/icons-material";
import { useSelector, useDispatch } from "react-redux";
import { deleteItemsByStatus } from "@/app/redux/slices/todolistSlice";

export default function DeleteCompletedItems({
	color = "error",
	size = "small",
	sx = {},
}) {
	const dispatch = useDispatch();
	const todoList = useSelector((state) => state.todoList.value);
	const completedList = todoList.filter((item) => {
		return item.status.done === true;
	});
	const total = completedList.length;
	if (total < 1) return;

	return (
		<Button
			variant="contained"
			color={color}
			size={size}
			sx={{ textTransform: "capitalize", ...sx }}
			startIcon={<DeleteSweepIcon />}
			onClick={() => {
				dispatch(deleteItemsByStatus(true));
			}}
		>
			Tasks Done
		</Button>
	);
}

DeleteCompletedItems.propType = {
	/**
	 * Font Color
	 */
	color: PropTypes.string,
	/**
	 * Size
	 */
	size: PropTypes.string,
	/**
	 * Additional styles
	 */
	sx: PropTypes.object,
};
