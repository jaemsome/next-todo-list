import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import ChipBadge from "../chipbadge";

export default function TotalCompletedItems({
	color = "primary",
	label = "Label Here",
	sx = {},
}) {
	const todoList = useSelector((state) => state.todoList.value);
	const completedList = todoList.filter((item) => {
		return item.status.done === true;
	});
	const total = completedList.length;

	return <ChipBadge color={color} label={label} badge={total} sx={sx} />;
}

TotalCompletedItems.propType = {
	/**
	 * BG Color
	 */
	color: PropTypes.string,
	/**
	 * Text Label
	 */
	label: PropTypes.string,
	/**
	 * Additional styles
	 */
	sx: PropTypes.object,
};
