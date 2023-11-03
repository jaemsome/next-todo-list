import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import ChipBadge from "../chipbadge";

export default function TotalItems({
	color = "primary",
	label = "Label Here",
	sx = {},
}) {
	const todoList = useSelector((state) => state.todoList.value);
	const total = todoList.length;

	return <ChipBadge color={color} label={label} badge={total} sx={sx} />;
}

TotalItems.propType = {
	/**
	 * BG Color
	 */
	color: PropTypes.string,
	/**
	 * Text Label
	 */
	label: PropTypes.string,
	/**
	 * Addition styles
	 */
	sx: PropTypes.object,
};
